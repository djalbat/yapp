"use strict";

import { SignificantToken } from "occam-lexers";

import { JSX_TAG_NAME_TOKEN_TYPE } from "../../../tokenTypes";

const type = JSX_TAG_NAME_TOKEN_TYPE;  ///

export default class JSXTagNameToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(JSXTagNameToken, content, type); }
}
