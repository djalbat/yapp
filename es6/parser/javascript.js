"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, CommonParser } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  preamble? ( statement | error )* ;



    preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;



    statement                  ::=  varDeclaration 

                                 |  letDeclaration 

                                 |  constDeclaration 

                                 |  classDeclaration 

                                 |  functionDeclaration 

                                 |  generatorDeclaration 

                                 |  expressionExport

                                 |  classExport

                                 |  functionExport

                                 |  generatorExport

                                 |  expressionExport

                                 |  namesExport

                                 |  destructedExport

                                 |  blockStatement

                                 |  breakStatement  

                                 |  continueStatement 

                                 |  conditionalStatement 

                                 |  switchStatement 

                                 |  returnStatement 

                                 |  throwStatemennt 

                                 |  tryCatchFinallyStatement 

                                 |  doWhileIterator 

                                 |  forIterator 

                                 |  forInIterator 

                                 |  forOfIterator 

                                 |  whileIterator 

                                 |  "debugger" 





                                 |  importStatement 

                                 |  exportStatement 

                                 ;



    varDeclaration             ::=  "export"? "var" vars ";" ;

    letDeclaration             ::=  "export"? "let" lets ";" ;

    constDeclaration           ::=  "export"? "const" consts ";" ;

    classDeclaration           ::=  class ;

    functionDeclaration        ::=  function ;

    generatorDeclaration       ::=  generator ;



    classExport                ::=  "export" ( ( "default"? class ) | ( "default" anonymousClass ) ) ;

    functionExport             ::=  "export" ( ( "default"? function ) | ( "default" anonymousFunction ) ) ;

    generatorExport            ::=  "export" ( ( "default"? generator ) | ( "default" anonymousGenerator ) ) ;

    expressionExport           ::=  "export" expression ";" ;

    namesExport                ::=  "export" "{" names "}" ";" ;

    destructedExport           ::=  "export" "const" "{" fields "}" "=" expression ";" ;



    blockStatement             ::=  "{" statement "}" ;

    breakStatement             ::=  "break" ";" ;

    continueStatement          ::=  "continue" ";" ;

    conditionalStatement       ::=  "if" "(" condition ")" "else" statement ;

    switchStatement            ::=  "switch" "(" expression ")" "{" case* defaultCase? "}" ;

    returnStatement            ::=  "return" expression? ";" ;

    throwStatement             ::=  "throw" exception ";" ;

    tryCatchFinallyStatement   ::=  try ( ( catch* finally ) | catch+ ) ;



    doWhileIterator            ::=  "do" statement "while" "(" condition ")" ";" ;

    forIterator                ::=  "for" "(" initialiser ( ";" condition )? ( ";" finalExpression )? ")" statement ;

    forInIterator              ::=  "for" "(" variable "in" object ")" statement ;

    forOfIterator              ::=  "for" "await"? "(" variable "of" iterable ")" statement ;

    whileIterator              ::=  "while" "(" condition ")" statement ;



    class                      ::=  "class" name classBody ;

    function                   ::=  "async"? "function" name functionBody ;

    generator                  ::=  "async"? "function" <NO_WHITESPACE>"*" name functionBody ;

    anonymousClass             ::=  "class" classBody ;

    anonymousFunction          ::=  "async"? "function" functionBody ;

    anonymousGenerator         ::=  "async"? "function" <NO_WHITESPACE>"*" functionBody ;

    constructor                ::=  "constructor" funcctionBody ;

    method                     ::=  "static"? name functionBody ;

    field                      ::=  "static"? name "=" expression ";" ;



    classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;

    functionBody               ::=  "(" parameters? ")" "{" statement* "}" ;



    case                       ::=  "case" expression ":" statement* breakStatement? ;

    defaultCase                ::=  "default" ":" statement* breakStatement? ;

    try                        ::=  "try" "{" statement+ "}" ;

    catch                      ::=  "catch" "(" exception ")" "{" statement+ "}" ;

    finally                    ::=  "finally" "{" statement+ "}" ;

    iterable                   ::=  object ;

    condition                  ::=  expression ;

    exception                  ::=  expression ;

    initialiser                ::=  expression | "var" vars | "let" lets ;

    finalExpression            ::=  expression ;



    vars                       ::=  var ( "," var )* ;

    lets                       ::=  let ( "," let )* ;

    consts                     ::=  const ( "," const )* ;

    parameters                 ::=  parameter ( "," parameter )* ;

    names                      ::=  name ( "as" ( name | "default" ) )? ( "," name ( "as" ( name | "default" ) )? )* ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;



    var                        ::=  variable ( "=" expression )? ;

    let                        ::=  variable ( "=" expression )? ;

    const                      ::=  variable "=" expression ;

    parameter                  ::=  variable ;



















    importStatement            ::=  "import" ( ( term | bracketedTerm ) "from" )? [string-literal] ";" ;


    exportStatement            ::=  "export" "default"? expression ;


    expression                 ::=  "true" | "false" |term | object ;


    function                   ::=  "function" name arguments "{" body? "}" ;


    arguments                  ::=  "(" ( argument ( "," argument )* )? ")";


    terms                      ::=  "(" ( term ( "," term )* )? ")";


    body                       ::=  ( declaration | methodCall )+ ;


    declaration                ::=  "const" variable "=" expression ";" ;


    object                     ::=  name | "new" name<NO_WHITESPACE>terms? ;



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

let blah;

export { JavaScriptParser as blah2 }
