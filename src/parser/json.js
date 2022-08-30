"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const bnf = `

  document                   ::=  json error* | error+ ;


  json                       ::=  array | object ;


  array                      ::=  "[" ( element ( "," element )* )? "]" ;


  object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

  
  element                    ::=  json |  [string-literal] | [number] | "true" | "false" | "null" ;


  error                      ::=  . ;

      `,
      rules = rulesFromBNF(bnf);

export default class JSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(JSONParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(JSONParser, rules); }
}
