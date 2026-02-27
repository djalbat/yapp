"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get ruleMapFromRules () {
        return ruleMapFromRules;
    },
    get startRuleFromRules () {
        return startRuleFromRules;
    }
});
const _necessary = require("necessary");
const { first } = _necessary.arrayUtilities;
function startRuleFromRules(rules) {
    const firstRule = first(rules), startRule = firstRule; ///
    return startRule;
}
function ruleMapFromRules(rules) {
    const ruleMap = rules.reduce((ruleMap, rule)=>{
        const ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
    }, {});
    return ruleMap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcykge1xuICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IGZpcnN0UnVsZTsgIC8vL1xuXG4gIHJldHVybiBzdGFydFJ1bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlcy5yZWR1Y2UoKHJ1bGVNYXAsIHJ1bGUpID0+IHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgcnVsZU1hcFtydWxlTmFtZV0gPSBydWxlO1xuXG4gICAgcmV0dXJuIHJ1bGVNYXA7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gcnVsZU1hcDtcbn1cbiJdLCJuYW1lcyI6WyJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVzIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInJlZHVjZSIsInJ1bGUiLCJydWxlTmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWFnQkE7ZUFBQUE7O1FBUEFDO2VBQUFBOzs7MkJBSmU7QUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MseUJBQWM7QUFFekIsU0FBU0YsbUJBQW1CRyxLQUFLO0lBQ3RDLE1BQU1DLFlBQVlILE1BQU1FLFFBQ2xCRSxZQUFZRCxXQUFZLEdBQUc7SUFFakMsT0FBT0M7QUFDVDtBQUVPLFNBQVNOLGlCQUFpQkksS0FBSztJQUNwQyxNQUFNRyxVQUFVSCxNQUFNSSxNQUFNLENBQUMsQ0FBQ0QsU0FBU0U7UUFDckMsTUFBTUMsV0FBV0QsS0FBS0UsT0FBTztRQUU3QkosT0FBTyxDQUFDRyxTQUFTLEdBQUdEO1FBRXBCLE9BQU9GO0lBQ1QsR0FBRyxDQUFDO0lBRUosT0FBT0E7QUFDVCJ9