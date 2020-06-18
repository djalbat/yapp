"use strict";

import View from "../view";

import JavaScriptPlugin from "../../plugin/javascript";

export default class JavaScriptView extends View {
  Plugin = JavaScriptPlugin;

  initialContent = `function getEmailAddress(selector) {
  const value = this.getValue(),
        emailAddress = value; ///
  
  return emailAddress;  
}`;

  static defaultProperties = {
    className: "javascript"
  };
};

/*
"use strict";

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

export default withStyle(simpleApplication)`

  color: #333;

`;
*/