"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  ( preamble ( element | error )* ) | ( element | error )+ ;


    preamble                   ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;


    comment                    ::=  "<!--" text* "-->" ;


    completeTag                ::=  "<"<NO_WHITESPACE>[identifier] attribute* "/>" ;


    startTag                   ::=  "<"<NO_WHITESPACE>[identifier] attribute* ">" ;


    endTag                     ::=  "</"<NO_WHITESPACE>[identifier] ">" ;
    

    attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;


    error                      ::=  . ;

`;

export default class XMLParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens);

    eliminateLeftRecursion(rules);

    const xmlParser = new XMLParser(rules);

    return xmlParser;
  }

  static fromRules(rules) { return new XMLParser(rules); }
}