"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _occamParsers = require("occam-parsers");
var _rules = require("../utilities/rules");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var YappParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(YappParser, CommonParser);
    var _super = _createSuper(YappParser);
    function YappParser() {
        _classCallCheck(this, YappParser);
        return _super.apply(this, arguments);
    }
    _createClass(YappParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var bnf = Class.bnf, rules = rulesFromBNF(bnf), parser = parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = rulesFromBNF(bnf), parser = parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var parser = parserFromRules(Class, rules);
                return parser;
            }
        }
    ]);
    return YappParser;
}(_occamParsers.CommonParser);
exports.default = YappParser;
function rulesFromBNF(bnf) {
    var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens);
    return rules;
}
function parserFromRules(Class, rules) {
    var ruleMap = (0, _rules).ruleMapFromRules(rules);
    var startRule = (0, _rules).startRuleFromRules(rules);
    startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
    var parser = new Class(startRule, ruleMap);
    return parser;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveWFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlhcHBQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJORihDbGFzcywgYm5mKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICAgIGNvbnN0IHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkYoYm5mKSB7XG4gIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgY29uc3QgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn0iXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIllhcHBQYXJzZXIiLCJDbGFzcyIsImJuZiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyIiwicGFyc2VyRnJvbVJ1bGVzIiwiZnJvbUJORiIsImZyb21SdWxlcyIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlTWFwIiwic3RhcnRSdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQWMsQ0FBZCxZQUFjO0FBQ0EsR0FBeUIsQ0FBekIsc0JBQXlCO0FBQ3hCLEdBQWUsQ0FBZixhQUFlO0FBRUYsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsR0FBSyxDQUFDQSxRQUFRLEdBTlcsWUFBYyxVQU1iQyxXQUFXLElBQy9CQyxTQUFTLEdBTHlCLGFBQWUsV0FLM0JELFdBQVc7SUFFbEJFLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRkEsVUFBVTs4QkFBVkEsVUFBVTthQUFWQSxVQUFVOzhCQUFWQSxVQUFVOzs7aUJBQVZBLFVBQVU7O1lBQ3RCRixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDRyxLQUFLLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxDQUFHQyxHQUFHLEdBQUtELEtBQUssQ0FBYkMsR0FBRyxFQUNMQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0YsR0FBRyxHQUN4QkcsTUFBTSxHQUFHQyxlQUFlLENBQUNMLEtBQUssRUFBRUUsS0FBSztnQkFFM0MsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRU1FLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ04sS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0YsR0FBRyxHQUN4QkcsTUFBTSxHQUFHQyxlQUFlLENBQUNMLEtBQUssRUFBRUUsS0FBSztnQkFFM0MsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRU1HLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNQLEtBQUssRUFBRUUsS0FBSyxFQUFFLENBQUM7Z0JBQzlCLEdBQUssQ0FBQ0UsTUFBTSxHQUFHQyxlQUFlLENBQUNMLEtBQUssRUFBRUUsS0FBSztnQkFFM0MsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1dBcEJrQkwsVUFBVTtFQVBTLGFBQWU7a0JBT2xDQSxVQUFVO1NBdUJ0QkksWUFBWSxDQUFDRixHQUFHLEVBQUUsQ0FBQztJQUMxQixHQUFLLENBQUNPLE1BQU0sR0FBR1osUUFBUSxDQUFDYSxhQUFhLENBQUNSLEdBQUcsR0FDbkNDLEtBQUssR0FBR0osU0FBUyxDQUFDWSxlQUFlLENBQUNGLE1BQU07SUFFOUMsTUFBTSxDQUFDTixLQUFLO0FBQ2QsQ0FBQztTQUVRRyxlQUFlLENBQUNMLEtBQUssRUFBRUUsS0FBSyxFQUFFLENBQUM7SUFDdEMsR0FBSyxDQUFDUyxPQUFPLE9BcENzQyxNQUFvQixtQkFvQ3RDVCxLQUFLO0lBRXRDLEdBQUcsQ0FBQ1UsU0FBUyxPQXRDc0MsTUFBb0IscUJBc0NwQ1YsS0FBSztJQUV4Q1UsU0FBUyxPQTNDNEIsc0JBQXlCLHlCQTJDM0JBLFNBQVMsRUFBRUQsT0FBTztJQUVyRCxHQUFLLENBQUNQLE1BQU0sR0FBRyxHQUFHLENBQUNKLEtBQUssQ0FBQ1ksU0FBUyxFQUFFRCxPQUFPO0lBRTNDLE1BQU0sQ0FBQ1AsTUFBTTtBQUNmLENBQUMifQ==