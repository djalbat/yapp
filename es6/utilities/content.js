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
