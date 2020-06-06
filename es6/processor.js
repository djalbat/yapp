"use strict";

import { Query } from "occam-dom";

import ErrorToken from "./token/significant/error";

const terminalNodeQuery = Query.fromExpression("//@*");
const errorTerminalNodeQuery = Query.fromExpression("//error/@*");

class Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, (content) => ErrorToken, tokens, node);
    }
  }

  replaceNonTerminalNodesSignificantTokens(nonTerminalNodeQuery, callback, tokens, node) {
    const nonTerminalNodes = nonTerminalNodeQuery.execute(node);

    nonTerminalNodes.forEach((nonTerminalNode) => this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, callback, tokens));
  }

  replaceNonTerminalNodeSignificantTokens(nonTerminalNode, callback, tokens) {
    const terminalNodes = terminalNodeQuery.execute(nonTerminalNode);

    terminalNodes.forEach((terminalNode) => this.replaceTerminalNodeSignificantToken(terminalNode, callback, tokens));
  }

  replaceTerminalNodesSignificantToken(terminalNodeQuery, callback, tokens, node) {
    const contents = [],
          terminalNodes = terminalNodeQuery.execute(node);

    terminalNodes.forEach((terminalNode) => {
      const content = this.replaceTerminalNodeSignificantToken(terminalNode, callback, tokens);

      if (content !== null) {
        contents.push(content);
      }
    });

    return contents;
  }

  replaceTerminalNodeSignificantToken(terminalNode, callback, tokens) {
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

  static fromNothing(Class ) { return new Class(); }
}

export default Processor;
