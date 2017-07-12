import React, {Component} from 'react';
import {Button, Tooltip} from 'antd';

export default class extends Component {
  render () {
    return (
      <Tooltip placement="bottom" title={this.props.tooltip}>
        <Button type="primary" icon="rocket" size={'default'} />
      </Tooltip>
    )
  }
}
