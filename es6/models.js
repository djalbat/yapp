"use strict";

import JavaScriptModel from "./model/javascript";

export function modelFromLanguage(language) {
  let Model;  ///

  switch (language) {
    default : Model = JavaScriptModel; break;
  }

  const model = Model.fromNothing();

  return model;
}
