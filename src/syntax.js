"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "./constants";

class Syntax extends Element {
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
            const tokenWithSelectionHTML = token.asHTML();

            html += tokenWithSelectionHTML;

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
          updateSyntax = this.update.bind(this), ///
				  scrollSyntax = this.scroll.bind(this);  ///

    return ({
      setLanguage,
      updateSyntax,
      scrollSyntax
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

export default withStyle(Syntax)`

  position: relative;
  white-space: pre;
  user-select: none;
  pointer-events: none;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
