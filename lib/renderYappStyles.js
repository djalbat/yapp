"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderYappStyles = renderYappStyles;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _syntax = _interopRequireDefault(require("./style/syntax"));
var _firaCode = _interopRequireDefault(require("./style/firaCode"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easyWithStyle.default.renderStyle, renderStyles = _easyWithStyle.default.renderStyles;
function renderYappStyles(param) {
    var host = param === void 0 ? _constants.DEFAULT_HOST : param;
    renderStyles();
    renderStyle(_syntax.default);
    renderStyle(_firaCode.default(host));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuaW1wb3J0IHtERUZBVUxUX0hPU1R9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcllhcHBTdHlsZXMoaG9zdCA9IERFRkFVTFRfSE9TVCkge1xuICByZW5kZXJTdHlsZXMoKTtcblxuICByZW5kZXJTdHlsZShzeW50YXhTdHlsZSk7XG5cbiAgcmVuZGVyU3R5bGUoZmlyYUNvZGVTdHlsZShob3N0KSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVdJLGdCQUFnQixHQUFoQixnQkFBZ0I7SUFUVixjQUFpQjtJQUVmLE9BQWdCO0lBQ2QsU0FBa0I7SUFFakIsVUFBYTs7Ozs7O0lBRWhDLFdBQVcsR0FQRyxjQUFpQixTQU8vQixXQUFXLEVBQUUsWUFBWSxHQVBYLGNBQWlCLFNBT2xCLFlBQVk7U0FFakIsZ0JBQWdCLENBQUMsS0FBbUI7UUFBbkIsSUFBSSxHQUFKLEtBQW1CLGNBSnpCLFVBQWEsZ0JBSVAsS0FBbUI7SUFDbEQsWUFBWTtJQUVaLFdBQVcsQ0FWVyxPQUFnQjtJQVl0QyxXQUFXLENBWGEsU0FBa0IsU0FXaEIsSUFBSSJ9