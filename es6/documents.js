"use strict";

import JavaScriptDocument from "./document/javascript";

export function documentFromLanguage(language) {
  let Document;  ///

  switch (language) {
    default : Document = JavaScriptDocument; break;
  }

  const document = Document.fromNothing();

  return document;
}
