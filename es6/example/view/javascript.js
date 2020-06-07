"use strict";

import View from "../view";

import JavaScriptInterpreter from "../../interpreter/javascript";

export default class JavaScriptView extends View {
  Interpreter = JavaScriptInterpreter;

  initialContent = `"use strict";

import "juxtapose";

import { Body } from "easy";

function simpleApp(selector) {
  const body = new Body(selector);

  body.mount(

    <p>
      A simple application.
    </p>

  );
}

export default withStyle(simpleApp)\`

  color: #333;

\`;
`;

  static defaultProperties = {
    className: "javascript"
  };
};
