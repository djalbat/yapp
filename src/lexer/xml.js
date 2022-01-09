"use strict";

import YappLexer from "../lexer/yapp";

const entries = [
  {
    "delimiter": "^(?:=|<\\?|\\?>|<\\/|\\/>|<!--|-->|<|>)"
  },
  {
    "identifier": "^[a-zA-Z]+"
  },
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class XMLLexer extends YappLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromNothing() { return YappLexer.fromEntries(XMLLexer, entries); }

  static fromRules(rules) { return YappLexer.fromRules(XMLLexer, rules); }

  static fromEntries(entries) { return YappLexer.fromEntries(XMLLexer, entries); }
}
