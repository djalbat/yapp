"use strict";

import { BNFLexer } from "occam-lexers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";
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

                                 |  expressionStatement

                                 |  tryCatchFinallyStatement 

                                 |  doWhileIterator 

                                 |  forIterator 

                                 |  forInIterator 

                                 |  forOfIterator 

                                 |  whileIterator 

                                 |  debuggerStatement

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

    conditionalStatement       ::=  "if" "(" expression ")" statement ( "else" statement )? ;

    switchStatement            ::=  "switch" "(" expression ")" "{" case* defaultCase? "}" ;

    returnStatement            ::=  "return" expression? ";" ;

    throwStatement             ::=  "throw" expression ";" ;

    deleteStatement            ::=  "delete" expression ";" ;

    expressionStatement        ::=  expression! ";" ;

    tryCatchFinallyStatement   ::=  try ( ( catch* finally ) | catch+ ) ;



    doWhileIterator            ::=  "do" statement "while" "(" expression ")" ";" ;

    forIterator                ::=  "for" "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement ;

    forInIterator              ::=  "for" "(" variable "in" expression ")" statement ;

    forOfIterator              ::=  "for" "await"? "(" variable "of" expression ")" statement ;

    whileIterator              ::=  "while" "(" expression ")" statement ;



    debuggerStatement          ::=  "debugger" ";"? ;



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

    catch                      ::=  "catch" "(" argument ")" "{" statement+ "}" ;

    finally                    ::=  "finally" "{" statement+ "}" ;

    initialiser                ::=  expression | "var" vars | "let" lets ;



    vars                       ::=  var ( "," var )* ;

    lets                       ::=  let ( "," let )* ;

    consts                     ::=  const ( "," const )* ;



    var                        ::=  variable ( "=" expression )? | destructure "=" expression ;

    let                        ::=  variable ( "=" expression )? | destructure "=" expression;

    const                      ::=  ( variable | destructure ) "=" expression ;

    destructure                ::=  "[" name ( "=" expression )? ( "," name ( "=" expression )? )* "]" 

                                 |  "{" name ( "=" expression )? ( "," name ( "=" expression )? )* "}"

                                 ; 



    expression                 ::=  jsx
    
                                 |  json
    
                                 |  arrowFunction

                                 |  templateLiteral

                                 |  "(" expression ")"

                                 |  "{" ( property ( "," property )* )? "}"

                                 |  "[" ( expression ( "," expression )* ","? )? "]"

                                 |  expression [operator] expression 

                                 |  expression "?" expression ":" expression

                                 |  expression "instanceof" expression

                                 |  expression "in" expression 

                                 |  "typeof" ( expression | ( "(" expression ")") ) 

                                 |  "void" ( expression | ( "(" expression ")") ) 

                                 |  "new" name<NO_WHITESPACE>"(" expressions? ")"

                                 |  [operator]<NO_WHITESPACE>expression 

                                 |  expression<NO_WHITESPACE>[operator] 

                                 |  expression<NO_WHITESPACE>"."<NO_WHITESPACE>name

                                 |  expression<NO_WHITESPACE>"[" expressions "]"

                                 |  expression<NO_WHITESPACE>"(" expressions? ")" ( <NO_WHITESPACE>templateLiteral )?

                                 |  [number]

                                 |  variable 
 
                                 |  primitive 
 
                                 |  importMeta 

                                 |  arrowFunction 

                                 |  [string-literal]

                                 |  "super" | "this" | "true" | "false" | "null" | "undefined"

                                 ;



    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | text )* jsxEndTag ;

    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;

    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;

    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;

    jsxAttribute               ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;



    json                       ::=  jsonArray | jsonObject ;

    jsonArray                  ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;

    jsonObject                 ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;
    
    jsonElement                ::=  json | [number] | "true" | "false" | "null" ;
    


    arrowFunction              ::=  ( argument | ( "(" arguments? ")" ) ) "=>" ( expression | ( "{" statement* "}" ) ) ; 

    templateLiteral            ::=  "\`" ( ( "\${" expression? "}" ) | text )* "\`" ; 



    text                       ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [unassigned] )+ ;

    property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | name ) ;

    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



    expressions                ::=  expression ( "," expression )* ;

    arguments                  ::=  argument ( "," argument )* ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



    argument                   ::=  [identifier] ;

    variable                   ::=  [identifier] ;

    label                      ::=  [identifier] ; 

    name                       ::=  [identifier] ; 



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
