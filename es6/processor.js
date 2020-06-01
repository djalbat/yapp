"use strict";

import { queryUtilities } from "occam-dom";

import ErrorOverlayToken from "./token/overlay/error";

const { queryByExpression } = queryUtilities;

class Processor {
  overlayTokenMap = {} ;

  OverlayTokenMap = {
    "//error/@*": ErrorOverlayToken
  };

  getTokens(tokens) {
    tokens = (tokens !== null) ?
               tokens.map((token, index) => this.overlayTokenMap[index] || token) : ///
                 null;

    return tokens;
  }

  process(tokens, node) {
    if (node !== null) {
      this.resetOverlayTokenMap();

      this.overlayTokens(tokens, node);
    }
  }

  overlayTokens(tokens, node) {
    const queryExpressions = Object.keys(this.OverlayTokenMap);

    queryExpressions.forEach((queryExpression) => {
      const nodes = queryByExpression(node, queryExpression),
            OverlayToken = this.OverlayTokenMap[queryExpression];

      nodes.forEach((node) => {
        let significantToken;

        significantToken = node.getSignificantToken();

        const overlaidToken = significantToken, ///
              overlaidTokenIndex = tokens.indexOf(overlaidToken),
              overlayTokenIndex = overlaidTokenIndex,  ///
              overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);

        significantToken = overlayToken;  ///

        node.setSignificantToken(significantToken);

        this.overlayTokenMap[overlayTokenIndex] = overlayToken;
      });
    });
  }

  resetOverlayTokenMap() {
    this.overlayTokenMap = {};
  }

  static fromNothing(Class ) { return new Class(); }
}

export default Processor;
