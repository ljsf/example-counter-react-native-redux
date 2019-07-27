/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: todoApp.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

const todos = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      )
    default:
      return state
  }
}

export default todos;
