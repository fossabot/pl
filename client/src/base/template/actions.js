import {prepActionTypes} from './../../helpers/actions';
import config from './config';

let typeNames = [
  'GET_TEST',
  'GET_TEST_FAILED',
  'GET_TEST_COMPLETE',
];

export const TYPES = prepActionTypes(typeNames, config.moduleName);

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
  TYPES,
  getTest,
  getTestFailed,
  getTestComplete,
};
