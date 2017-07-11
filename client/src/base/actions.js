import {
  getActionsByModuleName,
  checkAvailabilityActionTypes,
  checkAvailabilityActions
} from './../helpers/actions';

export function getActionTypes (moduleName, actionTypeNames = []) {
  const actions = getActionsByModuleName(moduleName);
  return checkAvailabilityActionTypes(actions, actionTypeNames);
}

export function getActions (moduleName, actionNames = []) {
  const actions = getActionsByModuleName(moduleName);
  return checkAvailabilityActions(actions, actionNames);
}
