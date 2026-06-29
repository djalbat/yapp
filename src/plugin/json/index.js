"use strict";

import Plugin from "../../plugin";
import JSONLexer from "../json/lexer";
import JSONParser from "../json/parser";
import JSONProcessor from "../json/processor";

import { JSON_LANGUAGE } from "../../languages"

export default class JSONPlugin extends Plugin {
  static language = JSON_LANGUAGE;

  static Lexer = JSONLexer;

  static Parser = JSONParser;

  static Processor = JSONProcessor;

  static fromNothing() { return Plugin.fromNothing(JSONPlugin); }
}
