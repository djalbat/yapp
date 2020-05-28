"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { lexerFromLanguage } from "./lexers";
import { parserFromLanguage } from "./parsers";
import { contentFromChildElements } from "./utilities/content";

import { JAVASCRIPT_LANGUAGE } from "./constants";

class Yapp extends Element {
  constructor(selectorOrDOMElement, lexer, parser, tokens, node, contentChangeHandler) {
    super(selectorOrDOMElement);

    this.lexer = lexer;

    this.parser = parser;

    this.tokens = tokens;

    this.node = node;

    this.contentChangeHandler = contentChangeHandler;
  }

  setLexer(lexer) {
    this.lexer = lexer;

    this.update();
  }

  setParser(parser) {
    this.parser = parser;

    this.update();
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  update() {
    const content = this.getContent();

    this.tokens = this.lexer.tokenise(content);

    this.ndoe = this.parser.parse(this.tokens);

    const richTextareaBounds = this.updatePrettyPrinter(this.tokens);

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
    const resizeYapp = this.resize.bind(this),  ///
          setYappWidth = this.setWidth.bind(this),  ///
          setYappHeight = this.setHeight.bind(this),  ///
          getYappContent = this.getContent.bind(this);  ///

    return ({
      resizeYapp,
      setYappWidth,
      setYappHeight,
      getYappContent
    });
  }

  initialise(properties) {
    this.assignContext();

    const { childElements, language = JAVASCRIPT_LANGUAGE, autoResize = "true" } = properties,
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
    const { language = JAVASCRIPT_LANGUAGE, onContentChange = null } = properties,
          lexer = lexerFromLanguage(language),
          parser = parserFromLanguage(language),
          tokens = null,
          node = null,
          contentChangeHandler = onContentChange, ///
          yapp = Element.fromClass(Class, properties, lexer, parser, tokens, node, contentChangeHandler);

    yapp.initialise(properties);

    return yapp;
  }
}

export default withStyle(Yapp)`

  overflow: hidden;
  position: relative;

`;
