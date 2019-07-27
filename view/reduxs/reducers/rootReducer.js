/**
 * @Author: lijun
 * @Date:   2019-Jul-25
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: rootReducer.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-25
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

import {combineReducers} from 'redux';
import simpleReducer from './simpleReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  simpleReducer,
  todosReducer,
})
