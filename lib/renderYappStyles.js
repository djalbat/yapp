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
    renderStyle((0, _firaCode).default(host));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCJcbmltcG9ydCBmaXJhQ29kZVN0eWxlIGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCJcblxuaW1wb3J0IHtERUZBVUxUX0hPU1R9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcllhcHBTdHlsZXMoaG9zdCA9IERFRkFVTFRfSE9TVCkge1xuICByZW5kZXJTdHlsZXMoKTtcblxuICByZW5kZXJTdHlsZShzeW50YXhTdHlsZSk7XG5cbiAgcmVuZGVyU3R5bGUoZmlyYUNvZGVTdHlsZShob3N0KSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQVdJLGdCQUFnQixHQUFoQixnQkFBZ0I7QUFUVixHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQWdCLENBQWhCLE9BQWdCO0FBQ2QsR0FBa0IsQ0FBbEIsU0FBa0I7QUFFakIsR0FBYSxDQUFiLFVBQWE7Ozs7OztBQUV4QyxHQUFLLENBQUcsV0FBVyxHQVBHLGNBQWlCLFNBTy9CLFdBQVcsRUFBRSxZQUFZLEdBUFgsY0FBaUIsU0FPbEIsWUFBWTtTQUVqQixnQkFBZ0IsQ0FBQyxLQUFtQixFQUFFLENBQUM7UUFBdEIsSUFBSSxHQUFKLEtBQW1CLGNBSnpCLFVBQWEsZ0JBSVAsS0FBbUI7SUFDbEQsWUFBWTtJQUVaLFdBQVcsQ0FWVyxPQUFnQjtJQVl0QyxXQUFXLEtBWGEsU0FBa0IsVUFXaEIsSUFBSTtBQUNoQyxDQUFDIn0=