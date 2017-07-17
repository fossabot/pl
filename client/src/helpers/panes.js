import {getModulesProp} from './../helpers/modules';

export const list = {
  topButtonsGroup: 'topButtonsGroup',
  topRightButtonsGroup: 'topRightButtonsGroup',
};

export function getButtonsConfByPaneName (pane) {
  const buttonsConf = getModulesProp('config.buttons');
  return Object.keys(buttonsConf).reduce((v, n) => {
    Object.keys(buttonsConf[n]).forEach(buttonConfInd => {
      const conf = buttonsConf[n][buttonConfInd];
      if (conf.hasOwnProperty('pane') && conf.pane === pane) {
        if (!v[n]) {
          v[n] = {};
        }
        v[n][buttonConfInd] = conf;
      }
    });
    return v;
  }, {});
}
export const defaultOrderWeight = 100;

export function prepConfs (items) {
  if (Object.keys(items).length > 0) {
    let confs = Object.keys(items).reduce((v, n) => {
      Object.keys(items[n]).forEach(buttonConfInd => {
        v.push(items[n][buttonConfInd]);
      });
      return v;
    }, []);
    return confs.sort((a, b) => {
      if (!a.hasOwnProperty('orderWeight')) {
        a.orderWeight = defaultOrderWeight;
      }
      if (!b.hasOwnProperty('orderWeight')) {
        b.orderWeight = defaultOrderWeight;
      }
      if (a.orderWeight < b.orderWeight) {
        return -1;
      }
      if (a.orderWeight > b.orderWeight) {
        return 1;
      }
      return 0;
    });
  }
  return [];
}