"use strict";

import View from "../view";

import JSONInterpreter from "../../interpreter/json";

export default class JSONView extends View {
  Interpreter = JSONInterpreter;

  initialContent = `{  
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
