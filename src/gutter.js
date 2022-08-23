"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import LineNumbers from "./lineNumbers";

import { lineCountFromTokens } from "./utilities/tokens";

class Gutter extends Element {
  update(tokens) {
    const lineCount = lineCountFromTokens(tokens);

    this.setLineCount(lineCount);

    this.updateLineNumbers(lineCount);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollLineNumbers(scrollTop, scrollLeft);
  }

  getLineCount() {
    const state = this.getState(),
          { lineCount } = state;

    return lineCount;
  }

  setLineCount(lineCount) {
    this.updateState({
      lineCount
    });
  }

  setInitialState() {
    const lineCount = null;

    this.setState({
      lineCount
    });
  }

  childElements() {
    return (

      <LineNumbers/>

    );
  }

  parentContext() {
	  const context = this.getContext(),
          getLineCount = this.getLineCount.bind(this),
				  updateGutter = this.update.bind(this),  ///
				  scrollGutter = this.scroll.bind(this),  ///
          parentContext = Object.assign({}, context, {
            getLineCount,
            updateGutter,
            scrollGutter
          });

    return parentContext;
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

  width: fit-content;
  overflow: hidden;
  position: relative;
  grid-area: gutter;
  border-right-width: 1px;
  border-right-style: dotted;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  border-color: inherit;
  background-color: inherit;

`;
