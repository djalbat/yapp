"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptPlugin;
    }
});
const _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
const _javascript = /*#__PURE__*/ _interop_require_default(require("../lexer/javascript"));
const _javascript1 = /*#__PURE__*/ _interop_require_default(require("../parser/javascript"));
const _javascript2 = /*#__PURE__*/ _interop_require_default(require("../processor/javascript"));
const _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JavaScriptPlugin extends _plugin.default {
    static language = _languages.JAVASCRIPT_LANGUAGE;
    static Lexer = _javascript.default;
    static Parser = _javascript1.default;
    static Processor = _javascript2.default;
    static fromNothing() {
        return _plugin.default.fromNothing(JavaScriptPlugin);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luXCI7XG5pbXBvcnQgSmF2YVNjcmlwdExleGVyIGZyb20gXCIuLi9sZXhlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBKQVZBU0NSSVBUX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2xhbmd1YWdlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzdGF0aWMgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IEphdmFTY3JpcHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gSmF2YVNjcmlwdFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0UGx1Z2luIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwiTGV4ZXIiLCJKYXZhU2NyaXB0TGV4ZXIiLCJQYXJzZXIiLCJKYXZhU2NyaXB0UGFyc2VyIiwiUHJvY2Vzc29yIiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OytEQVBGO21FQUNTO29FQUNDO29FQUNHOzJCQUVJOzs7Ozs7QUFFckIsTUFBTUEseUJBQXlCQyxlQUFNO0lBQ2xELE9BQU9DLFdBQVdDLDhCQUFtQixDQUFDO0lBRXRDLE9BQU9DLFFBQVFDLG1CQUFlLENBQUM7SUFFL0IsT0FBT0MsU0FBU0Msb0JBQWdCLENBQUM7SUFFakMsT0FBT0MsWUFBWUMsb0JBQW1CLENBQUM7SUFFdkMsT0FBT0MsY0FBYztRQUFFLE9BQU9ULGVBQU0sQ0FBQ1MsV0FBVyxDQUFDVjtJQUFtQjtBQUN0RSJ9