"use strict";

import withStyle from "easy-with-style";  ///

import { React, Bounds, Element } from "easy";

import Gutter from "./gutter";
import Syntax from "./syntax";

import { lineHeight } from "./constants";
import { backgroundColour } from "./scheme/prettyPrinter";

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

  getInnerBounds(previousGutterWidth) {
    let top = 0, ///
        left = 0,  ///
        width = this.getWidth(),
        height = this.getHeight();

    left += previousGutterWidth;
    width -= previousGutterWidth;

    const innerBounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

    return innerBounds;
  }

  getRichTextareaBounds(innerBounds) {
    const top = innerBounds.getTop(),
          left = innerBounds.getLeft(),///
          width = innerBounds.getWidth(),
          height = innerBounds.getHeight(),
          richTextareaBounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

    return richTextareaBounds;
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollGutter(scrollTop ,scrollLeft);
    this.scrollSyntax(scrollTop, scrollLeft);
  }

  update(tokens) {
    let richTextareaBounds = null,
        previousGutterWidth = this.getPreviousGutterWidth();

    this.updateGutter(tokens);
    this.updateSyntax(tokens);

    const gutterWidth = this.getGutterWidth();

    if (previousGutterWidth !== gutterWidth) {
      previousGutterWidth = gutterWidth;  ///

      this.setPreviousGutterWidth(previousGutterWidth);

      richTextareaBounds = this.resize();
    }

    return richTextareaBounds;
  }

  resize() {
    const previousGutterWidth = this.getPreviousGutterWidth(),
          innerBounds = this.getInnerBounds(previousGutterWidth),
          richTextareaBounds = this.getRichTextareaBounds(innerBounds),
          bounds = innerBounds; ///

    this.positionGutter();

    this.setSyntaxBounds(bounds);

    return richTextareaBounds;
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
    return ([

      <Gutter />,
      <Syntax />,

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

  static fromClass(Class, properties) {
    const view = Element.fromClass(Class, properties);

    view.initialise();
    
    return view;
  }
}

export default withStyle(PrettyPrinter)`

  position: relative;
  overflow: hidden;
  background-color: ${backgroundColour};

`;
