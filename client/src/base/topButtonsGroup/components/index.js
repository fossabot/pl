import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {push} from 'react-router-redux';
import {Button, Tooltip} from 'antd';
import {prepConfs} from './../../../helpers/panes';
const ButtonGroup = Button.Group;

class TopButtonsGroup extends Component {

  linkButton (conf, key) {
    const { icon, link } = conf;
    const goTo = this.props.goTo;
    return (
      <Tooltip key={key} placement="bottomRight" title={link.tooltip} mouseLeaveDelay={0}>
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
    const buttonsConf = this.props.buttonsConf || {};
    const confs = prepConfs(buttonsConf);
    const buttons = [];
    confs.forEach((conf, confInd) => {
      const key = confInd;
      switch (conf.createType) {
        case 'link':
          buttons.push(this.linkButton(conf, key));
          break;
        case 'component':
          buttons.push(React.createElement(conf.component, { key, ...conf }));
          break;
        default:
          console.log(`buttonConf createType [${conf.createType}] not supported!`);
          break;
      }
    });
    return buttons;
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
