"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import View from "./view";
import RichTextarea from "./richTextarea";

import { modelFromLanguage } from "./models";
import { contentFromChildElements } from "./utilities/content";

class Yapp extends Element {
  constructor(selector, model) {
    super(selector);

    this.model = model;
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  getTokens() { return this.model.getTokens(); }

  getNode() { return this.model.getNode(); }

  setLexer(lexer) { this.model.setLexer(lexer); }

  setParser(parser) { this.model.setParser(parser); }

  update() {
    const content = this.getContent();

    this.model.update(content);

    const tokens = this.getTokens(),
          richTextareaBounds = this.updateView(tokens);

    if (richTextareaBounds !== null) {
      this.setRichTextareaBounds(richTextareaBounds);
    }
  }

  resize() {
    const width = this.getWidth(),
          height = this.getHeight();

    this.setViewWidth(width);
    this.setViewHeight(height);

    const richTextareaBounds = this.resizeView();

    this.setRichTextareaBounds(richTextareaBounds);
  }

  didMount() {
    this.resize();

    this.update();
  }

  willUnmout() {
    ///
  }

  changeHandler(event, element) {
    const richTextarea = element, ///
          contentChanged = richTextarea.hasContentChanged();

    if (contentChanged) {
      const { onContentChange } = this.properties,
            contentChangeHandler = onContentChange; ///

      this.update();

      contentChangeHandler && contentChangeHandler(event, element); ///
    }
  }

  scrollHandler(event, element) {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollView(scrollTop, scrollLeft);
  }

  childElements() {
    const changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this);

    return ([

      <View />,
      <RichTextarea onChange={changeHandler} onScroll={scrollHandler} active />

    ]);
  }

  parentContext() {
    const updateYapp = this.update.bind(this),  ///
          resizeYapp = this.resize.bind(this),  ///
          getYappContent = this.getContent.bind(this),  ///
          getYappTokens = this.getTokens.bind(this),  ///
          getYappNode = this.getNode.bind(this),  ///
          setYappWidth = this.setWidth.bind(this),  ///
          setYappLexer = this.setLexer.bind(this),  ///
          setYappParser = this.setParser.bind(this),  ///
          setYappHeight = this.setHeight.bind(this);  ///

    return ({
      updateYapp,
      resizeYapp,
      getYappContent,
      getYappTokens,
      getYappNode,
      setYappWidth,
      setYappLexer,
      setYappParser,
      setYappHeight
    });
  }

  initialise() {
    this.assignContext();

    const { childElements, autoResize = "true" } = this.properties,
          language = this.model.getLanguage(),
          content = contentFromChildElements(childElements),
          scrollTop = 0,  ///
          scrollLeft = 0; ///

    this.setLanguage(language);

    this.scrollView(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    if (autoResize === "true") {
      this.onResize(() => this.resize());
    }
  }

  static tagName = "div";

  static defaultProperties = {
    className: "yapp"
  };

  static fromClass(Class, properties) {
    const { language } = properties,
          model = modelFromLanguage(language),
          yapp = Element.fromClass(Class, properties, model);

    yapp.initialise();

    return yapp;
  }
}

export default withStyle(Yapp)`

  overflow: hidden;
  position: relative;

  font-size: 13px;
  line-height: 20px;
  font-family: "Fira Code", monospace;
  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
  font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

`;
