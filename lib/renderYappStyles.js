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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJZYXBwU3R5bGVzLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsInN5bnRheFN0eWxlIiwiZmlyYUNvZGVTdHlsZSIsIkRFRkFVTFRfSE9TVCIsInJlbmRlclN0eWxlIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyWWFwcFN0eWxlcyIsImhvc3QiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFXSSxnQkFBZ0IsR0FBaEIsZ0JBQWdCO0FBVFYsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFnQixDQUFoQixPQUFnQjtBQUNkLEdBQWtCLENBQWxCLFNBQWtCO0FBRWpCLEdBQWEsQ0FBYixVQUFhOzs7Ozs7QUFFeEMsR0FBSyxDQUFHLFdBQVcsR0FQRyxjQUFpQixTQU8vQixXQUFXLEVBQUUsWUFBWSxHQVBYLGNBQWlCLFNBT2xCLFlBQVk7U0FFakIsZ0JBQWdCLENBQUMsS0FBbUIsRUFBRSxDQUFDO1FBQXRCLElBQUksR0FBSixLQUFtQixjQUp6QixVQUFhLGdCQUlQLEtBQW1CO0lBQ2xELFlBQVk7SUFFWixXQUFXLENBVlcsT0FBZ0I7SUFZdEMsV0FBVyxLQVhhLFNBQWtCLFVBV2hCLElBQUk7QUFDaEMsQ0FBQyJ9