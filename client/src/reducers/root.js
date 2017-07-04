import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import * as modules from './../modules/using';
import test2 from './test2';

export const commonList = {
  test2,
};

export const modulesList = Object.keys(modules).reduce((v, n) => {
  if (modules[n].hasOwnProperty('reducers')) {
    v[n] = modules[n].reducers;
  }
  return v;
}, {});

checkUniqNames(commonList, modulesList);

export const list = {
  ...commonList,
  ...modulesList,
};

export default combineReducers({
  routing: routerReducer,
  ...list
});

function checkUniqNames (l1, l2) {
  const status = {
    isValid: true,
    moduleNames: [],
  };
  Object.keys(l1).forEach(l1Name => {
    if (l2.hasOwnProperty(l1Name)) {
      status.isValid = false;
      status.moduleNames.push(l1Name);
    }
  });
  if (!status.isValid) {
    console.log(Error(`[reducers.root] checkUniqNames() => err, reducers name duplicated.${status.moduleNames}`));
  }
}
