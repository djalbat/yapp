"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  json error* | error+ ;


    json                       ::=  array | object ;


    array                      ::=  "[" ( element ( "," element )* )? "]" ;


    object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

    
    element                    ::=  json |  [string-literal] | [number] | "true" | "false" | "null" ;


    error                      ::=  . ;

`;

export default class JSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          jsonParser = JSONParser.fromRules(rules);

    return jsonParser;
  }

  static fromRules(rules) {
    const ruleMap = ruleMapFromRules(rules);

    let startRule = startRuleFromRules(rules);

    startRule = eliminateLeftRecursion(startRule, ruleMap);

    const jsonParser = new JSONParser(startRule, ruleMap);

    return jsonParser;
  }
}
