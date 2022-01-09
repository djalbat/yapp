"use strict";

import YappParser from "./yapp";

const bnf = `

    document                   ::=  .+ ;

`;

export default class PlainTextParser extends YappParser {
  static bnf = bnf;

  static fromNothing() { return YappParser.fromNothing(PlainTextParser); }

  static fromBNF(bnf) { return YappParser.fromBNF(PlainTextParser, bnf); }

  static fromRules(rules) { return YappParser.fromRules(PlainTextParser, rules); }
}
