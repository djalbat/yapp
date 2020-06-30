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
  renderStyle(_yapp["default"]);
  renderStyle(_syntax["default"]);
  renderStyle(_firaCode["default"]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcllhcHBTdHlsZXMuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJZYXBwU3R5bGVzIiwieWFwcFN0eWxlIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBSjBDO0lBTWxDQSxXLEdBQThCQyx5QixDQUE5QkQsVztJQUFhRSxZLEdBQWlCRCx5QixDQUFqQkMsWTs7QUFFZCxTQUFTQyxnQkFBVCxHQUE0QjtBQUNqQ0QsRUFBQUEsWUFBWTtBQUVaRixFQUFBQSxXQUFXLENBQUNJLGdCQUFELENBQVg7QUFFQUosRUFBQUEsV0FBVyxDQUFDSyxrQkFBRCxDQUFYO0FBRUFMLEVBQUFBLFdBQVcsQ0FBQ00sb0JBQUQsQ0FBWDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB5YXBwU3R5bGUgZnJvbSBcIi4vc3R5bGUveWFwcFwiXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuY29uc3QgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJZYXBwU3R5bGVzKCkge1xuICByZW5kZXJTdHlsZXMoKTtcblxuICByZW5kZXJTdHlsZSh5YXBwU3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKHN5bnRheFN0eWxlKTtcblxuICByZW5kZXJTdHlsZShmaXJhQ29kZVN0eWxlKTtcbn1cbiJdfQ==