"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _javaScript = require("../../scheme/syntax/javaScript");

var javaScriptSyntaxStyle = "\n\n  .javascript.syntax > .jsx { \n    color: ".concat(_javaScript.jsxColour, ";\n    font-weight: bold; \n  }\n\n  .javascript.syntax > .variable { color: ").concat(_javaScript.variableColour, "; }\n\n  .javascript.syntax > .argument { color: ").concat(_javaScript.argumentColour, "; }\n\n");
var _default = javaScriptSyntaxStyle;
exports["default"] = _default;