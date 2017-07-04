export const TEST_REQUESTED2 = 'test/TEST_REQUESTED2';

export const test = () => {
  return dispatch => {
    dispatch({
      type: TEST_REQUESTED2
    });
  }
};
