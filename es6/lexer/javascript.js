"use strict";

import { CommonLexer, EndOfLineNonSignificantToken } from "occam-lexers";

import SingleLineCommentToken from "../token/nonSignificant/comment/singleLine";
import EndOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/endOf";
import StartOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/startOf";
import MiddleOfMultiLineCommentToken from "../token/nonSignificant/comment/multiLine/middleOf";

const entries = [

  {
    "special": "^;"
  },
  {
    "keyword": "^import"
  },
  {
    "unassigned": "^[^\\s]+"
  }

];

export default class JavaScriptLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return super.tokeniseEndOfLines(content, EndOfLineNonSignificantToken); }

  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) {
    const singleLineCommentToken = inComment ?
                                     null :
                                       SingleLineCommentToken.match(content);

    return singleLineCommentToken;
  }

  matchMultiLineCommentInComment(content, inComment) {
    const multiLinCommentToken = inComment ?
                                   EndOfMultiLineCommentToken.match(content) || MiddleOfMultiLineCommentToken.match(content) :
                                    null;

    return multiLinCommentToken;
  }

  matchMultiLineCommentNotInComment(content, inComment) {
    const multiLinCommentToken = inComment ?
                                   null :
                                     StartOfMultiLineCommentToken.match(content);

    return multiLinCommentToken;
  }

  matchRegularExpression(content) { return null; }

  static entries = entries;

  static fromEntries(entries) { return CommonLexer.fromEntries(JavaScriptLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(JavaScriptLexer); }
}
