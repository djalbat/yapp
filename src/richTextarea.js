"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";
import { scrollbarThickness, scrollbarThumbBorderRadius } from "./styles";
import { selectionColour, backgroundColour, selectionBackgroundColour, scrollbarThumbBoxShadowColour, scrollbarThumbBackgroundColour  } from "./scheme/colour";

export default withStyle(class extends RichTextarea {
  didMount() {
    const { fancyScrollbars, hiddenScrollbars } = this.properties;

    if (fancyScrollbars) {
      this.addClass("fancy-scrollbars");
    }

    if (hiddenScrollbars) {
      this.addClass("hidden-scrollbars");
    }

    super.didMount();
  }

  willUnmount() {
    const { fancyScrollbars, hiddenScrollbars } = this.properties;

    if (fancyScrollbars) {
      this.removeClass("fancy-scrollbars");
    }

    if (hiddenScrollbars) {
      this.removeClass("hidden-scrollbars");
    }

    super.willUnmount();
  }

  parentContext() {
    const getContent = this.getContent.bind(this),  ///
          getRichTextareaContent = this.getContent.bind(this),  ///
          setRichTextareaContent = this.setContent.bind(this),  ///
          setRichTextareaReadOnly = this.setReadOnly.bind(this);  ///

    return ({
      getContent,
      getRichTextareaContent,
      setRichTextareaContent,
      setRichTextareaReadOnly
    });
  }

  static defaultProperties = {
    spellCheck: "false"
  };

  static ignoredProperties = [
    "fancyScrollbars",
    "hiddenScrollbars"
  ];
})`

  color: transparent;
  width: 100%;
  height: 100%;
  cursor: auto;
  resize: none;
  outline: none;
  z-index: 1;
  tab-size: 2;
  overflow: scroll;
  grid-area: highlights-rich-textarea;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;

  ::selection {
    color: ${selectionColour};
    background-color: ${selectionBackgroundColour};
  }
  
  .hidden-scrollbars {
    overflow: hidden;
  }
  
  .fancy-scrollbars::-webkit-scrollbar {
    width: ${scrollbarThickness};
    height: ${scrollbarThickness};
  }

  .fancy-scrollbars::-webkit-scrollbar-track {
    display: none;
  }

  .fancy-scrollbars::-webkit-scrollbar-thumb {
    border: 2px solid ${backgroundColour};
    box-shadow: inset 0 0 1px ${scrollbarThumbBoxShadowColour};
    border-radius: ${scrollbarThumbBorderRadius};
    background-color: ${scrollbarThumbBackgroundColour};
  }

  .fancy-scrollbars::-webkit-scrollbar-corner {
    display: none;
  }

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  caret-color: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
