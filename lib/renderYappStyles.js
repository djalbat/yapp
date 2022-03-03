"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderYappStyles = renderYappStyles;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _syntax = _interopRequireDefault(require("./style/syntax"));
var _firaCode = _interopRequireDefault(require("./style/firaCode"));
var _defaults = require("./defaults");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easyWithStyle.default.renderStyle, renderStyles = _easyWithStyle.default.renderStyles;
function renderYappStyles() {
    var host = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_HOST;
    renderStyles();
    renderStyle(_syntax.default);
    renderStyle((0, _firaCode).default(host));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuaW1wb3J0IHsgREVGQVVMVF9IT1NUIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJZYXBwU3R5bGVzKGhvc3QgPSBERUZBVUxUX0hPU1QpIHtcbiAgcmVuZGVyU3R5bGVzKCk7XG5cbiAgcmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUoaG9zdCkpO1xufVxuIl0sIm5hbWVzIjpbInJlbmRlcllhcHBTdHlsZXMiLCJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImhvc3QiLCJERUZBVUxUX0hPU1QiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTtRQVdHQSxnQkFBZ0IsR0FBaEJBLGdCQUFnQixBO0FBVFYsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFnQixDQUFoQixPQUFnQjtBQUNkLEdBQWtCLENBQWxCLFNBQWtCO0FBRWYsR0FBWSxDQUFaLFNBQVk7Ozs7OztBQUV6QyxHQUFLLENBQUdDLFdBQVcsR0FBbUJDLGNBQVMsU0FBdkNELFdBQVcsRUFBRUUsWUFBWSxHQUFLRCxjQUFTLFNBQTFCQyxZQUFZO1NBRWpCSCxnQkFBZ0IsR0FBc0IsQ0FBQztRQUF0QkksSUFBSSxvRUFBR0MsU0FBWTtJQUNsREYsWUFBWSxFQUFFLENBQUM7SUFFZkYsV0FBVyxDQUFDSyxPQUFXLFNBQUMsQ0FBQztJQUV6QkwsV0FBVyxLQUFDTSxTQUFhLFVBQUNILElBQUksRUFBRSxDQUFDO0FBQ25DLENBQUMifQ==