"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "../constants";

class SyntaxDiv extends Element {
  updateLanguage(language) {
    this.removeLanguageClass();

    this.setLanguage(language);

    this.addLanguageClass();
  }

  addLanguageClass() {
    const language = this.getLanguage();

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
            const tokenHTML = token.asHTML();

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

  getLanguage() {
    const { language } = this.getState();

    return language;
  }

  setLanguage(language) {
    this.updateState({
      language
    });
  }

  setInitialState() {
    const language = null;

    this.setState({
      language
    });
  }

  parentContext() {
	  const updateLanguage = this.updateLanguage.bind(this),
          updateSyntaxDiv = this.update.bind(this), ///
				  scrollSyntaxDiv = this.scroll.bind(this);  ///

    return ({
      updateLanguage,
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

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  font-weight: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
