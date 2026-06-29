"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

import bnf from "./bnf";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const rules = rulesFromBNF(bnf);

export default class XMLParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(XMLParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(XMLParser, rules); }
}
