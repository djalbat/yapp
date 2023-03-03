"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import LineNumbers from "./lineNumbers";

class Gutter extends Element {
  update(tokens) {
    this.updateLineNumbers(tokens);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollLineNumbers(scrollTop, scrollLeft);
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
				  updateGutter = this.update.bind(this),  ///
				  scrollGutter = this.scroll.bind(this);  ///

    return ({
      ...context,
      updateGutter,
      scrollGutter
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

  width: fit-content;
  overflow: hidden;
  position: relative;
  grid-area: gutter;
  border-right-width: 1px;
  border-right-style: dotted;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  caret-color: inherit;
  border-color: inherit;
  text-rendering: inherit;
  background-color: inherit;
  font-feature-settings: inherit;

`;
