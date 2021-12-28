"use strict";

import { CommonLexer } from "occam-lexers";

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

export default class XMLLexer extends CommonLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromEntries(entries) { return CommonLexer.fromEntries(XMLLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(XMLLexer); }
}
