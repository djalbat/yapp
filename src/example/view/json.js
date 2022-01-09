"use strict";

import View from "../view";

import JSONPlugin from "../../plugin/json";

export default class JSONView extends View {
  static Plugin = JSONPlugin;

  static firaCode = true;

  static initialContent = `{  
  "type": "book",
  "title": "Look to Windward",
  "author": "Look to Windward",
  "stores" : [{
    "identifier": 123
  }],
  "details" : {
    "in-print": true,
    "stock-count": 123
  }
}`;

  static defaultProperties = {
    className: "json"
  };
};
