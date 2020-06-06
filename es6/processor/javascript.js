"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import JSXToken from "../token/significant/jsx";
import ErrorToken from "../token/significant/error";
import VariableToken from "../token/significant/variable";
import ArgumentToken from "../token/significant/argument";

const errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpression("//jsx"),
      argumentTerminalNodeQuery = Query.fromExpression("//argument/@*"),
      variableTerminalNodeQuery = Query.fromExpression("//variable/@*"),
      functionNonTerminalNodeQuery = Query.fromExpression("//function"),
      constVariableTerminalNodeQuery = Query.fromExpression("//constDeclaration//variable[0]/@*");

export default class JavaScriptProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, (content) => ErrorToken, tokens, node);

      this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, (content) => JSXToken, tokens, node);

      const functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);

      functionNonTerminalNodes.forEach((functionNonTerminalNode) => {
        const argumentNames = this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, (content) => ArgumentToken, tokens, functionNonTerminalNode),
              constNames = this.replaceTerminalNodesSignificantToken(constVariableTerminalNodeQuery, (content) => VariableToken, tokens, functionNonTerminalNode);

        this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, (content) => {
          let Token;

          const variableName = content, ///
                constNamesIncludesVariableName = constNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

          if (false) {
            ///
          } else if (constNamesIncludesVariableName) {
            Token = VariableToken;
          } else if (argumentNamesIncludesVariableName) {
            Token = ArgumentToken;
          } else {
            Token = null;
          }

          return Token;
        }, tokens, functionNonTerminalNode);
      });
    }
  }

  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
