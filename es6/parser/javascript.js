"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
import { BNFParser, CommonParser } from "occam-parsers";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

const bnf = `

    document                   ::=  preamble? expression ( statement | error )* ;



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

                                 |  namesAggregatedExport

                                 |  defaultAggregatedExport

                                 |  wildcardAggregatedExport

                                 |  namesImport

                                 |  anonymousImport

                                 |  namedDefaultImport

                                 |  namedWildcardImport

                                 |  labelledStatement

                                 |  blockStatement

                                 |  breakStatement  

                                 |  continueStatement 

                                 |  conditionalStatement 

                                 |  switchStatement 

                                 |  returnStatement 

                                 |  throwStatemennt 

                                 |  deleteStatement 

                                 |  tryCatchFinallyStatement 

                                 |  doWhileIterator 

                                 |  forIterator 

                                 |  forInIterator 

                                 |  forOfIterator 

                                 |  whileIterator 

                                 |  "debugger" 

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

    expressionExport           ::=  "export" "default" expression ";" ;

    namesExport                ::=  "export" "{" names "}" ";" ;

    destructedExport           ::=  "export" "const" "{" fields "}" "=" expression ";" ;

    namesAggregatedExport      ::=  "export" "{" names "}" "from" [string-literal] ";" ;

    defaultAggregatedExport    ::=  "export" "{" "default" "}" "from" [string-literal] ";" ;

    wildcardAggregatedExport   ::=  "export" "*" ( "as" name )? "from" [string-literal] ";" ;



    namesImport                ::=  "import" "{" names "}" "from" [string-literal] ";" ;

    anonymousImport            ::=  "import" [string-literal] ";" ;

    namedDefaultImport         ::=  "import" name "from" [string-literal] ";" ;

    namedWildcardImport        ::=  "import" "*" "as" name "from" [string-literal] ";" ;


    labelledStatement          ::=  label ":" statement ;

    blockStatement             ::=  "{" statement "}" ;

    breakStatement             ::=  "break" ";" ;

    continueStatement          ::=  "continue" ";" ;

    conditionalStatement       ::=  "if" "(" condition ")" "else" statement ;

    switchStatement            ::=  "switch" "(" expression ")" "{" case* defaultCase? "}" ;

    returnStatement            ::=  "return" expression? ";" ;

    throwStatement             ::=  "throw" exception ";" ;

    deleteStatement            ::=  "delete" expression ";" ;

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

    functionBody               ::=  "(" arguments? ")" "{" statement* "}" ;



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



    var                        ::=  variable ( "=" expression )? | structure "=" expression ;

    let                        ::=  variable ( "=" expression )? | structure "=" expression;

    const                      ::=  ( variable | structure ) "=" expression ;

    structure                  ::=  "[" name ( "," name )* "]" | "{" name ( "," name )* "}"; 



    expression                 ::=  "(" expression ")"

                                 |  expression "?" expression ":" expression

                                 |  expression [operator] expression 

                                 |  expression "instanceof" expression

                                 |  expression "in" expression 

                                 |  expression "," expression 

                                 |  expression [operator] 

                                 |  expression<NO_WHITESPACE>"."<NO_WHITESPACE>name 

                                 |  expression<NO_WHITESPACE>"[" expression "]"

                                 |  [operator] expression 

                                 |  "typeof" ( expression | ( "(" expression ")") ) 

                                 |  "void" ( expression | ( "(" expression ")") ) 

                                 |  "new" name<NO_WHITESPACE>"(" arguments? ")"

                                 |  "this"

                                 |  "super"

                                 |  object 

                                 |  variable 
 
                                 |  primitive 

                                 |  jsx 

                                 ;





    object                     ::=  importMeta ;



    primitive                  ::=  "true" | "false" ;



    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



    arguments                  ::=  argument ( "," argument )* ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



    argument                   ::=  [identifier] ;

    variable                   ::=  [identifier] ;

    label                      ::=  [identifier] ; 

    name                       ::=  [identifier] ; 





























    jsx                        ::=  jsxCompleteTag | jsxStartTag jsxText jsxEndTag ;


    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;


    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;


    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;


    jsxAttribute               ::=  jsxStandardAttribute | jsxBooleanAttribute ;


    jsxStandardAttribute       ::=  name<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    jsxBooleanAttribute        ::=  name ;


    jsxText                    ::=  ( [special] | [keyword] | [identifier] | [unassigned] )+ ;


    argument                   ::=  [identifier] ;



    error                      ::=  . ;

`;

export default class JavaScriptParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens);

    eliminateLeftRecursion(rules);

    const javascriptParser = new JavaScriptParser(rules);

    return javascriptParser;
  }

  static fromRules(rules) { return new JavaScriptParser(rules); }
}
