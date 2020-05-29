"use strict";

import OverlayToken from "../../token/overlay";

import { VARIABLE_TOKEN_TYPE } from "../../tokenTypes";

const type = VARIABLE_TOKEN_TYPE;  ///

export default class VariableOverlayToken extends OverlayToken {
  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          variableToken = OverlayToken.fromContentTypeAndOverlaidToken(VariableOverlayToken, content, type, overlaidToken);

    return variableToken;
  }
}
