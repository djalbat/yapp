"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, CommonParser } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  preamble? ( statement | function | error )* ;


    preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;


    statement                  ::=  importStatement | exportStatement ;


    importStatement            ::=  "import" ( ( term | bracketedTerm ) "from" )? [string-literal] ";" ;


    exportStatement            ::=  "export" "default" expression ;


    expression                 ::=  term | object ;


    function                   ::=  "function" name arguments "{" body? "}" ;


    arguments                  ::=  "(" ( argument ( "," argument )* )? ")";


    body                       ::=  ( declaration | methodCall )+ ;


    declaration                ::=  "const" name "=" expression ";" ;


    object                     ::=  name | "new" name<NO_WHITESPACE>arguments? ;


    methodCall                 ::=  name "." name<NO_WHITESPACE>arguments? ;


    bracketedTerm              ::=  "{" term "}";


    term                       ::=  variable ;


    name                       ::=  [identifier] ;


    argument                   ::=  [identifier] ;


    variable                   ::=  [identifier] ;


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
