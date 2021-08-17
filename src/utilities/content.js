"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { first } = arrayUtilities;

export function contentFromChildElements(childElements) {
  let content = EMPTY_STRING;

  const childElementsLength = childElements.length;

  if (childElementsLength > 0) {
    const firstChildElement = first(childElements),
          firstChildElementText = firstChildElement.getText();

    content = firstChildElementText;  ///
  }

  return content;
}

export function lineCountFromContent(content) {
  let lineCount;

  const matches = content.match(/\r\n|\r|\n/g);

  if (matches === null) {
    lineCount = 1;
  } else {
    const matchesLength = matches.length;

    lineCount = matchesLength + 1;
  }

  return lineCount;
}
