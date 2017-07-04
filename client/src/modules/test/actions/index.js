require('es6-promise').polyfill();
require("isomorphic-fetch");
export const TEST_REQUESTED = 'test/TEST_REQUESTED';

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
          type: TEST_REQUESTED,
          isWorking
        });
      })
      .catch(e => {
        // TODO dispatch err
        console.log(e.message);
      });

  }
};
