"use strict";

import YappLexer from "../lexer/yapp";
import { WhitespaceToken, EndOfLineNonSignificantToken, DoublyQuotedStringLiteralToken, EndOfLineCommentNonSignificantToken } from "occam-lexers";

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

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = EndOfLineCommentNonSignificantToken; ///

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return YappLexer.fromEntries(XMLLexer, entries); }

  static fromRules(rules) { return YappLexer.fromRules(XMLLexer, rules); }

  static fromEntries(entries) { return YappLexer.fromEntries(XMLLexer, entries); }
}
