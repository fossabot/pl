import {Map, fromJS} from 'immutable';
import {TYPES} from './../actions';

const {
  GET_TEST,
  GET_TEST_FAILED,
  GET_TEST_COMPLETE
} = TYPES;

const initialState = fromJS({
  isFetching: false,
  data: {},
  err: null
});

/*
* Можно подключать actions двумя способами:
 * 1. через import {} from './../actions';
* 2. : В редких случая когда потребуется обрабатывать actions других модулей.
 import {getActionTypes} from './../../../actions';
 import settings from './../settings';
 import {verifyOwnership} from './../../../helpers/reducers';
const {moduleName} = settings;
 export default (state = initialState, action) => {
 if (!verifyOwnership(action.type, moduleName)) {
 return state;
 }
 // обязательное условие! получать типы внутри default функции
 const {GET_TEST} = getActionTypes(moduleName, ['GET_TEST',..]);
 (перед switch)
* */

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
