"use strict";

import { Query } from "occam-query";
import { characters } from "necessary";

import Processor from "../processor";
import ErrorToken from "../token/significant/error";
import StringToken from "../token/significant/string";
import VariableToken from "../token/significant/variable";
import ArgumentToken from "../token/significant/argument";
import TagNameJSXToken from "../token/significant/jsx/tagName";
import AttributeNameJSXToken from "../token/significant/jsx/attributeName";

const errorTerminalNodeQuery = Query.fromExpressionString("/*/error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpressionString("//jsx"),
      variableTerminalNodeQuery = Query.fromExpressionString("//variable/@*"),
      jsxTagNameTerminalNodeQuery = Query.fromExpressionString("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"),
      functionNonTerminalNodeQuery = Query.fromExpressionString("//functionBody|arrowFunction"),
      argumentVariableTerminalNodeQuery = Query.fromExpressionString("//argument/variable/@*"),
      jsxTagAttributeNameTerminalNodeQuery = Query.fromExpressionString("//jsxAttribute/name/@*"),
      variableDeclarationTerminalNodeQuery = Query.fromExpressionString("//var|let|const/variable/@*"),
      templateLiteralStringTerminalNodeQuery = Query.fromExpressionString("//templateLiteral/string/@*"),
      templateLiteralDelimiterTerminalNodeQuery = Query.fromExpressionString("//templateLiteral/@delimiter"),
      destructuredConstDeclarationTerminalNodeQuery = Query.fromExpressionString("//const/destructure/variable/@*");

const { BACKTICK_CHARACTER } = characters;

export default class JavaScriptProcessor extends Processor {
  process(tokens, node) {
    if (node !== null) {
      const jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node),
            functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => ErrorToken, errorTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => StringToken, templateLiteralStringTerminalNodeQuery);

      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => (content === BACKTICK_CHARACTER) ? StringToken : null, templateLiteralDelimiterTerminalNodeQuery);

      jsxNonTerminalNodes.forEach((jsxNonTerminalNode) => {
        this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, (content) => TagNameJSXToken, jsxTagNameTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, (content) => AttributeNameJSXToken, jsxTagAttributeNameTerminalNodeQuery);
      });

      functionNonTerminalNodes.forEach((functionNonTerminalNode) => {
        const argumentNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content) => ArgumentToken, argumentVariableTerminalNodeQuery),
              variableNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content) => VariableToken, variableDeclarationTerminalNodeQuery,
                                                                                                                                     destructuredConstDeclarationTerminalNodeQuery);

        this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, (content) => {
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
