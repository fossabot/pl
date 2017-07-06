import {TYPES} from './../actions';

const {TEST_REQUESTED} = TYPES;

const initialState = {
  isWorking: false,
  requestsCount: 0,
};

/*
* Можно подключать actions двумя способами:
 * 1. через import {} from './../actions';
* 2. : В редких случая когда потребуется обрабатывать actions других модулей.
 import {getActionTypes} from './../../../actions';
 import {MODULE_NAME} from './../actions';
 import {verifyOwnership} from './../../../helpers/reducers';

 export default (state = initialState, action) => {
 if (!verifyOwnership(action.type, MODULE_NAME)) {
 return state;
 }
 // обязательное условие! получать типы внутри default функции
 const {TEST_REQUESTED} = getActionTypes('test', ['TEST_REQUESTED']);
 (перед switch)
* */

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
