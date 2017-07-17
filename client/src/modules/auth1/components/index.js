import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {getActions} from './../../../base/actions';
import {getModuleRoutes} from './../../../helpers/routes';
import {Route, Switch} from 'react-router-dom';
import {push} from 'react-router-redux';
import config from './../config';
import LoginForm from './LoginForm';

const { moduleName } = config;

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes(props.match.path)
    }
  }

  render (props = this.props) {
    return (<div>
      <div>
        AUTH!
        {props.auth.get('isFetching') ? <div>Выполняется запрос..</div> : <div />}
        <button onClick={() => {
          props.getTest();
        }}>Обновить данные
        </button>
        <div>
          {JSON.stringify(props.auth.get('data'))}
        </div>
      </div>
      <div className="auth1">
        <Switch>
          <Route path="/" component={LoginForm}/>
          {this.state.routes}
        </Switch>
      </div>
    </div>);
  }
}

const mapStateTopRops = createSelector(
  state => state.get('auth'),
  (auth) => ({ auth })
);
const mapDispatchToProps = dispatch => {
  const { getTest } = getActions(moduleName, ['getTest']);
  return bindActionCreators({
    getTest,
    goTo: (route) => push(route)
  }, dispatch);
};

export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Test);
