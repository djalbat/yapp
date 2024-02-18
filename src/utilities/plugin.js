"use strict";

import XMLPlugin from "../plugin/xml";
import JSONPlugin from "../plugin/json";
import PlainTextPlugin from "../plugin/plainText";
import JavaScriptPlugin from "../plugin/javascript";

import { XML_LANGUAGE, JSON_LANGUAGE, PLAIN_TEXT_LANGUAGE, JAVASCRIPT_LANGUAGE } from "../languages";

export function pluginFromProperties(properties) {
  let Plugin;

  ({ Plugin = null } = properties);

  if (Plugin === null) {
    const { language = null } = properties;

    switch (language) {
      case XML_LANGUAGE: Plugin = XMLPlugin; break;
      case JSON_LANGUAGE: Plugin = JSONPlugin; break;
      case JAVASCRIPT_LANGUAGE: Plugin = JavaScriptPlugin; break;
      case PLAIN_TEXT_LANGUAGE: Plugin = PlainTextPlugin; break;

      default:
        Plugin = PlainTextPlugin;

        break;
    }
  }

  const plugin = Plugin.fromNothing();

  return plugin;
}
