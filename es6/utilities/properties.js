"use strict";

export function propertiesFromContentLanguageAndPlugin(content, language, Plugin) {
  const text = content, ///
        childElements = [{
          getText: () => text,
        }],
        properties = {
          childElements,
          language,
          Plugin
        };

  return properties;
}
