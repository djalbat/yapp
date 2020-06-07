"use strict";

import Yapp from "./index"; ///

import { renderStyles } from "./index"; ///

const yapp = Yapp.fromContent(`"use strict";

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
`);

const body = document.querySelector("body");

renderStyles();

body.appendChild(yapp.domElement);

yapp.didMount();
