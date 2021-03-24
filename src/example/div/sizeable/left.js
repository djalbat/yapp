"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class LeftSizeableDiv extends SizeableDiv {
  parentContext() {
    const context = this.getContext(),
          getLeftSizeableDivWidth = this.getWidth.bind(this),
          parentContext = Object.assign(context, {
            getLeftSizeableDivWidth
          });

    return parentContext;
  }

  static defaultProperties = {
    className: "left"
  };
}

export default withStyle(LeftSizeableDiv)`

  width: 60rem;
  min-width: 24rem;
  
`;
