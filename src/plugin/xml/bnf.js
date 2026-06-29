"use strict";

const bnf = `

  xml             ::=  declaration? comment* ( simpleElement | complexElement ) comment* error*
  
                    |  error+
                               
                    ;


  declaration     ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;


  element         ::=  comment | simpleElement | complexElement ;
                               
                               
  comment         ::=  "<!--" text* "-->" ;


  simpleElement   ::=  completeTag ;


  complexElement  ::=  startTag ( element | text )* endTag ;


  completeTag     ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;


  startTag        ::=  "<"<NO_WHITESPACE>name attribute* ">" ;


  endTag          ::=  "</"<NO_WHITESPACE>name ">" ;
  

  attribute       ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


  text            ::=  ( [identifier] | [string-literal] | [unassigned] )+ ;
  
  
  name            ::=  [identifier] ;


  error.          ::=  . ;

`;

export default bnf;
