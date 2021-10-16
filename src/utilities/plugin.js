"use strict";

import XMLPlugin from "../plugin/xml";
import JSONPlugin from "../plugin/json";
import PlainTextPlugin from "../plugin/plainText";
import JavaScriptPlugin from "../plugin/javascript";

import { XML_LANGUAGE, JSON_LANGUAGE, JAVASCRIPT_LANGUAGE } from "../languages";

export function pluginFromLanguageAndPlugin(language, Plugin) {
  if (!Plugin) {
    switch (language) {
      case XML_LANGUAGE: Plugin = XMLPlugin; break;
      case JSON_LANGUAGE: Plugin = JSONPlugin; break;
      case JAVASCRIPT_LANGUAGE: Plugin = JavaScriptPlugin; break;

      default :
        Plugin = PlainTextPlugin;

        break;
    }
  }

  const plugin = Plugin.fromNothing();

  return plugin;
}
