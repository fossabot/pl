import component from './components';
import reducers from './reducers';
import * as actions from './actions';
import settings from './settings';

export default {
  ...{
    component,
    reducers,
    actions,
  }, ...settings
};
