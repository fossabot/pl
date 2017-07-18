import dg from 'debug';

export function log (key, msg) {
  // TODO save
  dg(`${key}`, msg);
}

export default function (key) {
  const topicKey = `pl.${key}`;
  return {
    log: function (key, msg) {
      let k = `${topicKey}.info`;
      if (msg === undefined) {
        msg = key;
      } else {
        k += `.${key}`
      }
      log(k, msg);
    },
    errLog: function (key, msg) {
      log(`${topicKey}.err.${key}`, msg);
    },
    debug: function () {
      dg(`${topicKey}`).call(undefined,  '|', new Date().toJSON(), '|', ...arguments);
    },
    time: function () {
      const args = arguments;
      let dt = new Date();
      return function () {
        const diff = new Date() - dt;
        dg(`${topicKey}`).call(undefined, '|', new Date().toJSON(), '| TIME: ', diff / 1000, '|', ...args, '|', ...arguments);
      }
    }
  }
}
