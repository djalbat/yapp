"use strict";

import withStyle from "easy-with-style";  ///

import syntaxStyle from "./style/syntax"
import firaCodeStyle from "./style/firaCode"

import { DEFAULT_HOST } from "./defaults";

const { renderStyle, renderStyles } = withStyle;

export function renderYappStyles(host = DEFAULT_HOST) {
  renderStyles();

  renderStyle(syntaxStyle);

  renderStyle(firaCodeStyle(host));
}
