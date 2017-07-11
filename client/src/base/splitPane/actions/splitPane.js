import {prepActionTypes} from './../../../helpers/actions';
export const MODULE_NAME = 'splitPane';

let typeNames = [
  'TOGGLE_SPLIT_PANE',
  'SHOW_SPLIT_PANE',
  'HIDE_SPLIT_PANE'
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export function showSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.SHOW_SPLIT_PANE
    });
  }
}
export function hideSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.HIDE_SPLIT_PANE
    });
  }
}
export function toggleSplitPane () {
  return dispatch => {
    dispatch({
      type: TYPES.TOGGLE_SPLIT_PANE
    });
  }
}

export default {
  MODULE_NAME,
  TYPES,
  showSplitPane,
  hideSplitPane,
  toggleSplitPane,
};