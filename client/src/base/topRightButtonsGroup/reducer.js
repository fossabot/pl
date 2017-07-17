import {fromJS} from 'immutable';
import {TYPES} from './actions';
import {list, getButtonsConfByPaneName} from './../../helpers/panes';

const {
  INIT,
  SHOW,
  HIDE,
  ADD,
  REMOVE
} = TYPES;


const initialState = fromJS({
  buttonsConf: {},
});

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state.set('buttonsConf', fromJS(getButtonsConfByPaneName(list.topRightButtonsGroup)));
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
