import {TYPES} from './../actions/test2';
const {TEST_REQUESTED2} = TYPES;

const initialState = {
  isWorking: false,
  requestsCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUESTED2:
      return {
        ...state,
        isWorking: !state.isWorking
      };
    default:
      return state
  }
}
