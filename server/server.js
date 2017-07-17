import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import options from './options';
import modules from './modules';
const app = express();
app.use(bodyParser.json({ limit: `1024mb` }));
app.use(cors({ origin: true }));
modules(app);

const httpServer = http.Server(app);

httpServer.listen(options.config.port);
/* eslint-disable no-console */
console.log(`App server listening on port ${options.config.port}`);
