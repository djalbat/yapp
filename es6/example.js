"use strict";

import "juxtapose";

import { Body } from "easy";

import { renderYappStyles } from "./index"; ///

import XMLView from "./example/view/xml";
import JSONView from "./example/view/json";
import JavaScriptView from "./example/view/javascript";

let View;

const body = new Body(),
      example = window.location.search.substring(1);  ///

switch (example) {
  case "xml": View = XMLView; break;
  case "json": View = JSONView; break;
  case "javascript": View = JavaScriptView; break;
}

renderYappStyles();

body.mount(

  <View />

);
