"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import LineNumbersDiv from "../div/lineNumbers";

class GutterDiv extends Element {
  update(tokens) {
    this.updateLineNumbersDiv(tokens);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollLineNumbersDiv(scrollTop, scrollLeft);
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

      <LineNumbersDiv/>

    );
  }

  parentContext() {
	  const context = this.getContext(),
				  updateGutterDiv = this.update.bind(this),  ///
				  scrollGutterDiv = this.scroll.bind(this);  ///

    return ({
      ...context,
      updateGutterDiv,
      scrollGutterDiv
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

export default withStyle(GutterDiv)`

  width: fit-content;
  overflow: hidden;
  position: relative;
  grid-area: gutter;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
