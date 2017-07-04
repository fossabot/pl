import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getActions} from './../../../actions';

const Test = props => (
  <div>
    <div>
      TEST!
      {props.isWorking ? <div>Работает</div> : <div />}
      <button onClick={() => {
        props.test(props.isWorking);
      }}>fetch</button>
    </div>
  </div>
);

const mapStateTopRops = state => {
  return ({
    isWorking: state.test.isWorking,
  });
};
const mapDispatchToProps = dispatch => {
  const {test} = getActions('test');
  return bindActionCreators({
    test,
  }, dispatch);
};

export default connect(
  mapStateTopRops,
  mapDispatchToProps,
)(Test);
