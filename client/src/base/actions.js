import * as modules from './../modules/using';
import * as template from './template/actions';
import * as splitPane from './splitPane/actions';
import {
  checkAvailabilityActions,
  checkAvailabilityActionTypes
} from './../helpers/actions';

let commonList = {
  template,
  splitPane,
};

export function getActionTypes (moduleName, actionTypeNames = []) {
  const actions = getActionsByModuleName(moduleName);
  if (!actions) {
    console.log(new Error(`getActions() => err, module ${moduleName} not found.`));
  }
  return checkAvailabilityActionTypes(actions, actionTypeNames);
}

export function getActions (moduleName, actionNames = []) {
  const actions = getActionsByModuleName(moduleName);
  if (!actions) {
    console.log(new Error(`getActions() => err, module ${moduleName} not found.`));
  }
  return checkAvailabilityActions(actions, actionNames);
}

function getActionsByModuleName (moduleName) {
  if (commonList.hasOwnProperty(moduleName)) {
    return commonList[moduleName];
  }

  if (Object.keys(modules).indexOf(moduleName) === 0) {
    return modules[moduleName].actions;
  }
  return null;
}
