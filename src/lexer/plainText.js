"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineNonSignificantToken } from "occam-lexers";

const entries = [
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class PlainTextLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(PlainTextLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainTextLexer, entries); }
}
