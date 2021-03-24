"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentFromChildElements = contentFromChildElements;
exports.lineCountFromContent = lineCountFromContent;

var _necessary = require("necessary");

var first = _necessary.arrayUtilities.first;

function contentFromChildElements(childElements) {
  var content = "";
  var childElementsLength = childElements.length;

  if (childElementsLength > 0) {
    var firstChildElement = first(childElements),
        firstChildElementText = firstChildElement.getText();
    content = firstChildElementText; ///
  }

  return content;
}

function lineCountFromContent(content) {
  var lineCount;
  var matches = content.match(/\r\n|\r|\n/g);

  if (matches === null) {
    lineCount = 1;
  } else {
    var matchesLength = matches.length;
    lineCount = matchesLength + 1;
  }

  return lineCount;
}