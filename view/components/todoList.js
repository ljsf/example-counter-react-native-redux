/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: todoList.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
  <Text>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onPress={() => onTodoClick(todo.id)} />
    ))}
  </Text>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf
};

export default todoList;
