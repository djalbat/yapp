"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pluginFromLanguageAndPlugin = pluginFromLanguageAndPlugin;
var _xml = _interopRequireDefault(require("../plugin/xml"));
var _json = _interopRequireDefault(require("../plugin/json"));
var _plainText = _interopRequireDefault(require("../plugin/plainText"));
var _javascript = _interopRequireDefault(require("../plugin/javascript"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function pluginFromLanguageAndPlugin(language, Plugin1) {
    if (!Plugin1) {
        switch(language){
            case _constants.XML_LANGUAGE:
                Plugin1 = _xml.default;
                break;
            case _constants.JSON_LANGUAGE:
                Plugin1 = _json.default;
                break;
            case _constants.PLAIN_TEXT_LANGUAGE:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbikge1xuICBpZiAoIVBsdWdpbikge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgWE1MX0xBTkdVQUdFOiBQbHVnaW4gPSBYTUxQbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKU09OX0xBTkdVQUdFOiBQbHVnaW4gPSBKU09OUGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIFBsdWdpbiA9IEphdmFTY3JpcHRQbHVnaW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGx1Z2luID0gUGx1Z2luLmZyb21Ob3RoaW5nKCk7XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBU0ksMkJBQTJCLEdBQTNCLDJCQUEyQjtJQVByQixJQUFlO0lBQ2QsS0FBZ0I7SUFDWCxVQUFxQjtJQUNwQixXQUFzQjtJQUVjLFVBQWM7Ozs7OztTQUUvRCwyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsT0FBTTtTQUNyRCxPQUFNO2VBQ0QsUUFBUTtpQkFKNkMsVUFBYztnQkFLdEQsT0FBTSxHQVZULElBQWU7O2lCQUs0QixVQUFjO2dCQU1yRCxPQUFNLEdBVlQsS0FBZ0I7O2lCQUkwQixVQUFjO2dCQU8vQyxPQUFNLEdBVlYsVUFBcUI7OztnQkFhekMsT0FBTSxHQVplLFdBQXNCOzs7O1FBa0IzQyxNQUFNLEdBQUcsT0FBTSxDQUFDLFdBQVc7V0FFMUIsTUFBTSJ9