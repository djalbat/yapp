"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import defaultStyle from "./style/default";
import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";
import scrollBarThickness from "./scrollbarThickness";

import { stripPixels } from "./utilities/css";
import { pluginFromLanguageAndPlugin } from "./utilities/plugin";
import { propertiesFromContentLanguageAndPlugin } from "./utilities/properties";
import { lineCountFromContent, contentFromChildElements } from "./utilities/content";

class Yapp extends Element {
  constructor(selector, plugin) {
    super(selector);

    this.plugin = plugin;
  }

  getPlugin() {
    return this.plugin;
  }

  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  getLneHeight() {
    const lineHeightInPixels = this.css("line-height"),
          lineHeight = stripPixels(lineHeightInPixels);

    return lineHeight;
  }

  getBorderTopWidth() {
    const topBorderWidthInPixels = this.css("border-top-width"),
          topBorderWidth = stripPixels(topBorderWidthInPixels);

    return topBorderWidth;
  }

  getBorderBottomWidth() {
    const bottomBorderWidthInPixels = this.css("border-bottom-width"),
          bottomBorderWidth = stripPixels(bottomBorderWidthInPixels);

    return bottomBorderWidth;
  }

  setLexer(lexer) { this.plugin.setLexer(lexer); }

  setParser(parser) { this.plugin.setParser(parser); }

  update() {
    const content = this.getContent();

    this.plugin.update(content);

    const tokens = this.plugin.getTokens(),
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
    const content = this.getContent(),
          lineCount = lineCountFromContent(content),
          lineHeight = this.getLneHeight(),
          borderTopWidth = this.getBorderTopWidth(),
          borderBottomWidth = this.getBorderBottomWidth(),
          height = lineCount * lineHeight + scrollBarThickness + borderTopWidth + borderBottomWidth;

    this.setHeight(height);

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

      element = this; ///

      contentChangeHandler && contentChangeHandler(event, element); ///
    }
  }

  scrollHandler(event, element) {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollPrettyPrinter(scrollTop, scrollLeft);
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
    const getPlugin = this.getPlugin.bind(this),
          updateYapp = this.update.bind(this),  ///
          setYappWidth = this.setWidth.bind(this),  ///
          setYappHeight = this.setHeight.bind(this),  ///
          setYappLexer = this.setLexer.bind(this),  ///
          setYappParser = this.setParser.bind(this);  ///

    return ({
      getPlugin,
      updateYapp,
      setYappWidth,
      setYappHeight,
      setYappLexer,
      setYappParser
    });
  }

  initialise() {
    this.assignContext();

    const { childElements, editable = false } = this.properties,
          language = this.plugin.getLanguage(),
          content = contentFromChildElements(childElements),
          readOnly = !editable,
          scrollTop = 0,  ///
          scrollLeft = 0; ///

    this.setLanguage(language);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    this.setRichTextareaReadOnly(readOnly);

    this.onResize(() => this.resize());
  }

  static tagName = "div";

  static defaultProperties = {
    className: "yapp"
  };

  static fromContent(content, language, Plugin) {
    const Class = Yapp,
          properties = propertiesFromContentLanguageAndPlugin(content, language, Plugin),
          plugin = pluginFromLanguageAndPlugin(language, Plugin),
          yapp = Element.fromClass(Class, properties, plugin);

    yapp.initialise();

    return yapp;
  }

  static fromClass(Class, properties) {
    const { language, Plugin } = properties,
          plugin = pluginFromLanguageAndPlugin(language, Plugin),
          yapp = Element.fromClass(Class, properties, plugin);

    yapp.initialise();

    return yapp;
  }
}

export default withStyle(Yapp)`

  ${defaultStyle}

`;
