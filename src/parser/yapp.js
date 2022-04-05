"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-grammar-utilities";

const { rulesFromBNF, parserFromRules } = parserUtilities;

export default class YappParser extends CommonParser {
  static fromNothing(Class) {
    const { bnf } = Class,
          rules = rulesFromBNF(bnf),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromBNF(Class, bnf) {
    const rules = rulesFromBNF(bnf),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromRules(Class, rules) {
    const parser = parserFromRules(Class, rules);

    return parser;
  }
}
