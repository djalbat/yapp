"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { tokenAsHTML } from "../utilities/token";
import { EMPTY_STRING } from "../constants";

class SyntaxDiv extends Element {
  setLanguage(language) {
    const state = {
      language
    };

    this.removeLanguageClass();

    this.updateState(state);

    this.addLanguageClass();
  }

  addLanguageClass() {
    const { language } = this.getState();

    if (language !== null) {
      const languageClass = language; ///

      this.addClass(languageClass);
    }
  }

  removeLanguageClass() {
    const { language } = this.getState();

    if (language !== null) {
      const languageClass = language; ///

      this.removeClass(languageClass);
    }
  }

  update(tokens) {
    const html = tokens.reduce((html, token) => { ///
            const tokenHTML = tokenAsHTML(token);

            html += tokenHTML;

            return html;
          }, EMPTY_STRING);

    this.html(html);
  }

  scroll(scrollTop, scrollLeft) {
    const top = `${-scrollTop}px`,
          left = `${-scrollLeft}px`,
          css = {
            top,
            left
          };

    this.css(css);
  }

  setInitialState() {
    const language = null;

    this.setState({
      language
    });
  }

  parentContext() {
	  const setLanguage = this.setLanguage.bind(this),
          updateSyntaxDiv = this.update.bind(this), ///
				  scrollSyntaxDiv = this.scroll.bind(this);  ///

    return ({
      setLanguage,
      updateSyntaxDiv,
      scrollSyntaxDiv
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "syntax"
  };
}

export default withStyle(SyntaxDiv)`

  position: relative;
  white-space: pre;
  user-select: none;
  pointer-events: none;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  caret-color: inherit;
  border-color: inherit;
  text-rendering: inherit;
  background-color: inherit;
  font-feature-settings: inherit;

`;
