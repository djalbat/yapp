"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

import bnf from "./bnf";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const rules = rulesFromBNF(bnf);

export default class PlainTextParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(PlainTextParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(PlainTextParser, rules); }
}
