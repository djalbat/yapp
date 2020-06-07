"use strict";

import { CommonLexer, EndOfLineNonSignificantToken } from "occam-lexers";

const entries = [
  {
    "unassigned": "^[^\\s]+"
  }
];

export default class XMLLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return super.tokeniseEndOfLines(content, EndOfLineNonSignificantToken); }

  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  static entries = entries;

  static fromEntries(entries) { return CommonLexer.fromEntries(XMLLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(XMLLexer); }
}
