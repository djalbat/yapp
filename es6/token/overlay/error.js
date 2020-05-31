"use strict";

import OverlayToken from "../../token/overlay";

import { ERROR_TOKEN_TYPE } from "../../tokenTypes";

const type = ERROR_TOKEN_TYPE;  ///

export default class ErrorOverlayToken extends OverlayToken {
  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          errorToken = OverlayToken.fromContentTypeAndOverlaidToken(ErrorOverlayToken, content, type, overlaidToken);

    return errorToken;
  }
}