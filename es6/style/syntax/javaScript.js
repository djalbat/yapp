"use strict";

import { jsxColour, methodColour, argumentColour, variableColour } from "../../scheme/syntax/javaScript";

const javaScriptSyntaxStyle = `

  .javascript.syntax > .jsx { 
    color: ${jsxColour};
    font-weight: bold; 
  }

  .javascript.syntax > .method { color: ${methodColour}; }

  .javascript.syntax > .variable { color: ${variableColour}; }

  .javascript.syntax > .argument { color: ${argumentColour}; }

`;

export default javaScriptSyntaxStyle;
