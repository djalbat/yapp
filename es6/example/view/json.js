"use strict";

import View from "../view";

import JSONInterpreter from "../../interpreter/json";

export default class JSONView extends View {
  Interpreter = JSONInterpreter;

  initialContent = ``;

  static defaultProperties = {
    className: "json"
  };
};
