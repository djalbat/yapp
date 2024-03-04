"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { renderYappStyles } from "./index"; ///

import XMLView from "./example/view/xml";
import JSONView from "./example/view/json";
import PlainTextView from "./example/view/plainText";
import JavaScriptView from "./example/view/javascript";

const { renderStyles } = withStyle;

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "xml": View = XMLView; break;
  case "json": View = JSONView; break;
  case "plain-text": View = PlainTextView; break;
  case "javascript": View = JavaScriptView; break;
}

renderYappStyles();

renderStyles();

body.mount(

  <View/>

);
