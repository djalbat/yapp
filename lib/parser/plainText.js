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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var bnf = "\n\n    document                   ::=  .+ ;\n\n";
var PlainTextParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(PlainTextParser, CommonParser);
    function PlainTextParser() {
        _classCallCheck(this, PlainTextParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(PlainTextParser).apply(this, arguments));
    }
    _createClass(PlainTextParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), plainTextParser = PlainTextParser.fromRules(rules);
                return plainTextParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var ruleMap = (0, _rules).ruleMapFromRules(rules);
                var startRule = (0, _rules).startRuleFromRules(rules);
                startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                var plainTextParser = new PlainTextParser(startRule, ruleMap);
                return plainTextParser;
            }
        }
    ]);
    return PlainTextParser;
}(_occamParsers.CommonParser);
_defineProperty(PlainTextParser, "bnf", bnf);
exports.default = PlainTextParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvcGxhaW5UZXh0LmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiYm5mIiwiUGxhaW5UZXh0UGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwicGxhaW5UZXh0UGFyc2VyIiwiZnJvbVJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNBLEdBQXlCLENBQXpCLHNCQUF5QjtBQUN4QixHQUFlLENBQWYsYUFBZTtBQUVGLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxHQUFLLENBQUMsUUFBUSxHQU5XLFlBQWMsVUFNYixXQUFXLElBQy9CLFNBQVMsR0FMeUIsYUFBZSxXQUszQixXQUFXO0FBRXZDLEdBQUssQ0FBQyxHQUFHLEdBQUksQ0FJYjtJQUVxQixlQUFlLGlCQUFyQixRQUFRO2NBQUYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQUczQixHQUFXLEVBQVgsQ0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUNuQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQ3hDLGVBQWUsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBRXZELE1BQU0sQ0FBQyxlQUFlO1lBQ3hCLENBQUM7OztZQUVNLEdBQVMsRUFBVCxDQUFTO21CQUFoQixRQUFRLENBQUQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUMsT0FBTyxPQXZCb0MsTUFBb0IsbUJBdUJwQyxLQUFLO2dCQUV0QyxHQUFHLENBQUMsU0FBUyxPQXpCb0MsTUFBb0IscUJBeUJsQyxLQUFLO2dCQUV4QyxTQUFTLE9BOUIwQixzQkFBeUIseUJBOEJ6QixTQUFTLEVBQUUsT0FBTztnQkFFckQsR0FBSyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPO2dCQUU5RCxNQUFNLENBQUMsZUFBZTtZQUN4QixDQUFDOzs7V0FyQmtCLGVBQWU7RUFiSSxhQUFlO2dCQWFsQyxlQUFlLEVBQzNCLENBQUcsTUFBRyxHQUFHO2tCQURHLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIENvbW1vblBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgLisgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgcGxhaW5UZXh0UGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0UGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIGxldCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgc3RhcnRSdWxlID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgY29uc3QgcGxhaW5UZXh0UGFyc2VyID0gbmV3IFBsYWluVGV4dFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHBsYWluVGV4dFBhcnNlcjtcbiAgfVxufVxuIl19