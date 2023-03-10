"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import Gutter from "./gutter";
import Highlights from "./highlights";
import RichTextarea from "./richTextarea";

import { getScrollbarThickness } from "./utilities/scrollbar";

class PrettyPrinter extends Element {
  scrollHandler = (event, element) => {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollGutter(scrollTop ,scrollLeft);

    this.scrollHighlights(scrollTop, scrollLeft);
  }

  update(tokens) {
    this.updateGutter(tokens);

    this.updateHighlights(tokens);
  }

  childElements() {
    const { editable, onChange, hiddenGutter, fancyScrollbars, hiddenScrollbars } = this.properties,
          hidden = hiddenGutter,  ///
          readOnly = !editable,
          changeHandler = onChange, ///
          scrollbarThickness = getScrollbarThickness(hiddenScrollbars, fancyScrollbars);

    return ([

      <Gutter hidden={hidden} />,
      <Highlights scrollbarThickness={scrollbarThickness} />,
      <RichTextarea onScroll={this.scrollHandler} onChange={changeHandler} fancyScrollbars={fancyScrollbars} hiddenScrollbars={hiddenScrollbars} readOnly={readOnly} />

    ]);
  }
  
  parentContext() {
    const context = this.getContext(),
          updatePrettyPrinter = this.update.bind(this); ///

    return ({
      ...context,
      updatePrettyPrinter
    });
  }

  initialise() {
    this.assignContext([
      "updateGutter",
      "scrollGutter",
      "updateHighlights",
      "scrollHighlights"
    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "pretty-printer"
  };

  static ignoredProperties = [
    "onChange",
    "editable",
    "hiddenGutter",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
  ];
}

export default withStyle(PrettyPrinter)`

  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: auto;
  grid-template-areas: "gutter highlights-rich-textarea";
  grid-template-columns: min-content auto;  

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  caret-color: inherit;
  border-color: inherit;
  text-rendering: inherit;
  background-color: transparent;
  font-feature-settings: inherit;

`;
