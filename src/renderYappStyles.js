"use strict";

import withStyle from "easy-with-style";  ///

import yappStyle from "./style/yapp"
import syntaxStyle from "./style/syntax"
import firaCodeStyle from "./style/firaCode"

import { DEFAULT_HOST } from "./defaults";

const { renderStyle } = withStyle;

export function renderYappStyles(host = DEFAULT_HOST) {
  renderStyle(yappStyle);

  renderStyle(syntaxStyle);

  renderStyle(firaCodeStyle(host));
}
