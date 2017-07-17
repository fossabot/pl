import express from 'express';
import path from 'path';
import * as modules from './using';

const root = '/api';
export default function (app) {
  Object.keys(modules).forEach(moduleName => {
    const {route, router} = modules[moduleName];
    app.use(root + route, router);
  });
  app.use(`${root}/static`, express.static(path.resolve(process.cwd(), 'server/static')));
}
