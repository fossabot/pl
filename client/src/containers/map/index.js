import React, { Component } from 'react';
import {Link, Switch} from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';
const routes = getModuleRoutes('map');

class Map extends Component {
  componentDidMount() {
    console.log();
  }
  render () {
    return (<div>
      <div id="mapid"/>
      <h1>Map</h1>
      <Link to="/map/test">test</Link>
      <Switch>
        {routes}
      </Switch>
    </div>);
  }
}

export default Map;
