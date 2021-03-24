"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";
import scrollBarThickness from "./scrollbarThickness";

import { stripPixels } from "./utilities/css";
import { pluginFromLanguageAndPlugin } from "./utilities/plugin";
import { TOP_SIDE, LEFT_SIDE, RIGHT_SIDE, BOTTOM_SIDE } from "./constants";
import { propertiesFromContentLanguagePluginAndOptions } from "./utilities/properties";
import { lineCountFromContent, contentFromChildElements } from "./utilities/content";
import { colour, caretColour, borderColour, backgroundColour } from "./scheme/colour";

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

  getLineHeight() {
    const lineHeightInPixels = this.css("line-height"),
        lineHeight = stripPixels(lineHeightInPixels);

    return lineHeight;
  }

  getBorderWidth(side) {
    const borderWidthInPixels = this.css(`border-${side}-width`),
          borderWidth = stripPixels(borderWidthInPixels);

    return borderWidth;
  }

  getBorderTopWidth() {
    const side = TOP_SIDE,
          borderTopWidth = this.getBorderWidth(side);

    return borderTopWidth;
  }

  getBorderLeftWidth() {
    const side = LEFT_SIDE,
          borderLeftWidth = this.getBorderWidth(side);

    return borderLeftWidth;
  }

  getBorderRightWidth() {
    const side = RIGHT_SIDE,
          borderRightWidth = this.getBorderWidth(side);

    return borderRightWidth;
  }

  getBorderBottomWidth() {
    const side = BOTTOM_SIDE,
          borderBottomWidth = this.getBorderWidth(side);

    return borderBottomWidth;
  }

  setLexer(lexer) { this.plugin.setLexer(lexer); }

  setParser(parser) { this.plugin.setParser(parser); }

  enableFiraCode() {
    this.addClass("fira-code");
  }

  disableFiraCode() {
    this.removeClass("fira-code");
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
    let width = this.getWidth(),
        height = this.getHeight();

    const borderTopWidth = this.getBorderTopWidth(),
          borderLeftWidth = this.getBorderLeftWidth(),
          borderRightWidth = this.getBorderRightWidth(),
          borderBottomWidth = this.getBorderBottomWidth();

    height -= ( borderTopWidth + borderBottomWidth );
    width -= ( borderLeftWidth + borderRightWidth );

    this.setPrettyPrinterWidth(width);
    this.setPrettyPrinterHeight(height);

    const richTextareaBounds = this.resizePrettyPrinter();

    this.setRichTextareaBounds(richTextareaBounds);
  }

  didMount() {
    const content = this.getContent(),
          lineCount = lineCountFromContent(content),
          lineHeight = this.getLineHeight(),
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
          setYappParser = this.setParser.bind(this),  ///
          resizeYapp = this.resize.bind(this);  ///

    return ({
      getPlugin,
      updateYapp,
      setYappWidth,
      setYappHeight,
      setYappLexer,
      setYappParser,
      resizeYapp
    });
  }

  initialise() {
    this.assignContext();

    const { childElements, firaCode = false, editable = false } = this.properties,
          language = this.plugin.getLanguage(),
          content = contentFromChildElements(childElements),
          readOnly = !editable,
          scrollTop = 0,  ///
          scrollLeft = 0; ///

    this.setLanguage(language);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    this.setRichTextareaReadOnly(readOnly);

    if (firaCode) {
      this.enableFiraCode();
    }

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
    "editable"
  ];

  static fromContent(content, language, Plugin, options) {
    const Class = Yapp,
          properties = propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options),
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
    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
    font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */
    
  }

`;
