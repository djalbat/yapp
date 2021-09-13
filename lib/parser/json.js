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
var bnf = "\n\n    document                   ::=  json error* | error+ ;\n\n\n    json                       ::=  array | object ;\n\n\n    array                      ::=  \"[\" ( element ( \",\" element )* )? \"]\" ;\n\n\n    object                     ::=  \"{\" ( [string-literal] \":\" element ( \",\" [string-literal] \":\" element )* )? \"}\" ;\n\n    \n    element                    ::=  json |  [string-literal] | [number] | \"true\" | \"false\" | \"null\" ;\n\n\n    error                      ::=  . ;\n\n";
var JSONParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(JSONParser, CommonParser);
    function JSONParser() {
        _classCallCheck(this, JSONParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(JSONParser).apply(this, arguments));
    }
    _createClass(JSONParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), jsonParser = JSONParser.fromRules(rules);
                return jsonParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var ruleMap = (0, _rules).ruleMapFromRules(rules);
                var startRule = (0, _rules).startRuleFromRules(rules);
                startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                var jsonParser = new JSONParser(startRule, ruleMap);
                return jsonParser;
            }
        }
    ]);
    return JSONParser;
}(_occamParsers.CommonParser);
_defineProperty(JSONParser, "bnf", bnf);
exports.default = JSONParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyJdLCJuYW1lcyI6WyJCTkZMZXhlciIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJCTkZQYXJzZXIiLCJDb21tb25QYXJzZXIiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwiYm5mTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsImJuZiIsIkpTT05QYXJzZXIiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJqc29uUGFyc2VyIiwiZnJvbVJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNBLEdBQXlCLENBQXpCLHNCQUF5QjtBQUN4QixHQUFlLENBQWYsYUFBZTtBQUVGLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxHQUFLLENBQUMsUUFBUSxHQU5XLFlBQWMsVUFNYixXQUFXLElBQy9CLFNBQVMsR0FMeUIsYUFBZSxXQUszQixXQUFXO0FBRXZDLEdBQUssQ0FBQyxHQUFHLElBQUksMGZBbUJiO0lBRXFCLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBR3RCLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFN0MsTUFBTSxDQUFDLFVBQVU7WUFDbkIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxPQUFPLE9BdENvQyxNQUFvQixtQkFzQ3BDLEtBQUs7Z0JBRXRDLEdBQUcsQ0FBQyxTQUFTLE9BeENvQyxNQUFvQixxQkF3Q2xDLEtBQUs7Z0JBRXhDLFNBQVMsT0E3QzBCLHNCQUF5Qix5QkE2Q3pCLFNBQVMsRUFBRSxPQUFPO2dCQUVyRCxHQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU87Z0JBRXBELE1BQU0sQ0FBQyxVQUFVO1lBQ25CLENBQUM7OztXQXJCa0IsVUFBVTtFQTVCUyxhQUFlO2dCQTRCbEMsVUFBVSxHQUN0QixHQUFHLEdBQUcsR0FBRztrQkFERyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gZXJyb3IqIHwgZXJyb3IrIDtcblxuXG4gICAganNvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcnJheSB8IG9iamVjdCA7XG5cblxuICAgIGFycmF5ICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgKCBlbGVtZW50ICggXCIsXCIgZWxlbWVudCApKiApPyBcIl1cIiA7XG5cblxuICAgIG9iamVjdCAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJ7XCIgKCBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKCBcIixcIiBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKSogKT8gXCJ9XCIgO1xuXG4gICAgXG4gICAgZWxlbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBqc29uIHwgIFtzdHJpbmctbGl0ZXJhbF0gfCBbbnVtYmVyXSB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgO1xuXG5cbiAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIGpzb25QYXJzZXIgPSBKU09OUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4ganNvblBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIGNvbnN0IGpzb25QYXJzZXIgPSBuZXcgSlNPTlBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIGpzb25QYXJzZXI7XG4gIH1cbn1cbiJdfQ==