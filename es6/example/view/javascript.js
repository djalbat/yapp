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
`;

  static defaultProperties = {
    className: "javascript"
  };
};
