"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderStyles = renderStyles;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _yapp = _interopRequireDefault(require("./style/yapp"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

var _firaCode = _interopRequireDefault(require("./style/firaCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
function renderStyles() {
  var renderStyle = _easyWithStyle["default"].renderStyle,
      renderStyles = _easyWithStyle["default"].renderStyles;
  renderStyles();
  renderStyle("\n  \n    ".concat(_yapp["default"], "\n  \n    ").concat(_syntax["default"], "\n  \n    ").concat(_firaCode["default"], "\n\n  "));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInlhcHBTdHlsZSIsInN5bnRheFN0eWxlIiwiZmlyYUNvZGVTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUowQztBQU1uQyxTQUFTQSxZQUFULEdBQXdCO0FBQUEsTUFDckJDLFdBRHFCLEdBQ1NDLHlCQURULENBQ3JCRCxXQURxQjtBQUFBLE1BQ1JELFlBRFEsR0FDU0UseUJBRFQsQ0FDUkYsWUFEUTtBQUc3QkEsRUFBQUEsWUFBWTtBQUVaQyxFQUFBQSxXQUFXLHFCQUVQRSxnQkFGTyx1QkFJUEMsa0JBSk8sdUJBTVBDLG9CQU5PLFlBQVg7QUFTRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeWFwcFN0eWxlIGZyb20gXCIuL3N0eWxlL3lhcHBcIlxuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiXG5pbXBvcnQgZmlyYUNvZGVTdHlsZSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG4gIGNvbnN0IHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG4gIHJlbmRlclN0eWxlcygpO1xuXG4gIHJlbmRlclN0eWxlKGBcbiAgXG4gICAgJHt5YXBwU3R5bGV9XG4gIFxuICAgICR7c3ludGF4U3R5bGV9XG4gIFxuICAgICR7ZmlyYUNvZGVTdHlsZX1cblxuICBgKTtcbn1cbiJdfQ==