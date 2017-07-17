import {prepActionTypes} from './../../helpers/actions';
export const MODULE_NAME = 'topButtonsGroup';

let typeNames = [
  'INIT',
  'SHOW',
  'HIDE',
  'ADD',
  'REMOVE',
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export function init () {
  return dispatch => {
    dispatch({
      type: TYPES.INIT
    });
  }
}
export function show () {
  return dispatch => {
    dispatch({
      type: TYPES.SHOW
    });
  }
}
export function hide () {
  return dispatch => {
    dispatch({
      type: TYPES.HIDE
    });
  }
}
export function add () {
  return dispatch => {
    dispatch({
      type: TYPES.ADD
    });
  }
}
export function remove () {
  return dispatch => {
    dispatch({
      type: TYPES.REMOVE
    });
  }
}

export default {
  MODULE_NAME,
  TYPES,
  init,
  show,
  hide,
  add,
  remove,
};