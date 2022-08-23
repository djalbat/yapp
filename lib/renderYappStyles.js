"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "renderYappStyles", {
    enumerable: true,
    get: function() {
        return renderYappStyles;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("./style/syntax"));
var _firaCode = /*#__PURE__*/ _interopRequireDefault(require("./style/firaCode"));
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
    renderStyle((0, _firaCode.default)(host));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuaW1wb3J0IHsgREVGQVVMVF9IT1NUIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJZYXBwU3R5bGVzKGhvc3QgPSBERUZBVUxUX0hPU1QpIHtcbiAgcmVuZGVyU3R5bGVzKCk7XG5cbiAgcmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUoaG9zdCkpO1xufVxuIl0sIm5hbWVzIjpbInJlbmRlcllhcHBTdHlsZXMiLCJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImhvc3QiLCJERUZBVUxUX0hPU1QiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFXR0Esa0JBQWdCOzs7ZUFBaEJBLGdCQUFnQjs7O2tFQVRWLGlCQUFpQjsyREFFZixnQkFBZ0I7NkRBQ2Qsa0JBQWtCO3dCQUVmLFlBQVk7Ozs7OztBQUV6QyxJQUFRQyxXQUFXLEdBQW1CQyxjQUFTLFFBQUEsQ0FBdkNELFdBQVcsRUFBRUUsWUFBWSxHQUFLRCxjQUFTLFFBQUEsQ0FBMUJDLFlBQVksQUFBZTtBQUV6QyxTQUFTSCxnQkFBZ0IsR0FBc0I7UUFBckJJLElBQUksR0FBSkEsK0NBQW1CLGtCQUFaQyxTQUFZLGFBQUE7SUFDbERGLFlBQVksRUFBRSxDQUFDO0lBRWZGLFdBQVcsQ0FBQ0ssT0FBVyxRQUFBLENBQUMsQ0FBQztJQUV6QkwsV0FBVyxDQUFDTSxJQUFBQSxTQUFhLFFBQUEsRUFBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDIn0=