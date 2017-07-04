import React from 'react';
import {Route} from 'react-router-dom';
import * as modules from './../src/modules/using';

export function getRoutesConf (root) {
  return Object.keys(modules).filter(name => {
    const moduleConf = modules[name];
    const { path } = moduleConf;
    if (!path) {
      return false;
    }
    const regexp = new RegExp(`^/${root}/`, 'g');
    return !!path.match(regexp);
  });
}

export function getRoutes (root) {
  const filteredModulesConf = getRoutesConf(root);
  let path = '';
  let component = <div>DEFAULT</div>;
  const r = filteredModulesConf.map((name, i) => {
    path = modules[name].path;
    component = modules[name].component;
    return <Route key={i} exact path={path} component={component}/>;
  });
  return r;
}
