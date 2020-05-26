"use strict";

import { Body } from "easy";

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

        <div />

      ;

outerDiv.append(innerDiv);

body.append(outerDiv);

const outerDivWidth = outerDiv.getWidth(),
      innerDivWidth = innerDiv.getWidth(),
      scrollbarThickness = outerDivWidth - innerDivWidth; ///

outerDiv.remove();

export default scrollbarThickness;
