"use strict";

import View from "../view";

import JavaScriptLexer from "../../lexer/javascript";
import JavaScriptParser from "../../parser/javascript";

import { JAVASCRIPT_LANGUAGE } from "../../constants";

export default class JavaScriptView extends View {
  Lexer = JavaScriptLexer;

  Parser = JavaScriptParser;

  language = JAVASCRIPT_LANGUAGE;

  initialContent = `"use strict";

import "juxtapose";

import { Body } from "easy";

function simpleApp () {
  const body = new Body();

  body.prepend(
  
    <p>
      A simple application.
    </p>
    
  );
}

export default simpleApp;
`;

  static defaultProperties = {
    className: "javascript"
  };
};
