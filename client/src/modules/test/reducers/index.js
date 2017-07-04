import {TEST_REQUESTED} from './../actions';

const initialState = {
  isWorking: false,
  requestsCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUESTED:
      return {
        ...state,
        isWorking: action.isWorking
      };
      default:
    return state
  }
}
// todo immutable
