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
function renderYappStyles(param) {
    var host = param === void 0 ? _defaults.DEFAULT_HOST : param;
    renderStyles();
    renderStyle(_syntax.default);
    renderStyle((0, _firaCode).default(host));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsInN5bnRheFN0eWxlIiwiZmlyYUNvZGVTdHlsZSIsIkRFRkFVTFRfSE9TVCIsInJlbmRlclN0eWxlIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyWWFwcFN0eWxlcyIsImhvc3QiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7UUFXSSxnQkFBZ0IsR0FBaEIsZ0JBQWdCO0FBVFYsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFnQixDQUFoQixPQUFnQjtBQUNkLEdBQWtCLENBQWxCLFNBQWtCO0FBRWYsR0FBWSxDQUFaLFNBQVk7Ozs7OztBQUV6QyxHQUFLLENBQUcsV0FBVyxHQVBHLGNBQWlCLFNBTy9CLFdBQVcsRUFBRSxZQUFZLEdBUFgsY0FBaUIsU0FPbEIsWUFBWTtTQUVqQixnQkFBZ0IsQ0FBQyxLQUFtQixFQUFFLENBQUM7UUFBdEIsSUFBSSxHQUFKLEtBQW1CLGNBSnZCLFNBQVksZ0JBSVIsS0FBbUI7SUFDbEQsWUFBWTtJQUVaLFdBQVcsQ0FWVyxPQUFnQjtJQVl0QyxXQUFXLEtBWGEsU0FBa0IsVUFXaEIsSUFBSTtBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBzeW50YXhTdHlsZSBmcm9tIFwiLi9zdHlsZS9zeW50YXhcIlxuaW1wb3J0IGZpcmFDb2RlU3R5bGUgZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIlxuXG5pbXBvcnQgeyBERUZBVUxUX0hPU1QgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcllhcHBTdHlsZXMoaG9zdCA9IERFRkFVTFRfSE9TVCkge1xuICByZW5kZXJTdHlsZXMoKTtcblxuICByZW5kZXJTdHlsZShzeW50YXhTdHlsZSk7XG5cbiAgcmVuZGVyU3R5bGUoZmlyYUNvZGVTdHlsZShob3N0KSk7XG59XG4iXX0=