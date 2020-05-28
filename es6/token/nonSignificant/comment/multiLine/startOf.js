"use strict";

import { types, NonSignificantToken } from "occam-lexers"

const { startOfMultiLineCommentType } = types;

export default class StartOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(StartOfMultiLineCommentToken, startPosition, endPosition); }

  isInComment() {
    const inComment = true;

    return inComment;
  }

  static type = startOfMultiLineCommentType;

  static regularExpression = /^\/\*/;

  static match(content) { return NonSignificantToken.match(StartOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(StartOfMultiLineCommentToken, content); }
}
