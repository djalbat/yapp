"use strict";

import withStyle from "easy-with-style";  ///

import BoundedScrollableElement from "./element/bounded/scrollable";

class Syntax extends BoundedScrollableElement {
  setDocumentType(documentType) {
    const state = {
      documentType
    };

    this.removeDocumentTypeClass();

    this.updateState(state);

    this.addDocumentTypeClass();
  }

  addDocumentTypeClass() {
    const state = this.getState(),
          { documentType } = state;

    if (documentType !== null) {
      const documentTypeClass = documentType; ///

      this.addClass(documentTypeClass);
    }
  }

  removeDocumentTypeClass() {
    const state = this.getState(),
          { documentType } = state;

    if (documentType !== null) {
      const documentTypeClass = documentType; ///

      this.removeClass(documentTypeClass);
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
	  const updateSyntax = this.update.bind(this), ///
				  scrollSyntax = this.scroll.bind(this), ///
          setSyntaxBounds = this.setBounds.bind(this), ///
          setDocumentType = this.setDocumentType.bind(this);

    return ({
      updateSyntax,
      scrollSyntax,
      setSyntaxBounds,
      setDocumentType
    });
  }

  setInitialState() {
    const documentType = null,
          initialState = {
            documentType
          };

    this.setState(initialState);
  }

  initialise(properties) {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "syntax"
  };

  static fromClass(Class, properties) {
    const syntax = BoundedScrollableElement.fromClass(Class, properties);

    syntax.initialise(properties);

    return syntax;
  }
}

export default withStyle(Syntax)`

  z-index: 1;
  overflow: hidden;
  position: absolute;
  white-space: pre;
  user-select: none;
  pointer-events: none;
  background-color: transparent;
  
`;
