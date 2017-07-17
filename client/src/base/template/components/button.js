import React, {Component} from 'react';
import {Button, Tooltip} from 'antd';

export default class extends Component {
  render () {
    return (
      <Tooltip placement="bottomRight" title={this.props.tooltip} mouseLeaveDelay={0}>
        <Button type="primary" icon="rocket" size={'default'} />
      </Tooltip>
    )
  }
}
