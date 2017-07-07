import React from 'react';
import { render } from 'react-dom';
import App from './base/app';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import './index.css';

const target = document.querySelector('#root');
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
