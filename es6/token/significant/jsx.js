"use strict";

import { SignificantToken } from "occam-lexers";

import { JSX_TOKEN_TYPE } from "../../tokenTypes";

const type = JSX_TOKEN_TYPE;  ///

export default class JSXToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(JSXToken, content, type); }
}
