"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import firaCodeFontMixin from "./mixin/font/firaCode";

import { lineNumbersColour } from "./scheme/view";

class LineNumbers extends Element {
  update(lineCount) {
    const previousLineCount = this.getPreviousLineCount();

    if (lineCount !== previousLineCount) {
      const previousLineCount = lineCount;  ///

      this.setPreviousLineCount(previousLineCount);

      this.html(lineCount);
    }
  }

  html(lineCount) {
    let html = "";

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      html = `${html}${lineNumber}<br/>`;
    }

    super.html(html);
  }

  getPreviousLineCount() {
    const state = this.getState(),
          { previousLineCount } = state;

    return previousLineCount;
  }

  setPreviousLineCount(previousLineCount) {
    this.updateState({
      previousLineCount
    });
  }

  parentContext() {
	  const updateLineNumbers = this.update.bind(this);  ///

    return ({
      updateLineNumbers
    });
  }

  setInitialState() {
    const previousLineCount = 0;

    this.setState({
      previousLineCount
    });
  }

  initialise(properties) {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "line-numbers"
  };

  static fromClass(Class, properties) {
    const lineNumbers = Element.fromClass(Class, properties);

    lineNumbers.initialise(properties);

    return lineNumbers;
  }
}

export default withStyle(LineNumbers)`

  float: left;
  margin-left: 6px;
  margin-right: 6px;
  color: ${lineNumbersColour};
  
  ${firaCodeFontMixin}
  
`;
