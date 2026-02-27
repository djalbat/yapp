"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLPlugin;
    }
});
const _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
const _xml = /*#__PURE__*/ _interop_require_default(require("../lexer/xml"));
const _xml1 = /*#__PURE__*/ _interop_require_default(require("../parser/xml"));
const _xml2 = /*#__PURE__*/ _interop_require_default(require("../processor/xml"));
const _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class XMLPlugin extends _plugin.default {
    static language = _languages.XML_LANGUAGE;
    static Lexer = _xml.default;
    static Parser = _xml1.default;
    static Processor = _xml2.default;
    static fromNothing() {
        return _plugin.default.fromNothing(XMLPlugin);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4veG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBYTUxMZXhlciBmcm9tIFwiLi4vbGV4ZXIveG1sXCI7XG5pbXBvcnQgWE1MUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIveG1sXCI7XG5pbXBvcnQgWE1MUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IveG1sXCI7XG5cbmltcG9ydCB7IFhNTF9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzdGF0aWMgbGFuZ3VhZ2UgPSBYTUxfTEFOR1VBR0U7XG5cbiAgc3RhdGljIExleGVyID0gWE1MTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IFhNTFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gWE1MUHJvY2Vzc29yO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsdWdpbi5mcm9tTm90aGluZyhYTUxQbHVnaW4pOyB9XG59XG4iXSwibmFtZXMiOlsiWE1MUGx1Z2luIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJYTUxfTEFOR1VBR0UiLCJMZXhlciIsIlhNTExleGVyIiwiUGFyc2VyIiwiWE1MUGFyc2VyIiwiUHJvY2Vzc29yIiwiWE1MUHJvY2Vzc29yIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7K0RBUEY7NERBQ0U7NkRBQ0M7NkRBQ0c7MkJBRUk7Ozs7OztBQUVkLE1BQU1BLGtCQUFrQkMsZUFBTTtJQUMzQyxPQUFPQyxXQUFXQyx1QkFBWSxDQUFDO0lBRS9CLE9BQU9DLFFBQVFDLFlBQVEsQ0FBQztJQUV4QixPQUFPQyxTQUFTQyxhQUFTLENBQUM7SUFFMUIsT0FBT0MsWUFBWUMsYUFBWSxDQUFDO0lBRWhDLE9BQU9DLGNBQWM7UUFBRSxPQUFPVCxlQUFNLENBQUNTLFdBQVcsQ0FBQ1Y7SUFBWTtBQUMvRCJ9