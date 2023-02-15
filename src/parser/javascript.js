"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const bnf = `

  document                   ::=  preamble? ( statement | function | class | error )* ;



  preamble                   ::=  ( "\\"use strict\\"" | "'use strict'" ) ";" ;



  statement                  ::=  statementBody... ";"
  
                               |  "{" ( statement | function )* "}"
                               
                               |  "if" "(" expression... ")" statement ( "else" statement )?

                               |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )

                                        | ( "(" variable "in" expression... ")" statement )

                                        | ( "await"? "(" variable "of" expression... ")" statement ) 
                                        
                                        )

                               |  "do" statement "while" "(" expression... ")"

                               |  "while" "(" expression... ")" statement
                               
                               |  "switch" "(" expression... ")" "{" case* defaultCase? "}"

                               |  try ( ( catch* finally ) | catch+ )

                               ;
                               
                               
                               

  class                      ::=  ( "export" "default"? )? "class" name classBody
  
                               |  "export" "default" "class" classBody
  
                               ;



  function                   ::=  ( "export" "default"? )? "async"? "function" name functionBody 
  
                               |  "export" "default" "async"? "function" functionBody

                               ;



  statementBody              ::=  "import" ( [string-literal]

                                           | ( name "from" [string-literal] )

                                           | ( "{" names "}" "from" [string-literal] )

                                           | ( "*" "as" name "from" [string-literal] )

                                           )

                               |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )

                                           | ( "const" "{" fields "}" "=" expression )

                                           | ( "{" "default" "}" "from" [string-literal] )

                                           | ( "*" ( "as" name )? "from" [string-literal] )

                                           )

                               |  "export"? ( ( "var" var ( "," var )* )

                                            | ( "let" let ( "," let )* )

                                            | ( "const" const ( "," const )* )

                                            )
                                            
                               |  ( "export" "default" )? expression

                               |  "return" ( ( "(" expression ")" ) | expression? )

                               |  "throw" expression

                               |  "delete" expression

                               |  "break"

                               |  "continue"

                               |  "debugger"
                               
                               ;



  functionBody               ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;



  classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;



  constructor                ::=  "constructor" functionBody ;

  method                     ::=  "static"? name functionBody ;

  field                      ::=  "static"? name "=" expression... ";" ;



  var                        ::=  variable ( "=" expression )? | destructure "=" expression ;

  let                        ::=  variable ( "=" expression )? | destructure "=" expression ;

  const                      ::=  ( variable | destructure ) "=" expression ;



  try                        ::=  "try" "{" statement+ "}" ;

  catch                      ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;

  finally                    ::=  "finally" "{" statement+ "}" ;



  case                       ::=  "case" expression ":" statement ( "break" ";" )? ;

  defaultCase                ::=  "default" ":" statement ( "break" ";" )? ;



  initialiser                ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;



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

                               |  "new" name<NO_WHITESPACE>"(" expressions? ")"

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



  arrowFunction              ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;
                               


  templateLiteral            ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;



  string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;

  property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;

  importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;



  expressions                ::=  expression ( "," expression )* ;

  arguments                  ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;

  fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;

  names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;



  spreadArgument             ::=  "..."<NO_WHITESPACE>variable ;
  
  argument                   ::=  variable ( "=" expression )? ;

  variable                   ::=  [identifier] ;

  label                      ::=  [identifier] ;

  name                       ::=  [identifier] ;



  error                      ::=  . ;
    
`;

let rules = rulesFromBNF(bnf);

rules = eliminateLeftRecursion(rules);  ///

export default class JavaScriptParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(JavaScriptParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(JavaScriptParser, rules); }
}
