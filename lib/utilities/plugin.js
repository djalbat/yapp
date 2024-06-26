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
        var _properties_language = properties.language, language = _properties_language === void 0 ? null : _properties_language;
        switch(language){
            case _languages.XML_LANGUAGE:
                Plugin = _xml.default;
                break;
            case _languages.JSON_LANGUAGE:
                Plugin = _json.default;
                break;
            case _languages.JAVASCRIPT_LANGUAGE:
                Plugin = _javascript.default;
                break;
            case _languages.PLAIN_TEXT_LANGUAGE:
                Plugin = _plainText.default;
                break;
            default:
                Plugin = _plainText.default;
                break;
        }
    }
    var plugin = Plugin.fromNothing();
    return plugin;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UsIEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGxldCBQbHVnaW47XG5cbiAgKHsgUGx1Z2luID0gbnVsbCB9ID0gcHJvcGVydGllcyk7XG5cbiAgaWYgKFBsdWdpbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgY2FzZSBYTUxfTEFOR1VBR0U6IFBsdWdpbiA9IFhNTFBsdWdpbjsgYnJlYWs7XG4gICAgICBjYXNlIEpTT05fTEFOR1VBR0U6IFBsdWdpbiA9IEpTT05QbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKQVZBU0NSSVBUX0xBTkdVQUdFOiBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsdWdpbiA9IFBsdWdpbi5mcm9tTm90aGluZygpO1xuXG4gIHJldHVybiBwbHVnaW47XG59XG4iXSwibmFtZXMiOlsicGx1Z2luRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJYTUxfTEFOR1VBR0UiLCJYTUxQbHVnaW4iLCJKU09OX0xBTkdVQUdFIiwiSlNPTlBsdWdpbiIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJKYXZhU2NyaXB0UGx1Z2luIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIlBsYWluVGV4dFBsdWdpbiIsInBsdWdpbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTZ0JBOzs7ZUFBQUE7OzswREFQTTsyREFDQztnRUFDSztpRUFDQzt5QkFFeUQ7Ozs7OztBQUUvRSxTQUFTQSxxQkFBcUJDLFVBQVU7SUFDN0MsSUFBSUM7O1VBRWlCRCx1QkFBbEJDLFFBQUFBLDJCQUFTO0lBRVosSUFBSUEsV0FBVyxNQUFNO1FBQ25CLDJCQUE0QkQsV0FBcEJFLFVBQUFBLDZDQUFXO1FBRW5CLE9BQVFBO1lBQ04sS0FBS0MsdUJBQVk7Z0JBQUVGLFNBQVNHLFlBQVM7Z0JBQUU7WUFDdkMsS0FBS0Msd0JBQWE7Z0JBQUVKLFNBQVNLLGFBQVU7Z0JBQUU7WUFDekMsS0FBS0MsOEJBQW1CO2dCQUFFTixTQUFTTyxtQkFBZ0I7Z0JBQUU7WUFDckQsS0FBS0MsOEJBQW1CO2dCQUFFUixTQUFTUyxrQkFBZTtnQkFBRTtZQUVwRDtnQkFDRVQsU0FBU1Msa0JBQWU7Z0JBRXhCO1FBQ0o7SUFDRjtJQUVBLElBQU1DLFNBQVNWLE9BQU9XLFdBQVc7SUFFakMsT0FBT0Q7QUFDVCJ9