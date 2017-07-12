import React, {Component} from 'react';
import { Link, Switch } from 'react-router-dom';
import {getModuleRoutes} from './../../../helpers/routes';

class Template extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/template')
    };
  }

  render () {
    return (
      <div>
        <h1>Шаблон пример</h1>
        <Link to="/">На главную</Link>
        <br />
        <Link to={`/administration`}>Администрирование</Link>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    )
  }
}

export default Template;
