"use strict";

export function propertiesFromContentLanguagePluginAndOptions(content, language, Plugin, options) {
  const text = content, ///
        childElements = [{
          getText: () => text,
        }],
        properties = Object.assign({
          childElements,
          language,
          Plugin
        }, options);

  return properties;
}
