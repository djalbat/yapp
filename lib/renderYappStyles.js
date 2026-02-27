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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _yapp = /*#__PURE__*/ _interop_require_default(require("./style/yapp"));
const _syntax = /*#__PURE__*/ _interop_require_default(require("./style/syntax"));
const _firaCode = /*#__PURE__*/ _interop_require_default(require("./style/firaCode"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { renderStyle } = _easywithstyle.default;
function renderYappStyles(host) {
    renderStyle(_yapp.default);
    renderStyle(_syntax.default);
    renderStyle((0, _firaCode.default)(host));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeWFwcFN0eWxlIGZyb20gXCIuL3N0eWxlL3lhcHBcIlxuaW1wb3J0IHN5bnRheFN0eWxlIGZyb20gXCIuL3N0eWxlL3N5bnRheFwiXG5pbXBvcnQgZmlyYUNvZGVTdHlsZSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiXG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUgfSA9IHdpdGhTdHlsZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcllhcHBTdHlsZXMoaG9zdCkge1xuICByZW5kZXJTdHlsZSh5YXBwU3R5bGUpO1xuXG4gIHJlbmRlclN0eWxlKHN5bnRheFN0eWxlKTtcblxuICByZW5kZXJTdHlsZShmaXJhQ29kZVN0eWxlKGhvc3QpKTtcbn1cbiJdLCJuYW1lcyI6WyJyZW5kZXJZYXBwU3R5bGVzIiwicmVuZGVyU3R5bGUiLCJ3aXRoU3R5bGUiLCJob3N0IiwieWFwcFN0eWxlIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVZ0JBOzs7ZUFBQUE7OztzRUFSTTs2REFFQTsrREFDRTtpRUFDRTs7Ozs7O0FBRTFCLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdDLHNCQUFTO0FBRTFCLFNBQVNGLGlCQUFpQkcsSUFBSTtJQUNuQ0YsWUFBWUcsYUFBUztJQUVyQkgsWUFBWUksZUFBVztJQUV2QkosWUFBWUssSUFBQUEsaUJBQWEsRUFBQ0g7QUFDNUIifQ==