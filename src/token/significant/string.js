"use strict";

import { SignificantToken, types } from "occam-lexers";

const { stringLiteralType } = types;

const type = stringLiteralType; ///

export default class StringToken extends SignificantToken {
  static fromContent(content) { return SignificantToken.fromContentAndType(StringToken, content, type); }
}
