"use strict";

import { CommonLexer,
         WhitespaceToken,
         EndOfLineNonSignificantToken,
         CStyleSingleLineCommentToken,
         SinglyQuotedStringLiteralToken,
         DoublyQuotedStringLiteralToken,
         CStyleEndOfMultiLineCommentToken,
         CStyleStartOfMultiLineCommentToken,
         CStyleMiddleOfMultiLineCommentToken,
         EndOfLineCommentNonSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class JavaScriptLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken; ///

  static SingleLineCommentToken = CStyleSingleLineCommentToken; ///

  static EndOfMultiLineCommentToken = CStyleEndOfMultiLineCommentToken; ///

  static StartOfMultiLineCommentToken = CStyleStartOfMultiLineCommentToken; ///

  static MiddleOfMultiLineCommentToken = CStyleMiddleOfMultiLineCommentToken; ///

  static SinglyQuotedStringLiteralToken = SinglyQuotedStringLiteralToken;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(JavaScriptLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(JavaScriptLexer, entries); }
}
