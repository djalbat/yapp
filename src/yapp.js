"use strict";

import { React, Element } from "easy";

import styleMixins from "./mixins/style";
import PrettyPrinter from "./prettyPrinter";

import { pluginFromProperties } from "./utilities/plugin";
import { getScrollbarThickness } from "./utilities/scrollbar";
import { CONTENT_CHANGE_CUSTOM_EVENT_TYPE } from "./customEventTypes";
import { propertiesFromContentAndConfiguration } from "./utilities/configuration";
import { lineCountFromContent, contentFromChildElements } from "./utilities/content";
import { DEFAULT_EDITABLE, DEFAULT_FIRA_CODE, DEFAULT_AUTO_HEIGHT, DEFAULT_HIDDEN_GUTTER, DEFAULT_HIDDEN_SCROLLBARS, DEFAULT_FANCY_SCROLLBARS } from "./defaults";

export default class Yapp extends Element {
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

  hasContentChanged() {
    const richTextareaContentChanged = this.hasRichTextareaContentChanged(),
          contentChanged = richTextareaContentChanged;  ///

    return contentChanged;
  }

  getInitialLineCount() {
    const content = this.getContent(),
          lineCount = lineCountFromContent(content),
          initialLineCount = lineCount; ///

    return initialLineCount;
  }

  changeCustomHandler = (event, element) => {
    const contentChanged = this.hasContentChanged();

    if (contentChanged) {
      const content = this.getContent(),
            customEventType = CONTENT_CHANGE_CUSTOM_EVENT_TYPE;

      this.update();

      this.callCustomHandlers(customEventType, event, element, content);
    }
  }

  setLexer(lexer) { this.plugin.setLexer(lexer); }

  setParser(parser) { this.plugin.setParser(parser); }

  enableFiraCode() {
    this.addClass("fira-code");
  }

  disableFiraCode() {
    this.removeClass("fira-code");
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
    const { editable = DEFAULT_EDITABLE,
            hiddenGutter = DEFAULT_HIDDEN_GUTTER,
            fancyScrollbars = DEFAULT_FANCY_SCROLLBARS,
            hiddenScrollbars = DEFAULT_HIDDEN_SCROLLBARS } = this.properties;

    return (

      <PrettyPrinter onCustomChange={this.changeCustomHandler} editable={editable} hiddenGutter={hiddenGutter} fancyScrollbars={fancyScrollbars} hiddenScrollbars={hiddenScrollbars} />

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
    "fancyScrollbars"
  ];

  static fromClass(Class, properties, ...remainingArguments) {
    const plugin = pluginFromProperties(properties),
          yapp = Element.fromClass(Class, properties, plugin, ...remainingArguments);

    return yapp;
  }

  static fromContentAndConfiguration(Class, content, configuration) {
    if (configuration === undefined) {
      configuration = content;  ///

      content = Class;  ///

      Class = Yapp;
    }

    const properties = propertiesFromContentAndConfiguration(content, configuration),
          plugin = pluginFromProperties(properties),
          yapp = Element.fromClass(Class, properties, plugin);

    return yapp;
  }
}

Object.assign(Yapp.prototype, styleMixins);
