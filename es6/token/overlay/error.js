"use strict";

import OverlayToken from "../../token/overlay";

import { ERROR_TOKEN_TYPE } from "../../tokenTypes";

const type = ERROR_TOKEN_TYPE;  ///

export default class ErrorToken extends OverlayToken {
  clone(startPosition, endPosition) { return super.clone(ErrorToken, startPosition, endPosition); }

  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          errorToken = OverlayToken.fromContentTypeAndOverlaidToken(ErrorToken, content, type, overlaidToken);

    return errorToken;
  }
}
