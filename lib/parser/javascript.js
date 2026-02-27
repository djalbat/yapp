"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptParser;
    }
});
const _occamparsers = require("occam-parsers");
const _occamgrammarutilities = require("occam-grammar-utilities");
const { rulesFromBNF, parserFromRules } = _occamparsers.parserUtilities;
const bnf = `

  javaScript        ::=  preamble? ( statement | function | class | error )* ;


  preamble          ::=  "\\"use strict\\";" ;


  statement         ::=  statementBody... ";"
  
                      |  "{" ( statement | function )* "}"
                                 
                      |  "if" "(" expression... ")" statement ( "else" statement )?
  
                      |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )
  
                               | ( "(" variable "in" expression... ")" statement )
  
                               | ( "await"? "(" variable "of" expression... ")" statement ) )
  
                      |  "do" statement "while" "(" expression... ")"
  
                      |  "while" "(" expression... ")" statement
                                 
                      |  "switch" "(" expression... ")" "{" case* defaultCase? "}"
  
                      |  try ( ( catch* finally ) | catch+ )
  
                      ;


  class             ::=  ( "export" "default"? )? "class" name classBody
  
                      |  "export" "default" "class" classBody
    
                      ;


  function          ::=  ( "export" "default"? )? "async"? "function" name functionBody 
  
                      |  "export" "default" "async"? "function" functionBody
  
                      ;


  statementBody     ::=  "import" ( [string-literal]

                                  | ( name "from" [string-literal] )
  
                                  | ( "{" names "}" "from" [string-literal] )
  
                                  | ( "*" "as" name "from" [string-literal] ) )
  
                      |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )
  
                                  | ( "const" "{" fields "}" "=" expression )
  
                                  | ( "{" "default" "}" "from" [string-literal] )
  
                                  | ( "*" ( "as" name )? "from" [string-literal] ) )
  
                      |  "export"? ( ( "var" var ( "," var )* )
  
                                   | ( "let" let ( "," let )* )
  
                                   | ( "const" const ( "," const )* ) )
                                              
                      |  ( "export" "default" )? expression
  
                      |  "return" ( ( "(" expression ")" ) | expression? )
  
                      |  "throw" expression
  
                      |  "delete" expression
  
                      |  "break"
  
                      |  "continue"
  
                      |  "debugger"
                                 
                      ;


  functionBody      ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;


  classBody         ::=  ( "extends" name )? "{" ( classConstructor | classMethod | classField )* "}" ;


  classConstructor  ::=  "constructor" functionBody ;


  classMethod       ::=  "static"? name functionBody ;


  classField        ::=  "static"? name "=" expression... ";" ;


  var               ::=  variable ( "=" expression )? | destructure "=" expression ;


  let               ::=  variable ( "=" expression )? | destructure "=" expression ;


  const             ::=  ( variable | destructure ) "=" expression ;


  try               ::=  "try" "{" statement+ "}" ;


  catch             ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;


  finally           ::=  "finally" "{" statement+ "}" ;


  case              ::=  "case" expression ":" statement ( "break" ";" )? ;


  defaultCase       ::=  "default" ":" statement ( "break" ";" )? ;


  initialiser       ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;


  destructure       ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"

                      |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"
  
                      ;


  expression        ::=  jsx

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
  
                                                  | [operator] )
  
                      |  expression ( ( [operator] expression )
  
                                    | ( "?" expression ":" expression )
  
                                    | ( "instanceof" expression )
  
                                    | ( "in" expression ) )
  
                      |  [number]
  
                      |  variable
  
                      |  primitive
  
                      |  importMeta
  
                      |  [string-literal]
  
                      |  "super" | "this" | "true" | "false" | "null" | "undefined"
  
                      ;


  jsx               ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;


  jsxCompleteTag    ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;


  jsxStartTag       ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;


  jsxEndTag         ::=  "</"<NO_WHITESPACE>name ">" ;


  jsxAttribute      ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;


  json              ::=  jsonArray | jsonObject ;


  jsonArray         ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;


  jsonObject        ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;


  jsonElement       ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;


  arrowFunction     ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;
                               

  templateLiteral   ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;


  string            ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;


  property          ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;


  importMeta        ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;


  expressions       ::=  expression ( "," expression )* ;


  arguments         ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;


  fields            ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;


  names             ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;


  spreadArgument    ::=  "..."<NO_WHITESPACE>variable ;

  
  argument          ::=  variable ( "=" expression )? ;


  variable          ::=  [identifier] ;


  label             ::=  [identifier] ;


  name              ::=  [identifier] ;


  error.            ::=  . ;
    
`;
let rules = rulesFromBNF(bnf);
rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
class JavaScriptParser extends _occamparsers.CommonParser {
    static bnf = bnf;
    static fromNothing() {
        return parserFromRules(JavaScriptParser, rules);
    }
    static fromRules(rules) {
        rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
        return _occamparsers.CommonParser.fromRules(JavaScriptParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGphdmFTY3JpcHQgICAgICAgIDo6PSAgcHJlYW1ibGU/ICggc3RhdGVtZW50IHwgZnVuY3Rpb24gfCBjbGFzcyB8IGVycm9yICkqIDtcblxuXG4gIHByZWFtYmxlICAgICAgICAgIDo6PSAgXCJcXFxcXCJ1c2Ugc3RyaWN0XFxcXFwiO1wiIDtcblxuXG4gIHN0YXRlbWVudCAgICAgICAgIDo6PSAgc3RhdGVtZW50Qm9keS4uLiBcIjtcIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIntcIiAoIHN0YXRlbWVudCB8IGZ1bmN0aW9uICkqIFwifVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImlmXCIgXCIoXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBzdGF0ZW1lbnQgKCBcImVsc2VcIiBzdGF0ZW1lbnQgKT9cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJmb3JcIiAoICggXCIoXCIgaW5pdGlhbGlzZXIgKCBcIjtcIiBleHByZXNzaW9uICk/ICggXCI7XCIgZXhwcmVzc2lvbiApPyBcIilcIiBzdGF0ZW1lbnQgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCIoXCIgdmFyaWFibGUgXCJpblwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50IClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiYXdhaXRcIj8gXCIoXCIgdmFyaWFibGUgXCJvZlwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50ICkgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImRvXCIgc3RhdGVtZW50IFwid2hpbGVcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwid2hpbGVcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJzd2l0Y2hcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiIFwie1wiIGNhc2UqIGRlZmF1bHRDYXNlPyBcIn1cIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICB0cnkgKCAoIGNhdGNoKiBmaW5hbGx5ICkgfCBjYXRjaCsgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBjbGFzcyAgICAgICAgICAgICA6Oj0gICggXCJleHBvcnRcIiBcImRlZmF1bHRcIj8gKT8gXCJjbGFzc1wiIG5hbWUgY2xhc3NCb2R5XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgXCJjbGFzc1wiIGNsYXNzQm9keVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGZ1bmN0aW9uICAgICAgICAgIDo6PSAgKCBcImV4cG9ydFwiIFwiZGVmYXVsdFwiPyApPyBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBuYW1lIGZ1bmN0aW9uQm9keSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiBcImRlZmF1bHRcIiBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBmdW5jdGlvbkJvZHlcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgc3RhdGVtZW50Qm9keSAgICAgOjo9ICBcImltcG9ydFwiICggW3N0cmluZy1saXRlcmFsXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIG5hbWUgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIntcIiBuYW1lcyBcIn1cIiBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiIFwiYXNcIiBuYW1lIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgKCAoIFwie1wiIG5hbWVzIFwifVwiICggXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApPyApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImNvbnN0XCIgXCJ7XCIgZmllbGRzIFwifVwiIFwiPVwiIGV4cHJlc3Npb24gKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgXCJkZWZhdWx0XCIgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIipcIiAoIFwiYXNcIiBuYW1lICk/IFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCI/ICggKCBcInZhclwiIHZhciAoIFwiLFwiIHZhciApKiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJsZXRcIiBsZXQgKCBcIixcIiBsZXQgKSogKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiY29uc3RcIiBjb25zdCAoIFwiLFwiIGNvbnN0ICkqICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHwgICggXCJleHBvcnRcIiBcImRlZmF1bHRcIiApPyBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwicmV0dXJuXCIgKCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKSB8IGV4cHJlc3Npb24/IClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ0aHJvd1wiIGV4cHJlc3Npb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIiBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiYnJlYWtcIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImNvbnRpbnVlXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWJ1Z2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBmdW5jdGlvbkJvZHkgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgXCJ7XCIgKCBzdGF0ZW1lbnQgfCBmdW5jdGlvbiApKiBcIn1cIiA7XG5cblxuICBjbGFzc0JvZHkgICAgICAgICA6Oj0gICggXCJleHRlbmRzXCIgbmFtZSApPyBcIntcIiAoIGNsYXNzQ29uc3RydWN0b3IgfCBjbGFzc01ldGhvZCB8IGNsYXNzRmllbGQgKSogXCJ9XCIgO1xuXG5cbiAgY2xhc3NDb25zdHJ1Y3RvciAgOjo9ICBcImNvbnN0cnVjdG9yXCIgZnVuY3Rpb25Cb2R5IDtcblxuXG4gIGNsYXNzTWV0aG9kICAgICAgIDo6PSAgXCJzdGF0aWNcIj8gbmFtZSBmdW5jdGlvbkJvZHkgO1xuXG5cbiAgY2xhc3NGaWVsZCAgICAgICAgOjo9ICBcInN0YXRpY1wiPyBuYW1lIFwiPVwiIGV4cHJlc3Npb24uLi4gXCI7XCIgO1xuXG5cbiAgdmFyICAgICAgICAgICAgICAgOjo9ICB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gfCBkZXN0cnVjdHVyZSBcIj1cIiBleHByZXNzaW9uIDtcblxuXG4gIGxldCAgICAgICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IHwgZGVzdHJ1Y3R1cmUgXCI9XCIgZXhwcmVzc2lvbiA7XG5cblxuICBjb25zdCAgICAgICAgICAgICA6Oj0gICggdmFyaWFibGUgfCBkZXN0cnVjdHVyZSApIFwiPVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdHJ5ICAgICAgICAgICAgICAgOjo9ICBcInRyeVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgY2F0Y2ggICAgICAgICAgICAgOjo9ICBcImNhdGNoXCIgXCIoXCIgW2lkZW50aWZpZXJdIFwiKVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgZmluYWxseSAgICAgICAgICAgOjo9ICBcImZpbmFsbHlcIiBcIntcIiBzdGF0ZW1lbnQrIFwifVwiIDtcblxuXG4gIGNhc2UgICAgICAgICAgICAgIDo6PSAgXCJjYXNlXCIgZXhwcmVzc2lvbiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG5cbiAgZGVmYXVsdENhc2UgICAgICAgOjo9ICBcImRlZmF1bHRcIiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG5cbiAgaW5pdGlhbGlzZXIgICAgICAgOjo9ICBleHByZXNzaW9uIHwgXCJ2YXJcIiB2YXIgKCBcIixcIiB2YXIgKSogfCBcImxldFwiIGxldCAoIFwiLFwiIGxldCApKiA7XG5cblxuICBkZXN0cnVjdHVyZSAgICAgICA6Oj0gIFwiW1wiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyAoIFwiLFwiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyApKiBcIl1cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICggXCIsXCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICkqIFwifVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGV4cHJlc3Npb24gICAgICAgIDo6PSAganN4XG5cbiAgICAgICAgICAgICAgICAgICAgICB8ICBqc29uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGFycm93RnVuY3Rpb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgdGVtcGxhdGVMaXRlcmFsXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGFub255bW91c0Z1bmN0aW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgKCBwcm9wZXJ0eSAoIFwiLFwiIHByb3BlcnR5ICkqICk/IFwifVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiW1wiICggZXhwcmVzc2lvbiAoIFwiLFwiIGV4cHJlc3Npb24gKSogXCIsXCI/ICk/IFwiXVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwidHlwZW9mXCIgKCBleHByZXNzaW9uIHwgKCBcIihcIiBleHByZXNzaW9uIFwiKVwiKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwidm9pZFwiICggZXhwcmVzc2lvbiB8ICggXCIoXCIgZXhwcmVzc2lvbiBcIilcIikgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIm5ld1wiIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIihcIiBleHByZXNzaW9ucz8gXCIpXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW29wZXJhdG9yXTxOT19XSElURVNQQUNFPmV4cHJlc3Npb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbjxOT19XSElURVNQQUNFPiggKCBcIi5cIjxOT19XSElURVNQQUNFPm5hbWUgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiW1wiIGV4cHJlc3Npb25zIFwiXVwiIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIihcIiBleHByZXNzaW9ucz8gXCIpXCIgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZW1wbGF0ZUxpdGVyYWxcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgW29wZXJhdG9yXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24gKCAoIFtvcGVyYXRvcl0gZXhwcmVzc2lvbiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiP1wiIGV4cHJlc3Npb24gXCI6XCIgZXhwcmVzc2lvbiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiaW5zdGFuY2VvZlwiIGV4cHJlc3Npb24gKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImluXCIgZXhwcmVzc2lvbiApIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl1cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGVcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgcHJpbWl0aXZlXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGltcG9ydE1ldGFcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcInN1cGVyXCIgfCBcInRoaXNcIiB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgfCBcInVuZGVmaW5lZFwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGpzeCAgICAgICAgICAgICAgIDo6PSAganN4Q29tcGxldGVUYWcgfCBqc3hTdGFydFRhZyAoIGpzeCB8ICggXCJ7XCIgZXhwcmVzc2lvbj8gXCJ9XCIgKSB8IHN0cmluZyApKiBqc3hFbmRUYWcgO1xuXG5cbiAganN4Q29tcGxldGVUYWcgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAganN4U3RhcnRUYWcgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICBqc3hFbmRUYWcgICAgICAgICA6Oj0gIFwiPC9cIjxOT19XSElURVNQQUNFPm5hbWUgXCI+XCIgO1xuXG5cbiAganN4QXR0cmlidXRlICAgICAgOjo9ICBuYW1lICggPE5PX1dISVRFU1BBQ0U+XCI9XCIgKCAoIDxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gKSB8ICggPE5PX1dISVRFU1BBQ0U+XCJ7XCIgZXhwcmVzc2lvbiBcIn1cIiApICkgKT8gO1xuXG5cbiAganNvbiAgICAgICAgICAgICAgOjo9ICBqc29uQXJyYXkgfCBqc29uT2JqZWN0IDtcblxuXG4gIGpzb25BcnJheSAgICAgICAgIDo6PSAgXCJbXCIgKCBqc29uRWxlbWVudCAoIFwiLFwiIGpzb25FbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gIGpzb25PYmplY3QgICAgICAgIDo6PSAgXCJ7XCIgKCBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGpzb25FbGVtZW50ICggXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uRWxlbWVudCApKiApPyBcIn1cIiA7XG5cblxuICBqc29uRWxlbWVudCAgICAgICA6Oj0gIGpzb24gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gIGFycm93RnVuY3Rpb24gICAgIDo6PSAgXCIoXCIgYXJndW1lbnRzPyBcIilcIiBcIj0+XCIgKCBleHByZXNzaW9uIHwgKCBcIntcIiBzdGF0ZW1lbnQqIFwifVwiICkgKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgdGVtcGxhdGVMaXRlcmFsICAgOjo9ICBcIlxcYFwiICggKCBcIlxcJHtcIiBleHByZXNzaW9uPyBcIn1cIiApIHwgc3RyaW5nICkqIFwiXFxgXCIgO1xuXG5cbiAgc3RyaW5nICAgICAgICAgICAgOjo9ICAoIFtudW1iZXJdIHwgW3NwZWNpYWxdIHwgW29wZXJhdG9yXXwgW2tleXdvcmRdIHwgW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgcHJvcGVydHkgICAgICAgICAgOjo9ICAoICggKCBuYW1lIHwgW3N0cmluZy1saXRlcmFsXSApIFwiOlwiIGV4cHJlc3Npb24gKSB8IHZhcmlhYmxlICkgO1xuXG5cbiAgaW1wb3J0TWV0YSAgICAgICAgOjo9ICBcImltcG9ydFwiPE5PX1dISVRFU1BBQ0U+XCIuXCI8Tk9fV0hJVEVTUEFDRT5cIm1ldGFcIiA7XG5cblxuICBleHByZXNzaW9ucyAgICAgICA6Oj0gIGV4cHJlc3Npb24gKCBcIixcIiBleHByZXNzaW9uICkqIDtcblxuXG4gIGFyZ3VtZW50cyAgICAgICAgIDo6PSAgc3ByZWFkQXJndW1lbnQgfCAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogKCBcIixcIiBzcHJlYWRBcmd1bWVudCApPyApIDtcblxuXG4gIGZpZWxkcyAgICAgICAgICAgIDo6PSAgbmFtZSAoIFwiOlwiIG5hbWUgKT8gKCBcIixcIiBuYW1lICggXCI6XCIgbmFtZSApPyApKiA7XG5cblxuICBuYW1lcyAgICAgICAgICAgICA6Oj0gIG5hbWUgKCBcImFzXCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcImFzXCIgbmFtZSApPyApKiA7XG5cblxuICBzcHJlYWRBcmd1bWVudCAgICA6Oj0gIFwiLi4uXCI8Tk9fV0hJVEVTUEFDRT52YXJpYWJsZSA7XG5cbiAgXG4gIGFyZ3VtZW50ICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IDtcblxuXG4gIHZhcmlhYmxlICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGxhYmVsICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIG5hbWUgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGVycm9yLiAgICAgICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5sZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxucnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSmF2YVNjcmlwdFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEphdmFTY3JpcHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJibmYiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJDb21tb25QYXJzZXIiLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbVJBOzs7ZUFBcUJBOzs7OEJBalJRO3VDQUVVO0FBRXZDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUUsR0FBR0MsNkJBQWU7QUFFekQsTUFBTUMsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxUWIsQ0FBQztBQUVELElBQUlDLFFBQVFKLGFBQWFHO0FBRXpCQyxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO0FBRTVCLE1BQU1MLHlCQUF5Qk8sMEJBQVk7SUFDeEQsT0FBT0gsTUFBTUEsSUFBSTtJQUVqQixPQUFPSSxjQUFjO1FBQUUsT0FBT04sZ0JBQWdCRixrQkFBa0JLO0lBQVE7SUFFeEUsT0FBT0ksVUFBVUosS0FBSyxFQUFFO1FBQ3RCQSxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO1FBRTNDLE9BQU9FLDBCQUFZLENBQUNFLFNBQVMsQ0FBQ1Qsa0JBQWtCSztJQUFRO0FBQzVEIn0=