"use strict";

import { pomegranate } from "../../colours";
import { colour, keywordColour, commentColour, stringLiteralColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax * { 
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    text-rendering: inherit;
    font-feature-settings: inherit;
  }
  
  .syntax, 
  .syntax > * { 
    color: ${colour}; 
  }
    
  .syntax > .keyword { color: ${keywordColour}; }
  
  .syntax > .comment { color: ${commentColour}; }
  
  .syntax > .string-literal { color: ${stringLiteralColour}; } 
  
  .syntax > .error {
    background-repeat: repeat-x;
    background-position: bottom;
    text-decoration-line: underline;
    text-decoration-color: ${pomegranate};
  } 

`;

export default defaultSyntaxStyle;
