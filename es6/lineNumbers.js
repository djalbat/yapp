"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import commonFontMixin from "./mixin/font/common";

import { lineNumbersColour } from "./scheme/prettyPrinter";

class LineNumbers extends Element {
  update(lineCount) {
    let html = "";

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      html = `${html}${lineNumber}<br/>`;
    }

    this.html(html);
  }

  setLineHeight(lineHeight) {
    lineHeight = `${lineHeight}px`; ///

    this.style("line-height", lineHeight);
  }

  parentContext() {
	  const updateLineNumbers = this.update.bind(this),  ///
          setLineNumbersLineHeight = this.setLineHeight.bind(this); ///

    return ({
      updateLineNumbers,
      setLineNumbersLineHeight
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "line-numbers"
  };
}

export default withStyle(LineNumbers)`

  color: ${lineNumbersColour};
  float: left;
  margin: 0 6px 0 6px;
  
  ${commonFontMixin}

`;
