import React, {Component} from 'react';
import { Link, Switch } from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/admin')
    };
  }

  render () {
    return (
      <div>
        <h1>Admin pane</h1>
        <Link to="/map">map</Link>
        <br />
        <Link to={`${this.props.match.path}/test`}>test</Link>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    )
  }
}

export default Admin;
