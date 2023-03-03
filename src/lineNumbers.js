"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "./constants";
import { lineCountFromTokens } from "./utilities/tokens";

class LineNumbers extends Element {
  update(tokens) {
    let html = EMPTY_STRING;

    const lineCount = lineCountFromTokens(tokens);

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      html = `${html}${lineNumber}<br/>`;
    }

    this.html(html);
  }

  scroll(scrollTop, scrollLeft) {
    const top = `${-scrollTop}px`,
          css = {
            top
          };

    this.css(css);
  }

  parentContext() {
	  const scrollLineNumbers = this.scroll.bind(this), ///
          updateLineNumbers = this.update.bind(this);  ///

    return ({
      scrollLineNumbers,
      updateLineNumbers
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "line-numbers"
  };
}

export default withStyle(LineNumbers)`

  margin: 0 6px 0 6px;
  position: relative;
  text-align: right;
  user-select: none;
  pointer-events: none;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;
  font-weight: normal;
  caret-color: initial;
  border-color: initial;
  text-rendering: initial;
  background-color: initial;
  font-feature-settings: initial;

`;
