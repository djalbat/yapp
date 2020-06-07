"use strict";

import Interpreter from "../interpreter";
import JSONLexer from "../lexer/json";
import JSONParser from "../parser/json";
import JSONProcessor from "../processor/json";

import { JSON_LANGUAGE } from "../constants"

export default class JSONInterpreter extends Interpreter {
  language = JSON_LANGUAGE;

  static Lexer = JSONLexer;

  static Parser = JSONParser;

  static Processor = JSONProcessor;

  static fromNothing() { return Interpreter.fromNothing(JSONInterpreter); }
}
