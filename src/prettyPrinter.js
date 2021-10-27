"use strict";

import withStyle from "easy-with-style";  ///

import { React, Bounds, Element } from "easy";

import Gutter from "./gutter";
import Syntax from "./syntax";

class PrettyPrinter extends Element {
  getWidth() {
    const hidden = this.isHidden();

    if (hidden) {
      this.show();
    }

    const width = super.getWidth();

    if (hidden) {
      this.hide();
    }

    return width;
  }

  getHeight() {
    const hidden = this.isHidden();

    if (hidden) {
      this.show();
    }

    const height = super.getHeight();

    if (hidden) {
      this.hide();
    }

    return height;
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollGutter(scrollTop ,scrollLeft);
    this.scrollSyntax(scrollTop, scrollLeft);
  }

  update(tokens) {
    let gutterWidth = this.getGutterWidth(),
        previousGutterWidth = this.getPreviousGutterWidth();

    this.updateSyntax(tokens);

    this.updateGutter(tokens);

    if (previousGutterWidth !== gutterWidth) {
      previousGutterWidth = gutterWidth;  ///

      this.setPreviousGutterWidth(previousGutterWidth);

      this.resize();
    } else {
      gutterWidth = null;
    }

    return gutterWidth;
  }

  getInnerBounds(gutterWidth) {
    let top = 0,
        left = 0,
        width = this.getWidth(),
        height = this.getHeight();

    left += gutterWidth;
    width -= gutterWidth;

    const bounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height),
          innerBounds = bounds; ///

    return innerBounds;
  }

  resize() {
    const gutterWidth = this.getGutterWidth(),
          innerBounds = this.getInnerBounds(gutterWidth),
          syntaxBounds = innerBounds; ///

    this.positionGutter();

    this.setSyntaxBounds(syntaxBounds);

    return gutterWidth;
  }

  setBounds(bounds) {
    const top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();

    this.position(top, left);
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

  getPreviousGutterWidth() {
    const state = this.getState(),
          { previousGutterWidth } = state;

    return previousGutterWidth;
  }

  setPreviousGutterWidth(previousGutterWidth) {
    this.updateState({
      previousGutterWidth
    });
  }

  childElements() {
    const { hiddenGutter, scrollbarThickness } = this.properties,
          hidden = hiddenGutter;  ///

    return ([

      <Gutter hidden={hidden} />,
      <Syntax scrollbarThickenss={scrollbarThickness} />,

    ]);
  }
  
  parentContext() {
    const context = this.getContext(),
          resizePrettyPrinter = this.resize.bind(this), ///
          updatePrettyPrinter = this.update.bind(this), ///
          scrollPrettyPrinter = this.scroll.bind(this), ///
          setPrettyPrinterBounds = this.setBounds.bind(this), ///
          parentContext = Object.assign({}, context, {
            resizePrettyPrinter,
            updatePrettyPrinter,
            scrollPrettyPrinter,
            setPrettyPrinterBounds
          });
    
    return parentContext;
  }

  setInitialState() {
    const previousGutterWidth = 0;

    this.setState({
      previousGutterWidth
    })
  }

  initialise() {
    this.assignContext([
      "updateGutter",
      "updateSyntax",
      "scrollGutter",
      "scrollSyntax",
      "positionGutter",
      "getGutterWidth",
      "setSyntaxBounds"
    ]);

    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pretty-printer"
  };

  static ignoredProperties = [
    "hiddenGutter",
    "scrollbarThickness"
  ];
}

export default withStyle(PrettyPrinter)`

  overflow: hidden;
  position: absolute;
  
  color: inherit;
  border-color: inherit;
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
