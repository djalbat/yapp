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
const _xml = /*#__PURE__*/ _interop_require_default(require("../plugin/xml"));
const _json = /*#__PURE__*/ _interop_require_default(require("../plugin/json"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../plugin/plainText"));
const _javascript = /*#__PURE__*/ _interop_require_default(require("../plugin/javascript"));
const _languages = require("../languages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function pluginFromProperties(properties) {
    let Plugin;
    ({ Plugin = null } = properties);
    if (Plugin === null) {
        const { language = null } = properties;
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
    const plugin = Plugin.fromNothing();
    return plugin;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UsIEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGxldCBQbHVnaW47XG5cbiAgKHsgUGx1Z2luID0gbnVsbCB9ID0gcHJvcGVydGllcyk7XG5cbiAgaWYgKFBsdWdpbiA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgY2FzZSBYTUxfTEFOR1VBR0U6IFBsdWdpbiA9IFhNTFBsdWdpbjsgYnJlYWs7XG4gICAgICBjYXNlIEpTT05fTEFOR1VBR0U6IFBsdWdpbiA9IEpTT05QbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKQVZBU0NSSVBUX0xBTkdVQUdFOiBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsdWdpbiA9IFBsdWdpbi5mcm9tTm90aGluZygpO1xuXG4gIHJldHVybiBwbHVnaW47XG59XG4iXSwibmFtZXMiOlsicGx1Z2luRnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJYTUxfTEFOR1VBR0UiLCJYTUxQbHVnaW4iLCJKU09OX0xBTkdVQUdFIiwiSlNPTlBsdWdpbiIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJKYXZhU2NyaXB0UGx1Z2luIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIlBsYWluVGV4dFBsdWdpbiIsInBsdWdpbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTZ0JBOzs7ZUFBQUE7Ozs0REFQTTs2REFDQztrRUFDSzttRUFDQzsyQkFFeUQ7Ozs7OztBQUUvRSxTQUFTQSxxQkFBcUJDLFVBQVU7SUFDN0MsSUFBSUM7SUFFSCxDQUFBLEVBQUVBLFNBQVMsSUFBSSxFQUFFLEdBQUdELFVBQVM7SUFFOUIsSUFBSUMsV0FBVyxNQUFNO1FBQ25CLE1BQU0sRUFBRUMsV0FBVyxJQUFJLEVBQUUsR0FBR0Y7UUFFNUIsT0FBUUU7WUFDTixLQUFLQyx1QkFBWTtnQkFBRUYsU0FBU0csWUFBUztnQkFBRTtZQUN2QyxLQUFLQyx3QkFBYTtnQkFBRUosU0FBU0ssYUFBVTtnQkFBRTtZQUN6QyxLQUFLQyw4QkFBbUI7Z0JBQUVOLFNBQVNPLG1CQUFnQjtnQkFBRTtZQUNyRCxLQUFLQyw4QkFBbUI7Z0JBQUVSLFNBQVNTLGtCQUFlO2dCQUFFO1lBRXBEO2dCQUNFVCxTQUFTUyxrQkFBZTtnQkFFeEI7UUFDSjtJQUNGO0lBRUEsTUFBTUMsU0FBU1YsT0FBT1csV0FBVztJQUVqQyxPQUFPRDtBQUNUIn0=