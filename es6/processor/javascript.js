"use strict";

import { Query } from "occam-dom";

import Processor from "../processor";
import JSXToken from "../token/significant/jsx";
import ErrorToken from "../token/significant/error";
import StringToken from "../token/significant/string";
import VariableToken from "../token/significant/variable";
import ArgumentToken from "../token/significant/argument";

import { TEMPLATE_LITERAL_DELIMITER_CONTENT } from "../constants";

const errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpression("//jsx"),
      argumentTerminalNodeQuery = Query.fromExpression("//argument/@*"),
      variableTerminalNodeQuery = Query.fromExpression("//variable/@*"),
      functionNonTerminalNodeQuery = Query.fromExpression("//function"),
      variableDeclarationTerminalNodeQuery = Query.fromExpression("//varDeclaration|letDeclaration|constDeclaration//variable[0]/@*"),
      templateLiteralStringTerminalNodeQuery = Query.fromExpression("//templateLiteral/string/@*"),
      templateLiteralDelimiterTerminalNodeQuery = Query.fromExpression("//templateLiteral/@delimiter");

export default class JavaScriptProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      const functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);

      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, (content) => ErrorToken, tokens, node);

      this.replaceNonTerminalNodesSignificantTokens(jsxNonTerminalNodeQuery, (content) => JSXToken, tokens, node);

      this.replaceTerminalNodesSignificantToken(templateLiteralStringTerminalNodeQuery, (content) => StringToken, tokens, node);

      this.replaceTerminalNodesSignificantToken(templateLiteralDelimiterTerminalNodeQuery, (content) => {
        let Token = null;

        if (content === TEMPLATE_LITERAL_DELIMITER_CONTENT) {
          Token = StringToken;  ///
        }

        return Token;
      }, tokens, node);

      functionNonTerminalNodes.forEach((functionNonTerminalNode) => {
        const constNames = this.replaceTerminalNodesSignificantToken(variableDeclarationTerminalNodeQuery, (content) => VariableToken, tokens, functionNonTerminalNode),
              argumentNames = this.replaceTerminalNodesSignificantToken(argumentTerminalNodeQuery, (content) => ArgumentToken, tokens, functionNonTerminalNode);

        this.replaceTerminalNodesSignificantToken(variableTerminalNodeQuery, (content) => {
          let Token = null;

          const variableName = content, ///
                constNamesIncludesVariableName = constNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

          if (false) {
            ///
          } else if (constNamesIncludesVariableName) {
            Token = VariableToken;
          } else if (argumentNamesIncludesVariableName) {
            Token = ArgumentToken;
          }

          return Token;
        }, tokens, functionNonTerminalNode);
      });
    }
  }

  static fromNothing() { return Processor.fromNothing(JavaScriptProcessor); }
}
