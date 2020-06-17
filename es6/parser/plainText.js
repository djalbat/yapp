"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  .+ ;

`;

export default class PlainTextParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          plainTextParser = PlainTextParser.fromRules(rules);

    return plainTextParser;
  }

  static fromRules(rules) {
    const startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules);

    eliminateLeftRecursion(startRule, ruleMap);

    const plainTextParser = new PlainTextParser(startRule, ruleMap);

    return plainTextParser;
  }
}
