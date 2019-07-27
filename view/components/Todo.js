/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Todo.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React from 'react'
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

const Todo = ({onPress, completed, text}) => (
  <Text onPress={onPress} tyle={{textDecorationLine: completed ? 'underline' : 'none'}}>{text}</Text>
)

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
