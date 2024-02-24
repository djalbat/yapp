"use strict";

import { CommonParser } from "occam-parsers";
import { parserUtilities } from "occam-parsers";

const { rulesFromBNF, parserFromRules } = parserUtilities;

const bnf = `

  document                   ::=  declaration? comment* ( simpleElement | complexElement ) comment* error*
  
                               |  error+
                               
                               ;


  declaration                ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


  element                    ::=  comment | simpleElement | complexElement ;
                               
                               
  comment                    ::=  "<!--" text* "-->" ;


  simpleElement              ::=  completeTag ;


  complexElement             ::=  startTag ( element | text )* endTag ;


  completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;


  startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;


  endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;
  

  attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


  text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;
  
  
  name                       ::=  [identifier] ;


  error!                     ::=  . ;

      `,
      rules = rulesFromBNF(bnf);

export default class XMLParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return parserFromRules(XMLParser, rules); }

  static fromRules(rules) { return CommonParser.fromRules(XMLParser, rules); }
}
