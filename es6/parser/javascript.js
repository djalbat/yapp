"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, CommonParser } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `



    document                   ::= preamble? error* ;

    preamble                   ::= "\\"use strict\\"" ";" ;
                                                              
    error                      ::=  . ;



`;

export default class JavaScriptParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          javascriptParser = new JavaScriptParser(rules);

    return javascriptParser;
  }

  static fromNothing() { return JavaScriptParser.fromBNF(bnf); }
}
