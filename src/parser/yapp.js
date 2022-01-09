"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

import { startRuleFromRules, ruleMapFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class YappParser extends CommonParser {
  static fromNothing(Class) {
    const { bnf } = Class,
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromBNF(Class, bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          parser = parserFromRules(Class, rules);

    return parser;
  }

  static fromRules(Class, rules) {
    const parser = parserFromRules(Class, rules);

    return parser;
  }
}

function parserFromRules(Class, rules) {
  const ruleMap = ruleMapFromRules(rules);

  let startRule = startRuleFromRules(rules);

  startRule = eliminateLeftRecursion(startRule, ruleMap);

  const parser = new Class(startRule, ruleMap);

  return parser;
}