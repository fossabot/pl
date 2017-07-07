import React from 'react';
import {Route} from 'react-router-dom';
import NoMatch from './../base/noMatch';
import * as modules from './../modules/using';

export function getModuleConfRoutes (root) {
  let results = [];
  Object.keys(modules).forEach(name => {
    const { routes, component } = modules[name];
    if (routes.length) {
      const fRoutes = routes.filter(route => {
        if (!root) {
          return false;
        }
        let sl = '';
        if (root.slice(-1) !== '/') {
          sl = '/';
        }
        const regexp = new RegExp(`^${root + sl}((\\w+)|(\\w+-\\w+)|(\\w+-\\w+-\\w+))(?!/)$`, 'g');
        return !!route.match(regexp);
      });
      const paths = fRoutes.map(fRoute => {
        return {
          path: fRoute,
          component
        }
      });
      results = [...results, ...paths]
    }
  });
  return results;
}

export function getModuleRoutes (root) {
  const filteredModulesConf = getModuleConfRoutes(root) || [];
  const r = filteredModulesConf.map((routeInfo, i) => {
    const {path, component}  = routeInfo;
    return <Route key={i} path={path} component={component}/>;
  });
  r.push(<Route key="root" path={`${root}`} exact />);
  r.push(<Route key="nomatch" component={NoMatch}/>);

  return r;
}
