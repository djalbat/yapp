"use strict";

import { Plugin } from "../index";  ///

import XMLLexer from "../lexer/xml";
import XMLParser from "../parser/xml";
import XMLProcessor from "../processor/xml";

import { XML_LANGUAGE } from "../languages"

export default class XMLPlugin extends Plugin {
  static language = XML_LANGUAGE;

  static Lexer = XMLLexer;

  static Parser = XMLParser;

  static Processor = XMLProcessor;

  static fromNothing() { return Plugin.fromNothing(XMLPlugin); }
}
