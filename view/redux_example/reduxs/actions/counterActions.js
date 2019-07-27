/**
 * @Author: lijun
 * @Date:   2019-Jul-26
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: counterActions.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-27
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */
 
import React, {Component} from 'react';

import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}
