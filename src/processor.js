"use strict";

import { Query } from "occam-query";

const terminalNodeQuery = Query.fromExpressionString("//@*");

class Processor {
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

    terminalNodes.forEach((terminalNode) => {
      this.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
    });
  }

  replaceNonTerminalNodesSignificantTokens(tokens, node, callback, ...nonTerminalNodeQueries) {
    nonTerminalNodeQueries.forEach((nonTerminalNodeQuery) => {
      const nonTerminalNodes = nonTerminalNodeQuery.execute(node);

      nonTerminalNodes.forEach((nonTerminalNode) => {
        this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
      });
    });
  }

  static fromNothing(Class) { return new Class(); }
}

export default Processor;
