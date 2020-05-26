"use strict";

import { Element } from "easy";

export default class BoundedElement extends Element {
  setBounds(bounds) {
    const top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();

    this.resize(width, height);
    this.position(top, left);
  }

  resize(width, height) {
    this.setWidth(width);
    this.setHeight(height);
  }

  position(top, left) {
    top = `${top}px`;
    left = `${left}px`;

    const css = {
      top,
      left
    };

    this.css(css);
  }
}
