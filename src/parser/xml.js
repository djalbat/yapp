"use strict";

import YappParser from "./yapp";

const bnf = `

    document                   ::=  xml error* | error+ ;


    xml                        ::=  ( preamble element* ) | element+ ;


    preamble                   ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;


    comment                    ::=  "<!--" text* "-->" ;


    completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;


    startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;


    endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;
    

    attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;
    
    
    name                       ::=  [identifier] ;


    error                      ::=  . ;

`;

export default class XMLParser extends YappParser {
  static bnf = bnf;

  static fromNothing() { return YappParser.fromNothing(XMLParser); }

  static fromBNF(bnf) { return YappParser.fromBNF(XMLParser, bnf); }

  static fromRules(rules) { return YappParser.fromRules(XMLParser, rules); }
}
