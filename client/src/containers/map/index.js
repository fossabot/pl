import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, Switch} from 'react-router-dom';
import {getModuleRoutes} from './../../helpers/routes';
import {getActions} from './../../actions';
import {Button} from 'antd';
import {push} from 'react-router-redux';
import {createSelector} from 'reselect';
import SplitPane from './SplitPane';

class Map extends Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: getModuleRoutes('/map')
    };
  }

  render (props) {
    const {rightSplitPane, toggleRightSplitPane} = this.props;
    const rightSplitPaneIsOpen = rightSplitPane.get('isOpen');

    const LeftSide = (
      <div>
        карта
        <Button type="primary" onClick={() => {
          toggleRightSplitPane(!rightSplitPaneIsOpen);
        }}>Правая панель</Button>
      </div>
    );

    const RightSide = (
      <div>
        <h1>Map</h1>
        <Button type="primary"><Link to="/map/test">TEST</Link></Button>
        <Switch>
          {this.state.routes}
        </Switch>
      </div>
    );

    return (
      <div>
        <SplitPane LeftSide={LeftSide} RightSide={RightSide} rightSplitPane={rightSplitPane} />
      </div>
    );
  }
}

const mapStateTopRops = createSelector(
  state => state.get('rightSplitPane'),
  (rightSplitPane) => ({rightSplitPane})
);
const mapDispatchToProps = dispatch => {
  const {getTest} = getActions('test', ['getTest']);
  const {toggleRightSplitPane} = getActions('rightSplitPane', ['toggleRightSplitPane']);
  return bindActionCreators({
    getTest,
    toggleRightSplitPane,
    goToMain: (route) => push(route)
  }, dispatch);
};
export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Map);
