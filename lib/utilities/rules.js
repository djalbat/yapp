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
    var ruleMap = rules.reduce(function(ruleMap, rule) {
        var ruleName = rule.getName();
        ruleMap[ruleName] = rule;
        return ruleMap;
    }, {
    });
    return ruleMap;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVzIiwiZmlyc3RSdWxlIiwic3RhcnRSdWxlIiwicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVNYXAiLCJyZWR1Y2UiLCJydWxlIiwicnVsZU5hbWUiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBTUksa0JBQWtCLEdBQWxCLGtCQUFrQjtRQU9sQixnQkFBZ0IsR0FBaEIsZ0JBQWdCO0FBWEQsR0FBVyxDQUFYLFVBQVc7QUFFMUMsR0FBSyxDQUFHLEtBQUssR0FGa0IsVUFBVyxnQkFFbEMsS0FBSztTQUVHLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLEdBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FDdkIsU0FBUyxHQUFHLFNBQVMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFakMsTUFBTSxDQUFDLFNBQVM7QUFDbEIsQ0FBQztTQUVlLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLEdBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsT0FBTyxFQUFFLElBQUksRUFBSyxDQUFDO1FBQy9DLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFFN0IsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJO1FBRXhCLE1BQU0sQ0FBQyxPQUFPO0lBQ2hCLENBQUMsRUFBRSxDQUFDO0lBQUEsQ0FBQztJQUVMLE1BQU0sQ0FBQyxPQUFPO0FBQ2hCLENBQUMifQ==