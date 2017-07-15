import component from './components';
import reducer from './reducer';
import actions from './actions';
import config from './config';

export default {
  ...{
    component,
    reducer,
    actions,
  }, ...config
};
