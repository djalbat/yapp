"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import Gutter from "./gutter";
import Highlights from "./highlights";
import RichTextarea from "./richTextarea";

class PrettyPrinter extends Element {
  scrollHandler = (event, element) => {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollGutter(scrollTop ,scrollLeft);
    this.scrollSyntax(scrollTop, scrollLeft);
  }

  update(tokens) {
    this.updateSyntax(tokens);
    this.updateGutter(tokens);
  }

  childElements() {
    const { onChange, hiddenGutter, fancyScrollbars, hiddenScrollbars, scrollbarThickness } = this.properties,
          hidden = hiddenGutter,  ///
          changeHandler = onChange; ///

    return ([

      <Gutter hidden={hidden} />,
      <Highlights scrollbarThickness={scrollbarThickness} />,
      <RichTextarea onScroll={this.scrollHandler} onChange={changeHandler} fancyScrollbars={fancyScrollbars} hiddenScrollbars={hiddenScrollbars} active />

    ]);
  }
  
  parentContext() {
    const context = this.getContext(),
          updatePrettyPrinter = this.update.bind(this), ///
          parentContext = Object.assign({}, context, {
            updatePrettyPrinter
          });
    
    return parentContext;
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
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pretty-printer"
  };

  static ignoredProperties = [
    "onChange",
    "hiddenGutter",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars",
    "scrollbarThickness"
  ];
}

export default withStyle(PrettyPrinter)`

  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  
  grid-template-rows: auto;
  grid-template-columns: min-content auto;  
  grid-template-areas: "gutter syntax";

  color: inherit;
  border-color: inherit;
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
