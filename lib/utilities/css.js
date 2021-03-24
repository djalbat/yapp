"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stripPixels = stripPixels;

var _necessary = require("necessary");

var second = _necessary.arrayUtilities.second;

function stripPixels(valueInPixels) {
  var value;

  if (!valueInPixels) {
    value = 0;
  } else {
    var matches = valueInPixels.match(/^(\d+(?:\.\d+)?)px$/),
        secondMatch = second(matches);
    value = Number(secondMatch); ///
  }

  return value;
}