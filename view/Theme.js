/**
 * @Author: lijun
 * @Date:   2019-Jul-03
 * @Email:  FlydomTeam@163.com
 * @Project: FlyDom
 * @Filename: Theme.js
 * @Last modified by:   lijun
 * @Last modified time: 2019-Jul-03
 * @Copyright: @copyright Copyright ©️ SingleTeam
 */


import React, {Component} from 'react';
import {
  PixelRatio,
  Dimensions,
} from 'react-native';

const Theme = {};

/**
* PixelRatio screen
*/

const dp2px = dp =>PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px =>PixelRatio.roundToNearestPixel(px);
let designSize = {width: 375, height: 667}; //输入设计稿的尺寸
let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width;
let win_height = Dimensions.get("window").height;
let width = dp2px(win_width);
let height = dp2px(win_height);
let design_scale = designSize.width/width;
height = height*design_scale;
let scale = 1/pxRatio/design_scale;

Theme.screen = {
  width:width,
  height:height,
  transform:[{translateX: -width * .5}, {translateY: -height * .5}, {scale: scale}, {translateX: width * .5}, {translateY: height * .5}],
}

export default Theme;
