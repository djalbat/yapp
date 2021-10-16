"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";
import { scrollbarWidth, scrollbarHeight, scrollbarThumbBorderRadius } from "./styles";
import { selectionColour, backgroundColour, selectionBackgroundColour, scrollbarThumbBoxShadowColour, scrollbarThumbBackgroundColour  } from "./scheme/colour";

export default withStyle(class extends RichTextarea {
  setBounds(bounds) {
    const top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();

    this.resize(width, height);
    this.position(top, left);
  }

  resize(width, height) {
    this.setWidth(width);
    this.setHeight(height);
  }

  position(top, left) {
    top = `${top}px`;
    left = `${left}px`;

    const css = {
      top,
      left
    };

    this.css(css);
  }

  didMount() {
    const { fancyScrollbars } = this.properties;

    if (fancyScrollbars) {
      this.addClass("fancy-scrollbars");
    }

    super.didMount();
  }

  willUnmount() {
    const { fancyScrollbars } = this.properties;

    if (fancyScrollbars) {
      this.removeClass("fancy-scrollbars");
    }

    super.willUnmount();
  }

  parentContext() {
    const getRichTextareaContent = this.getContent.bind(this),
          setRichTextareaBounds = this.setBounds.bind(this),  ///
          setRichTextareaContent = this.setContent.bind(this),  ///
          setRichTextareaReadOnly = this.setReadOnly.bind(this);  ///

    return ({
      getRichTextareaContent,
      setRichTextareaBounds,
      setRichTextareaContent,
      setRichTextareaReadOnly
    });
  }

  static defaultProperties = {
    spellCheck: "false"
  };

  static ignoredProperties = [
    "fancyScrollbars"
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
  position: absolute;
  overflow: scroll;
  border-top: none;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;
  
  ::selection {
    color: ${selectionColour};
    background-color: ${selectionBackgroundColour};
  }
  
  .fancy-scrollbars::-webkit-scrollbar {
    width: ${scrollbarWidth};
    height: ${scrollbarHeight};
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

  caret-color: inherit;
  
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
