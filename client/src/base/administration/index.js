import React, {Component} from 'react';
import { Link, Switch } from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';

class Administration extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/administration')
    };
  }

  render () {
    return (
      <div>
        <h1>Администрирование</h1>
        <Link to="/">Вернуться на карту</Link>
        <br />
        <Link to={`${this.props.match.path}/test`}>Шаблон модуля</Link>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    )
  }
}

export default Administration;
