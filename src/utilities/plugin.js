"use strict";

import XMLPlugin from "../plugin/xml";
import JSONPlugin from "../plugin/json";
import PlainTextPlugin from "../plugin/plainText";
import JavaScriptPlugin from "../plugin/javascript";

import { XML_LANGUAGE, JSON_LANGUAGE, PLAIN_TEXT_LANGUAGE } from "../constants";

export function pluginFromLanguageAndPlugin(language, Plugin) {
  if (!Plugin) {
    switch (language) {
      case XML_LANGUAGE: Plugin = XMLPlugin; break;
      case JSON_LANGUAGE: Plugin = JSONPlugin; break;
      case PLAIN_TEXT_LANGUAGE: Plugin = PlainTextPlugin; break;

      default :
        Plugin = JavaScriptPlugin;

        break;
    }
  }

  const plugin = Plugin.fromNothing();

  return plugin;
}
