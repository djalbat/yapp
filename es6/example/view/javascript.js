"use strict";

import View from "../view";

import JavaScriptInterpreter from "../../interpreter/javascript";

export default class JavaScriptView extends View {
  Interpreter = JavaScriptInterpreter;

  initialContent = ``;

  static defaultProperties = {
    className: "javascript"
  };
};
