"use strict";

import { scrollbarThickness, scrollbarThumbBorderRadius } from "../styles";
import { colour, caretColour, borderColour, scrollbarColour, selectionColour, backgroundColour, selectionBackgroundColour } from "../scheme/colour";

const yappStyle = `

  .yapp {
    width: 100%;
    height: 100%;
    border: 1px solid ${borderColour};
    background-color: ${backgroundColour};
    
    font-size: 13px;
    line-height: 20px;
    font-family: "Menlo", "Lucida Sans Typewriter", monospace;
    font-weight: normal;
    text-rendering: initial;
    font-feature-settings: initial;
  }    

  .yapp.fira-code {
    font-family: "Fira Code";
    text-rendering: optimizeLegibility;
    font-feature-settings: "calt" 1;
  }
  
  .yapp>.pretty-printer>.gutter {
    border-right: 1px dotted ${borderColour};
  }
  
  .yapp>.pretty-printer>.gutter>.line-numbers {
    color: ${colour};
    margin: 0 6px 0 6px;
    text-align: right;
  }
  
  .yapp>.pretty-printer textarea.rich {
    caret-color: ${caretColour};
  }

  .yapp>.pretty-printer textarea.rich::selection {
    color: ${selectionColour};
    background-color: ${selectionBackgroundColour};
  }
  
  .yapp>.pretty-printer textarea.rich.fancy-scrollbars {
    scrollbar-color: ${scrollbarColour} transparent;
    scrollbar-gutter: auto;
  }
  
  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar {
    width: ${scrollbarThickness};
    height: ${scrollbarThickness};
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-track {
    display: none;
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-thumb {
    border: 2px solid ${backgroundColour};
    border-radius: ${scrollbarThumbBorderRadius};
    background-color: ${scrollbarColour};
  }

  .yapp>.pretty-printer textarea.rich.fancy-scrollbars::-webkit-scrollbar-corner {
    display: none;
  }

`;

export default yappStyle;
