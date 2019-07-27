/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: root.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';

import store from './reduxs/store';
import Route from './Route';

class Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

import * as types from './test/test1';


const Root1 = () => {
  console.log(types.one)
  return (
    <Text>return</Text>
  )
}

export default Root;
