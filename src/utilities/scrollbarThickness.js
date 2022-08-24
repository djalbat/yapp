"use strict";

import { React, Body } from "easy";

import { stripPixels } from "../utilities/css";
import { scrollbarThickness as stylesScrollbarThickness } from "../styles";

const body = new Body(),
      style = {
        width: "50px",
        height: "50px",
        overflow: "scroll"
      },
      outerDiv =

        <div style={style} />

      ,
      innerDiv =

        <div/>

      ;

outerDiv.append(innerDiv);

body.append(outerDiv);

const outerDivWidth = outerDiv.getWidth(),
      innerDivWidth = innerDiv.getWidth();

outerDiv.remove();

export function getScrollbarThickness(hiddenScrollbars, fancyScrollbars) {
  let scrollbarThickness;

  if (hiddenScrollbars) {
    scrollbarThickness = 0;
  } else {
    scrollbarThickness = fancyScrollbars ?
                           stripPixels(stylesScrollbarThickness) :  ///
                             outerDivWidth - innerDivWidth; ///
  }

  return scrollbarThickness;
}
