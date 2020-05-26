"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";
import { firaCodeFontMixin } from "occam-styles";

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
          setRichTextareaContent = this.setContent.bind(this); ///

    return ({
      getRichTextareaContent,
      setRichTextareaBounds,
      setRichTextareaContent
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
  z-index: 0;
  tab-size: 2;
  position: absolute;
  word-wrap: normal;
  border-top: none;
  overflow-x: scroll;
  overflow-y: scroll;
  caret-color: white;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;

  ${firaCodeFontMixin}

`;
