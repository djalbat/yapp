"use strict";

import withStyle from "easy-with-style";  ///

import { RichTextarea } from "easy-richtextarea";

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
          activateRichTextarea = this.activate.bind(this),  ///
          getRichTextareaContent = this.getContent.bind(this),  ///
          setRichTextareaContent = this.setContent.bind(this),  ///
          hasRichTextareaContentChanged = this.hasContentChanged.bind(this);  ///

    return ({
      getContent,
      activateRichTextarea,
      getRichTextareaContent,
      setRichTextareaContent,
      hasRichTextareaContentChanged
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
  position: relative;
  grid-area: pretty-richtextarea;
  white-space: pre;
  overflow-wrap: normal;
  background-color: transparent;

  .hidden-scrollbars {
    overflow: hidden;
  }
  
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
