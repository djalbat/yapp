"use strict";

import Interpreter from "../interpreter";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";
import JavaScriptProcessor from "../processor/javascript";

import { JAVASCRIPT_LANGUAGE } from "../constants"

export default class JavaScriptInterpreter extends Interpreter {
  language = JAVASCRIPT_LANGUAGE;

  static Lexer = JavaScriptLexer;

  static Parser = JavaScriptParser;

  static Processor = JavaScriptProcessor;

  static fromNothing() { return Interpreter.fromNothing(JavaScriptInterpreter); }
}
