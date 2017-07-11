import {fromJS} from 'immutable';
import {topButtonsGroup} from './../actions';
import {list, getButtonsConfByPaneName} from './../../../helpers/panes';

const {
  GET_INITIAL,
  SHOW,
  HIDE,
  ADD,
  REMOVE
} = topButtonsGroup.TYPES;


const initialState = fromJS({
  buttonsConf: {},
});

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INITIAL:
      return state.set('buttonsConf', fromJS(getButtonsConfByPaneName(list.topButtonsGroup)));
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
