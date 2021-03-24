"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertiesFromContentLanguagePluginAndOptions = propertiesFromContentLanguagePluginAndOptions;

function propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options) {
  var text = content,
      ///
  childElements = [{
    getText: function getText() {
      return text;
    }
  }],
      properties = Object.assign({
    childElements: childElements,
    language: language,
    Plugin: Plugin
  }, options);
  return properties;
}