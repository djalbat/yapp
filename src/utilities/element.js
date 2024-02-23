"use sttict";

import { elementUtilities } from "easy";

const { mountElement, unmountElement } = elementUtilities;

export function mountYapp(yapp, domElement) {
  const element = yapp, ///
        yappDOMElement = yapp.getDOMElement();

  domElement.appendChild(yappDOMElement);

  mountElement(element);
}

export function unmountYapp(yapp) {
  const element = yapp, ///
        yappDOMElement = yapp.getDOMElement();

  unmountElement(element);

  yappDOMElement.remove();
}
