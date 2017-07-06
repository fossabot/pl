import {prepActionTypes} from './../helpers/actions';
export const MODULE_NAME = 'test2';

let typeNames = [
  'TEST_REQUESTED2'
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export const test = () => {
  return dispatch => {
    dispatch({
      type: TYPES.TEST_REQUESTED2
    });
  }
};
