"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class MiddleSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "middle"
  };
}

export default withStyle(MiddleSizeableDiv)`

  height: 12rem;
  min-height: 6rem;
  
`;
