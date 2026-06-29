"use strict";

import Plugin from "../../plugin";
import JavaScriptLexer from "../javascript/lexer";
import JavaScriptParser from "../javascript/parser";
import JavaScriptProcessor from "../javascript/processor";

import { JAVASCRIPT_LANGUAGE } from "../../languages"

export default class JavaScriptPlugin extends Plugin {
  static language = JAVASCRIPT_LANGUAGE;

  static Lexer = JavaScriptLexer;

  static Parser = JavaScriptParser;

  static Processor = JavaScriptProcessor;

  static fromNothing() { return Plugin.fromNothing(JavaScriptPlugin); }
}
