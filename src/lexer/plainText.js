"use strict";

import YappLexer from "../lexer/yapp";

const entries = [
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class PlainTextLexer extends YappLexer {
  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  matchDoublyQuotedStringLiteral(content) { return null; }

  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return YappLexer.fromEntries(PlainTextLexer, entries); }

  static fromRules(rules) { return YappLexer.fromRules(PlainTextLexer, rules); }

  static fromEntries(entries) { return YappLexer.fromEntries(PlainTextLexer, entries); }
}
