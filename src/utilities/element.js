"use sttict";

import { elementMixins } from "easy";

const { mountElement, unmountElement } = elementMixins;

export function mountYapp(yapp, domElement) {
  const yappDOMElement = yapp.getDOMElement();

  domElement.appendChild(yappDOMElement);

  const element = yapp; ///

  mountElement(element);
}

export function unmountYapp(yapp) {
  const element = yapp; ///

  unmountElement(element);

  const yappDOMElement = yapp.getDOMElement();

  yappDOMElement.remove();
}
