"use strict";

import JavaScriptLexer from "./lexer/javascript";

import { JAVASCRIPT_LANGUAGE } from "./constants";

export function lexerFromLanguage(language) {
  let Lexer;  ///

  switch (language) {
    case JAVASCRIPT_LANGUAGE : Lexer = JavaScriptLexer; break;
  }

  const lexer = Lexer.fromNothing();

  return lexer;
}
