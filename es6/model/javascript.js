"use strict";

import Model from "../model";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";

import { Query } from "occam-dom";

import JSXOverlayToken from "../token/overlay/jsx";
import ErrorOverlayToken from "../token/overlay/error";
import MethodOverlayToken from "../token/overlay/method";
import ArgumentOverlayToken from "../token/overlay/argument";
import VariableOverlayToken from "../token/overlay/variable";

import { JAVASCRIPT_LANGUAGE } from "../constants";

const jsxQuery = Query.fromExpression("//jsx"),
      functionQuery = Query.fromExpression("//function"),
      argumentQuery = Query.fromExpression("//argument/@*"),
      variableQuery = Query.fromExpression("//variable/@*");

export default class JavaScriptModel extends Model {
  language = JAVASCRIPT_LANGUAGE;

  OverlayTokenMap = {
    "//error/@*": ErrorOverlayToken,
    "//method/@*": MethodOverlayToken
  };

  overlayTokens() {
    super.overlayTokens();

    const node = this.getNode(),
          tokens = this.getTokens();

    this.overlayJSXNOdes(node, tokens);

    this.overlayFunctionNodes(node, tokens);
  }

  overlayJSXNOdes(node, tokens) {
    const jsxNodes = jsxQuery.execute(node);

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

  overlayFunctionNodes(node, tokens) {
    const functionNodes = functionQuery.execute(node);

    functionNodes.forEach((functionNode) => {
      const argumentNodes = argumentQuery.execute(functionNode),
            variableNodes = variableQuery.execute(functionNode),
            argumentNames = this.overlayArgumentNodes(argumentNodes, tokens);

      this.overlayVariableNodes(variableNodes, argumentNames, tokens);
    });
  }

  overlayArgumentNodes(argumentTerminalNodes, tokens) {
    const argumentNames = argumentTerminalNodes.map((argumentTerminalNode) => {
      const significantToken = argumentTerminalNode.getSignificantToken(),
            content = significantToken.getContent(),
            argumentName = content, ///
            overlaidToken = significantToken, ///
            overlaidTokenIndex = tokens.indexOf(overlaidToken), ///
            overlayTokenIndex = overlaidTokenIndex,  ///
            argumentOverlayToken = ArgumentOverlayToken.fromOverlaidToken(overlaidToken);

      this.overlayTokenMap[overlayTokenIndex] = argumentOverlayToken;

      return argumentName;
    });

    return argumentNames;
  }

  overlayVariableNodes(variableTerminalNodes, argumentNames, tokens) {
    variableTerminalNodes.forEach((variableTerminalNode) => {
      const significantToken = variableTerminalNode.getSignificantToken(),
            content = significantToken.getContent(),
            name = content, ///
            overlaidToken = significantToken, ///
            overlaidTokenIndex = tokens.indexOf(overlaidToken), ///
            overlayTokenIndex = overlaidTokenIndex,  ///
            variableOverlayToken = (argumentNames.includes(name)) ?
                                      ArgumentOverlayToken.fromOverlaidToken(overlaidToken) :
                                        VariableOverlayToken.fromOverlaidToken(overlaidToken);

      this.overlayTokenMap[overlayTokenIndex] = variableOverlayToken;
    });
  }

  static fromNothing() {
    const javaScriptLexer = JavaScriptLexer.fromNothing(),
          javaScriptParser = JavaScriptParser.fromNothing(),
          lexer = javaScriptLexer,  ///
          parser = javaScriptParser,  ///
          javaScriptModel = Model.fromLexerAndParser(JavaScriptModel, lexer, parser);

    return javaScriptModel;
  }
}
