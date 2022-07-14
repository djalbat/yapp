"use strict";

import withStyle from "easy-with-style";  ///

import ScrollableElement from "./element/scrollable";

class Syntax extends ScrollableElement {
  setBounds(bounds) {
    const top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();

    this.position(top, left);
    this.setWidth(width);
    this.setHeight(height);
  }

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

  setInitialState() {
    const language = null;

    this.setState({
      language
    });
  }

  parentContext() {
	  const setLanguage = this.setLanguage.bind(this),
          updateSyntax = this.update.bind(this), ///
				  scrollSyntax = this.scroll.bind(this), ///
          setSyntaxBounds = this.setBounds.bind(this);  //

    return ({
      setLanguage,
      updateSyntax,
      scrollSyntax,
      setSyntaxBounds
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

  z-index: 0;
  overflow: hidden;
  position: absolute;
  white-space: pre;
  pointer-events: none;
  background-color: inherit;

  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  text-rendering: inherit;
  font-feature-settings: inherit;

`;
