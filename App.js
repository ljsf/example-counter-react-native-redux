/**
 * @Author: lijun
 * @Date:   2019-Jun-27
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: App.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */



import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import todoApp from './view/reducers/todoApp';
//import rootReducer from './reduxs/reducers/rootReducer';
import Theme from './view/Theme';

import todoApp from './view/container/reducers';
const {width, height, transform} = Theme.screen;

// import Day1 from './view/App';
// import Day1 from './view/Day5_redux2';
// import Day1 from './view/Day6_redux3';
import Day1 from './view/redux_example/root';

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Day1 />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     width: width,
//     height: height,
//     transform: transform,
//   }
// });

// const simpleReducer = (state={}, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//
//   }
// };

// var todosReducer = (state={}, action) => {
//
// };

// var rootReducer = combineReducers({
//   simpleReducer,
//   todosReducer,
// });

// let store = createStore(simpleReducer);

// let store = createStore(todoApp)

let store = createStore(todoApp);

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Provider store={store}>
        <Day1 />
      </Provider>
    );
  }
}
export default App;
