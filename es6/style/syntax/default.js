"use strict";

import { colour, keywordColour, commentColour, stringLiteralColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax { 
    color: ${colour}; 
  }
  
  .syntax > .keyword { color: ${keywordColour}; }
  
  .syntax > .comment { color: ${commentColour}; }
  
  .syntax > .string-literal { color: ${stringLiteralColour}; } 
  
  .syntax > .error {
    background-image: url("css/image/squiggle.png");
    background-repeat: repeat-x;
    background-position: bottom;
  } 

`;

export default defaultSyntaxStyle;
