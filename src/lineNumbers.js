"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

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

  float: left;
  margin: 0 6px 0 6px;
  
  color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
