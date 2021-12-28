"use strict";

import { CommonLexer } from "occam-lexers";

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

export default class JSONLexer extends CommonLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static fromEntries(entries) { return CommonLexer.fromEntries(JSONLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(JSONLexer); }
}
