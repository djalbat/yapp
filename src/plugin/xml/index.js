"use strict";

import Plugin from "../../plugin";
import XMLLexer from "../xml/lexer";
import XMLParser from "../xml/parser";
import XMLProcessor from "../xml/processor";

import { XML_LANGUAGE } from "../../languages"

export default class XMLPlugin extends Plugin {
  static language = XML_LANGUAGE;

  static Lexer = XMLLexer;

  static Parser = XMLParser;

  static Processor = XMLProcessor;

  static fromNothing() { return Plugin.fromNothing(XMLPlugin); }
}
