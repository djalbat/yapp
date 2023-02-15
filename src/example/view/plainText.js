"use strict";

import View from "../view";

import PlainTextPlugin from "../../plugin/plainText";

export default class PlainTextView extends View {
  static Plugin = PlainTextPlugin;

  static firaCode = true;

  static initialContent = `Some plain text...`;

  static defaultProperties = {
    className: "plain-text"
  };
};
