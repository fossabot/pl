import Sequelize from 'sequelize';
import ops from './../options';
const pg = require('pg');
import {initDbModules} from './../modules';
import logger from './../modules/logger';
const { debug } = logger('db');

let sequelize;

function checkConnection (dbConf, callback) {
  const config = {
    user: dbConf.username, //env var: PGUSER
    database: 'postgres', //env var: PGDATABASE
    password: dbConf.password, //env var: PGPASSWORD
    host: dbConf.options.host, // Server hosting the postgres database
    port: dbConf.options.port, //env var: PGPORT
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
  debug('checkConnection..');
  const Client = new pg.Client(config);
  Client.connect((err) => {
    if (err) {
      debug('connect', err.message);
      Client.end();
      return callback(err);
    }
    Client.query('CREATE DATABASE ' + dbConf.dbName, function(err) {
      if (err && err.code !== '42P04') {
        debug('Client.query CREATE DATABASE', err);
        Client.end();
        return callback(err);
      }
      Client.end();
      return callback();
    });
  });
}

export default function () {
  return new Promise((resolve, reject) => {
    const { dbName, username, password, options, syncForce } = ops.config.db;
    sequelize = new Sequelize(dbName, username, password, options);
    checkConnection(ops.config.db, (err) => {
      if (err) {
        return reject(err);
      }
      sequelize
        .authenticate()
        .then(() => {
          debug('db authenticated.');
          initDbModules(sequelize, syncForce)
            .then(() => {
              debug('initializing', 'done.');
              return resolve();
            })
            .catch(err => {
              debug('initDbModules', err.message);
              return reject(err);
            });
        })
        .catch(err => {
          debug('authenticate', err.message);
          return reject(err);
        });
    });
  });
}
