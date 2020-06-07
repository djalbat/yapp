"use strict";

import withStyle from "easy-with-style";  ///

import { arrayUtilities } from "necessary";
import { React, Bounds, Element } from "easy";

import Gutter from "./gutter";
import Syntax from "./syntax";

import { lineHeight } from "./constants";
import { borderColour, backgroundColour } from "./scheme/view";

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
          parentContext = Object.assign(context, {
            resizeView,
            updateView,
            scrollView,
            setViewWidth,
            setViewHeight,
            isViewDisplayed
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
