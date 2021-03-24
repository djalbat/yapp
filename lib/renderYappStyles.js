"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderYappStyles = renderYappStyles;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;

function renderYappStyles() {
  var host = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.DEFAULT_HOST;
  renderStyles();
  renderStyle(_syntax["default"]);
  renderStyle((0, _firaCode["default"])(host));
}