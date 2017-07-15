import React, {Component} from 'react';
import {Button, Tooltip} from 'antd';

export default class extends Component {
  render () {
    return (
      <Tooltip placement="bottomRight" title={this.props.tooltip}>
        <Button type="primary" icon="smile-o" size={'default'} />
      </Tooltip>
    )
  }
}
