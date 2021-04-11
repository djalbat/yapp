"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startRuleFromRules = startRuleFromRules;
exports.ruleMapFromRules = ruleMapFromRules;
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first;
function startRuleFromRules(rules) {
    var firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function ruleMapFromRules(rules) {
    var ruleMap = rules.reduce(function(ruleMap1, rule) {
        var ruleName = rule.getName();
        ruleMap1[ruleName] = rule;
        return ruleMap1;
    }, {
    });
    return ruleMap;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgcmV0dXJuIHJ1bGVNYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksa0JBQWtCLEdBQWxCLGtCQUFrQjtRQU9sQixnQkFBZ0IsR0FBaEIsZ0JBQWdCO0lBWEQsVUFBVztJQUVsQyxLQUFLLEdBRmtCLFVBQVcsZ0JBRWxDLEtBQUs7U0FFRyxrQkFBa0IsQ0FBQyxLQUFLO1FBQ2hDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUN2QixTQUFTLEdBQUcsU0FBUyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztXQUUxQixTQUFTOztTQUdGLGdCQUFnQixDQUFDLEtBQUs7UUFDOUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLFVBQUUsUUFBTyxFQUFFLElBQUk7WUFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPO1FBRTdCLFFBQU8sQ0FBQyxRQUFRLElBQUksSUFBSTtlQUVqQixRQUFPOzs7V0FHVCxPQUFPIn0=