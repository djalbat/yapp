"use strict";

import { SignificantToken } from "occam-lexers";

import { ATTRIBUTE_TOKEN_TYPE } from "../../tokenTypes";

const type = ATTRIBUTE_TOKEN_TYPE;  ///

export default class AttributeToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(AttributeToken, content, type); }
}
