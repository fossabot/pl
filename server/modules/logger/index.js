import dg from 'debug';
import {db} from './../../db';



export default function (key, publish = true) {
  const topicKey = `pl.${key}`;

  function log (key, message, type = 'info', time) {
    if (publish && db && db.hasOwnProperty('Log')) {
      db.Log.create({key, message, type, time})
    }
  }

  return {
    debug: function () {
      dg(`${topicKey}`).call(undefined,  '|', new Date().toJSON(), '|', ...arguments);
      log(key, argsStrConcat(arguments));
    },
    errDebug: function () {
      dg(`${topicKey}.error`).call(undefined,  '|', new Date().toJSON(), '|', ...arguments);
      log(key, argsStrConcat(arguments), 'error');
    },
    time: function () {
      const args = arguments;
      let dt = new Date();
      return function () {
        const diff = new Date() - dt;
        dg(`${topicKey}`).call(undefined, '|', new Date().toJSON(), '| TIME: ', diff / 1000, '|', ...args, '|', ...arguments);
        let message = argsStrConcat(args);
        message += argsStrConcat(arguments);
        log(key, message, 'time', diff / 1000);
      }
    }
  }
}

function argsStrConcat (args) {
  const arr = [...args];
  return arr.reduce((v, n) => {
    v += `${n} | `;
    return v;
  }, ` | `);
}
