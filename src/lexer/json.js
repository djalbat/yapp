"use strict";

import YappLexer from "../lexer/yapp";

const entries = [
  {
    "special": "^(?:,|\\:|\\{|\\}|\\[|\\])"
  },
  {
    "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
  },
  {
    "keyword": "^(?:null|true|false)"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class JSONLexer extends YappLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromNothing() { return YappLexer.fromEntries(JSONLexer, entries); }

  static fromRules(rules) { return YappLexer.fromRules(JSONLexer, rules); }

  static fromEntries(entries) { return YappLexer.fromEntries(JSONLexer, entries); }
}
