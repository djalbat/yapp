"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startRuleFromRules = startRuleFromRules;
exports.ruleMapFromRules = ruleMapFromRules;

var _necessary = require("necessary");

var first = _necessary.arrayUtilities.first;

function startRuleFromRules(rules) {
  var firstRule = first(rules),
      startRule = firstRule; ///

  return startRule;
}

function ruleMapFromRules(rules) {
  var ruleMap = rules.reduce(function (ruleMap, rule) {
    var ruleName = rule.getName();
    ruleMap[ruleName] = rule;
    return ruleMap;
  }, {});
  return ruleMap;
}