"use strict";

import { characters, arrayUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";

const { first } = arrayUtilities,
      { LESS_THAN_CHARACTER, AMPERSAND_CHARACTER, GREATER_THAN_CHARACTER } = characters;

export function sanitiseContent(content) {
  const sanitisedContent = content
                            .replace(/&/g, AMPERSAND_CHARACTER)
                            .replace(/</g, LESS_THAN_CHARACTER)
                            .replace(/>/g, GREATER_THAN_CHARACTER);

  return sanitisedContent;
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
