"use strict";

import { Query } from "occam-dom";

import ErrorToken from "./token/significant/error";

const terminalNodeQuery = Query.fromExpression("//@*");
const errorTerminalNodeQuery = Query.fromExpression("//error/@*");

class Processor {
  process(tokens, node) {
    if (node !== null) {
      this.replaceTerminalNodesSignificantToken(errorTerminalNodeQuery, ErrorToken, tokens, node);
    }
  }

  replaceNonTerminalNodesSignificantTokens(nonTerminalNodeQuery, SignificantToken, tokens, node) {
    const nonTerminalNodes = nonTerminalNodeQuery.execute(node);

    nonTerminalNodes.forEach((nonTerminalNode) => this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, SignificantToken, tokens));
  }

  replaceNonTerminalNodeSignificantTokens(nonTerminalNode, SignificantToken, tokens) {
    const terminalNodes = terminalNodeQuery.execute(nonTerminalNode);

    terminalNodes.forEach((terminalNode) => this.replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens));
  }

  replaceTerminalNodesSignificantToken(terminalNodeQuery, SignificantToken, tokens, node) {
    const terminalNodes = terminalNodeQuery.execute(node);

    terminalNodes.forEach((terminalNode) => this.replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens));
  }

  replaceTerminalNodeSignificantToken(terminalNode, SignificantToken, tokens) {
    let significantToken;

    significantToken = terminalNode.getSignificantToken();

    if (significantToken === null) {
      return;
    }

    const endOfLineToken = significantToken.isEndOfLineToken();

    if (endOfLineToken) {
      return;
    }

    const content = significantToken.getContent(),
          index = tokens.indexOf(significantToken);

    significantToken = SignificantToken.fromContent(content); ///

    const start = index,  ///
          deleteCount = 1;

    tokens.splice(start, deleteCount, significantToken);

    terminalNode.setSignificantToken(significantToken);
  }

  static fromNothing(Class ) { return new Class(); }
}

export default Processor;
