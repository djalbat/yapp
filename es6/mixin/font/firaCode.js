"use strict";

const firaCodeFontMixin = `

  font-size: 1.3rem;
  line-height: 20px;
  font-family: "Fira Code";
  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
  font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */

`;

export default firaCodeFontMixin;
