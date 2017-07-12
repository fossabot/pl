import config from './config';
import {prepActionTypes} from './../../helpers/actions';

const { moduleName } = config;

let typeNames = [
  'GET_TEST',
  'GET_TEST_FAILED',
  'GET_TEST_COMPLETE',
];

export const TYPES = prepActionTypes(typeNames, moduleName);

export const getTest = (isWorking) => {
  return dispatch => {
    dispatch({
      type: TYPES.GET_TEST
    });
    const body = JSON.stringify({ isWorking });
    fetch(`/api/map/test`, {
      method: 'POST',
      accept: 'application/json',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response!');
        }
        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          dispatch(getTestComplete(data));
        }, 500);
      })
      .catch(err => {
        dispatch(getTestFailed(err));
      });
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
