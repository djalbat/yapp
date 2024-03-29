"use strict";

import View from "../view";

import JavaScriptPlugin from "../../plugin/javascript";

export default class JavaScriptView extends View {
  static Plugin = JavaScriptPlugin;

  static firaCode = true;

  static initialContent = `"use strict";

import "juxtapose";

import withStyle from "easy-with-style"; ///

import { Body } from "easy";

function simpleApplication(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApplication)\`

  color: #333;

\`;`;

  static defaultProperties = {
    className: "javascript"
  };
};
