"use strict";

import withStyle from "easy-with-style";  ///

import { firaCodeFontMixin } from "occam-styles";

const CharactersDiv = (properties) => {
  const { className } = properties;

  return (

    <div className={`${className} characters`} />

  );
};

export default withStyle(CharactersDiv)`

  top: 0;
  position: fixed;
  white-space: pre;

  ${firaCodeFontMixin}

`;
