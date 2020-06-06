"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";
import JavaScriptInterpreter from "./interpreter/javascript";

import { contentFromChildElements } from "./utilities/content";

class Yapp extends Element {
  constructor(selector, interpreter) {
    super(selector);

    this.interpreter = interpreter;
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  getTokens() { return this.interpreter.getTokens(); }

  getNode() { return this.interpreter.getNode(); }

  setLexer(lexer) { this.interpreter.setLexer(lexer); }

  setParser(parser) { this.interpreter.setParser(parser); }

  update() {
    const content = this.getContent();

    this.interpreter.update(content);

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

  initialise() {
    this.assignContext();

    const { childElements, autoResize = "true" } = this.properties,
          language = this.interpreter.getLanguage(),
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
    const { Interpreter = JavaScriptInterpreter } = properties,
          interpreter = Interpreter.fromNothing(),
          yapp = Element.fromClass(Class, properties, interpreter);

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
