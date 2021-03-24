"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("../../scheme/syntax/default");

var defaultSyntaxStyle = "\n\n  .syntax * { \n    font-size: inherit;\n    line-height: inherit;\n    font-family: inherit;\n    text-rendering: inherit;\n    font-feature-settings: inherit;\n  }\n  \n  .syntax, \n  .syntax > * { \n    color: ".concat(_default2.colour, "; \n  }\n    \n  .syntax > .keyword { color: ").concat(_default2.keywordColour, "; }\n  \n  .syntax > .comment { color: ").concat(_default2.commentColour, "; }\n  \n  .syntax > .string-literal { color: ").concat(_default2.stringLiteralColour, "; } \n  \n  .syntax > .error {\n    background-image: url(\"css/image/squiggle.png\");\n    background-repeat: repeat-x;\n    background-position: bottom;\n  } \n\n");
var _default = defaultSyntaxStyle;
exports["default"] = _default;