import {prepActionTypes} from './../../../helpers/actions';
export const MODULE_NAME = 'test2';

let typeNames = [
  'GET_TEST',
  'GET_TEST_FAILED',
  'GET_TEST_COMPLETE',
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export const getTest = () => {
  return dispatch => {
    dispatch({
      type: TYPES.GET_TEST
    });
    // TODO fetch
  }
};

export const getTestFailed = (err) => {
  return dispatch => {
    dispatch({
      type: TYPES.GET_TEST_FAILED,
      err
    });
  }
};

export const getTestComplete = (data) => {
  return dispatch => {
    dispatch({
      type: TYPES.GET_TEST_COMPLETE,
      data
    });
  }
};

export default {
  MODULE_NAME,
  TYPES,
  getTest,
  getTestFailed,
  getTestComplete,
};
