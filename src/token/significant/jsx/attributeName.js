"use strict";

import { SignificantToken } from "occam-lexers";

import { JSX_ATTRIBUTE_NAME_TOKEN_TYPE } from "../../../tokenTypes";

const type = JSX_ATTRIBUTE_NAME_TOKEN_TYPE;  ///

export default class JSXAttributeNameToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(JSXAttributeNameToken, content, type); }
}
