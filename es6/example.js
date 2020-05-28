"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { firaCodeStyle } from "occam-styles";

import View from "./example/view";
import syntaxStyle from "./style/syntax";

const { renderStyle, renderStyles } = withStyle;

const body = new Body(),
      view =

        <View />

      ;

renderStyles();

renderStyle(syntaxStyle);

renderStyle(firaCodeStyle);

body.mount(view);
