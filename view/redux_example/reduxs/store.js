/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: store.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */

'use strict';

import React,{Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);

export default store;
