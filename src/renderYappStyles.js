"use strict";

import withStyle from "easy-with-style";  ///

import yappStyle from "./style/yapp"
import syntaxStyle from "./style/syntax"
import firaCodeStyle from "./style/firaCode"

const { renderStyle } = withStyle;

export function renderYappStyles(host) {
  renderStyle(yappStyle);

  renderStyle(syntaxStyle);

  renderStyle(firaCodeStyle(host));
}
