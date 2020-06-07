"use strict";

import withStyle from "easy-with-style";  ///

import yappStyle from "./style/yapp"
import syntaxStyle from "./style/syntax"
import firaCodeStyle from "./style/firaCode"

export function renderStyles() {
  const { renderStyle, renderStyles } = withStyle;

  renderStyles();

  renderStyle(`
  
    ${yappStyle}
  
    ${syntaxStyle}
  
    ${firaCodeStyle}

  `);
}
