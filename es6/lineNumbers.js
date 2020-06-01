"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { lineNumbersColour } from "./scheme/view";

class LineNumbers extends Element {
  update(lineCount) {
    let html = "";

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      html = `${html}${lineNumber}<br/>`;
    }

    this.html(html);
  }

  parentContext() {
	  const updateLineNumbers = this.update.bind(this);  ///

    return ({
      updateLineNumbers
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
  
`;
