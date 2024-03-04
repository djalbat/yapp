"use strict";

import { Query } from "occam-query";

import ErrorToken from "./token/significant/error";

const terminalNodeQuery = Query.fromExpression("//@*"),
      errorTerminalNodeQuery = Query.fromExpression("//error/@*");

class Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(tokens, node, (content) => ErrorToken, errorTerminalNodeQuery);
    }
  }

  replaceNonTerminalNodesSignificantTokens(tokens, node, callback, ...nonTerminalNodeQueries) {
    nonTerminalNodeQueries.forEach((nonTerminalNodeQuery) => {
      const nonTerminalNodes = nonTerminalNodeQuery.execute(node);

      nonTerminalNodes.forEach((nonTerminalNode) => this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback));
    });
  }

  replaceTerminalNodesSignificantToken(tokens, node, callback, ...terminalNodeQueries) {
    const contents = [];

    terminalNodeQueries.forEach((terminalNodeQuery) => {
      const terminalNodes = terminalNodeQuery.execute(node);

      terminalNodes.forEach((terminalNode) => {
        const content = this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);

        if (content !== null) {
          contents.push(content);
        }
      });
    });

    return contents;
  }

  replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
    const terminalNodes = terminalNodeQuery.execute(nonTerminalNode);

    terminalNodes.forEach((terminalNode) => this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback));
  }

  replaceTerminalNodeSignificantToken(terminalNode, tokens, callback) {
    let significantToken;

    significantToken = terminalNode.getSignificantToken();

    if (significantToken === null) {
      return null;
    }

    const endOfLineToken = significantToken.isEndOfLineToken();

    if (endOfLineToken) {
      return null;
    }

    const content = significantToken.getContent(),
          index = tokens.indexOf(significantToken),
          Token = callback(content); ///

    if (Token === null) {
      return null;
    }

    significantToken = Token.fromContent(content);

    const start = index,  ///
          deleteCount = 1;

    tokens.splice(start, deleteCount, significantToken);

    terminalNode.setSignificantToken(significantToken);

    return content;
  }

  static fromNothing(Class) { return new Class(); }
}

export default Processor;
