"use strict";

import { CommonLexer } from "occam-lexers";

const entries = [
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class PlainTextLexer extends CommonLexer {
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

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainTextLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(PlainTextLexer); }
}
