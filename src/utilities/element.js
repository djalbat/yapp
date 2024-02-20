"use sttict";

import { elementMixins } from "easy";

const { mountElement, unmountElement } = elementMixins;

export function mountYapp(yapp) {
  const element = yapp; ///

  mountElement(element);
}

export function unmountYapp(yapp) {
  const element = yapp; ///

  unmountElement(element);
}
