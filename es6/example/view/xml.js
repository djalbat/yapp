"use strict";

import View from "../view";

import XMLInterpreter from "../../interpreter/xml";

export default class XMLView extends View {
  Interpreter = XMLInterpreter;

  initialContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Look to Windard by Iain M. Banks -->
<book>
  <name>
    Look to Windward
  </name>
  <author>
    Iain M. Banks
  </author>
  <language>
    English
  </language>
  <genre>
    Science fiction
  </genre>
</book>`;

  static defaultProperties = {
    className: "xml"
  };
};
