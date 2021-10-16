'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _yapp = _interopRequireDefault(require("./yapp"));
var _syntax = _interopRequireDefault(require("./style/syntax"));
var _firaCode = _interopRequireDefault(require("./style/firaCode"));
var _colour = _interopRequireDefault(require("./scheme/colour"));
var _renderYappStyles = require("./renderYappStyles");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = _yapp.default;
exports.default = _default;
Object.defineProperty(exports, "syntaxStyle", {
    enumerable: true,
    get: function() {
        return _syntax.default;
    }
});
Object.defineProperty(exports, "firaCodeStyle", {
    enumerable: true,
    get: function() {
        return _firaCode.default;
    }
});
Object.defineProperty(exports, "colourScheme", {
    enumerable: true,
    get: function() {
        return _colour.default;
    }
});
Object.defineProperty(exports, "renderYappStyles", {
    enumerable: true,
    get: function() {
        return _renderYappStyles.renderYappStyles;
    }
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuL3lhcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgWWFwcDtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29sb3VyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgeyByZW5kZXJZYXBwU3R5bGVzIH0gZnJvbSBcIi4vcmVuZGVyWWFwcFN0eWxlc1wiO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUssR0FBUSxDQUFSLEtBQVE7Ozs7Ozs7Ozs7ZUFBUixLQUFROztnQ0FJTCxXQUFXOzs7dUJBQXRCLE9BQU87OztnQ0FDSSxhQUFhOzs7eUJBQXhCLE9BQU87OztnQ0FDSSxZQUFZOzs7dUJBQXZCLE9BQU87OztnQ0FFUCxnQkFBZ0I7OztpQ0FBaEIsZ0JBQWdCIn0=