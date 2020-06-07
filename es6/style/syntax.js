"use strict";

import xmlSyntaxStyle from "../style/syntax/xml";
import jsonSyntaxStyle from "../style/syntax/json";
import defaultSyntaxStyle from "../style/syntax/default";
import javaScriptSyntaxStyle from "../style/syntax/javaScript";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${xmlSyntaxStyle}
  
  ${jsonSyntaxStyle}
  
  ${javaScriptSyntaxStyle}

`;

export default syntaxStyle;
