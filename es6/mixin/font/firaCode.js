"use strict";

import { FIRA_CODE_FONT_SIZE, FIRA_CODE_LINE_HEIGHT } from "../../constants";

const firaCodeFontMixin = `

  font-size: ${FIRA_CODE_FONT_SIZE};
  line-height: ${FIRA_CODE_LINE_HEIGHT}px;
  font-family: "Fira Code", monospace;
  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
  font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

`;

export default firaCodeFontMixin;
