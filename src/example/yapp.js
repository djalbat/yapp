"use strict";

import withStyle from "easy-with-style";  ///

import Yapp from "../index";  ///

export default withStyle(class extends Yapp {
  static defaultProperties = {
    editable: true,
    firaCode: true,
    hiddenGutter: false,
    fancyScrollbars: true
  };
})`

  border: 1px solid;
  border-color: #666;
  
`;
