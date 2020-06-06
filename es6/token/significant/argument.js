"use strict";

import { SignificantToken } from "occam-lexers";

import { ARGUMENT_TOKEN_TYPE } from "../../tokenTypes";

const type = ARGUMENT_TOKEN_TYPE;  ///

export default class ArgumentToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(ArgumentToken, content, type); }
}
