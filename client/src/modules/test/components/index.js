import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getActions} from './../../../actions';
import {getModuleRoutes} from './../../../helpers/routes';
import {Switch} from 'react-router-dom';
import settings from './../settings';

const {path, moduleName} = settings;

class Test extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes(path)
    }
  }
  componentDidMount () {
    console.log();
  }

  render (props = this.props) {
    return (<div>
      <div>
        TEST!
        {props.isWorking ? <div>Работает</div> : <div />}
        <button onClick={() => {
          props.test(props.isWorking);
        }}>fetch
        </button>
      </div>
      <Switch>
        {this.state.routes}
      </Switch>
    </div>);
  }
}

const mapStateTopRops = state => {
  return ({
    isWorking: state.test.isWorking,
  });
};
const mapDispatchToProps = dispatch => {
  const {test} = getActions(moduleName, ['test']);
  return bindActionCreators({
    test,
  }, dispatch);
};

export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Test);
