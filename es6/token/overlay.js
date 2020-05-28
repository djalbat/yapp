"use strict";

import { SignificantToken } from "occam-lexers";

export default class OverlayToken extends SignificantToken {
  constructor(type, content, innerHTML, significant, overlaidToken) {
    super(type, content, innerHTML, significant);

    this.overlaidToken = overlaidToken;
  }

  getOverlaidToken() {
    return this.overlaidToken;
  }

  isEqualTo(token) {
    const equalTo = (token === this.overlaidToken); ///

    return equalTo;
  }

  static fromOverlaidToken(Class, overlaidToken) {
    const { type } = Class,
          content = overlaidToken.getContent(),
          overlayToken = SignificantToken.fromContentAndType(Class, content, type, overlaidToken);

    return overlayToken;
  }

  static fromContentTypeAndOverlaidToken(Class, content, type, overlaidToken) { return SignificantToken.fromContentAndType(Class, content, type, overlaidToken); }
}
