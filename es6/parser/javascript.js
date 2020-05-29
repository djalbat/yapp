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


    terms                      ::=  "(" ( term ( "," term )* )? ")";


    body                       ::=  ( declaration | methodCall )+ ;


    declaration                ::=  "const" variable "=" expression ";" ;


    object                     ::=  name | "new" name<NO_WHITESPACE>terms? ;


    methodCall                 ::=  name "." name<NO_WHITESPACE>terms? ";" ;


    bracketedTerm              ::=  "{" term "}";


    term                       ::=  variable | name | jsx ;


    jsx                        ::=  jsxCompleteTag | jsxStartTag jsxText jsxEndTag ;


    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;


    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;


    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;


    jsxAttribute               ::=  jsxStandardAttribute | jsxBooleanAttribute ;


    jsxStandardAttribute       ::=  name<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    jsxBooleanAttribute        ::=  name ;


    jsxText                    ::=  ( [special] | [keyword] | [identifier] | [unassigned] )+ ;


    argument                   ::=  [identifier] ;


    variable                   ::=  [identifier] ;


    name                       ::=  [identifier] ; 


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
