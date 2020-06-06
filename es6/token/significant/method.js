"use strict";

import { SignificantToken } from "occam-lexers";

import { METHOD_TOKEN_TYPE } from "../../tokenTypes";

const type = METHOD_TOKEN_TYPE;  ///

export default class MethodToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(MethodToken, content, type); }
}
