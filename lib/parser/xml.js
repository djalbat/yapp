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
var bnf = "\n\n    document                   ::=  xml error* | error+ ;\n\n\n    xml                        ::=  ( preamble element* ) | element+ ;\n\n\n    preamble                   ::=  \"<?\"<NO_WHITESPACE>\"xml\" attribute* \"?>\" ;\n\n\n    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;\n\n\n    comment                    ::=  \"<!--\" text* \"-->\" ;\n\n\n    completeTag                ::=  \"<\"<NO_WHITESPACE>name attribute* \"/>\" ;\n\n\n    startTag                   ::=  \"<\"<NO_WHITESPACE>name attribute* \">\" ;\n\n\n    endTag                     ::=  \"</\"<NO_WHITESPACE>name \">\" ;\n    \n\n    attribute                  ::=  [identifier]<NO_WHITESPACE>\"=\"<NO_WHITESPACE>[string-literal] ;\n\n\n    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n    \n    \n    name                       ::=  [identifier] ;\n\n\n    error                      ::=  . ;\n\n";
var XMLParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(XMLParser, CommonParser);
    function XMLParser() {
        _classCallCheck(this, XMLParser);
        return _possibleConstructorReturn(this, _getPrototypeOf(XMLParser).apply(this, arguments));
    }
    _createClass(XMLParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), xmlParser = XMLParser.fromRules(rules);
                return xmlParser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                var ruleMap = (0, _rules).ruleMapFromRules(rules);
                var startRule = (0, _rules).startRuleFromRules(rules);
                startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                var xmlParser = new XMLParser(startRule, ruleMap);
                return xmlParser;
            }
        }
    ]);
    return XMLParser;
}(_occamParsers.CommonParser);
_defineProperty(XMLParser, "bnf", bnf);
exports.default = XMLParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIl0sIm5hbWVzIjpbIkJORkxleGVyIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkJORlBhcnNlciIsIkNvbW1vblBhcnNlciIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiYm5mIiwiWE1MUGFyc2VyIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwieG1sUGFyc2VyIiwiZnJvbVJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYSxHQUFjLENBQWQsWUFBYztBQUNBLEdBQXlCLENBQXpCLHNCQUF5QjtBQUN4QixHQUFlLENBQWYsYUFBZTtBQUVGLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxHQUFLLENBQUMsUUFBUSxHQU5XLFlBQWMsVUFNYixXQUFXLElBQy9CLFNBQVMsR0FMeUIsYUFBZSxXQUszQixXQUFXO0FBRXZDLEdBQUssQ0FBQyxHQUFHLElBQUksMDlCQXFDYjtJQUVxQixTQUFTLGlCQUFmLFFBQVE7Y0FBRixTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTO2dFQUFULFNBQVM7O2lCQUFULFNBQVM7O1lBR3JCLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFFM0MsTUFBTSxDQUFDLFNBQVM7WUFDbEIsQ0FBQzs7O1lBRU0sR0FBUyxHQUFULFNBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxPQUFPLE9BeERvQyxNQUFvQixtQkF3RHBDLEtBQUs7Z0JBRXRDLEdBQUcsQ0FBQyxTQUFTLE9BMURvQyxNQUFvQixxQkEwRGxDLEtBQUs7Z0JBRXhDLFNBQVMsT0EvRDBCLHNCQUF5Qix5QkErRHpCLFNBQVMsRUFBRSxPQUFPO2dCQUVyRCxHQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU87Z0JBRWxELE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7OztXQXJCa0IsU0FBUztFQTlDVSxhQUFlO2dCQThDbEMsU0FBUyxHQUNyQixHQUFHLEdBQUcsR0FBRztrQkFERyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyLCBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICA6Oj0gIHhtbCBlcnJvciogfCBlcnJvcisgO1xuXG5cbiAgICB4bWwgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggcHJlYW1ibGUgZWxlbWVudCogKSB8IGVsZW1lbnQrIDtcblxuXG4gICAgcHJlYW1ibGUgICAgICAgICAgICAgICAgICAgOjo9ICBcIjw/XCI8Tk9fV0hJVEVTUEFDRT5cInhtbFwiIGF0dHJpYnV0ZSogXCI/PlwiIDtcblxuXG4gICAgZWxlbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBjb21tZW50IHwgY29tcGxldGVUYWcgfCBzdGFydFRhZyAoIGVsZW1lbnQgfCB0ZXh0ICkqIGVuZFRhZyA7XG5cblxuICAgIGNvbW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICAgIGNvbXBsZXRlVGFnICAgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCIvPlwiIDtcblxuXG4gICAgc3RhcnRUYWcgICAgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICAgIGVuZFRhZyAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG4gICAgXG5cbiAgICBhdHRyaWJ1dGUgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICAgIHRleHQgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBbaWRlbnRpZmllcl0gfCBbc3RyaW5nLWxpdGVyYWxdfCBbYnJva2VuLXN0cmluZy1saXRlcmFsXSB8IFt1bmFzc2lnbmVkXSApKyA7XG4gICAgXG4gICAgXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cbiAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgeG1sUGFyc2VyID0gWE1MUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4geG1sUGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIGxldCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgc3RhcnRSdWxlID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgY29uc3QgeG1sUGFyc2VyID0gbmV3IFhNTFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgcmV0dXJuIHhtbFBhcnNlcjtcbiAgfVxufVxuIl19