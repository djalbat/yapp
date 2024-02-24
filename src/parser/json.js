"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const bnf = `

  document                   ::=  element error* 
  
                               |  error+ 
                               
                               ;


  element                    ::=  array | object | [string-literal] | [number] | "true" | "false" | "null" ;


  object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

  
  array                      ::=  "[" ( element ( "," element )* )? "]" ;


  error!                     ::=  . ;

      `,
      rules = rulesFromBNF(bnf);

export default class JSONParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(JSONParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(JSONParser, rules); }
}
