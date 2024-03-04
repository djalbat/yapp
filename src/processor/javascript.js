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

const errorTerminalNodeQuery = Query.fromExpression("//error/@*"),
      jsxNonTerminalNodeQuery = Query.fromExpression("//jsx"),
      variableTerminalNodeQuery = Query.fromExpression("//variable/@*"),
      jsxTagNameTerminalNodeQuery = Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"),
      functionNonTerminalNodeQuery = Query.fromExpression("//functionBody|arrowFunction"),
      argumentVariableTerminalNodeQuery = Query.fromExpression("//argument/variable/@*"),
      jsxTagAttributeNameTerminalNodeQuery = Query.fromExpression("//jsxAttribute/name/@*"),
      variableDeclarationTerminalNodeQuery = Query.fromExpression("//var|let|const/variable/@*"),
      templateLiteralStringTerminalNodeQuery = Query.fromExpression("//templateLiteral/string/@*"),
      templateLiteralDelimiterTerminalNodeQuery = Query.fromExpression("//templateLiteral/@delimiter"),
      destructuredConstDeclarationTerminalNodeQuery = Query.fromExpression("//const/destructure/variable/@*");

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
