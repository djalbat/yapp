"use strict";

import withStyle from "easy-with-style";  ///

import syntaxStyle from "./style/syntax"
import defaultStyle from "./style/default"
import firaCodeStyle from "./style/firaCode"

export function renderStyles() {
  const { renderStyle, renderStyles } = withStyle;

  renderStyles();

  renderStyle(`
  
    .yapp {
    
      ${defaultStyle}
      
    }
  
    ${syntaxStyle}
  
    ${firaCodeStyle}

  `);
}
