import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getRoutes} from './../../routes';
const routes = getRoutes('map');
class Map extends Component {
  componentDidMount() {
    console.log();
  }
  render () {
    return (<div>
      <div id="mapid"/>
      <h1>Map</h1>
      <Link to="/map/test">test</Link>
      {routes}
    </div>);
  }
}

export default Map;
