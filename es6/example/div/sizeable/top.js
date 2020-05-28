"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "easy-layout";

class TopSizeableDiv extends SizeableDiv {
  parentContext() {
    const context = this.getContext(),
          getTopSizeableDivHeight = this.getHeight.bind(this),
          parentContext = Object.assign(context, {
            getTopSizeableDivHeight
          });

    return parentContext;
  }

  static defaultProperties = {
    className: "top"
  };
}

export default withStyle(TopSizeableDiv)`

  height: 36rem;
  min-height: 12rem;
  
`;
