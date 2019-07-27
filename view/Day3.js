/**
 * @Author: lijun
 * @Date:   2019-Jul-25
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Day3.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-25
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

class Day3 extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
      color: 'red',
      judge: true,
    }
  }

  _add() {
    this.setState(prevState => ({count: prevState.count + 1}))
    if(this.state.judge){
      this.setState(prevState => ({color: 'green', judge: !prevState.judge}))
    } else {
      this.setState(prevState => ({color: 'red', judge: !prevState.judge}))
    }
  }
  _reduce() {
    this.setState(prevState => ({count: prevState.count - 1, color: 'red'}))
    if(this.state.judge){
      this.setState(prevState => ({color: 'green', judge: !prevState.judge}))
    } else {
      this.setState(prevState => ({color: 'red', judge: !prevState.judge}))
    }
  }
  // _add = () => {
  //   Alert.alert('lijun')
  // }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this._add()}
          title="add"
        />
        <Button
          onPress={() => this._reduce()}
          title="reduce"
        />
        <Text style={[styles.content, {color:this.state.color}]}>{this.state.count}</Text>
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
  },
});

export default Day3;
