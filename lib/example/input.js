"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _easyWithStyle["default"])(_easy.Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  border: 1px solid darkgrey;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  font-family: monospace;\n\n"])));

exports["default"] = _default;