"use strict";

import Plugin from "../plugin";
import JSONLexer from "../lexer/json";
import JSONParser from "../parser/json";
import JSONProcessor from "../processor/json";

import { JSON_LANGUAGE } from "../constants"

export default class JSONPlugin extends Plugin {
  language = JSON_LANGUAGE;

  static Lexer = JSONLexer;

  static Parser = JSONParser;

  static Processor = JSONProcessor;

  static fromNothing() { return Plugin.fromNothing(JSONPlugin); }
}
