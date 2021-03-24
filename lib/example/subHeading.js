"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

///
var SubHeading = _easyWithStyle["default"].h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  margin: 1rem 0 0.5rem 0;\n  font-size: 2rem;\n  \n  :first-of-type {\n    margin-top: 0;\n  }\n\n"])));

var _default = SubHeading;
exports["default"] = _default;