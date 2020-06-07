"use strict";

import View from "../view";

import XMLInterpreter from "../../interpreter/xml";

export default class XMLView extends View {
  Interpreter = XMLInterpreter;

  initialContent = ``;

  static defaultProperties = {
    className: "xml"
  };
};
