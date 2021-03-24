"use strict";

import { SignificantToken } from "occam-lexers";

import { COMMENT_TOKEN_TYPE } from "../../tokenTypes";

const type = COMMENT_TOKEN_TYPE;  ///

export default class CommentToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(CommentToken, content, type); }
}
