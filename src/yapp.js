"use strict";

import withStyle from "easy-with-style";  ///

import { React, Element } from "easy";

import styleMixins from "./mixins/style";
import PrettyPrinter from "./prettyPrinter";

import { getScrollbarThickness } from "./utilities/scrollbar";
import { pluginFromLanguageAndPlugin } from "./utilities/plugin";
import { propertiesFromContentLanguagePluginAndOptions } from "./utilities/properties";
import { lineCountFromContent, contentFromChildElements } from "./utilities/content";
import { colour, caretColour, borderColour, backgroundColour } from "./scheme/colour";
import { DEFAULT_EDITABLE, DEFAULT_FIRA_CODE, DEFAULT_AUTO_HEIGHT, DEFAULT_HIDDEN_GUTTER, DEFAULT_HIDDEN_SCROLLBARS, DEFAULT_FANCY_SCROLLBARS } from "./defaults";

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

  getInitialLineCount() {
    const content = this.getContent(),
          lineCount = lineCountFromContent(content),
          initialLineCount = lineCount; ///

    return initialLineCount;
  }

  setLexer(lexer) { this.plugin.setLexer(lexer); }

  setParser(parser) { this.plugin.setParser(parser); }

  enableFiraCode() {
    this.addClass("fira-code");
  }

  disableFiraCode() {
    this.removeClass("fira-code");
  }

  changeHandler = (event, element) => {
    const richTextarea = element, ///
          contentChanged = richTextarea.hasContentChanged();

    if (contentChanged) {
      const { onContentChange = null } = this.properties,
            contentChangeHandler = onContentChange;  ///

      this.update();

      if (contentChangeHandler) {
        element = this; ///

        contentChangeHandler(event, element);
      }
    }
  }

  update() {
    const content = this.getContent();

    this.plugin.update(content);

    const tokens = this.plugin.getTokens();

    this.updatePrettyPrinter(tokens);
  }

  didMount() {
    const { childElements, firaCode = DEFAULT_FIRA_CODE, autoHeight = DEFAULT_AUTO_HEIGHT } = this.properties,
          content = contentFromChildElements(childElements);

    firaCode && this.enableFiraCode();

    this.activateRichTextarea();

    this.setRichTextareaContent(content);

    if (autoHeight) {
      const lineHeight = this.getLineHeight(),
            paddingTop = this.getPaddingTop(),
            paddingBottom = this.getPaddingBottom(),
            borderTopWidth = this.getBorderTopWidth(),
            initialLineCount = this.getInitialLineCount(),
            borderBottomWidth = this.getBorderBottomWidth(),
            scrollbarThickness = getScrollbarThickness(),
            height = borderTopWidth + paddingTop + initialLineCount * lineHeight + paddingBottom + borderBottomWidth + scrollbarThickness;

      this.setHeight(height);
    }

    this.update();
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { editable = DEFAULT_EDITABLE, hiddenGutter = DEFAULT_HIDDEN_GUTTER, hiddenScrollbars = DEFAULT_HIDDEN_SCROLLBARS, fancyScrollbars = DEFAULT_FANCY_SCROLLBARS } = this.properties;

    return (

      <PrettyPrinter onChange={this.changeHandler} editable={editable} hiddenGutter={hiddenGutter} fancyScrollbars={fancyScrollbars} hiddenScrollbars={hiddenScrollbars} />

    );
  }

  parentContext() {
    const getPlugin = this.getPlugin.bind(this),
          getContent = this.getContent.bind(this),
          updateYapp = this.update.bind(this),  ///
          setYappLexer = this.setLexer.bind(this),  ///
          setYappParser = this.setParser.bind(this);  ///

    return ({
      getPlugin,
      getContent,
      updateYapp,
      setYappLexer,
      setYappParser
    });
  }

  initialise() {
    this.assignContext();

    const language = this.plugin.getLanguage();

    this.setLanguage(language);
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
    "autoHeight",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars",
    "onContentChange"
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
  height: 100%;
  border: 1px solid;
  
  color: ${colour};
  font-size: 13px;
  line-height: 20px;
  font-family: "Menlo", "Lucida Sans Typewriter", monospace;
  font-weight: normal;
  caret-color: ${caretColour};
  border-color: ${borderColour};
  text-rendering: initial;
  background-color: ${backgroundColour};
  font-feature-settings: initial;

  .fira-code {

    font-family: "Fira Code";
    text-rendering: optimizeLegibility;
    font-feature-settings: "calt" 1;
    
  }

`;
