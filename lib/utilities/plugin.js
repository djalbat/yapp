"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pluginFromLanguageAndPlugin = pluginFromLanguageAndPlugin;
var _xml = _interopRequireDefault(require("../plugin/xml"));
var _json = _interopRequireDefault(require("../plugin/json"));
var _plainText = _interopRequireDefault(require("../plugin/plainText"));
var _javascript = _interopRequireDefault(require("../plugin/javascript"));
var _languages = require("../languages");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function pluginFromLanguageAndPlugin(language, Plugin1) {
    if (!Plugin1) {
        switch(language){
            case _languages.XML_LANGUAGE:
                Plugin1 = _xml.default;
                break;
            case _languages.JSON_LANGUAGE:
                Plugin1 = _json.default;
                break;
            case _languages.PLAIN_TEXT_LANGUAGE:
                Plugin1 = _plainText.default;
                break;
            default:
                Plugin1 = _javascript.default;
                break;
        }
    }
    var plugin = Plugin1.fromNothing();
    return plugin;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbikge1xuICBpZiAoIVBsdWdpbikge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgWE1MX0xBTkdVQUdFOiBQbHVnaW4gPSBYTUxQbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKU09OX0xBTkdVQUdFOiBQbHVnaW4gPSBKU09OUGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIFBsdWdpbiA9IEphdmFTY3JpcHRQbHVnaW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGx1Z2luID0gUGx1Z2luLmZyb21Ob3RoaW5nKCk7XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBU0ksMkJBQTJCLEdBQTNCLDJCQUEyQjtBQVByQixHQUFlLENBQWYsSUFBZTtBQUNkLEdBQWdCLENBQWhCLEtBQWdCO0FBQ1gsR0FBcUIsQ0FBckIsVUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsV0FBc0I7QUFFYyxHQUFjLENBQWQsVUFBYzs7Ozs7O1NBRS9ELDJCQUEyQixDQUFDLFFBQVEsRUFBRSxPQUFNLEVBQUUsQ0FBQztJQUM3RCxFQUFFLEdBQUcsT0FBTSxFQUFFLENBQUM7ZUFDSixRQUFRO2lCQUo2QyxVQUFjO2dCQUt0RCxPQUFNLEdBVlQsSUFBZTs7aUJBSzRCLFVBQWM7Z0JBTXJELE9BQU0sR0FWVCxLQUFnQjs7aUJBSTBCLFVBQWM7Z0JBTy9DLE9BQU0sR0FWVixVQUFxQjs7O2dCQWF6QyxPQUFNLEdBWmUsV0FBc0I7OztJQWdCakQsQ0FBQztJQUVELEdBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTSxDQUFDLFdBQVc7V0FFMUIsTUFBTTtBQUNmLENBQUMifQ==