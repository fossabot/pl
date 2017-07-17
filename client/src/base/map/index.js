import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Switch} from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';
import {getActions} from './../../base/actions';
import {BackTop} from 'antd';
import {push} from 'react-router-redux';
import {createSelector} from 'reselect';
import SplitPane from './../splitPane/components';
import TopButtonsGroup from './../topButtonsGroup/components';
import TopRightButtonsGroup from './../topRightButtonsGroup/components';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/map')
    };
  }

  componentDidMount() {
    this.props.initTopButtonsGroup();
    this.props.initTopRightButtonsGroup();
  }

  render () {
    const {splitPane} = this.props;

    const LeftSide = (
      <div>
        карта
        <TopButtonsGroup />
        <TopRightButtonsGroup />
      </div>
    );

    const RightSide = (
      <div>
        <BackTop />
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
  const topButtonsGroupActions = getActions('topButtonsGroup', ['init']);
  const topRightButtonsGroupActions = getActions('topRightButtonsGroup', ['init']);
  return bindActionCreators({
    getTest,
    toggleSplitPane,
    initTopButtonsGroup: topButtonsGroupActions.init,
    initTopRightButtonsGroup: topRightButtonsGroupActions.init,
    goToMain: (route) => push(route),
  }, dispatch);
};
export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Main);
