"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import JSXToken from "../token/significant/jsx";
import ErrorToken from "../token/significant/error";
import MethodToken from "../token/significant/method";
import VariableToken from "../token/significant/variable";
import ArgumentToken from "../token/significant/argument";

const errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpression("//jsx"),
      argumentTerminalNodeQuery = Query.fromExpression("//argument/@*"),
      variableTerminalNodeQuery = Query.fromExpression("//variable/@*"),
      functionNonTerminalNodeQuery = Query.fromExpression("//function");

export default class JavaScriptProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, ErrorToken, tokens, node);

      this.replaceNonTerminalNodesTokens(jsxNonTerminalNodeQuery, JSXToken, tokens, node);
    }
  }

  // overlayJSXNOdes(node, tokens) {
  //   const jsxNodes = jsxNonTerminalNodeQuery.execute(node);
  //
  //   jsxNodes.forEach((jsxNode) => {
  //     const jsxNodeFirstSignificantToken = jsxNode.getFirstSignificantToken(),
  //           jsxNodeLastSignificantToken = jsxNode.getLastSignificantToken(),
  //           firstJSXToken = jsxNodeFirstSignificantToken, ///
  //           lastJSXToken = jsxNodeLastSignificantToken,
  //           firstJSXTokenIndex = tokens.indexOf(firstJSXToken),
  //           lastJSXTokenIndex = tokens.indexOf(lastJSXToken);
  //
  //     for (let jsxTokenIndex = firstJSXTokenIndex; jsxTokenIndex <= lastJSXTokenIndex; jsxTokenIndex++) {
  //       const jsxToken = tokens[jsxTokenIndex],
  //             overlaidToken = jsxToken, ///
  //             overlayTokenIndex = jsxTokenIndex,  ///
  //             jsxOverlayToken = JSXOverlayToken.fromOverlaidToken(overlaidToken);
  //
  //       this.overlayTokenMap[overlayTokenIndex] = jsxOverlayToken;
  //     }
  //   });
  // }

  // overlayFunctionNodes(node, tokens) {
  //   const functionNodes = functionNonTerminalNodeQuery.execute(node);
  //
  //   functionNodes.forEach((functionNode) => {
  //     const argumentNodes = argumentTerminalNodeQuery.execute(functionNode),
  //           variableNodes = variableTerminalNodeQuery.execute(functionNode),
  //           argumentNames = this.overlayArgumentNodes(argumentNodes, tokens);
  //
  //     this.overlayVariableNodes(variableNodes, argumentNames, tokens);
  //   });
  // }

  // overlayArgumentNodes(argumentTerminalNodes, tokens) {
  //   const argumentNames = argumentTerminalNodes.map((argumentTerminalNode) => {
  //     const significantToken = argumentTerminalNode.getSignificantToken(),
  //           content = significantToken.getContent(),
  //           argumentName = content, ///
  //           overlaidToken = significantToken, ///
  //           overlaidTokenIndex = tokens.indexOf(overlaidToken),
  //           overlayTokenIndex = overlaidTokenIndex,  ///
  //           argumentOverlayToken = ArgumentOverlayToken.fromOverlaidToken(overlaidToken);
  //
  //     this.overlayTokenMap[overlayTokenIndex] = argumentOverlayToken;
  //
  //     return argumentName;
  //   });
  //
  //   return argumentNames;
  // }

  // overlayVariableNodes(variableTerminalNodes, argumentNames, tokens) {
  //   variableTerminalNodes.forEach((variableTerminalNode) => {
  //     const significantToken = variableTerminalNode.getSignificantToken(),
  //           content = significantToken.getContent(),
  //           name = content, ///
  //           overlaidToken = significantToken, ///
  //           overlaidTokenIndex = tokens.indexOf(overlaidToken), ///
  //           overlayTokenIndex = overlaidTokenIndex,  ///
  //           variableOverlayToken = (argumentNames.includes(name)) ?
  //                                     ArgumentOverlayToken.fromOverlaidToken(overlaidToken) :
  //                                       VariableOverlayToken.fromOverlaidToken(overlaidToken);
  //
  //     this.overlayTokenMap[overlayTokenIndex] = variableOverlayToken;
  //   });
  // }

  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
