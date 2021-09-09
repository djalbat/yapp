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
function pluginFromLanguageAndPlugin(language, Plugin) {
    if (!Plugin) {
        switch(language){
            case _constants.XML_LANGUAGE:
                Plugin = _xml.default;
                break;
            case _constants.JSON_LANGUAGE:
                Plugin = _json.default;
                break;
            case _constants.PLAIN_TEXT_LANGUAGE:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbIlhNTFBsdWdpbiIsIkpTT05QbHVnaW4iLCJQbGFpblRleHRQbHVnaW4iLCJKYXZhU2NyaXB0UGx1Z2luIiwiWE1MX0xBTkdVQUdFIiwiSlNPTl9MQU5HVUFHRSIsIlBMQUlOX1RFWFRfTEFOR1VBR0UiLCJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJsYW5ndWFnZSIsIlBsdWdpbiIsInBsdWdpbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBU0ksMkJBQTJCLEdBQTNCLDJCQUEyQjtBQVByQixHQUFlLENBQWYsSUFBZTtBQUNkLEdBQWdCLENBQWhCLEtBQWdCO0FBQ1gsR0FBcUIsQ0FBckIsVUFBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsV0FBc0I7QUFFYyxHQUFjLENBQWQsVUFBYzs7Ozs7O1NBRS9ELDJCQUEyQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUM3RCxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUUsUUFBUTtZQUNkLElBQUksQ0FMdUQsVUFBYztnQkFLdEQsTUFBTSxHQVZULElBQWU7Z0JBVVEsS0FBSztZQUM1QyxJQUFJLENBTnVELFVBQWM7Z0JBTXJELE1BQU0sR0FWVCxLQUFnQjtnQkFVUSxLQUFLO1lBQzlDLElBQUksQ0FQdUQsVUFBYztnQkFPL0MsTUFBTSxHQVZWLFVBQXFCO2dCQVVTLEtBQUs7O2dCQUd2RCxNQUFNLEdBWmUsV0FBc0I7Z0JBYzNDLEtBQUs7O0lBRVgsQ0FBQztJQUVELEdBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVc7SUFFakMsTUFBTSxDQUFDLE1BQU07QUFDZixDQUFDIn0=