"use strict";

import { colour, caretColour, borderColour, backgroundColour } from "../scheme/colour";

const yappStyle = `

  .yapp {
    width: 100%;
    height: 100%;
    border: 1px solid;
    
    color: ${colour};
    font-size: 13px;
    line-height: 20px;
    font-family: "Menlo", "Lucida Sans Typewriter", monospace;
    font-weight: normal;
    caret-color: ${caretColour};
    border-color: ${borderColour};
    text-rendering: initial;
    background-color: ${backgroundColour};
    font-feature-settings: initial;
  
    .fira-code {
  
      font-family: "Fira Code";
      text-rendering: optimizeLegibility;
      font-feature-settings: "calt" 1;
      
    }
  }    

`;

export default yappStyle;
