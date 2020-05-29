"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { documentFromLanguage } from "./documents";
import { contentFromChildElements } from "./utilities/content";

class Yapp extends Element {
  constructor(selectorOrDOMElement, contentChangeHandler, document) {
    super(selectorOrDOMElement);

    this.contentChangeHandler = contentChangeHandler;

    this.document = document;
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  getTokens() { return this.document.getTokens(); }

  getNode() { return this.document.getNode(); }

  setLexer(lexer) { this.document.setLexer(lexer); }

  setParser(parser) { this.document.setParser(parser); }

  update() {
    const content = this.getContent();

    this.document.update(content);

    const tokens = this.getTokens(),
          richTextareaBounds = this.updatePrettyPrinter(tokens);

    if (richTextareaBounds !== null) {
      this.setRichTextareaBounds(richTextareaBounds);
    }
  }

  resize() {
    const width = this.getWidth(),
          height = this.getHeight();

    this.setPrettyPrinterWidth(width);
    this.setPrettyPrinterHeight(height);

    const richTextareaBounds = this.resizePrettyPrinter();

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
      this.update();

      this.contentChangeHandler && this.contentChangeHandler(event, element);
    }
  }

  scrollHandler(event, element) {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollPrettyPrinter(scrollTop, scrollLeft);
  }

  childElements(properties) {
    const changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this);

    return ([

      <PrettyPrinter />,
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

  initialise(properties) {
    this.assignContext();

    const { childElements, autoResize = "true" } = properties,
          language = this.document.getLanguage(),
          content = contentFromChildElements(childElements),
          scrollTop = 0,  ///
          scrollLeft = 0; ///

    this.setLanguage(language);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

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
    const { language, onContentChange = null } = properties,
          contentChangeHandler = onContentChange, ///
          document = documentFromLanguage(language),
          yapp = Element.fromClass(Class, properties, contentChangeHandler, document);

    yapp.initialise(properties);

    return yapp;
  }
}

export default withStyle(Yapp)`

  overflow: hidden;
  position: relative;

`;
