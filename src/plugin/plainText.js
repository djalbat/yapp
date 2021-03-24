"use strict";

import Plugin from "../plugin";
import PlainTextLexer from "../lexer/plainText";
import PlainTextParser from "../parser/plainText";
import PlainTextProcessor from "../processor/plainText";

import { PlainText_LANGUAGE } from "../constants"

export default class PlainTextPlugin extends Plugin {
  language = PlainText_LANGUAGE;

  static Lexer = PlainTextLexer;

  static Parser = PlainTextParser;

  static Processor = PlainTextProcessor;

  static fromNothing() { return Plugin.fromNothing(PlainTextPlugin); }
}
