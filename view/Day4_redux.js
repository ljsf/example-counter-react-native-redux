/**
 * @Author: lijun
 * @Date:   2019-Jul-25
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Day4_redux.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import {createStore} from 'redux';

var simpleReducer = function(state={}, action) {
  return {
    user: {
      name: 'redux',
    }
  };
}

// var store = createStore(simpleReducer)

class Day4 extends Component {
  constructor(){
    super()
    this.state = {
      count: 1,
    };
  }

  _redux(){
    console.log('hello redux')
    console.log(getState())
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {this._redux()}}
          title="redux"
        />
        <Text style={styles.content}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 48,
  }

});

export default Day4;
