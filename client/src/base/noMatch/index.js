import React from 'react';
import {Alert} from 'antd';

export default (props) => (
  <div><Alert
    message="Упс!"
    description={`Модуль ${props.location.pathname} не найден!`}
    type="warning"
    showIcon
  /></div>
);
