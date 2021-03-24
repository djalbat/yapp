"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xml = require("../../scheme/syntax/xml");

var xmlSyntaxStyle = "\n\n  .xml.syntax > .name { color: ".concat(_xml.nameColour, "; }\n\n  .xml.syntax > .attribute { color: ").concat(_xml.attributeColour, "; }\n\n");
var _default = xmlSyntaxStyle;
exports["default"] = _default;