import {getActions} from './../actions';
const {TEST_REQUESTED2} = getActions('test2');

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
