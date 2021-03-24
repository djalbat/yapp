"use strict";

export function lineCountFromTokens(tokens) {
  let lineCount = 1;  ///

  tokens.forEach((token) => {
    const tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineCount++;
    }
  });

  return lineCount;
}
