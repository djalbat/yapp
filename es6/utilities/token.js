"use strict";

export function tokenIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
  const significantToken = terminalNode.getSignificantToken(),
        significantTokenIndex = tokens.indexOf(significantToken),
        tokenIndex = `(${significantTokenIndex})`;

  return tokenIndex;
}

export function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  const firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
        tokenIndexes = (firstSignificantTokenIndex !== lastSignificantTokenIndex) ?
                        `(${firstSignificantTokenIndex}-${lastSignificantTokenIndex})` :
                          `(${firstSignificantTokenIndex})`;

  return tokenIndexes;
}
