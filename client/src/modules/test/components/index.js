import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {getActions} from './../../../base/actions';
import {getModuleRoutes} from './../../../helpers/routes';
import {Switch} from 'react-router-dom';
import {push} from 'react-router-redux';
import settings from './../settings';

const {moduleName} = settings;

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes(props.match.path)
    }
  }
  componentDidMount () {
    console.log();
  }

  render (props = this.props) {
    return (<div>
      <div>
        TEST!
        {props.test.get('isFetching') ? <div>Выполняется запрос..</div> : <div />}
        <button onClick={() => {
          props.getTest();
        }}>Обновить данные
        </button>
        <button onClick={() => {
          props.goToMain('/map');
        }}>Перейти в main
        </button>
        <div>
          {JSON.stringify(props.test.get('data'))}
        </div>
      </div>
      <Switch>
        {this.state.routes}
      </Switch>
    </div>);
  }
}

const mapStateTopRops = createSelector(
  state => state.get('test'),
  (test) => ({test})
);
const mapDispatchToProps = dispatch => {
  const {getTest} = getActions(moduleName, ['getTest']);
  return bindActionCreators({
    getTest,
    goToMain: (route) => push(route)
  }, dispatch);
};

export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Test);
