"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";
import { selectionColour, selectionBackgroundColour  } from "./scheme/colour";

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
  border-top: none;
  overflow-x: scroll;
  overflow-y: scroll;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;
  
  ::-webkit-scrollbar {
    width: 3rem;
  }
  
  ::selection {
    color: ${selectionColour};
    background-color: ${selectionBackgroundColour};
  }
  
  ::-webkit-scrollbar {
    width: 3rem;
  }

  caret-color: inherit;
  
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
