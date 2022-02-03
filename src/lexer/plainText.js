"use strict";

import { WhitespaceToken, EndOfLineNonSignificantToken } from "occam-lexers";

import YappLexer from "../lexer/yapp";

const entries = [
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class PlainTextLexer extends YappLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

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
