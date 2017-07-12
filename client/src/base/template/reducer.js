import {Map, fromJS} from 'immutable';
import {TYPES} from './actions';
const {
  GET_TEST,
  GET_TEST_FAILED,
  GET_TEST_COMPLETE
} = TYPES;

const initialState = fromJS({
  isFetching: true,
  data: {},
  err: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST:
      return state.set('isFetching', true);
    case GET_TEST_COMPLETE:
      return state
        .set('isFetching', false)
        .set('data', fromJS(action.data))
        .set('err', null);
    case GET_TEST_FAILED:
      return state
        .set('isFetching', false)
        .set('data', new Map({}))
        .set('err', action.err);
    default:
      return state;
  }
}
