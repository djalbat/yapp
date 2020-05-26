"use strict";

import withStyle from "easy-with-style";  ///

import { arrayUtilities } from "necessary";
import { Bounds, Element } from "easy";
import { prettyPrinterScheme } from "occam-styles";

import Gutter from "./gutter";
import Syntax from "./syntax";

import { lineHeight } from "./constants";

const { second } = arrayUtilities,
      { borderColour, backgroundColour } = prettyPrinterScheme;

class PrettyPrinter extends Element {
  getWidth(includeBorder) {
    const hidden = this.isHidden();

    if (hidden) {
      this.show();
    }

    const width = super.getWidth(includeBorder);

    if (hidden) {
      this.hide();
    }

    return width;
  }

  getHeight(includeBorder) {
    const hidden = this.isHidden();

    if (hidden) {
      this.show();
    }

    const height = super.getHeight(includeBorder);

    if (hidden) {
      this.hide();
    }

    return height;
  }

  getBorderTopWidth() {
    const borderTopWidthInPixels = this.css("border-top-width"),
          matches = borderTopWidthInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          borderTopWidth = Number(secondMatch); ///

    return borderTopWidth;
  }

  getBorderLeftWidth() {
    const borderLeftWidthInPixels = this.css("border-top-width"),
          matches = borderLeftWidthInPixels.match(/^(\d+)px$/),
          secondMatch = second(matches),
          borderLeftWidth = Number(secondMatch); ///

    return borderLeftWidth;
  }

  getInnerBounds(previousGutterWidth) {
    const includeBorder = false;

    let top = 0, ///
        left = 0,  ///
        width = this.getWidth(includeBorder),
        height = this.getHeight(includeBorder);

    left += previousGutterWidth;
    width -= previousGutterWidth;

    const innerBounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

    return innerBounds;
  }

  getRichTextareaBounds(innerBounds) {
    const borderTopWidth = this.getBorderTopWidth(),
          borderLeftWidth = this.getBorderLeftWidth();

    let top = innerBounds.getTop(), ///
        left = innerBounds.getLeft(),  ///
        width = innerBounds.getWidth(),
        height = innerBounds.getHeight();

    top += borderTopWidth;
    left += borderLeftWidth;

    const richTextareaBounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height);

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

  childElements(properties) {
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
				  isPrettyPrinterDisplayed = this.isDisplayed.bind(this), ///
          parentContext = Object.assign(context, {
            resizePrettyPrinter,
            updatePrettyPrinter,
            scrollPrettyPrinter,
            setPrettyPrinterWidth,
            setPrettyPrinterHeight,
            isPrettyPrinterDisplayed
          });
    
    return parentContext;
  }

  setInitialState() {
    const previousGutterWidth = 0;

    this.setState({
      previousGutterWidth
    })
  }

  initialise(properties) {
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
    const prettyPrinter = Element.fromClass(Class, properties);

    prettyPrinter.initialise(properties);
    
    return prettyPrinter;
  }
}

export default withStyle(PrettyPrinter)`

  border: 1px solid ${borderColour};
  position: relative;
  overflow: hidden;
  background-color: ${backgroundColour};

`;
