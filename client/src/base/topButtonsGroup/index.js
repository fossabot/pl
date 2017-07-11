import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {push} from 'react-router-redux';
import {Button, Tooltip} from 'antd';
const ButtonGroup = Button.Group;

class TopButtonsGroup extends Component {

  linkButton (conf, i) {
    const { icon, link } = conf;
    const goTo = this.props.goTo;
    return (
      <Tooltip key={i} placement="bottom" title={link.tooltip}>
        <Button type="primary"
                icon={icon}
                size={'default'}
                onClick={() => {
                  goTo(link.getPath())
                }}
        />
      </Tooltip>
    );
  }

  prepButtons () {
    return Object.keys(this.props.buttonsConf).reduce((v, n, i) => {
      switch (n.createType) {
        case 'link':
          v.push(this.linkButton(n, i));
          break;
        case 'component':
          v.push(React.createElement(n.component, { key: i, ...n}));
          break;
        default:
          console.log(`buttonConf createType [${n.createType}] not supported!`);
          break;
      }
      return v;
    }, []);
  }

  render () {
    return (
      <div className="TopButtonsGroup">
        <ButtonGroup>
          {this.prepButtons()}
        </ButtonGroup>
      </div>
    )
  }
}

const mapStateTopRops = createSelector(
  state => state.get('topButtonsGroup').get('buttonsConf').toJS(),
  (buttonsConf) => ({ buttonsConf })
);
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    goTo: (route) => push(route)
  }, dispatch);
};

export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(TopButtonsGroup);
