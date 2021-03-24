"use strict";

import Textarea from "../textarea";

export default class TokensTextarea extends Textarea {
  setTokens(tokens) {
    if (tokens !== null) {
      let lineNumber = 1,
          previousToken = null;

      const html = tokens.reduce((html, token) => {
        const tokenHTML = token.asHTML();

        if (previousToken === null) {
          html += `${lineNumber++}: `;
        } else {
          const previousTokenEndOfLineToken = previousToken.isEndOfLineToken();

          if (previousTokenEndOfLineToken) {
            html += `${lineNumber++}: `;
          }
        }

        html += tokenHTML;

        previousToken = token;

        return html;
      }, "");

      this.html(html);
    } else {
      this.clearTokens();
    }
  }

  clearTokens() {
    const html = "";

    this.html(html);
  }

  parentContext() {
    const setTokens = this.setTokens.bind(this),
          clearTokens = this.clearTokens.bind(this);

    return ({
      setTokens,
      clearTokens
    });
  }

  static defaultProperties = {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
  };
}
