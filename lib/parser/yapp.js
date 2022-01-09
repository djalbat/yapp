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
                var bnf = Class.bnf, tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), parser = parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), parser = parserFromRules(Class, rules);
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
function parserFromRules(Class, rules) {
    var ruleMap = (0, _rules).ruleMapFromRules(rules);
    var startRule = (0, _rules).startRuleFromRules(rules);
    startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
    var parser = new Class(startRule, ruleMap);
    return parser;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveWFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlhcHBQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKENsYXNzLCBibmYpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcykge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgc3RhcnRSdWxlID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBDbGFzcyhzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBwYXJzZXI7XG59Il0sIm5hbWVzIjpbImJuZkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJZYXBwUGFyc2VyIiwiQ2xhc3MiLCJibmYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJwYXJzZXIiLCJwYXJzZXJGcm9tUnVsZXMiLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNBLEdBQXlCLENBQXpCLHNCQUF5QjtBQUN4QixHQUFlLENBQWYsYUFBZTtBQUVGLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLEdBQUssQ0FBQ0EsUUFBUSxHQU5XLFlBQWMsVUFNYkMsV0FBVyxJQUMvQkMsU0FBUyxHQUx5QixhQUFlLFdBSzNCRCxXQUFXO0lBRWxCRSxVQUFVLGlCQUFoQixRQUFRO2NBQUZBLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUN0QkYsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0csS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEdBQUssQ0FBR0MsR0FBRyxHQUFLRCxLQUFLLENBQWJDLEdBQUcsRUFDTEMsTUFBTSxHQUFHTixRQUFRLENBQUNPLGFBQWEsQ0FBQ0YsR0FBRyxHQUNuQ0csS0FBSyxHQUFHTixTQUFTLENBQUNPLGVBQWUsQ0FBQ0gsTUFBTSxHQUN4Q0ksTUFBTSxHQUFHQyxlQUFlLENBQUNQLEtBQUssRUFBRUksS0FBSztnQkFFM0MsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRU1FLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ1IsS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsR0FBSyxDQUFDQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDRixHQUFHLEdBQ25DRyxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sZUFBZSxDQUFDSCxNQUFNLEdBQ3hDSSxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1AsS0FBSyxFQUFFSSxLQUFLO2dCQUUzQyxNQUFNLENBQUNFLE1BQU07WUFDZixDQUFDOzs7WUFFTUcsR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ1QsS0FBSyxFQUFFSSxLQUFLLEVBQUUsQ0FBQztnQkFDOUIsR0FBSyxDQUFDRSxNQUFNLEdBQUdDLGVBQWUsQ0FBQ1AsS0FBSyxFQUFFSSxLQUFLO2dCQUUzQyxNQUFNLENBQUNFLE1BQU07WUFDZixDQUFDOzs7V0F0QmtCUCxVQUFVO0VBUFMsYUFBZTtrQkFPbENBLFVBQVU7U0F5QnRCUSxlQUFlLENBQUNQLEtBQUssRUFBRUksS0FBSyxFQUFFLENBQUM7SUFDdEMsR0FBSyxDQUFDTSxPQUFPLE9BL0JzQyxNQUFvQixtQkErQnRDTixLQUFLO0lBRXRDLEdBQUcsQ0FBQ08sU0FBUyxPQWpDc0MsTUFBb0IscUJBaUNwQ1AsS0FBSztJQUV4Q08sU0FBUyxPQXRDNEIsc0JBQXlCLHlCQXNDM0JBLFNBQVMsRUFBRUQsT0FBTztJQUVyRCxHQUFLLENBQUNKLE1BQU0sR0FBRyxHQUFHLENBQUNOLEtBQUssQ0FBQ1csU0FBUyxFQUFFRCxPQUFPO0lBRTNDLE1BQU0sQ0FBQ0osTUFBTTtBQUNmLENBQUMifQ==