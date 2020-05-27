"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { syntaxStyle, firaCodeStyle } from "occam-styles";

import View from "./example/view";

const { renderStyle, renderStyles } = withStyle;

const body = new Body(),
      view =

        <View />

      ;

renderStyles();

renderStyle(syntaxStyle);

renderStyle(firaCodeStyle);

body.mount(view);

view.resizeYapp();

view.updateYapp();  ///
