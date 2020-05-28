"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { firaCodeStyle } from "occam-styles";

import syntaxStyle from "./style/syntax";
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
