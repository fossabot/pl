import express from 'express';
import path from 'path';
import {initRouters} from './modules';
import options from './options';

export default function (app) {
  // TODO session
  initRouters(app);
  app.use(`${options.config.rootApi}/static`, express.static(path.resolve(process.cwd(), 'server/static')));
}
