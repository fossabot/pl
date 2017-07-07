import * as modules from './../modules/using';
import * as test2 from './test2';
import * as rightSplitPane from './rightSplitPane';
import {
  checkAvailabilityActions,
  checkAvailabilityActionTypes
} from './../helpers/actions';

let commonList = {
  test2,
  rightSplitPane,
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
