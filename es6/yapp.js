"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { queryUtilities } from "occam-dom";

import ErrorToken from "./token/overlay/error";
import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { lexerFromLanguage } from "./lexers";
import { parserFromLanguage } from "./parsers";
import { contentFromChildElements } from "./utilities/content";

import { JAVASCRIPT_LANGUAGE } from "./constants";

const { queryByExpression } = queryUtilities;

class Yapp extends Element {
  overlayTokenMap = {};

  OverlayTokenMap = {
    "//error/@*": ErrorToken
  };

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
  }

  setParser(parser) {
    this.parser = parser;
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  getTokens() {
    const tokens = this.tokens.map((token, index) => this.overlayTokenMap[index] || token); ///

    return tokens;
  }

  getNode() {
    return this.node;
  }

  update() {
    const content = this.getContent();

    this.tokens = this.lexer.tokenise(content);

    this.node = this.parser.parse(this.tokens);

    this.addOverlayTokens();

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

  addOverlayTokens() {
    this.overlayTokenMap = {};

    if (this.node !== null) {
      const queryExpressions = Object.keys(this.OverlayTokenMap);

      queryExpressions.forEach((queryExpression) => {
        const nodes = queryByExpression(this.node, queryExpression),
              OverlayToken = this.OverlayTokenMap[queryExpression];

        nodes.forEach((node) => {
          const significantToken = node.getSignificantToken(),
                overlaidToken = significantToken, ///
                overlaidTokenIndex = this.tokens.indexOf(overlaidToken),
                overlayTokenIndex = overlaidTokenIndex,  ///
                overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);

          this.overlayTokenMap[overlayTokenIndex] = overlayToken;
        });
      });
    }
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
