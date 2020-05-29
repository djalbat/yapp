"use strict";

import OverlayToken from "../../token/overlay";

import { METHOD_TOKEN_TYPE } from "../../tokenTypes";

const type = METHOD_TOKEN_TYPE;  ///

export default class MethodOverlayToken extends OverlayToken {
  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          methodToken = OverlayToken.fromContentTypeAndOverlaidToken(MethodOverlayToken, content, type, overlaidToken);

    return methodToken;
  }
}
