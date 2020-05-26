"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { prettyPrinterScheme, getFiraCodeLineHeight } from "occam-styles";

const { selectionBackgroundColour } = prettyPrinterScheme;

const firaCodeLineHeight = getFiraCodeLineHeight(),
      rowHeight = firaCodeLineHeight;  ///

class Part extends Element {
  rowHeight = rowHeight;

  update(top, left, width, height) {
    top = `${top}px`;
    left = `${left}px`;
    width = `${width}px`;
    height = `${height}px`;

    const css = {
      top,
      left,
      width,
      height
    };

    this.css(css);
  }

  initialise(properties) {
    const { selection } = properties;

    if (selection) {
      this.addClass("selection");
    }
  }

  static tagName = "div";

  static defaultProperties = {
    className: "part"
  };

  static ignoredProperties = [
    "selection"
  ];

  static fromClass(Class, properties) {
    const part = Element.fromClass(Class, properties);

    part.initialise(properties);

    return part;
  }
}

export default withStyle(Part)`

  position: absolute;
  
  .selection {
    background-color: ${selectionBackgroundColour};
  }

`;
