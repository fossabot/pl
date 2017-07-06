import React from 'react';
import {Route} from 'react-router-dom';
import NoMatch from './../containers/no-match';
import * as modules from './../modules/using';

export function getModuleConfRoutes (root) {
  return Object.keys(modules).filter(name => {
    const moduleConf = modules[name];
    const { path } = moduleConf;
    if (!path) {
      return false;
    }
    const regexp = new RegExp(`^${root}/((\\w+)|(\\w+-\\w+)|(\\w+-\\w+-\\w+))(?!/)$`, 'g');
    const r = path.match(regexp);
    return !!r;
  });
}

export function getModuleRoutes (root) {
  const filteredModulesConf = getModuleConfRoutes(root);
  let path = '';
  let component = <div>DEFAULT</div>;
  const r = filteredModulesConf.map((name, i) => {
    path = modules[name].path;
    component = modules[name].component;
    return <Route key={i} path={path} component={component}/>;
  });
  r.push(<Route key="root" path={`${root}`} exact />);
  r.push(<Route key="nomatch" component={NoMatch}/>);

  return r;
}
