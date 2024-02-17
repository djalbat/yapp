"use strict";

export function propertiesFromContentAndOptions(content, options) {
  const text = content, ///
        childElements = [{
          getText: () => text,
        }],
        properties = Object.assign({}, options, { ///
          childElements
        });

  return properties;
}
