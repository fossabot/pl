import {fromJS} from 'immutable';
import {TYPES} from './actions';
import * as modules from './../../modules/using';
import {topButtonsGroup} from './../../helpers/panes';

const {
  SHOW,
  HIDE,
  ADD,
  REMOVE
} = TYPES;

function getModulesButtonsConf () {
  return Object.keys(modules).reduce((v, n) => {
    if (modules[n].hasOwnProperty('config') &&
      modules[n].config.hasOwnProperty('buttons')) {
      modules[n].config.buttons.forEach((buttonConf) => {
        if (buttonConf.pane === topButtonsGroup) {
          v.push(buttonConf);
        }
      });
    }
    return v;
  }, []);
}

const initialState = fromJS({
  buttonsConf: getModulesButtonsConf(),
});

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return state.set('isOpen', !state.get('isOpen'));
    case HIDE:
      return state.set('isOpen', true);
    case ADD:
      return state.set('isOpen', false);
    case REMOVE:
      return state.set('isOpen', false);
    default:
      return state;
  }
}
