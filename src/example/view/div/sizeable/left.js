"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class LeftSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "left"
  };
}

export default withStyle(LeftSizeableDiv)`

  width: 80rem;
  min-width: 24rem;
  
`;
