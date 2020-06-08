"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderYappStyles = renderYappStyles;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _yapp = _interopRequireDefault(require("./style/yapp"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle,
    renderStyles = _easyWithStyle["default"].renderStyles;

function renderYappStyles() {
  renderStyles();
  renderStyle("\n  \n    ".concat(_yapp["default"], "\n  \n    ").concat(_syntax["default"], "\n  \n    ").concat(_firaCode["default"], "\n\n  "));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcllhcHBTdHlsZXMuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJZYXBwU3R5bGVzIiwieWFwcFN0eWxlIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBSjBDO0lBTWxDQSxXLEdBQThCQyx5QixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCx5QixDQUFqQkMsWTs7QUFFZCxTQUFTQyxnQkFBVCxHQUE0QjtBQUVqQ0QsRUFBQUEsWUFBWTtBQUVaRixFQUFBQSxXQUFXLHFCQUVQSSxnQkFGTyx1QkFJUEMsa0JBSk8sdUJBTVBDLG9CQU5PLFlBQVg7QUFTRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeWFwcFN0eWxlIGZyb20gXCIuL3N0eWxlL3lhcHBcIlxuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiXG5pbXBvcnQgZmlyYUNvZGVTdHlsZSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiXG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyWWFwcFN0eWxlcygpIHtcblxuICByZW5kZXJTdHlsZXMoKTtcblxuICByZW5kZXJTdHlsZShgXG4gIFxuICAgICR7eWFwcFN0eWxlfVxuICBcbiAgICAke3N5bnRheFN0eWxlfVxuICBcbiAgICAke2ZpcmFDb2RlU3R5bGV9XG5cbiAgYCk7XG59XG4iXX0=