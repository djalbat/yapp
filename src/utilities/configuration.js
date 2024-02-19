"use strict";

export function propertiesFromContentAndConfiguration(content, configuration) {
  const text = content, ///
        childElements = [{
          getText: () => text,
        }],
        properties = Object.assign({}, configuration, { ///
          childElements
        });

  return properties;
}
