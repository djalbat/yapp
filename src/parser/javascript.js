"use strict";

import YappParser  from "../parser/yapp";

const bnf = `

    document                   ::=  ( preamble ( statement | error )* ) | ( statement | error )+ ;



    preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;



    statement                  ::=  class

                                 |  function

                                 |  generator

                                 |  "export"? ( ( "var" var ( "," var )* )

                                              | ( "let" let ( "," let )* )

                                              | ( "const" const ( "," const )* )

                                              ) ";"

                                 |  "export" "default" expression ";"

                                 |  "export" "default"? ( class | function | generator )

                                 |  "export" "default" ( anonymousClass | anonymousFunction | anonymousGenerator )

                                 |  "export" ( ( "export" "{" names "}" ( "from" [string-literal] )? )

                                             | ( "export" "const" "{" fields "}" "=" expression )

                                             | ( "export" "{" "default" "}" "from" [string-literal] )

                                             | ( "export" "*" ( "as" name )? "from" [string-literal] )

                                             ) ";"

                                 |  "import" ( [string-literal]

                                             | ( name "from" [string-literal] )

                                             | ( "{" names "}" "from" [string-literal] )

                                             | ( "*" "as" name "from" [string-literal] )

                                             ) ";"

                                 |  label ":" statement

                                 |  "{" statement* "}"

                                 |  "break" ";"

                                 |  "continue" ";"

                                 |  "if" "(" expression ")" statement ( "else" statement )?

                                 |  "switch" "(" expression ")" "{" case* defaultCase? "}"

                                 |  "return" expression? ";"

                                 |  "throw" expression ";"

                                 |  "delete" expression ";"

                                 |  expression! ";"

                                 |  try ( ( catch* finally ) | catch+ )

                                 |  "do" statement "while" "(" expression ")" ";"

                                 |  "for" "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement

                                 |  "for" "(" variable "in" expression ")" statement

                                 |  "for" "await"? "(" variable "of" expression ")" statement

                                 |  "while" "(" expression ")" statement

                                 |  "debugger" ";"?

                                 ;



    class                      ::=  "class" name classBody ;

    function                   ::=  "async"? "function" name functionBody ;

    generator                  ::=  "async"? "function" <NO_WHITESPACE>"*" name functionBody ;

    anonymousClass             ::=  "class" classBody ;

    anonymousFunction          ::=  "async"? "function" functionBody ;

    anonymousGenerator         ::=  "async"? "function" <NO_WHITESPACE>"*" functionBody ;

    constructor                ::=  "constructor" functionBody ;

    method                     ::=  "static"? name functionBody ;

    field                      ::=  "static"? name "=" expression ";" ;



    classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;

    functionBody               ::=  "(" arguments? ")" "{" statement* "}" ;



    case                       ::=  "case" expression ":" statement ( "break" ";" )? ;

    defaultCase                ::=  "default" ":" statement ( "break" ";" )? ;

    try                        ::=  "try" "{" statement+ "}" ;

    catch                      ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;

    finally                    ::=  "finally" "{" statement+ "}" ;

    initialiser                ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;



    var                        ::=  variable ( "=" expression )? | destructure "=" expression ;

    let                        ::=  variable ( "=" expression )? | destructure "=" expression;

    const                      ::=  ( variable | destructure ) "=" expression ;

    destructure                ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"

                                 |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"

                                 ;



    expression                 ::=  jsx

                                 |  json

                                 |  arrowFunction

                                 |  templateLiteral

                                 |  anonymousFunction

                                 |  "(" expression ")"

                                 |  "{" ( property ( "," property )* )? "}"

                                 |  "[" ( expression ( "," expression )* ","? )? "]"

                                 |  "typeof" ( expression | ( "(" expression ")") )

                                 |  "void" ( expression | ( "(" expression ")") )

                                 |  "new" name<NO_WHITESPACE>"(" arguments? ")"

                                 |  [operator]<NO_WHITESPACE>expression

                                 |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )

                                                             | ( "[" expressions "]" )

                                                             | ( "(" expressions? ")" )

                                                             | templateLiteral

                                                             | [operator]

                                                             )

                                 |  expression ( ( [operator] expression )

                                               | ( "?" expression ":" expression )

                                               | ( "instanceof" expression )

                                               | ( "in" expression )

                                               )

                                 |  [number]

                                 |  variable

                                 |  primitive

                                 |  importMeta

                                 |  [string-literal]

                                 |  "super" | "this" | "true" | "false" | "null" | "undefined"

                                 ;



    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;

    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;

    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;

    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;

    jsxAttribute               ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;



    json                       ::=  jsonArray | jsonObject ;

    jsonArray                  ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;

    jsonObject                 ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;

    jsonElement                ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;



    arrowFunction              ::=  simpleArrowFunction | complexArrowFunction ;

    arrowFunctionBody          ::=  expression | ( "{" statement* "}" ) ;

    simpleArrowFunction        ::=  argument "=>" arrowFunctionBody ;

    complexArrowFunction       ::=  "(" arguments? ")" "=>" arrowFunctionBody ;



    templateLiteral            ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;



    string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;

    property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;

    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



    expressions                ::=  expression ( "," expression )* ;

    arguments                  ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;

    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



    spreadArgument             ::=  "..."<NO_WHITESPACE>[identifier] ;

    argument                   ::=  expression | [identifier] ( "=" expression )? ;

    variable                   ::=  [identifier] ;

    label                      ::=  [identifier] ;

    name                       ::=  [identifier] ;



    error                      ::=  . ;

`;

export default class JavaScriptParser extends YappParser {
  static bnf = bnf;

  static fromNothing() { return YappParser.fromNothing(JavaScriptParser); }

  static fromBNF(bnf) { return YappParser.fromBNF(JavaScriptParser, bnf); }

  static fromRules(rules) { return YappParser.fromRules(JavaScriptParser, rules); }
}
