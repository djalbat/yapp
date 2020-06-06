"use strict";

import { SignificantToken } from "occam-lexers";

import { ERROR_TOKEN_TYPE } from "../../tokenTypes";

const type = ERROR_TOKEN_TYPE;  ///

export default class ErrorToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(ErrorToken, content, type); }
}
