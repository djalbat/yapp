"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginFromLanguageAndPlugin = pluginFromLanguageAndPlugin;

var _xml = _interopRequireDefault(require("../plugin/xml"));

var _json = _interopRequireDefault(require("../plugin/json"));

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

      default:
        Plugin = _javascript["default"];
        break;
    }
  }

  var plugin = Plugin.fromNothing();
  return plugin;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi5qcyJdLCJuYW1lcyI6WyJwbHVnaW5Gcm9tTGFuZ3VhZ2VBbmRQbHVnaW4iLCJsYW5ndWFnZSIsIlBsdWdpbiIsIlhNTF9MQU5HVUFHRSIsIlhNTFBsdWdpbiIsIkpTT05fTEFOR1VBR0UiLCJKU09OUGx1Z2luIiwiSmF2YVNjcmlwdFBsdWdpbiIsInBsdWdpbiIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBRU8sU0FBU0EsMkJBQVQsQ0FBcUNDLFFBQXJDLEVBQStDQyxNQUEvQyxFQUF1RDtBQUM1RCxNQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYLFlBQVFELFFBQVI7QUFDRSxXQUFLRSx1QkFBTDtBQUFtQkQsUUFBQUEsTUFBTSxHQUFHRSxlQUFUO0FBQW9COztBQUN2QyxXQUFLQyx3QkFBTDtBQUFvQkgsUUFBQUEsTUFBTSxHQUFHSSxnQkFBVDtBQUFxQjs7QUFFekM7QUFDRUosUUFBQUEsTUFBTSxHQUFHSyxzQkFBVDtBQUVBO0FBUEo7QUFTRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sV0FBUCxFQUFmO0FBRUEsU0FBT0QsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBYTUxQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi94bWxcIjtcbmltcG9ydCBKU09OUGx1Z2luIGZyb20gXCIuLi9wbHVnaW4vanNvblwiO1xuaW1wb3J0IEphdmFTY3JpcHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbi9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IFhNTF9MQU5HVUFHRSwgSlNPTl9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsdWdpbkZyb21MYW5ndWFnZUFuZFBsdWdpbihsYW5ndWFnZSwgUGx1Z2luKSB7XG4gIGlmICghUGx1Z2luKSB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgY2FzZSBYTUxfTEFOR1VBR0U6IFBsdWdpbiA9IFhNTFBsdWdpbjsgYnJlYWs7XG4gICAgICBjYXNlIEpTT05fTEFOR1VBR0U6IFBsdWdpbiA9IEpTT05QbHVnaW47IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgUGx1Z2luID0gSmF2YVNjcmlwdFBsdWdpbjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbHVnaW4gPSBQbHVnaW4uZnJvbU5vdGhpbmcoKTtcblxuICByZXR1cm4gcGx1Z2luO1xufVxuIl19