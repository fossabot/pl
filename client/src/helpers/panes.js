import {getModulesProp} from './../helpers/modules';

export const list = {
  topButtonsGroup: 'topButtonsGroup'
};

export function getButtonsConfByPaneName (pane) {
  const buttonsConf = getModulesProp('config.buttons');
  return Object.keys(buttonsConf).reduce((v, n) => {
    buttonsConf[n].forEach((buttonConf) => {
      if (buttonConf.pane === pane) {
        v[n] = buttonConf;
      }
    });
    return v;
  }, {});
}
