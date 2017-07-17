import {combineReducers} from 'redux-immutablejs';
import {routerReducer} from 'react-router-redux';
import { reducers as lmap } from 'react-redux-leaflet';
import { reducers as lmapLayer } from 'redux-leaflet-layer';
import {getModulesProp} from './../helpers/modules';

export default combineReducers({
  routing: routerReducer,
  ...lmap,
  ...lmapLayer,
  ...getModulesProp('reducer')
});
