import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, Switch} from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';
import {getActions} from './../../base/actions';
import {Button} from 'antd';
import {push} from 'react-router-redux';
import {createSelector} from 'reselect';
import SplitPane from './../splitPane';
import TopButtonsGroup from './../topButtonsGroup';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/')
    };
  }

  render (props) {
    const {splitPane, toggleSplitPane} = this.props;
    const splitPaneIsOpen = splitPane.get('isOpen');

    const LeftSide = (
      <div>
        карта
        <Button type="primary" onClick={() => {
          toggleSplitPane(!splitPaneIsOpen);
        }}>Правая панель</Button>
        <TopButtonsGroup />
      </div>
    );

    const RightSide = (
      <div>
        <h1>Main</h1>
        <Button type="primary"><Link to="/test">Открыть модуль тест</Link></Button>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    );

    return (
      <div>
        <SplitPane LeftSide={LeftSide} RightSide={RightSide} splitPane={splitPane} />
      </div>
    );
  }
}

const mapStateTopRops = createSelector(
  state => state.get('splitPane'),
  (splitPane) => ({splitPane})
);
const mapDispatchToProps = dispatch => {
  const {getTest} = getActions('test', ['getTest']);
  const {toggleSplitPane} = getActions('splitPane', ['toggleSplitPane']);
  return bindActionCreators({
    getTest,
    toggleSplitPane,
    goToMain: (route) => push(route)
  }, dispatch);
};
export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Main);
