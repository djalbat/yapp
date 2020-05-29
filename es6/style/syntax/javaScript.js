"use strict";

import { jsxColour, argumentColour, variableColour } from "../../scheme/syntax/javaScript";

const javaScriptSyntaxStyle = `

  .javascript.syntax > .jsx { 
    color: ${jsxColour};
    font-weight: bold; 
  }

  .javascript.syntax > .variable { color: ${variableColour}; }

  .javascript.syntax > .argument { color: ${argumentColour}; }

`;

export default javaScriptSyntaxStyle;
