"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ruleMapFromRules: function() {
        return ruleMapFromRules;
    },
    startRuleFromRules: function() {
        return startRuleFromRules;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first;
function startRuleFromRules(rules) {
    var firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function ruleMapFromRules(rules) {
    var ruleMap = rules.reduce(function(ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
    }, {});
    return ruleMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgcmV0dXJuIHJ1bGVNYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cbiJdLCJuYW1lcyI6WyJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVzIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBYWdCQSxnQkFBZ0I7ZUFBaEJBOztJQVBBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBSmU7QUFFL0IsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTRCxtQkFBbUJHLEtBQUs7SUFDdEMsSUFBTUMsWUFBWUgsTUFBTUUsUUFDbEJFLFlBQVlELFdBQVksR0FBRztJQUVqQyxPQUFPQztBQUNUO0FBRU8sU0FBU04saUJBQWlCSSxLQUFLO0lBQ3BDLElBQU1HLFVBQVVILE1BQU1JLE1BQU0sQ0FBQyxTQUFDRCxTQUFTRTtRQUNyQyxJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO1FBRTdCSixPQUFPLENBQUNHLFNBQVMsR0FBR0Q7UUFFcEIsT0FBT0Y7SUFDVCxHQUFHLENBQUM7SUFFSixPQUFPQTtBQUNUIn0=