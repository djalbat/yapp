"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function contentFromChildElements(childElements) {
  let content = "";

  const childElementsLength = childElements.length;

  if (childElementsLength > 0) {
    const firstChildElement = first(childElements),
          firstChildElementText = firstChildElement.getText();

    content = firstChildElementText;  ///
  }

  return content;
}

export function lineCountFromContent(content) {
  const matches = content.match(/\r\n|\r|\n/g),
        matchesLength = matches.length,
        lineCount = matchesLength + 1;

  return lineCount;
}
