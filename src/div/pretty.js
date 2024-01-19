"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import SyntaxDiv from "../div/syntax";

import { MARGIN_RIGHT, MARGIN_BOTTOM } from "../constants";

class PrettyDiv extends Element {
  update(tokens) {
    this.updateSyntaxDiv(tokens);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollSyntaxDiv(scrollTop, scrollLeft);
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

      <SyntaxDiv/>

    );
  }

  parentContext() {
	  const context = this.getContext(),
          updatePrettyDiv = this.update.bind(this),  ///
				  scrollPrettyDiv = this.scroll.bind(this);  ///

    return ({
      ...context,
      updatePrettyDiv,
      scrollPrettyDiv
    });
  }

  initialise() {
    this.assignContext([
      "updateSyntaxDiv",
      "scrollSyntaxDiv"
    ]);
  }

  static tagName = "div";

  static ignoredProperties = [
    "scrollbarThickness"
  ];

  static defaultProperties = {
    className: "pretty"
  };
}

export default withStyle(PrettyDiv)`

  z-index: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  position: relative;
  grid-area: pretty-rich-textarea;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  caret-color: inherit;
  border-color: inherit;
  text-rendering: inherit;
  background-color: inherit;
  font-feature-settings: inherit;

`;
