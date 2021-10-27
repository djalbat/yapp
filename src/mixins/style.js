"use strict";

import { stripPixels } from "../utilities/css";
import { TOP, LEFT, RIGHT, BOTTOM, LINE_HEIGHT } from "../constants";

function getLineHeight() {
  const lineHeightInPixels = this.css(LINE_HEIGHT),
        lineHeight = stripPixels(lineHeightInPixels);

  return lineHeight;
}

function getPadding(side) {
  const paddingInPixels = this.css(`padding-${side}`),
        padding = stripPixels(paddingInPixels);

  return padding;
}

function getBorderWidth(side) {
  const borderWidthInPixels = this.css(`border-${side}-width`),
        borderWidth = stripPixels(borderWidthInPixels);

  return borderWidth;
}

function getPaddingTop() {
  const side = TOP,
        paddingTop = this.getPadding(side);

  return paddingTop;
}

function getPaddingLeft() {
  const side = LEFT,
        paddingLeft = this.getPadding(side);

  return paddingLeft;
}

function getPaddingRight() {
  const side = RIGHT,
        paddingRight = this.getPadding(side);

  return paddingRight;
}

function getPaddingBottom() {
  const side = BOTTOM,
        paddingBottom = this.getPadding(side);

  return paddingBottom;
}

function getBorderTopWidth() {
  const side = TOP,
        borderTopWidth = this.getBorderWidth(side);

  return borderTopWidth;
}

function getBorderLeftWidth() {
  const side = LEFT,
        borderLeftWidth = this.getBorderWidth(side);

  return borderLeftWidth;
}

function getBorderRightWidth() {
  const side = RIGHT,
        borderRightWidth = this.getBorderWidth(side);

  return borderRightWidth;
}

function getBorderBottomWidth() {
  const side = BOTTOM,
        borderBottomWidth = this.getBorderWidth(side);

  return borderBottomWidth;
}

const styleMixins = {
  getLineHeight,
  getPadding,
  getPaddingTop,
  getPaddingLeft,
  getPaddingRight,
  getPaddingBottom,
  getBorderWidth,
  getBorderTopWidth,
  getBorderLeftWidth,
  getBorderRightWidth,
  getBorderBottomWidth
};

export default styleMixins;
