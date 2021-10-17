"use strict";

import { arrayUtilities } from "necessary";

const { second } = arrayUtilities;

export function stripPixels(valueInPixels) {
  let value;

  if (!valueInPixels) {
    value = 0;
  } else {
    const matches = valueInPixels.match(/^(.+)px$/),
          secondMatch = second(matches);

    value = Number(secondMatch); ///
  }

  return value;
}
