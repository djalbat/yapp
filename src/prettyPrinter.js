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

  getInnerBounds() {
    const gutterWidth = this.getGutterWidth();

    let top = 0, ///
        left = 0,  ///
        width = this.getWidth(),
        height = this.getHeight();

    left += gutterWidth;
    width -= gutterWidth;

    const innerBounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

    return innerBounds;
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollGutter(scrollTop ,scrollLeft);
    this.scrollSyntax(scrollTop, scrollLeft);
  }

  update(tokens) {
    let innerBounds = null,
        previousGutterWidth = this.getPreviousGutterWidth();

    this.updateSyntax(tokens);

    this.updateGutter(tokens);

    const gutterWidth = this.getGutterWidth();

    if (previousGutterWidth !== gutterWidth) {
      previousGutterWidth = gutterWidth;  ///

      this.setPreviousGutterWidth(previousGutterWidth);

      innerBounds = this.resize();
    }

    return innerBounds;
  }

  resize() {
    const innerBounds = this.getInnerBounds(),
          bounds = innerBounds; ///

    this.positionGutter();

    this.setSyntaxBounds(bounds);

    return innerBounds;
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
          setPrettyPrinterWidth = this.setWidth.bind(this), ///
          setPrettyPrinterHeight = this.setHeight.bind(this), ///
          parentContext = Object.assign({}, context, {
            resizePrettyPrinter,
            updatePrettyPrinter,
            scrollPrettyPrinter,
            setPrettyPrinterWidth,
            setPrettyPrinterHeight
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
      "getGutterWidth",
      "setSyntaxBounds",
      "positionGutter",
      "updateGutter",
      "updateSyntax",
      "scrollGutter",
      "scrollSyntax"
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

  position: relative;
  overflow: hidden;
  
  color: inherit;
  border-color: inherit;
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
