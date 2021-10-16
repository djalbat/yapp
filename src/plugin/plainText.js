"use strict";

import Plugin from "../plugin";
import PlainTextLexer from "../lexer/plainText";
import PlainTextParser from "../parser/plainText";
import PlainTextProcessor from "../processor/plainText";

import { PLAIN_TEXT_LANGUAGE } from "../languages"

export default class PlainTextPlugin extends Plugin {
  language = PLAIN_TEXT_LANGUAGE;

  static Lexer = PlainTextLexer;

  static Parser = PlainTextParser;

  static Processor = PlainTextProcessor;

  static fromNothing() { return Plugin.fromNothing(PlainTextPlugin); }
}
