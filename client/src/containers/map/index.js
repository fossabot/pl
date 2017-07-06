import React, {Component} from 'react';
import {Link, Switch} from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';
import { Button } from 'antd';

class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/map')
    };
  }

  render () {
    return (
      <div>
        <div id="mapid"/>
        <h1>Map</h1>
        <Button type="primary"><Link to="/map/test">TEST</Link></Button>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    );
  }
}

export default Map;
