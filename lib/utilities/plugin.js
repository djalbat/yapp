"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pluginFromProperties", {
    enumerable: true,
    get: function() {
        return pluginFromProperties;
    }
});
var _xml = /*#__PURE__*/ _interop_require_default(require("../plugin/xml"));
var _json = /*#__PURE__*/ _interop_require_default(require("../plugin/json"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../plugin/plainText"));
var _javascript = /*#__PURE__*/ _interop_require_default(require("../plugin/javascript"));
var _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function pluginFromProperties(properties) {
    var Plugin;
    var ref, ref1;
    ref = properties, ref1 = ref.Plugin, Plugin = ref1 === void 0 ? null : ref1, ref;
    if (Plugin === null) {
        var _properties_language = properties.language, language = _properties_language === void 0 ? _languages.JAVASCRIPT_LANGUAGE : _properties_language;
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
            case _languages.JAVASCRIPT_LANGUAGE:
                Plugin = _javascript.default;
                break;
        }
    }
    var plugin = Plugin.fromNothing();
    return plugin;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UsIEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGxldCBQbHVnaW47XG5cbiAgKHsgUGx1Z2luID0gbnVsbCB9ID0gcHJvcGVydGllcyk7XG5cbiAgaWYgKFBsdWdpbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgY2FzZSBYTUxfTEFOR1VBR0U6IFBsdWdpbiA9IFhNTFBsdWdpbjsgYnJlYWs7XG4gICAgICBjYXNlIEpTT05fTEFOR1VBR0U6IFBsdWdpbiA9IEpTT05QbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBQTEFJTl9URVhUX0xBTkdVQUdFOiBQbHVnaW4gPSBQbGFpblRleHRQbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKQVZBU0NSSVBUX0xBTkdVQUdFOiBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luOyBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbHVnaW4gPSBQbHVnaW4uZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gcGx1Z2luO1xufVxuIl0sIm5hbWVzIjpbInBsdWdpbkZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsIlBsdWdpbiIsImxhbmd1YWdlIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsIlhNTF9MQU5HVUFHRSIsIlhNTFBsdWdpbiIsIkpTT05fTEFOR1VBR0UiLCJKU09OUGx1Z2luIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIlBsYWluVGV4dFBsdWdpbiIsIkphdmFTY3JpcHRQbHVnaW4iLCJwbHVnaW4iLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU2dCQTs7O2VBQUFBOzs7MERBUE07MkRBQ0M7Z0VBQ0s7aUVBQ0M7eUJBRXlEOzs7Ozs7QUFFL0UsU0FBU0EscUJBQXFCQyxVQUFVO0lBQzdDLElBQUlDOztVQUVpQkQsdUJBQWxCQyxRQUFBQSwyQkFBUztJQUVaLElBQUlBLFdBQVcsTUFBTTtRQUNuQiwyQkFBMkNELFdBQW5DRSxVQUFBQSw2Q0FBV0MsOEJBQW1CO1FBRXRDLE9BQVFEO1lBQ04sS0FBS0UsdUJBQVk7Z0JBQUVILFNBQVNJLFlBQVM7Z0JBQUU7WUFDdkMsS0FBS0Msd0JBQWE7Z0JBQUVMLFNBQVNNLGFBQVU7Z0JBQUU7WUFDekMsS0FBS0MsOEJBQW1CO2dCQUFFUCxTQUFTUSxrQkFBZTtnQkFBRTtZQUNwRCxLQUFLTiw4QkFBbUI7Z0JBQUVGLFNBQVNTLG1CQUFnQjtnQkFBRTtRQUN2RDtJQUNGO0lBRUEsSUFBTUMsU0FBU1YsT0FBT1csV0FBVztJQUVqQyxPQUFPRDtBQUNUIn0=