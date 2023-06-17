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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _syntax = /*#__PURE__*/ _interop_require_default(require("./style/syntax"));
var _firaCode = /*#__PURE__*/ _interop_require_default(require("./style/firaCode"));
var _defaults = require("./defaults");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
function renderYappStyles() {
    var host = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_HOST;
    renderStyles();
    renderStyle(_syntax.default);
    renderStyle((0, _firaCode.default)(host));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuaW1wb3J0IHsgREVGQVVMVF9IT1NUIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJZYXBwU3R5bGVzKGhvc3QgPSBERUZBVUxUX0hPU1QpIHtcbiAgcmVuZGVyU3R5bGVzKCk7XG5cbiAgcmVuZGVyU3R5bGUoc3ludGF4U3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUoaG9zdCkpO1xufVxuIl0sIm5hbWVzIjpbInJlbmRlcllhcHBTdHlsZXMiLCJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImhvc3QiLCJERUZBVUxUX0hPU1QiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdnQkE7OztlQUFBQTs7O29FQVRNOzZEQUVFOytEQUNFO3dCQUVHOzs7Ozs7QUFFN0IsSUFBUUMsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBRWQsU0FBU0g7UUFBaUJJLE9BQUFBLGlFQUFPQyxzQkFBWTtJQUNsREY7SUFFQUYsWUFBWUssZUFBVztJQUV2QkwsWUFBWU0sSUFBQUEsaUJBQWEsRUFBQ0g7QUFDNUIifQ==