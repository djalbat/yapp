"use strict";

import { queryUtilities } from "occam-dom";

import ErrorOverlayToken from "./token/overlay/error";

const { queryByExpression } = queryUtilities;

class Model {
  overlayTokenMap = {} ;

  OverlayTokenMap = {
    "//error/@*": ErrorOverlayToken
  };

  constructor(lexer, parser, tokens, node) {
    this.lexer = lexer;
    this.parser = parser;
    this.tokens = tokens;
    this.node = node;
  }

  getLanguage() {
    return this.language;
  }

  getTokens() {
    const tokens = this.tokens.map((token, index) => this.overlayTokenMap[index] || token); ///

    return tokens;
  }

  getNode() {
    return this.node;
  }

  setLexer(lexer) {
    this.lexer = lexer;
  }

  setParser(parser) {
    this.parser = parser;
  }

  update(content) {
    this.tokens = this.lexer.tokenise(content);

    this.node = this.parser.parse(this.tokens);

    if (this.node !== null) {
      this.resetOverlayTokenMap();

      // this.overlayTokens();
    }
  }

  overlayTokens() {
    const queryExpressions = Object.keys(this.OverlayTokenMap);

    queryExpressions.forEach((queryExpression) => {
      const nodes = queryByExpression(this.node, queryExpression),
            OverlayToken = this.OverlayTokenMap[queryExpression];

      nodes.forEach((node) => {
        const significantToken = node.getSignificantToken(),
              overlaidToken = significantToken, ///
              overlaidTokenIndex = this.tokens.indexOf(overlaidToken),
              overlayTokenIndex = overlaidTokenIndex,  ///
              overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);

        this.overlayTokenMap[overlayTokenIndex] = overlayToken;
      });
    });
  }

  resetOverlayTokenMap() {
    this.overlayTokenMap = {};
  }

  static fromLexerAndParser(Class, lexer, parser) {
    const tokens = null,
          node = null,
          model = new Class(lexer, parser, tokens, node);

    return model;
  }
}

export default Model;
