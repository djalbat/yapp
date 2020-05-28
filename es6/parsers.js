"use strict";

import JavaScriptParser from "./parser/javascript";

import { JAVASCRIPT_LANGUAGE } from "./constants";

export function parserFromLanguage(language) {
  let Parser;  ///

  switch (language) {
    case JAVASCRIPT_LANGUAGE : Parser = JavaScriptParser; break;
  }

  const parser = Parser.fromNothing();

  return parser;
}
