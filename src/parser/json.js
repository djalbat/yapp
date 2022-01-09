"use strict";

import YappParser from "../parser/yapp";

const bnf = `

    document                   ::=  json error* | error+ ;


    json                       ::=  array | object ;


    array                      ::=  "[" ( element ( "," element )* )? "]" ;


    object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

    
    element                    ::=  json |  [string-literal] | [number] | "true" | "false" | "null" ;


    error                      ::=  . ;

`;

export default class JSONParser extends YappParser {
  static bnf = bnf;

  static fromNothing() { return YappParser.fromNothing(JSONParser); }

  static fromBNF(bnf) { return YappParser.fromBNF(JSONParser, bnf); }

  static fromRules(rules) { return YappParser.fromRules(JSONParser, rules); }
}
