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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWE1MUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4veG1sXCI7XG5pbXBvcnQgSlNPTlBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2pzb25cIjtcbmltcG9ydCBQbGFpblRleHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9wbGFpblRleHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vamF2YXNjcmlwdFwiO1xuXG5pbXBvcnQgeyBYTUxfTEFOR1VBR0UsIEpTT05fTEFOR1VBR0UsIFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4obGFuZ3VhZ2UsIFBsdWdpbikge1xuICBpZiAoIVBsdWdpbikge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgIGNhc2UgWE1MX0xBTkdVQUdFOiBQbHVnaW4gPSBYTUxQbHVnaW47IGJyZWFrO1xuICAgICAgY2FzZSBKU09OX0xBTkdVQUdFOiBQbHVnaW4gPSBKU09OUGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgUExBSU5fVEVYVF9MQU5HVUFHRTogUGx1Z2luID0gUGxhaW5UZXh0UGx1Z2luOyBicmVhaztcblxuICAgICAgZGVmYXVsdCA6XG4gICAgICAgIFBsdWdpbiA9IEphdmFTY3JpcHRQbHVnaW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGx1Z2luID0gUGx1Z2luLmZyb21Ob3RoaW5nKCk7XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn1cbiJdLCJuYW1lcyI6WyJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJsYW5ndWFnZSIsIlBsdWdpbiIsInBsdWdpbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBU0lBLDJCQUEyQixHQUEzQkEsMkJBQTJCO0FBUHJCLEdBQWUsQ0FBZixJQUFlO0FBQ2QsR0FBZ0IsQ0FBaEIsS0FBZ0I7QUFDWCxHQUFxQixDQUFyQixVQUFxQjtBQUNwQixHQUFzQixDQUF0QixXQUFzQjtBQUVjLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7U0FFL0RBLDJCQUEyQixDQUFDQyxRQUFRLEVBQUVDLE1BQU0sRUFBRSxDQUFDO0lBQzdELEVBQUUsR0FBR0EsTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUVELFFBQVE7WUFDZCxJQUFJLENBTHVELFVBQWM7Z0JBS3REQyxNQUFNLEdBVlQsSUFBZTtnQkFVUSxLQUFLO1lBQzVDLElBQUksQ0FOdUQsVUFBYztnQkFNckRBLE1BQU0sR0FWVCxLQUFnQjtnQkFVUSxLQUFLO1lBQzlDLElBQUksQ0FQdUQsVUFBYztnQkFPL0NBLE1BQU0sR0FWVixVQUFxQjtnQkFVUyxLQUFLOztnQkFHdkRBLE1BQU0sR0FaZSxXQUFzQjtnQkFjM0MsS0FBSzs7SUFFWCxDQUFDO0lBRUQsR0FBSyxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsV0FBVztJQUVqQyxNQUFNLENBQUNELE1BQU07QUFDZixDQUFDIn0=