"use strict";

import withStyle from "easy-with-style";  ///

import { arrayUtilities } from "necessary";
import { React, Bounds, Element } from "easy";

import Gutter from "./gutter";
import Syntax from "./syntax";

import { lineHeight } from "./constants";
import { borderColour, backgroundColour } from "./scheme/prettyPrinter";

const { second } = arrayUtilities;

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

  getLneHeight() {
    const lineHeightInPixels = this.css("line-height"),
          matches = lineHeightInPixels.match(/^(\d+(?:\.\d+)?)px$/),
          secondMatch = second(matches),
          lineHeight = Number(secondMatch); ///

    return lineHeight;
  }

  getBorderTopWidth() {
    const side = "top",
          borderTopWidth = this.getBorderWidth(side);

    return borderTopWidth;
  }

  getBorderLeftWidth() {
    const side = "left",
          borderTopWidth = this.getBorderWidth(side);

    return borderTopWidth;
  }

  getBorderRightWidth() {
    const side = "right",
          borderTopWidth = this.getBorderWidth(side);

    return borderTopWidth;
  }

  getBorderBottomWidth() {
    const side = "bottom",
          borderTopWidth = this.getBorderWidth(side);

    return borderTopWidth;
  }

  getBorderWidth(side) {
    const borderWidthInPixels = this.css(`border-${side}-width`),
          matches = borderWidthInPixels.match(/^(\d+(?:\.\d+)?)px$/),
          secondMatch = second(matches),
          borderWidth = Number(secondMatch); ///

    return borderWidth;
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

  childElements() {
    return ([

      <Gutter />,
      <Syntax />,

    ]);
  }
  
  parentContext() {
    const context = this.getContext(),
          resizeView = this.resize.bind(this), ///
          updateView = this.update.bind(this), ///
          scrollView = this.scroll.bind(this), ///
          setViewWidth = this.setWidth.bind(this), ///
          setViewHeight = this.setHeight.bind(this), ///
          isViewDisplayed = this.isDisplayed.bind(this), ///
          getLneHeight = this.getLneHeight.bind(this),
          getBorderTopWidth = this.getBorderTopWidth.bind(this),
          getBorderBottomWidth = this.getBorderBottomWidth.bind(this),
          parentContext = Object.assign(context, {
            resizeView,
            updateView,
            scrollView,
            setViewWidth,
            setViewHeight,
            isViewDisplayed,
            getLneHeight,
            getBorderTopWidth,
            getBorderBottomWidth
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

  border: 1px solid ${borderColour};
  position: relative;
  overflow: hidden;
  background-color: ${backgroundColour};

`;
