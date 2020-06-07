"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import LineNumbers from "./lineNumbers";

import { GUTTER_HEIGHT } from "./constants";
import { lineCountFromTokens } from "./utilities/tokens";
import { gutterBorderColour, gutterBackgroundColour } from "./scheme/view";

class Gutter extends Element {
  update(tokens) {
    const lineCount = lineCountFromTokens(tokens);

    this.setLineCount(lineCount);

    this.updateLineNumbers(lineCount);
  }

  scroll(scrollTop, scrollLeft) {
    this.setScrollTop(scrollTop);

    this.position();
  }

  position() {
    const scrollTop = this.getScrollTop();

    const top = `${-scrollTop}px`,
          css = {
            top
          };

    this.css(css);
  }

  getLineCount() {
    const state = this.getState(),
          { lineCount } = state;

    return lineCount;
  }

  getScrollTop() {
    const state = this.getState(),
          { scrollTop } = state;

    return scrollTop;
  }

  setLineCount(lineCount) {
    this.updateState({
      lineCount
    });
  }

  setScrollTop(scrollTop) {
    this.updateState({
      scrollTop
    });
  }

  childElements() {
    return ([

      <LineNumbers />,

    ]);
  }

  parentContext() {
	  const getLineCount = this.getLineCount.bind(this),
          getGutterWidth = this.getWidth.bind(this),  ///
				  positionGutter = this.position.bind(this),  ///
				  updateGutter = this.update.bind(this),  ///
				  scrollGutter = this.scroll.bind(this);  ///

    return ({
      getLineCount,
      getGutterWidth,
      positionGutter,
      updateGutter,
      scrollGutter
    });
  }
  
  setInitialState() {
    const scrollTop = 0,
          lineCount = null;

    this.setState({
      scrollTop,
      lineCount
    });
  }

  initialise() {
    this.assignContext();

    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "gutter"
  };

  static fromClass(Class, properties) {
    const gutter = Element.fromClass(Class, properties);

    gutter.initialise();
    
    return gutter;
  }
}

export default withStyle(Gutter)`

  height: ${GUTTER_HEIGHT};
  z-index: 2;
  position: absolute;
  text-align: right;
  user-select: none;
  border-color: ${gutterBorderColour};
  pointer-events: none;
  background-color: ${gutterBackgroundColour};
  border-right-style: dotted;
  border-right-width: 1px;

`;
