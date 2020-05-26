"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { prettyPrinterScheme } from "occam-styles";

import LineNumbers from "./lineNumbers";

import { GUTTER_HEIGHT } from "./constants";
import { lineCountFromTokens } from "./utilities/tokens";

const { gutterBorderColour, gutterBackgroundColour } = prettyPrinterScheme;

class Gutter extends Element {
  update(tokens) {
    const lineCount = lineCountFromTokens(tokens);

    this.updateLineNumbers(lineCount);
  }

  scroll(scrollTop, scrollLeft) {
    this.setScrollTop(scrollTop);

    this.position();
  }

  position() {
    const scrollTop = this.getScrollTop();

    const top = `${-scrollTop}px`,
          css = {
            top
          };

    this.css(css);
  }

  getScrollTop() {
    const state = this.getState(),
          { scrollTop } = state;

    return scrollTop;
  }
  
  setScrollTop(scrollTop) {
    this.updateState({
      scrollTop
    });
  }

  childElements(properties) {
    return ([

      <LineNumbers />,

    ]);
  }

  parentContext() {
	  const getGutterWidth = this.getWidth.bind(this),  ///
				  positionGutter = this.position.bind(this),  ///
				  updateGutter = this.update.bind(this),  ///
				  scrollGutter = this.scroll.bind(this);  ///

    return ({
      getGutterWidth,
      positionGutter,
      updateGutter,
      scrollGutter
    });
  }
  
  setInitialState() {
    const scrollTop = 0;

    this.setState({
      scrollTop
    });
  }

  initialise(properties) {
    this.assignContext();

    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "gutter"
  };

  static fromClass(Class, properties) {
    const gutter = Element.fromClass(Class, properties);

    gutter.initialise(properties);
    
    return gutter;
  }
}

export default withStyle(Gutter)`

  height: ${GUTTER_HEIGHT};
  z-index: 2;
  position: absolute;
  text-align: right;
  user-select: none;
  border-color: ${gutterBorderColour};
  pointer-events: none;
  background-color: ${gutterBackgroundColour};
  border-right-style: dotted;
  border-right-width: 1px;

`;
