"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var body = new _easy.Body(),
    style = {
  width: "50px",
  height: "50px",
  overflow: "scroll"
},
    outerDiv = /*#__PURE__*/_easy.React.createElement("div", {
  style: style
}),
    innerDiv = /*#__PURE__*/_easy.React.createElement("div", null);

outerDiv.append(innerDiv);
body.append(outerDiv);
var outerDivWidth = outerDiv.getWidth(),
    innerDivWidth = innerDiv.getWidth(),
    scrollbarThickness = outerDivWidth - innerDivWidth; ///

outerDiv.remove();
var _default = scrollbarThickness;
exports["default"] = _default;