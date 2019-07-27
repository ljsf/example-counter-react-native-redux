/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Route.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Counter from './components/counter';
import * as counterActions from './reduxs/actions/counterActions';

class Route extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {state, actions} = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />
    );
  }
}

export default connect(state => ({
  state: state.counterReducer
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
}),
)(Route);

// export default connect(state => {
//   console.log('=====export defualt=hello state =======')
//   console.log(state)
//   return {
//     state: state.counterReducer
//   };
// }
// )(Route);
