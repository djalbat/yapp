"use strict";

import Document from "../document";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";

import { Query } from "occam-dom";

import JSXOverlayToken from "../token/overlay/jsx";

import { JAVASCRIPT_LANGUAGE } from "../constants";

const jsxQuery = Query.fromExpression("//jsx");

export default class JavaScriptDocument extends Document {
  language = JAVASCRIPT_LANGUAGE;

  static Lexer = JavaScriptLexer;

  static Parser = JavaScriptParser;

  postProcess() {
    const node = this.getNode(),
          tokens = this.getTokens(),
          jsxNodes = jsxQuery.execute(node);

    jsxNodes.forEach((jsxNode) => {
      const jsxNodeFirstSignificantToken = jsxNode.getFirstSignificantToken(),
            jsxNodeLastSignificantToken = jsxNode.getLastSignificantToken(),
            firstJSXToken = jsxNodeFirstSignificantToken, ///
            lastJSXToken = jsxNodeLastSignificantToken,
            firstJSXTokenIndex = tokens.indexOf(firstJSXToken),
            lastJSXTokenIndex = tokens.indexOf(lastJSXToken);

      for (let jsxTokenIndex = firstJSXTokenIndex; jsxTokenIndex <= lastJSXTokenIndex; jsxTokenIndex++) {
        const jsxToken = tokens[jsxTokenIndex],
              overlaidToken = jsxToken, ///
              overlayTokenIndex = jsxTokenIndex,  ///
              jsxOverlayToken = JSXOverlayToken.fromOverlaidToken(overlaidToken);

        this.overlayTokenMap[overlayTokenIndex] = jsxOverlayToken;
      }
    });
  }

  static fromNothing() { return Document.fromNothing(JavaScriptDocument); }
}
