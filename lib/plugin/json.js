"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONPlugin;
    }
});
const _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
const _json = /*#__PURE__*/ _interop_require_default(require("../lexer/json"));
const _json1 = /*#__PURE__*/ _interop_require_default(require("../parser/json"));
const _json2 = /*#__PURE__*/ _interop_require_default(require("../processor/json"));
const _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class JSONPlugin extends _plugin.default {
    static language = _languages.JSON_LANGUAGE;
    static Lexer = _json.default;
    static Parser = _json1.default;
    static Processor = _json2.default;
    static fromNothing() {
        return _plugin.default.fromNothing(JSONPlugin);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luXCI7XG5pbXBvcnQgSlNPTkxleGVyIGZyb20gXCIuLi9sZXhlci9qc29uXCI7XG5pbXBvcnQgSlNPTlBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2pzb25cIjtcbmltcG9ydCBKU09OUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvanNvblwiO1xuXG5pbXBvcnQgeyBKU09OX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2xhbmd1YWdlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzdGF0aWMgbGFuZ3VhZ2UgPSBKU09OX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IEpTT05MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gSlNPTlBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gSlNPTlByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoSlNPTlBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUGx1Z2luIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJKU09OX0xBTkdVQUdFIiwiTGV4ZXIiLCJKU09OTGV4ZXIiLCJQYXJzZXIiLCJKU09OUGFyc2VyIiwiUHJvY2Vzc29yIiwiSlNPTlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXFCQTs7OytEQVBGOzZEQUNHOzhEQUNDOzhEQUNHOzJCQUVJOzs7Ozs7QUFFZixNQUFNQSxtQkFBbUJDLGVBQU07SUFDNUMsT0FBT0MsV0FBV0Msd0JBQWEsQ0FBQztJQUVoQyxPQUFPQyxRQUFRQyxhQUFTLENBQUM7SUFFekIsT0FBT0MsU0FBU0MsY0FBVSxDQUFDO0lBRTNCLE9BQU9DLFlBQVlDLGNBQWEsQ0FBQztJQUVqQyxPQUFPQyxjQUFjO1FBQUUsT0FBT1QsZUFBTSxDQUFDUyxXQUFXLENBQUNWO0lBQWE7QUFDaEUifQ==