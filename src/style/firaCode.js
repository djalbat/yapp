"use strict";

const firaCodeStyle = (host) => `

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
