"use strict";

import { DEFAULT_HOST } from "../defaults";

const firaCodeStyle = (host = DEFAULT_HOST) => `

  @font-face {
    src: url("${host}/css/woff2/FiraCode-Regular.woff2");
    font-family: "Fira Code";
    font-weight: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/FiraCode-Bold.woff2");
    font-family: "Fira Code";
    font-weight: bold;
  }

`;

export default firaCodeStyle;
