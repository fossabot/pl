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
