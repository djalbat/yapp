"use strict";

import View from "../view";

import XMLPlugin from "../../plugin/xml";

export default class XMLView extends View {
  static Plugin = XMLPlugin;

  static firaCode = false;

  static initialContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Look to Windward by Iain M. Banks -->
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
