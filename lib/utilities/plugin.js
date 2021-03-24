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