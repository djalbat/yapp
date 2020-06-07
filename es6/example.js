"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { syntaxStyle, firaCodeStyle } from "./index"; ///

import { Body } from "easy";

import XMLView from "./example/view/xml";
import JSONView from "./example/view/json";
import JavaScriptView from "./example/view/javascript";

const { renderStyle, renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "xml": View = XMLView; break;
  case "json": View = JSONView; break;
  case "javascript": View = JavaScriptView; break;
}

renderStyles();

renderStyle(syntaxStyle);

renderStyle(firaCodeStyle);

body.mount(

  <View />

);
