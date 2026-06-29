"use strict";

const bnf = `

  json     ::=  element error* 
  
             |  error+ 
                               
             ;


  element  ::=  array | object | [string-literal] | [number] | "true" | "false" | "null" ;


  object   ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;

  
  array    ::=  "[" ( element ( "," element )* )? "]" ;


  error.   ::=  . ;

`;

export default bnf;
