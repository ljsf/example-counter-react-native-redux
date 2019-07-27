/**
 * @Author: lijun
 * @Date:   2019-Jul-24
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Day2.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-24
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class CountEvenNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2)
  }
  componentDidUpdate() {
    console.log(this.props.count)
  }
  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    );
  }
}

class Day2 extends Component{
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    setInterval(this.inc, 1000)
  }

  // inc() {  // 这个地方要用箭头函数
  //   this.setState(prevState => ({
  //     count: prevState.count +  1,
  //   }))
  // }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <CountEvenNumbers count={this.state.count}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
  }
});

export default Day2;
