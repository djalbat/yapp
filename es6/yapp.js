"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { FlorenceLexer } from "occam-lexers";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { contentFromChildElements } from "./utilities/content";

import { FLORENCE_DOCUMENT_TYPE } from "./constants";

const florenceLexer = FlorenceLexer.fromNothing();

class Yapp extends Element {
  getContent() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent;  ///

    return content;
  }

  update() {
    const content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
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

  changeHandler(event, element) {
    const richTextarea = element, ///
          contentChanged = richTextarea.hasContentChanged();

    if (contentChanged) {
      this.update();
    }
  }

  scrollHandler(event, element) {
    const richTextarea = element, ///
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    this.scrollPrettyPrinter(scrollTop, scrollLeft);
  }

  childElements(properties) {
    const changeHandler = this.changeHandler.bind(this), ///
          scrollHandler = this.scrollHandler.bind(this); ///

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

    const { childElements, noAutoResize } = properties,
          content = contentFromChildElements(childElements),
          scrollTop = 0,  ///
          scrollLeft = 0, ///
          documentType = FLORENCE_DOCUMENT_TYPE;  ///

    this.setDocumentType(documentType);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    if (!noAutoResize) {
      this.onResize(() => this.resize());
    }
  }

  static tagName = "div";

  static defaultProperties = {
    className: "yapp"
  };

  static fromClass(Class, properties) {
    const yapp = Element.fromClass(Class, properties);

    yapp.initialise(properties);

    return yapp;
  }
}

export default withStyle(Yapp)`

  overflow: hidden;
  position: relative;

`;
