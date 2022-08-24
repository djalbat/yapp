"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Syntax from "./syntax";

import { MARGIN_RIGHT, MARGIN_BOTTOM } from "./constants";

class Highlights extends Element {
  update(tokens) {
    this.updateSyntax(tokens);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollSyntax(scrollTop, scrollLeft);
  }

  didMount() {
    const { scrollbarThickness } = this.properties,
          marginRight = `${scrollbarThickness}px`,
          marginBottom = `${scrollbarThickness}px`;

    this.style(MARGIN_RIGHT, marginRight);
    this.style(MARGIN_BOTTOM, marginBottom);
  }

  willUnmount() {
    ///
  }

  childElements() {
    return (

      <Syntax/>

    );
  }

  parentContext() {
	  const context = this.getContext(),
          updateHighlights = this.update.bind(this), ///
				  scrollHighlights = this.scroll.bind(this),  ///
          parentContext = Object.assign({}, context, {
            updateHighlights,
            scrollHighlights
          });

    return parentContext;
  }

  initialise() {
    this.assignContext([
      "updateSyntax",
      "scrollSyntax"
    ]);
  }

  static tagName = "div";

  static ignoredProperties = [
    "scrollbarThickness"
  ];

  static defaultProperties = {
    className: "highlights"
  };
}

export default withStyle(Highlights)`

  z-index: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  position: relative;
  grid-area: highlights-rich-textarea;

  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
