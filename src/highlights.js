"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Syntax from "./syntax";

class Highlights extends Element {
  update(tokens) {
    this.updateSyntax(tokens);
  }

  scroll(scrollTop, scrollLeft) {
    this.scrollSyntax(scrollTop, scrollLeft);
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
      "updateHighlights",
      "scrollHighlights",
      "scrollbarThickness"
    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "syntax"
  };
}

export default withStyle(Highlights)`

  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  grid-area: syntax;

  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
