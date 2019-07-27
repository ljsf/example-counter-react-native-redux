/**
 * @Author: lijun
 * @Date:   2019-Jul-23
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: index.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */



/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
// import App from './App';
import Root from './view/redux_example/root';
import {name as appName} from './app.json';

const App1 = () => (
  <View>
    <Text>hello home!</Text>
  </View>
)

AppRegistry.registerComponent(appName, () => Root);
