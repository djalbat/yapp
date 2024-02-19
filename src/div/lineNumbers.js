"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "../constants";
import { lineCountFromTokens } from "../utilities/tokens";

class LineNumbersDiv extends Element {
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
	  const scrollLineNumbersDiv = this.scroll.bind(this), ///
          updateLineNumbersDiv = this.update.bind(this);  ///

    return ({
      scrollLineNumbersDiv,
      updateLineNumbersDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "line-numbers"
  };
}

export default withStyle(LineNumbersDiv)`

  position: relative;
  user-select: none;
  pointer-events: none;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
