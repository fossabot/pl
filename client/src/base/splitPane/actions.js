import {prepActionTypes} from './../../helpers/actions';
import config from './config';

let typeNames = [
  'TOGGLE_SPLIT_PANE',
  'SHOW_SPLIT_PANE',
  'HIDE_SPLIT_PANE'
];

export const TYPES = prepActionTypes(typeNames, config.moduleName);

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
  TYPES,
  showSplitPane,
  hideSplitPane,
  toggleSplitPane,
};