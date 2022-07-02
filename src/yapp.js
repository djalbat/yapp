"use strict";

import withStyle from "easy-with-style";  ///

import { React, Bounds, Element } from "easy";

import styleMixins from "./mixins/style";
import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { getScrollbarThickness } from "./utilities/scrollbarThickness";
import { pluginFromLanguageAndPlugin } from "./utilities/plugin";
import { propertiesFromContentLanguagePluginAndOptions } from "./utilities/properties";
import { lineCountFromContent, contentFromChildElements } from "./utilities/content";
import { colour, caretColour, borderColour, backgroundColour } from "./scheme/colour";
import { DEFAULT_EDITABLE, DEFAULT_FIRA_CODE, DEFAULT_DEFER_RENDER, DEFAULT_HIDDEN_GUTTER, DEFAULT_HIDDEN_SCROLLBARS, DEFAULT_FANCY_SCROLLBARS } from "./defaults";

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

  getInnerBounds(gutterWidth) {
    let top,
        left,
        width = this.getWidth(),
        height = this.getHeight();

    const paddingTop = this.getPaddingTop(),
          paddingLeft = this.getPaddingLeft(),
          paddingRight = this.getPaddingRight(),
          paddingBottom = this.getPaddingBottom(),
          borderTopWidth = this.getBorderTopWidth(),
          borderLeftWidth = this.getBorderLeftWidth(),
          borderRightWidth = this.getBorderRightWidth(),
          borderBottomWidth = this.getBorderBottomWidth();

    top = paddingTop;
    left = paddingLeft;

    width -= ( borderLeftWidth + paddingLeft + paddingRight + borderRightWidth );
    height -= ( borderTopWidth + paddingTop + paddingBottom + borderBottomWidth );

    if (gutterWidth !== null) {
      left += gutterWidth;
      width -= gutterWidth;
    }

    const bounds = Bounds.fromTopLeftWidthAndHeight(top, left, width, height),
          innerBounds = bounds; ///

    return innerBounds;
  }

  getInitialLineCount() {
    const content = this.getContent(),
          lineCount = lineCountFromContent(content),
          initialLineCount = lineCount; ///

    return initialLineCount;
  }

  getScrollbarThickness() {
    let scrollbarThickness = 0;

    const { hiddenScrollbars = DEFAULT_HIDDEN_SCROLLBARS } = this.properties;

    if (!hiddenScrollbars) {
      const { fancyScrollbars = DEFAULT_FANCY_SCROLLBARS } = this.properties;

      scrollbarThickness = getScrollbarThickness(fancyScrollbars);
    }

    return scrollbarThickness;
  }

  setLexer(lexer) { this.plugin.setLexer(lexer); }

  setParser(parser) { this.plugin.setParser(parser); }

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

  update() {
    const content = this.getContent();

    this.plugin.update(content);

    const tokens = this.plugin.getTokens(),
          gutterWidth = this.updatePrettyPrinter(tokens);

    if (gutterWidth !== null) {
      const innerBounds = this.getInnerBounds(gutterWidth),
            richTextareaBounds = innerBounds; ///

      this.setRichTextareaBounds(richTextareaBounds);
    }
  }

  resize() {
    let innerBounds,
        gutterWidth;

    gutterWidth = null;

    innerBounds = this.getInnerBounds(gutterWidth);

    const prettyPrinterBounds = innerBounds;  ///

    this.setPrettyPrinterBounds(prettyPrinterBounds);

    gutterWidth = this.resizePrettyPrinter();

    innerBounds = this.getInnerBounds(gutterWidth);

    const richTextareaBounds = innerBounds; ///

    this.setRichTextareaBounds(richTextareaBounds);
  }

  render() {
    const lineHeight = this.getLineHeight(),
          paddingTop = this.getPaddingTop(),
          paddingBottom = this.getPaddingBottom(),
          borderTopWidth = this.getBorderTopWidth(),
          initialLineCount = this.getInitialLineCount(),
          borderBottomWidth = this.getBorderBottomWidth(),
          scrollbarThickness = this.getScrollbarThickness(),
          height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;

    this.setHeight(height);

    this.resize();

    this.update();
  }

  didMount() {
    const { firaCode = DEFAULT_FIRA_CODE, deferRender = DEFAULT_DEFER_RENDER } = this.properties;

    if (firaCode) {
      this.addClass("fira-code");
    }

    if (deferRender) {
      return;
    }

    this.render();
  }

  willUnmount() {
    const { firaCode = DEFAULT_FIRA_CODE } = this.properties;

    if (firaCode) {
      this.removeClass("fira-code");
    }
  }

  childElements() {
    const { hiddenGutter = DEFAULT_HIDDEN_GUTTER, hiddenScrollbars = DEFAULT_HIDDEN_SCROLLBARS, fancyScrollbars = DEFAULT_FANCY_SCROLLBARS } = this.properties,
          changeHandler = this.changeHandler.bind(this),
          scrollHandler = this.scrollHandler.bind(this),
          scrollbarThickness = this.getScrollbarThickness();

    return ([

      <PrettyPrinter hiddenGutter={hiddenGutter} scrollbarThickness={scrollbarThickness} />,
      <RichTextarea onChange={changeHandler} onScroll={scrollHandler} hiddenScrollbars={hiddenScrollbars} fancyScrollbars={fancyScrollbars} active />

    ]);
  }

  parentContext() {
    const getPlugin = this.getPlugin.bind(this),
          getContent = this.getContent.bind(this),
          updateYapp = this.update.bind(this),  ///
          resizeYapp = this.resize.bind(this),  ///
          setYappWidth = this.setWidth.bind(this),  ///
          setYappHeight = this.setHeight.bind(this),  ///
          setYappLexer = this.setLexer.bind(this),  ///
          setYappParser = this.setParser.bind(this);  ///

    return ({
      getPlugin,
      getContent,
      updateYapp,
      resizeYapp,
      setYappWidth,
      setYappHeight,
      setYappLexer,
      setYappParser
    });
  }

  initialise() {
    this.assignContext();

    const { childElements, editable = DEFAULT_EDITABLE } = this.properties,
          language = this.plugin.getLanguage(),
          content = contentFromChildElements(childElements),
          readOnly = !editable,
          scrollTop = 0,  ///
          scrollLeft = 0; ///

    this.setLanguage(language);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    this.setRichTextareaReadOnly(readOnly);

    this.onResize((event, element) => this.resize());
  }

  static tagName = "div";

  static defaultProperties = {
    className: "yapp"
  };

  static ignoredProperties = [
    "Plugin",
    "language",
    "firaCode",
    "editable",
    "deferRender",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
  ];

  static fromContent(content, language, Plugin, options) {
    const Class = Yapp,
          properties = propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options),
          plugin = pluginFromLanguageAndPlugin(language, Plugin),
          yapp = Element.fromClass(Class, properties, plugin);

    return yapp;
  }

  static fromClass(Class, properties) {
    const { language, Plugin } = properties,
          plugin = pluginFromLanguageAndPlugin(language, Plugin),
          yapp = Element.fromClass(Class, properties, plugin);

    return yapp;
  }
}

Object.assign(Yapp.prototype, styleMixins);

export default withStyle(Yapp)`

  width: 100%;
  position: relative;

  border: 1px solid;
  
  color: ${colour};
  caret-color: ${caretColour};
  border-color: ${borderColour};
  background-color: ${backgroundColour};

  font-size: 13px;
  line-height: 20px;
  font-family: "Menlo", "Lucida Sans Typewriter", monospace;
  text-rendering: optimizeLegibility;
  font-feature-settings: normal;

  .fira-code {

    font-size: 13px;
    line-height: 20px;
    font-family: "Fira Code";
    text-rendering: optimizeLegibility;
    font-feature-settings: "calt" 1;
    
  }

`;
