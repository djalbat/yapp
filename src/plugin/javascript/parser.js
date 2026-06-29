"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import bnf from "./bnf";

const { rulesFromBNF, parserFromRules } = parserUtilities;

let rules = rulesFromBNF(bnf);

rules = eliminateLeftRecursion(rules);  ///

export default class JavaScriptParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(JavaScriptParser, rules); }

  static fromRules(rules) {
    rules = eliminateLeftRecursion(rules);  ///

    return CommonParser.fromRules(JavaScriptParser, rules); }
}
