"use strict";

import firaCodeFontMixin from "../mixin/font/firaCode";
import defaultSyntaxStyle from "../style/syntax/default";
import javaScriptSyntaxStyle from "../style/syntax/javaScript";

const syntaxStyle = `
    
  .syntax,
  .syntax > * {
    ${firaCodeFontMixin}
  }

  ${defaultSyntaxStyle}
  
  ${javaScriptSyntaxStyle}

`;

export default syntaxStyle;
