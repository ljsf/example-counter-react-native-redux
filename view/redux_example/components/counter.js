/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: counter.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {counter, increment, decrement} = this.props
    return (
      <View style={styles.container}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
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
  button: {
    width: 80,
    height: 40,
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  }
});

export default Counter;
