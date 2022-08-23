"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pluginFromLanguageAndPlugin", {
    enumerable: true,
    get: function() {
        return pluginFromLanguageAndPlugin;
    }
});
var _xml = /*#__PURE__*/ _interopRequireDefault(require("../plugin/xml"));
var _json = /*#__PURE__*/ _interopRequireDefault(require("../plugin/json"));
var _plainText = /*#__PURE__*/ _interopRequireDefault(require("../plugin/plainText"));
var _javascript = /*#__PURE__*/ _interopRequireDefault(require("../plugin/javascript"));
var _languages = require("../languages");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function pluginFromLanguageAndPlugin(language, Plugin) {
    if (!Plugin) {
        switch(language){
            case _languages.XML_LANGUAGE:
                Plugin = _xml.default;
                break;
            case _languages.JSON_LANGUAGE:
                Plugin = _json.default;
                break;
            case _languages.PLAIN_TEXT_LANGUAGE:
                Plugin = _plainText.default;
                break;
            default:
                Plugin = _javascript.default;
                break;
        }
    }
    var plugin = Plugin.fromNothing();
    return plugin;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbikge1xuICBpZiAoIVBsdWdpbikge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgWE1MX0xBTkdVQUdFOiBQbHVnaW4gPSBYTUxQbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKU09OX0xBTkdVQUdFOiBQbHVnaW4gPSBKU09OUGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIFBsdWdpbiA9IEphdmFTY3JpcHRQbHVnaW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGx1Z2luID0gUGx1Z2luLmZyb21Ob3RoaW5nKCk7XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbiJdLCJuYW1lcyI6WyJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJsYW5ndWFnZSIsIlBsdWdpbiIsIlhNTF9MQU5HVUFHRSIsIlhNTFBsdWdpbiIsIkpTT05fTEFOR1VBR0UiLCJKU09OUGx1Z2luIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIlBsYWluVGV4dFBsdWdpbiIsIkphdmFTY3JpcHRQbHVnaW4iLCJwbHVnaW4iLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQVNHQSw2QkFBMkI7OztlQUEzQkEsMkJBQTJCOzs7d0RBUHJCLGVBQWU7eURBQ2QsZ0JBQWdCOzhEQUNYLHFCQUFxQjsrREFDcEIsc0JBQXNCO3lCQUVjLGNBQWM7Ozs7OztBQUV4RSxTQUFTQSwyQkFBMkIsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQUU7SUFDNUQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7UUFDWCxPQUFRRCxRQUFRO1lBQ2QsS0FBS0UsVUFBWSxhQUFBO2dCQUFFRCxNQUFNLEdBQUdFLElBQVMsUUFBQSxDQUFDO2dCQUFDLE1BQU07WUFDN0MsS0FBS0MsVUFBYSxjQUFBO2dCQUFFSCxNQUFNLEdBQUdJLEtBQVUsUUFBQSxDQUFDO2dCQUFDLE1BQU07WUFDL0MsS0FBS0MsVUFBbUIsb0JBQUE7Z0JBQUVMLE1BQU0sR0FBR00sVUFBZSxRQUFBLENBQUM7Z0JBQUMsTUFBTTtZQUUxRDtnQkFDRU4sTUFBTSxHQUFHTyxXQUFnQixRQUFBLENBQUM7Z0JBRTFCLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRCxJQUFNQyxNQUFNLEdBQUdSLE1BQU0sQ0FBQ1MsV0FBVyxFQUFFLEFBQUM7SUFFcEMsT0FBT0QsTUFBTSxDQUFDO0FBQ2hCLENBQUMifQ==