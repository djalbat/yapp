"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";

import syntaxStyle from "./style/syntax";
import firaCodeStyle from "./style/firaCode";
import JavaScriptView from "./example/view/javascript";

const { renderStyle, renderStyles } = withStyle;

const body = new Body(),
      view =

        <JavaScriptView />

      ;

renderStyles();

renderStyle(syntaxStyle);

renderStyle(firaCodeStyle);

body.mount(view);
