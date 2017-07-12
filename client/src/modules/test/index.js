import component from './components';
import reducer from './reducer';
import actions from './actions';
import settings from './settings';

export default {
  ...{
    component,
    reducer,
    actions,
  }, ...settings
};
