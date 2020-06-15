"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import JSXToken from "../token/significant/jsx";
import ErrorToken from "../token/significant/error";
import StringToken from "../token/significant/string";
import VariableToken from "../token/significant/variable";
import ArgumentToken from "../token/significant/argument";

import { VARIABLE_TYPE, TEMPLATE_LITERAL_DELIMITER_CONTENT } from "../constants";

const errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpression("//jsx"),
      argumentTerminalNodeQuery = Query.fromExpression("//argument/@*"),
      variableTerminalNodeQuery = Query.fromExpression("//variable/@*"),
      functionNonTerminalNodeQuery = Query.fromExpression("//function"),
      varDeclarationTerminalNodeQuery = Query.fromExpression("//varDeclaration//variable[0]/@*"),
      letDeclarationTerminalNodeQuery = Query.fromExpression("//letDeclaration//variable[0]/@*"),
      constDeclarationTerminalNodeQuery = Query.fromExpression("//constDeclaration//variable[0]/@*"),
      templateLiteralStringTerminalNodeQuery = Query.fromExpression("//templateLiteral/string/@*"),
      templateLiteralDelimiterTerminalNodeQuery = Query.fromExpression("//templateLiteral/@delimiter"),
      destructuredConstDeclarationTerminalNodeQuery = Query.fromExpression("//constDeclaration//destructure/variable/@*");

export default class JavaScriptProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      const functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => ErrorToken, errorTerminalNodeQuery);

      this.replaceNonTerminalNodesSignificantTokens(tokens, node, (content, type) => (type === VARIABLE_TYPE) ? null : JSXToken, jsxNonTerminalNodeQuery, );

      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => StringToken, templateLiteralStringTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content, type) => (content === TEMPLATE_LITERAL_DELIMITER_CONTENT) ? StringToken : null, templateLiteralDelimiterTerminalNodeQuery);

      functionNonTerminalNodes.forEach((functionNonTerminalNode) => {
        const variableNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content, type) => VariableToken, varDeclarationTerminalNodeQuery, letDeclarationTerminalNodeQuery, constDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery),
              argumentNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content, type) => ArgumentToken, argumentTerminalNodeQuery);

        this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content, type) => {
          let Token = null;

          const variableName = content, ///
                variableNamesIncludesVariableName = variableNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

          if (false) {
            ///
          } else if (variableNamesIncludesVariableName) {
            Token = VariableToken;
          } else if (argumentNamesIncludesVariableName) {
            Token = ArgumentToken;
          }

          return Token;
        }, variableTerminalNodeQuery);
      });
    }
  }

  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
