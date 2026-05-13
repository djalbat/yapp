"use strict";

import Textarea from "../textarea";

export default class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    const value = this.getValue(),
          jsonString = value, ///
          json = JSON.parse(jsonString),
          lexicalEntries = json;  ///

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const json = lexicalEntries,  ///
          jsonString = JSON.stringify(json, null, 2),
          value = jsonString; ///

    this.setValue(value);
  }

  parentContext() {
    const getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);

    return ({
      getLexicalEntries,
      setLexicalEntries
    });
  }

  static defaultProperties = {
    className: "lexical-entries",
    spellCheck: "false"
  };
}
