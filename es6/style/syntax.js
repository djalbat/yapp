"use strict";

import { firaCodeFontMixin } from "occam-styles";

import defaultSyntaxStyle from "../style/syntax/default";

const syntaxStyle = `
    
  .syntax,
  .syntax > * {
    ${firaCodeFontMixin}
  }

  ${defaultSyntaxStyle}
  
`;

export default syntaxStyle;
