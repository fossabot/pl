import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {push} from 'react-router-redux';
import {Button, Tooltip} from 'antd';

class TopRightButtonsGroup extends Component {

  linkButton (conf, i) {
    const { icon, link } = conf;
    const goTo = this.props.goTo;
    return (
      <Tooltip key={i} placement="left" title={link.tooltip}>
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
    if (Object.keys(buttonsConf).length > 0) {
      return Object.keys(buttonsConf).reduce((v, n, i) => {
        Object.keys(buttonsConf[n]).forEach(buttonConfInd => {
          const conf = buttonsConf[n][buttonConfInd];
          const key = `${i}-${buttonConfInd}`;
          switch (conf.createType) {
            case 'link':
              v.push(this.linkButton(conf, key));
              break;
            case 'component':
              v.push(React.createElement(conf.component, { key, ...conf}));
              break;
            default:
              console.log(`buttonConf createType [${conf.createType}] not supported!`);
              break;
          }
        });
        return v;
      }, []);
    }
    return [];
  }

  render () {
    return (
      <div className="TopRightButtonsGroup">
          {this.prepButtons()}
      </div>
    )
  }
}

const mapStateTopRops = createSelector(
  state => state.get('topRightButtonsGroup').get('buttonsConf').toJS(),
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
)(TopRightButtonsGroup);
