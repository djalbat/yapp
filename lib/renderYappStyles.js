"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderYappStyles = renderYappStyles;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;

function renderYappStyles() {
  renderStyles();
  renderStyle(_syntax["default"]);
  renderStyle(_firaCode["default"]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcllhcHBTdHlsZXMuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJZYXBwU3R5bGVzIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7O0FBSDBDO0lBS2xDQSxXLEdBQThCQyx5QixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCx5QixDQUFqQkMsWTs7QUFFZCxTQUFTQyxnQkFBVCxHQUE0QjtBQUNqQ0QsRUFBQUEsWUFBWTtBQUVaRixFQUFBQSxXQUFXLENBQUNJLGtCQUFELENBQVg7QUFFQUosRUFBQUEsV0FBVyxDQUFDSyxvQkFBRCxDQUFYO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiXG5pbXBvcnQgZmlyYUNvZGVTdHlsZSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiXG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyWWFwcFN0eWxlcygpIHtcbiAgcmVuZGVyU3R5bGVzKCk7XG5cbiAgcmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUpO1xufVxuIl19