"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";
import { customEventTypes  } from "easy-richtextarea";

import GutterDiv from "./div/gutter";
import PrettyDiv from "./div/pretty";
import RichTextarea from "./richTextarea";

import { getScrollbarThickness } from "./utilities/scrollbar";

const { CHANGE_CUSTOM_EVENT_TYPE } = customEventTypes;

class PrettyPrinter extends Element {
  customChangeHandler = (event, element) => {
    const customEventType = CHANGE_CUSTOM_EVENT_TYPE; ///

    this.callCustomHandlers(customEventType);
  }

  customScrollHandler = (event, element) => {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollGutterDiv(scrollTop ,scrollLeft);

    this.scrollPrettyDiv(scrollTop, scrollLeft);
  }

  update(tokens) {
    this.updateGutterDiv(tokens);
    this.updatePrettyDiv(tokens);
  }

  childElements() {
    const { editable, hiddenGutter, fancyScrollbars, hiddenScrollbars } = this.properties,
          scrollbarThickness = getScrollbarThickness(hiddenScrollbars, fancyScrollbars),
          readOnly = !editable,
          hidden = hiddenGutter;  ///

    return ([

      <GutterDiv hidden={hidden} />,
      <PrettyDiv scrollbarThickness={scrollbarThickness} />,
      <RichTextarea readOnly={readOnly}
                    fancyScrollbars={fancyScrollbars}
                    hiddenScrollbars={hiddenScrollbars}
                    onCustomChange={this.customChangeHandler}
                    onCustomScroll={this.customScrollHandler}
      />

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
      "updateGutterDiv",
      "scrollGutterDiv",
      "updatePrettyDiv",
      "scrollPrettyDiv"
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
  grid-template-areas: "gutter pretty-rich-textarea";
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
