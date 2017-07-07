import {combineReducers} from 'redux-immutablejs';
import {routerReducer} from 'react-router-redux';
import * as modules from './../modules/using';
import template from './template/reducer';
import splitPane from './splitPane/reducer';

export const commonList = {
  template,
  splitPane,
};

//TODO переделать!
export const modulesList = Object.keys(modules).reduce((v, n) => {
  v[n] = modules[n];
  return v;
}, {});

export const modulesReducersList = Object.keys(modulesList).reduce((v, n) => {
  if (modulesList[n].hasOwnProperty('reducers')) {
    v[n] = modulesList[n].reducers;
  }
  return v;
}, {});
checkUniqNames(commonList, modulesReducersList);

export const list = {
  ...commonList,
  ...modulesReducersList,
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
