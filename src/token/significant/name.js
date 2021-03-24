"use strict";

import { SignificantToken } from "occam-lexers";

import { NAME_TOKEN_TYPE } from "../../tokenTypes";

const type = NAME_TOKEN_TYPE;  ///

export default class NameToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(NameToken, content, type); }
}
