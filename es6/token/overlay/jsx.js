"use strict";

import OverlayToken from "../../token/overlay";

import { JSX_TOKEN_TYPE } from "../../tokenTypes";

const type = JSX_TOKEN_TYPE;  ///

export default class JSXOverlayToken extends OverlayToken {
  static type = type;

  static fromOverlaidToken(overlaidToken) {
    const content = overlaidToken.getContent(),
          jsxToken = OverlayToken.fromContentTypeAndOverlaidToken(JSXOverlayToken, content, type, overlaidToken);

    return jsxToken;
  }
}
