"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export function startRuleFromRules(rules) {
  const firstRule = first(rules),
        startRule = firstRule;  ///

  return startRule;
}

export function ruleMapFromRules(rules) {
  const ruleMap = rules.reduce((ruleMap, rule) => {
    const ruleName = rule.getName();

    ruleMap[ruleName] = rule;

    return ruleMap;
  }, {});

  return ruleMap;
}
