/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Day5_redux2.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';

import AddTodo from './container/AddTodo'
// import Footer from './container/Footer'

class Day5 extends Component {
  state = {
    text: ''
  }

  constructor(){
    super()

  }
  Text_e = () => {
    Alert.alert('helo')
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>hello redux2!</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10}}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const App = () => (
  <View style={styles.containers}>
    <Text>jiang tong h shu</Text>
  </View>
)

// export default Day5;
export default App;
