"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

import bnf from "./bnf";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const rules = rulesFromBNF(bnf);

export default class JSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(JSONParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(JSONParser, rules); }
}
