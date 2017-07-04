import * as modules from './../modules/using';
import * as test2 from './test2';

let commonList = {
  test2,
};
let modulesList = {};
let list = {};

let initialized = false;

export function init () {
  if (initialized) {
    return 0;
  }

  commonList = {
    test2,
  };
  modulesList = Object.keys(modules).reduce((v, n) => {
    if (modules[n].hasOwnProperty('actions')) {
      v[n] = modules[n].actions;
    }
    return v;
  }, {});

  list = {
    ...commonList,
    ...modulesList,
  };
  initialized = true;
}


export function getActions (moduleName) {
  init();
  if (list.hasOwnProperty(!moduleName)) {
    console.log(new Error(`getActions() => err, module ${moduleName} not found.`));
    return {};
  }
  return checkAvailabilityActions(list[moduleName]);
}

export function checkAvailabilityActions (actions) {
  return Object.keys(actions).reduce((v, n) => {
    if (typeof actions[n] === 'function') {
      return v[n] = actions[n];
    }
    return v[n] = () => {
      console.log('Action not found!');
    }
  }, {});
}
