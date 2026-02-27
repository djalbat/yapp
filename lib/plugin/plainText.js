"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextPlugin;
    }
});
const _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../lexer/plainText"));
const _plainText1 = /*#__PURE__*/ _interop_require_default(require("../parser/plainText"));
const _plainText2 = /*#__PURE__*/ _interop_require_default(require("../processor/plainText"));
const _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PlainTextPlugin extends _plugin.default {
    static language = _languages.PLAIN_TEXT_LANGUAGE;
    static Lexer = _plainText.default;
    static Parser = _plainText1.default;
    static Processor = _plainText2.default;
    static fromNothing() {
        return _plugin.default.fromNothing(PlainTextPlugin);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBQbGFpblRleHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc3RhdGljIGxhbmd1YWdlID0gUExBSU5fVEVYVF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBQbGFpblRleHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBQbGFpblRleHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKFBsYWluVGV4dFBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJQbGFpblRleHRQbHVnaW4iLCJQbHVnaW4iLCJsYW5ndWFnZSIsIlBMQUlOX1RFWFRfTEFOR1VBR0UiLCJMZXhlciIsIlBsYWluVGV4dExleGVyIiwiUGFyc2VyIiwiUGxhaW5UZXh0UGFyc2VyIiwiUHJvY2Vzc29yIiwiUGxhaW5UZXh0UHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7K0RBUEY7a0VBQ1E7bUVBQ0M7bUVBQ0c7MkJBRUs7Ozs7OztBQUVyQixNQUFNQSx3QkFBd0JDLGVBQU07SUFDakQsT0FBT0MsV0FBV0MsOEJBQW1CLENBQUM7SUFFdEMsT0FBT0MsUUFBUUMsa0JBQWMsQ0FBQztJQUU5QixPQUFPQyxTQUFTQyxtQkFBZSxDQUFDO0lBRWhDLE9BQU9DLFlBQVlDLG1CQUFrQixDQUFDO0lBRXRDLE9BQU9DLGNBQWM7UUFBRSxPQUFPVCxlQUFNLENBQUNTLFdBQVcsQ0FBQ1Y7SUFBa0I7QUFDckUifQ==