import {combineReducers} from 'redux-immutablejs';
import {routerReducer} from 'react-router-redux';
import {getModulesProp} from './../helpers/modules';

export default combineReducers({
  routing: routerReducer,
  ...getModulesProp('reducer')
});
