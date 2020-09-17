"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";

import firaCodeFontMixin from "./mixin/font/firaCode";
import monospaceFontMixin from "./mixin/font/monospace";

import { stripPixels } from "./utilities/css";
import { caretColour, selectionBackgroundColour } from "./scheme/prettyPrinter";

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

  enableFiraCode() {
    this.addClass("fira-code");
  }

  disableFiraCode() {
    this.removeClass("fira-code");
  }

  getLineHeight() {
    const lineHeightInPixels = this.css("line-height"),
          lineHeight = stripPixels(lineHeightInPixels);

    return lineHeight;
  }

  parentContext() {
    const getRichTextareaContent = this.getContent.bind(this),
          setRichTextareaBounds = this.setBounds.bind(this),  ///
          setRichTextareaContent = this.setContent.bind(this),  ///
          setRichTextareaReadOnly = this.setReadOnly.bind(this), ///
          getRichTextareaLineHeight = this.getLineHeight.bind(this),  ///
          enableRichTextareaFiraCode = this.enableFiraCode.bind(this),  ///
          disableRichTextareaFiraCode = this.disableFiraCode.bind(this);  ///

    return ({
      getRichTextareaContent,
      setRichTextareaBounds,
      setRichTextareaContent,
      setRichTextareaReadOnly,
      getRichTextareaLineHeight,
      enableRichTextareaFiraCode,
      disableRichTextareaFiraCode
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
  caret-color: ${caretColour};
  overflow-wrap: normal;
  background-color: transparent;
  
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

  ::selection {
    color: ${caretColour};
    background-color: ${selectionBackgroundColour};
  }

  ${monospaceFontMixin}

  .fira-code {

    ${firaCodeFontMixin}
    
  }

`;
