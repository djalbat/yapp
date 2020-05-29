"use strict";

import OverlayToken from "../../token/overlay";

import { ARGUMENT_TOKEN_TYPE } from "../../tokenTypes";

const type = ARGUMENT_TOKEN_TYPE;  ///

export default class ArgumentOverlayToken extends OverlayToken {
  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          argumentToken = OverlayToken.fromContentTypeAndOverlaidToken(ArgumentOverlayToken, content, type, overlaidToken);

    return argumentToken;
  }
}
