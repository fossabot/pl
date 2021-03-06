
let actionsModules;

export function prepActionTypes(typeNames = [], moduleName = '') {
  return typeNames.reduce((v, n) => {
    v[n] = `${moduleName}/${n}`;
    return v;
  }, {});
}

export function getActionsByModuleName (moduleName) {
  var {getModulesProp} = require('./modules');
  if (!actionsModules) {
    actionsModules = getModulesProp('actions');
  }
  if (actionsModules.hasOwnProperty(moduleName)) {
    return actionsModules[moduleName];
  }
  console.log(new Error(`getActionsByModuleName() => err, module ${moduleName} not found.`));
  return undefined;
}

export function checkAvailabilityActions (actions = {}, actionNames) {
  return actionNames.reduce((v, n) => {
    if (typeof actions[n] === 'function') {
      v[n] = actions[n];
    } else {
      v[n] = () => {
        return dispatch => {
          console.log(`Action ${n} not found!`);
          // TODO dispatch warning!
        }
      }
    }
    return v;
  }, {});
}

export function checkAvailabilityActionTypes (actions = { TYPES: {} }, actionTypeNames, moduleName) {
  const { TYPES } = actions;
  return actionTypeNames.reduce((v, n) => {
    if (TYPES[n]) {
      v[n] = TYPES[n];
    } else {
      if (moduleName) {
        const {DEFAULT_ACTION_TYPE} = prepActionTypes(['DEFAULT_ACTION_TYPE'], moduleName);
        v[n] = DEFAULT_ACTION_TYPE;
      } else {
        v[n] = 'DEFAULT_ACTION_TYPE';
      }
    }
    return v;
  }, {});
}

