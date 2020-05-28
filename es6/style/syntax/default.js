"use strict";

import { colour, keywordColour, commentColour, stringLiteralColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax, 
  .syntax > * { color: ${colour}; }
  
  .syntax > .keyword { color: ${keywordColour}; }
  
  .syntax > .comment { color: ${commentColour}; }
  
  .syntax > .string-literal { color: ${stringLiteralColour}; } 
  
  .syntax > * a {
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
  }

  .syntax > * a:hover {
    text-decoration: underline;
  }

  .syntax > button {
    cursor: pointer;
    outline: none;
    display: inline;
    pointer-events: auto;
    background-color: transparent;
  }
  
  .syntax > .error {
    background-image: url("./image/squiggle.png");
    background-repeat: repeat-x;
    background-position: bottom;
  } 

`;

export default defaultSyntaxStyle;
