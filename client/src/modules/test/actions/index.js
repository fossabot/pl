import {prepActionTypes} from './../../../helpers/actions';
require('es6-promise').polyfill();
require("isomorphic-fetch");
export const MODULE_NAME = 'test';

let typeNames = [
  'TEST_REQUESTED'
];

export const TYPES = prepActionTypes(typeNames, MODULE_NAME);

export const test = (isWorking) => {
  return dispatch => {
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
      .then(resp => {
        const {isWorking} = resp;
        dispatch({
          type: TYPES.TEST_REQUESTED,
          isWorking
        });
      })
      .catch(e => {
        // TODO dispatch err
        console.log(e.message);
      });

  }
};
