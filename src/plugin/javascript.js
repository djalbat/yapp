"use strict";

import Plugin from "../plugin";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";
import JavaScriptProcessor from "../processor/javascript";

import { JAVASCRIPT_LANGUAGE } from "../languages"

export default class JavaScriptPlugin extends Plugin {
  language = JAVASCRIPT_LANGUAGE;

  static Lexer = JavaScriptLexer;

  static Parser = JavaScriptParser;

  static Processor = JavaScriptProcessor;

  static fromNothing() { return Plugin.fromNothing(JavaScriptPlugin); }
}
