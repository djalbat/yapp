"use strict";

export function propertiesFromContentLanguageOptionsAndPlugin(content, language, options, Plugin) {
  const text = content, ///
        childElements = [{
          getText: () => text,
        }],
        properties = Object.assign({
          childElements
        }, options);

  return properties;
}
