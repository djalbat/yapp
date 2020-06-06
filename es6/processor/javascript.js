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
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, (content) => ErrorToken.fromContent(content), tokens, node);

      this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, (content) => JSXToken.fromContent(content), tokens, node);

      const functionNodes = functionNonTerminalNodeQuery.execute(node);

      functionNodes.forEach((functionNode) => {
        const argumentNames = this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, (content) => ArgumentToken.fromContent(content), tokens, functionNode);

        this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, (content) => {
          const variableName = content, ///
                argumentNamesIncludesVariableName = argumentNames.includes(variableName),
                Token = (argumentNamesIncludesVariableName) ?
                          ArgumentToken :
                            VariableToken,
                token = Token.fromContent(content);

          return token;
        }, tokens, functionNode);
      });
    }
  }

  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
