"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineCountFromTokens = lineCountFromTokens;

function lineCountFromTokens(tokens) {
  var lineCount = 1; ///

  tokens.forEach(function (token) {
    var tokenEndOfLineToken = token.isEndOfLineToken();

    if (tokenEndOfLineToken) {
      lineCount++;
    }
  });
  return lineCount;
}