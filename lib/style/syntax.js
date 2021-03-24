"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _xml = _interopRequireDefault(require("../style/syntax/xml"));

var _json = _interopRequireDefault(require("../style/syntax/json"));

var _default2 = _interopRequireDefault(require("../style/syntax/default"));

var _javaScript = _interopRequireDefault(require("../style/syntax/javaScript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var syntaxStyle = "\n    \n  ".concat(_default2["default"], "\n  \n  ").concat(_xml["default"], "\n  \n  ").concat(_json["default"], "\n  \n  ").concat(_javaScript["default"], "\n\n");
var _default = syntaxStyle;
exports["default"] = _default;