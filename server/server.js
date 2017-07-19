import http from 'http';
import logger from './modules/logger';
const { time, debug } = logger('server.js');
debug('initializing..');
const d1 = time('initializing');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import options from './options';
import routers from './routers';
import db from './db';
const app = express();
app.use(bodyParser.json({ limit: `1024mb` }));
app.use(cors({ origin: true }));

db()
  .then(() => {
    routers(app);
    const httpServer = http.Server(app);
    httpServer.listen(options.config.port);
    /* eslint-disable no-console */
    debug(`App server listening on port ${options.config.port}`);
    d1('done.');
  })
  .catch(err => {
    d1('done with err.', err.message);
    // TODO
  });
