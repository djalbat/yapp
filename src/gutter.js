"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import LineNumbers from "./lineNumbers";

import { gutterHeight } from "./styles";
import { lineCountFromTokens } from "./utilities/tokens";

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
	  const context = this.getContext(),
          getLineCount = this.getLineCount.bind(this),
          getGutterWidth = this.getWidth.bind(this),  ///
				  positionGutter = this.position.bind(this),  ///
				  updateGutter = this.update.bind(this),  ///
				  scrollGutter = this.scroll.bind(this),  ///
          parentContext = Object.assign({}, context, {
            getLineCount,
            getGutterWidth,
            positionGutter,
            updateGutter,
            scrollGutter
          });

    return parentContext;
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
}

export default withStyle(Gutter)`

  height: ${gutterHeight};
  z-index: 2;
  position: absolute;
  text-align: right;
  user-select: none;
  pointer-events: none;
  border-right-style: dotted;
  border-right-width: 1px;

  color: inherit;
  border-color: inherit;
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
