"use strict";

import Plugin from "../plugin";
import XMLLexer from "../lexer/xml";
import XMLParser from "../parser/xml";
import XMLProcessor from "../processor/xml";

import { XML_LANGUAGE } from "../constants"

export default class XMLPlugin extends Plugin {
  language = XML_LANGUAGE;

  static Lexer = XMLLexer;

  static Parser = XMLParser;

  static Processor = XMLProcessor;

  static fromNothing() { return Plugin.fromNothing(XMLPlugin); }
}
