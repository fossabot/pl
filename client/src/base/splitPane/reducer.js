import {fromJS} from 'immutable';
import {TYPES} from './actions';
const {
  SHOW_SPLIT_PANE,
  HIDE_SPLIT_PANE,
  TOGGLE_SPLIT_PANE
} = TYPES;

const initialState = fromJS({
  isOpen: true,
  defaultWidthPerc: 70,
  minWidthPerc: 30,
  maxWidthPerc: 70
});
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SPLIT_PANE:
      return state.set('isOpen', !state.get('isOpen'));
    case SHOW_SPLIT_PANE:
      return state.set('isOpen', true);
    case HIDE_SPLIT_PANE:
      return state.set('isOpen', false);
    default:
      return state;
  }
}
