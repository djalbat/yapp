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
    startRuleFromRules: function() {
        return startRuleFromRules;
    },
    ruleMapFromRules: function() {
        return ruleMapFromRules;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgcmV0dXJuIHJ1bGVNYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cbiJdLCJuYW1lcyI6WyJzdGFydFJ1bGVGcm9tUnVsZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVzIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFNR0Esa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBT2xCQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7O3lCQVhELFdBQVc7QUFFMUMsSUFBTSxBQUFFQyxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixBQUFDO0FBRTFCLFNBQVNGLGtCQUFrQixDQUFDSSxLQUFLLEVBQUU7SUFDeEMsSUFBTUMsU0FBUyxHQUFHSCxLQUFLLENBQUNFLEtBQUssQ0FBQyxFQUN4QkUsU0FBUyxHQUFHRCxTQUFTLEFBQUMsRUFBRSxHQUFHO0lBRWpDLE9BQU9DLFNBQVMsQ0FBQztDQUNsQjtBQUVNLFNBQVNMLGdCQUFnQixDQUFDRyxLQUFLLEVBQUU7SUFDdEMsSUFBTUcsT0FBTyxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxTQUFDRCxPQUFPLEVBQUVFLElBQUksRUFBSztRQUM5QyxJQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFaENKLE9BQU8sQ0FBQ0csUUFBUSxDQUFDLEdBQUdELElBQUksQ0FBQztRQUV6QixPQUFPRixPQUFPLENBQUM7S0FDaEIsRUFBRSxFQUFFLENBQUMsQUFBQztJQUVQLE9BQU9BLE9BQU8sQ0FBQztDQUNoQiJ9