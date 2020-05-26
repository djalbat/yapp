"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { FlorenceLexer } from "occam-lexers";
import { arrayUtilities } from "necessary";

import RichTextarea from "./richTextarea";
import PrettyPrinter from "./prettyPrinter";

import { FLORENCE_DOCUMENT_TYPE } from "./constants";

const { first } = arrayUtilities;

const florenceLexer = FlorenceLexer.fromNothing();

class Yapp extends Element {
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

  update() {
    const richTextareaContent = this.getRichTextareaContent(),
          content = richTextareaContent,  ///
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

  childElements(properties) {
    const changeHandler = this.changeHandler.bind(this), ///
          scrollHandler = this.scrollHandler.bind(this); ///

    return ([

      <PrettyPrinter />,
      <RichTextarea onChange={changeHandler} onScroll={scrollHandler} active />

    ]);
  }

  parentContext() {
    const resizeYapp = this.resize.bind(this), ///
          updateYapp = this.update.bind(this);

    return ({
      resizeYapp,
      updateYapp
    });
  }

  initialise(properties) {
    this.assignContext();

    let content = ""

    const { childElements } = properties,
          childElementsLength = childElements.length;

    if (childElementsLength > 0) {
      const firstChildElement = first(childElements),
            firstChildElementText = firstChildElement.getText();

      content = firstChildElementText;  ///
    }

    const scrollTop = 0,  ///
          scrollLeft = 0, ///
          documentType = FLORENCE_DOCUMENT_TYPE;  ///

    this.setDocumentType(documentType);

    this.scrollPrettyPrinter(scrollTop, scrollLeft);

    this.setRichTextareaContent(content);

    this.onResize(() => this.resize());
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

  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

`;
