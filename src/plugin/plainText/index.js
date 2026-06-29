"use strict";

import Plugin from "../../plugin";
import PlainTextLexer from "../plainText/lexer";
import PlainTextParser from "../plainText/parser";
import PlainTextProcessor from "../plainText/processor";

import { PLAIN_TEXT_LANGUAGE } from "../../languages"

export default class PlainTextPlugin extends Plugin {
  static language = PLAIN_TEXT_LANGUAGE;

  static Lexer = PlainTextLexer;

  static Parser = PlainTextParser;

  static Processor = PlainTextProcessor;

  static fromNothing() { return Plugin.fromNothing(PlainTextPlugin); }
}
