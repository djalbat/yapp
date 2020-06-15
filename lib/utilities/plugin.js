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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function pluginFromLanguageAndPlugin(language, Plugin) {
  if (!Plugin) {
    switch (language) {
      case _constants.XML_LANGUAGE:
        Plugin = _xml["default"];
        break;

      case _constants.JSON_LANGUAGE:
        Plugin = _json["default"];
        break;

      case _constants.PLAIN_TEXT_LANGUAGE:
        Plugin = _plainText["default"];
        break;

      default:
        Plugin = _javascript["default"];
        break;
    }
  }

  var plugin = Plugin.fromNothing();
  return plugin;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi5qcyJdLCJuYW1lcyI6WyJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJsYW5ndWFnZSIsIlBsdWdpbiIsIlhNTF9MQU5HVUFHRSIsIlhNTFBsdWdpbiIsIkpTT05fTEFOR1VBR0UiLCJKU09OUGx1Z2luIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIlBsYWluVGV4dFBsdWdpbiIsIkphdmFTY3JpcHRQbHVnaW4iLCJwbHVnaW4iLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVPLFNBQVNBLDJCQUFULENBQXFDQyxRQUFyQyxFQUErQ0MsTUFBL0MsRUFBdUQ7QUFDNUQsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxZQUFRRCxRQUFSO0FBQ0UsV0FBS0UsdUJBQUw7QUFBbUJELFFBQUFBLE1BQU0sR0FBR0UsZUFBVDtBQUFvQjs7QUFDdkMsV0FBS0Msd0JBQUw7QUFBb0JILFFBQUFBLE1BQU0sR0FBR0ksZ0JBQVQ7QUFBcUI7O0FBQ3pDLFdBQUtDLDhCQUFMO0FBQTBCTCxRQUFBQSxNQUFNLEdBQUdNLHFCQUFUO0FBQTBCOztBQUVwRDtBQUNFTixRQUFBQSxNQUFNLEdBQUdPLHNCQUFUO0FBRUE7QUFSSjtBQVVEOztBQUVELE1BQU1DLE1BQU0sR0FBR1IsTUFBTSxDQUFDUyxXQUFQLEVBQWY7QUFFQSxTQUFPRCxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFhNTFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL3htbFwiO1xuaW1wb3J0IEpTT05QbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9qc29uXCI7XG5pbXBvcnQgUGxhaW5UZXh0UGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vcGxhaW5UZXh0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luL2phdmFzY3JpcHRcIjtcblxuaW1wb3J0IHsgWE1MX0xBTkdVQUdFLCBKU09OX0xBTkdVQUdFLCBQTEFJTl9URVhUX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2luRnJvbUxhbmd1YWdlQW5kUGx1Z2luKGxhbmd1YWdlLCBQbHVnaW4pIHtcbiAgaWYgKCFQbHVnaW4pIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICBjYXNlIFhNTF9MQU5HVUFHRTogUGx1Z2luID0gWE1MUGx1Z2luOyBicmVhaztcbiAgICAgIGNhc2UgSlNPTl9MQU5HVUFHRTogUGx1Z2luID0gSlNPTlBsdWdpbjsgYnJlYWs7XG4gICAgICBjYXNlIFBMQUlOX1RFWFRfTEFOR1VBR0U6IFBsdWdpbiA9IFBsYWluVGV4dFBsdWdpbjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICBQbHVnaW4gPSBKYXZhU2NyaXB0UGx1Z2luO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsdWdpbiA9IFBsdWdpbi5mcm9tTm90aGluZygpO1xuXG4gIHJldHVybiBwbHVnaW47XG59XG4iXX0=