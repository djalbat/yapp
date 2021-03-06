"use strict";

import withStyle from "easy-with-style";  ///

import BoundedScrollableElement from "./element/bounded/scrollable";

class Syntax extends BoundedScrollableElement {
  setLanguage(language) {
    const state = {
      language
    };

    this.removeLanguageClass();

    this.updateState(state);

    this.addLanguageClass();
  }

  addLanguageClass() {
    const state = this.getState(),
          { language } = state;

    if (language !== null) {
      const languageClass = language; ///

      this.addClass(languageClass);
    }
  }

  removeLanguageClass() {
    const state = this.getState(),
          { language } = state;

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
          }, "");

    this.html(html);
  }

  parentContext() {
	  const setLanguage = this.setLanguage.bind(this),
          updateSyntax = this.update.bind(this), ///
				  scrollSyntax = this.scroll.bind(this), ///
          setSyntaxBounds = this.setBounds.bind(this);  ///

    return ({
      setLanguage,
      updateSyntax,
      scrollSyntax,
      setSyntaxBounds
    });
  }

  setInitialState() {
    const language = null,
          initialState = {
            language
          };

    this.setState(initialState);
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "syntax"
  };

  static fromClass(Class, properties) {
    const syntax = BoundedScrollableElement.fromClass(Class, properties);

    syntax.initialise();

    return syntax;
  }
}

export default withStyle(Syntax)`

  z-index: 0;
  overflow: hidden;
  position: absolute;
  white-space: pre;
  pointer-events: none;
  background-color: transparent;
  
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
