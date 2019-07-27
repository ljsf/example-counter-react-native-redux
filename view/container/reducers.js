/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: reducers.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-26
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import {combineReducers} from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

const {SHOW_ALL} = VisibilityFilters

function visibilityFilters(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          tect: action.text,
          completed: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo,{
            completed: !todo.completed
          })
        }
      })
    default:
      return state
  }
}
const todoApp = combineReducers({
  visibilityFilters,
  todos,
})

export default todoApp;
