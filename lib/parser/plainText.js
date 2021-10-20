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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAuKyA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBwbGFpblRleHRQYXJzZXIgPSBQbGFpblRleHRQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBwbGFpblRleHRQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7XG4gICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBwbGFpblRleHRQYXJzZXIgPSBuZXcgUGxhaW5UZXh0UGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICByZXR1cm4gcGxhaW5UZXh0UGFyc2VyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImJuZiIsIlBsYWluVGV4dFBhcnNlciIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsInBsYWluVGV4dFBhcnNlciIsImZyb21SdWxlcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBYyxDQUFkLFlBQWM7QUFDQSxHQUF5QixDQUF6QixzQkFBeUI7QUFDeEIsR0FBZSxDQUFmLGFBQWU7QUFFRixHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsR0FBSyxDQUFDQSxRQUFRLEdBTlcsWUFBYyxVQU1iQyxXQUFXLElBQy9CQyxTQUFTLEdBTHlCLGFBQWUsV0FLM0JELFdBQVc7QUFFdkMsR0FBSyxDQUFDRSxHQUFHLEdBQUksQ0FJYjtJQUVxQkMsZUFBZSxpQkFBckIsUUFBUTtjQUFGQSxlQUFlO2FBQWZBLGVBQWU7OEJBQWZBLGVBQWU7Z0VBQWZBLGVBQWU7O2lCQUFmQSxlQUFlOztZQUczQkgsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNJLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxhQUFhLENBQUNILEdBQUcsR0FDbkNJLEtBQUssR0FBR0wsU0FBUyxDQUFDTSxlQUFlLENBQUNILE1BQU0sR0FDeENJLGVBQWUsR0FBR0wsZUFBZSxDQUFDTSxTQUFTLENBQUNILEtBQUs7Z0JBRXZELE1BQU0sQ0FBQ0UsZUFBZTtZQUN4QixDQUFDOzs7WUFFTUMsR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ0gsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQ0ksT0FBTyxPQXZCb0MsTUFBb0IsbUJBdUJwQ0osS0FBSztnQkFFdEMsR0FBRyxDQUFDSyxTQUFTLE9BekJvQyxNQUFvQixxQkF5QmxDTCxLQUFLO2dCQUV4Q0ssU0FBUyxPQTlCMEIsc0JBQXlCLHlCQThCekJBLFNBQVMsRUFBRUQsT0FBTztnQkFFckQsR0FBSyxDQUFDRixlQUFlLEdBQUcsR0FBRyxDQUFDTCxlQUFlLENBQUNRLFNBQVMsRUFBRUQsT0FBTztnQkFFOUQsTUFBTSxDQUFDRixlQUFlO1lBQ3hCLENBQUM7OztXQXJCa0JMLGVBQWU7RUFiSSxhQUFlO2dCQWFsQ0EsZUFBZSxFQUMzQkQsQ0FBRyxNQUFHQSxHQUFHO2tCQURHQyxlQUFlIn0=