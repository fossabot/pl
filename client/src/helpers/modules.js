let modules;
let baseModules;
let modulesList;
export function getModules () {
  return new Promise((resolve) => {
    if (modulesList) {
      return resolve(modules);
    }
    import('./../modules/using')
      .then((usingModules) => {
        modules = usingModules;
        import('./../base/modules-conf')
          .then((baseMs) => {
            baseModules = baseMs;
            checkUniqNames(modules, baseModules);
            modulesList = { ...usingModules, ...baseModules };
            return resolve(modulesList);
          });
      });
  });
}

export function getModulesProp (propName) {
  return Object.keys(modulesList).reduce((v, n) => {
    const val = valBy(propName, modulesList[n]);
    if (val) {
      v[n] = valBy(propName, modulesList[n]);
    }
    return v;
  }, {});
}

export function valBy (ns, obj) {
  const levels = ns.split('.');
  const first = levels.shift();
  if (typeof obj[first] === 'undefined') {
    return undefined;
  }
  if (levels.length) {
    return valBy(levels.join('.'), obj[first]);
  }
  return obj[first];
}

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
