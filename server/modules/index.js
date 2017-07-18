import * as modules from './using';
import options from './../options';

export function initRouters (app) {
  Object.keys(modules).forEach(moduleName => {
    if (modules[moduleName] && modules[moduleName].hasOwnProperty('router')) {
      const { route, router } = modules[moduleName].router;
      console.log(options.config.rootApi);
      app.use(options.config.rootApi + route, router);
    }
  });
}

export function initDbModules (sequelize, syncForce) {
  const promises = Object.keys(modules).reduce((v, n) => {
    if (modules[n] && modules[n].hasOwnProperty('dbmodels')) {
      v.push(modules[n].dbmodels(sequelize, syncForce));
    }
    return v;
  }, []);
  return Promise.all(promises);
}
