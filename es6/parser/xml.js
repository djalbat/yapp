"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

import { ruleMapFromRules, startRuleFromRules } from "../utilities/rules";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  xml error* | error+ ;


    xml                        ::=  ( preamble element* ) | element+ ;


    preamble                   ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;


    comment                    ::=  "<!--" text* "-->" ;


    completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;


    startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;


    endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;
    

    attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;
    
    
    name                       ::=  [identifier] ;


    error                      ::=  . ;

`;

export default class XMLParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          xmlParser = XMLParser.fromRules(rules);

    return xmlParser;
  }

  static fromRules(rules) {
    const startRule = startRuleFromRules(rules),
          ruleMap = ruleMapFromRules(rules);

    eliminateLeftRecursion(startRule, ruleMap);

    const xmlParser = new XMLParser(startRule, ruleMap);

    return xmlParser;
  }
}
