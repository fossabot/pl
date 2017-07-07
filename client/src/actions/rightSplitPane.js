import {prepActionTypes} from './../helpers/actions';
export const MODULE_NAME = 'rightSplitPane';

let typeNames = [
  'TOGGLE_RIGHT_SPLIT_PANE',
  'SHOW_RIGHT_SPLIT_PANE',
  'HIDE_RIGHT_SPLIT_PANE'
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export function showRightSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.SHOW_RIGHT_SPLIT_PANE
    });
  }
}
export function hideRightSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.HIDE_RIGHT_SPLIT_PANE
    });
  }
}
export function toggleRightSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.TOGGLE_RIGHT_SPLIT_PANE
    });
  }
}
