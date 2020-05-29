"use strict";

import Model from "../model";
import JavaScriptLexer from "../lexer/javascript";
import JavaScriptParser from "../parser/javascript";

import { Query } from "occam-dom";

import JSXOverlayToken from "../token/overlay/jsx";
import MethodOverlayToken from "../token/overlay/method";
import ArgumentOverlayToken from "../token/overlay/argument";
import VariableOverlayToken from "../token/overlay/variable";

import { JAVASCRIPT_LANGUAGE } from "../constants";

const jsxQuery = Query.fromExpression("//jsx"),
      methodQuery = Query.fromExpression("//method/@*"),
      functionQuery = Query.fromExpression("//function"),
      argumentQuery = Query.fromExpression("//argument/@*"),
      variableQuery = Query.fromExpression("//variable/@*");

export default class JavaScriptModel extends Model {
  language = JAVASCRIPT_LANGUAGE;

  postProcess() {
    const node = this.getNode(),
          tokens = this.getTokens(),
          jsxNodes = jsxQuery.execute(node),
          functionNodes = functionQuery.execute(node);

    this.postProcessJSXNOdes(jsxNodes, tokens);

    this.postProcessFunctionNodes(functionNodes, tokens);
  }

  postProcessJSXNOdes(jsxNodes, tokens) {
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

  postProcessFunctionNodes(functionTerminalNodes, tokens) {
    functionTerminalNodes.forEach((functionTerminalNode) => {
      const methodNodes = methodQuery.execute(functionTerminalNode),
            argumentNodes = argumentQuery.execute(functionTerminalNode),
            variableNodes = variableQuery.execute(functionTerminalNode),
            argumentNames = this.postProcessArgumentNodes(argumentNodes, tokens);

      this.postProcessMethodNodes(methodNodes, tokens);

      this.postProcessVariableNodes(variableNodes, argumentNames, tokens);
    });
  }

  postProcessMethodNodes(methodTerminalNodes, tokens) {
    methodTerminalNodes.forEach((methodTerminalNode) => {
      const significantToken = methodTerminalNode.getSignificantToken(),
            overlaidToken = significantToken, ///
            overlaidTokenIndex = tokens.indexOf(overlaidToken), ///
            overlayTokenIndex = overlaidTokenIndex,  ///
            methodOverlayToken = MethodOverlayToken.fromOverlaidToken(overlaidToken);

      this.overlayTokenMap[overlayTokenIndex] = methodOverlayToken;
    });
  }

  postProcessArgumentNodes(argumentTerminalNodes, tokens) {
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

  postProcessVariableNodes(variableTerminalNodes, argumentNames, tokens) {
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
