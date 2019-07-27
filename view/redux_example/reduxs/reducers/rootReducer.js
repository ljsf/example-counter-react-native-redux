/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: rootReducer.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */
import React, {Component} from 'react';
import {combineReducers} from 'redux';

import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counterReducer,
})

export default rootReducer;
