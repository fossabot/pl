import {fromJS} from 'immutable';
import {TYPES} from './../actions/rightSplitPane';
const {
  SHOW_RIGHT_SPLIT_PANE,
  HIDE_RIGHT_SPLIT_PANE,
  TOGGLE_RIGHT_SPLIT_PANE
} = TYPES;

const initialState = fromJS({
  isOpen: true,
  defaultWidthPerc: 70,
  minWidthPerc: 30,
  maxWidthPerc: 70
});
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_RIGHT_SPLIT_PANE:
      return state.set('isOpen', !state.get('isOpen'));
    case SHOW_RIGHT_SPLIT_PANE:
      return state.set('isOpen', true);
    case HIDE_RIGHT_SPLIT_PANE:
      return state.set('isOpen', false);
    default:
      return state;
  }
}
