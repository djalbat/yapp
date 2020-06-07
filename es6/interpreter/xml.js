"use strict";

import Interpreter from "../interpreter";
import XMLLexer from "../lexer/xml";
import XMLParser from "../parser/xml";
import XMLProcessor from "../processor/xml";

import { XML_LANGUAGE } from "../constants"

export default class XMLInterpreter extends Interpreter {
  language = XML_LANGUAGE;

  static Lexer = XMLLexer;

  static Parser = XMLParser;

  static Processor = XMLProcessor;

  static fromNothing() { return Interpreter.fromNothing(XMLInterpreter); }
}
