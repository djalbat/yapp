"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class TopSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "top"
  };
}

export default withStyle(TopSizeableDiv)`

  height: 48rem;
  min-height: 12rem;
  
`;
