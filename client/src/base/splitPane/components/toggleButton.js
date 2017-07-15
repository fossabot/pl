import React, {Component} from 'react';
import {Button, Tooltip} from 'antd';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {getActions} from './../../actions';
import {bindActionCreators} from 'redux';

class OpenButton extends Component {
  render () {
    const {props} = this;
    return (
      <Tooltip placement="bottomRight" title={props.tooltip} mouseLeaveDelay={0}>
        <Button type="primary" icon="rocket" size={'default'} onClick={() => {
          props.toggleSplitPane(props.splitPane.get('isOpen'));
        }} />
      </Tooltip>
    )
  }
}
const mapStateTopRops = createSelector(
  state => state.get('splitPane'),
  (splitPane) => ({splitPane})
);
const mapDispatchToProps = dispatch => {
  const {toggleSplitPane} = getActions('splitPane', ['toggleSplitPane']);
  return bindActionCreators({
    toggleSplitPane,
  }, dispatch);
};
export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(OpenButton);
