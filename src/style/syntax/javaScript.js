"use strict";

import { argumentColour, variableColour, jsxTagNameColour, jsxAttributeNameColour } from "../../scheme/syntax/javaScript";

const javaScriptSyntaxStyle = `

  .javascript.syntax > .variable { color: ${variableColour}; }

  .javascript.syntax > .argument { color: ${argumentColour}; }

  .javascript.syntax > .jsx-tag-name { color: ${jsxTagNameColour};}

  .javascript.syntax > .jsx-attribute-name { color: ${jsxAttributeNameColour};}

`;

export default javaScriptSyntaxStyle;
