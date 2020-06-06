"use strict";

import { SignificantToken } from "occam-lexers";

import { VARIABLE_TOKEN_TYPE } from "../../tokenTypes";

const type = VARIABLE_TOKEN_TYPE;  ///

export default class VariableToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(VariableToken, content, type); }
}
