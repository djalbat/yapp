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
var XMLParser = function(CommonParser) {
    _inherits(XMLParser, _occamParsers.CommonParser);
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
                var ruleMap = _rules.ruleMapFromRules(rules);
                var startRule = _rules.startRuleFromRules(rules);
                startRule = _occamGrammarUtilities.eliminateLeftRecursion(startRule, ruleMap);
                var xmlParser = new XMLParser(startRule, ruleMap);
                return xmlParser;
            }
        }
    ]);
    return XMLParser;
}(_occamParsers.CommonParser);
_defineProperty(XMLParser, "bnf", bnf);
exports.default = XMLParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTkZMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IEJORlBhcnNlciwgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICB4bWwgZXJyb3IqIHwgZXJyb3IrIDtcblxuXG4gICAgeG1sICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIHByZWFtYmxlIGVsZW1lbnQqICkgfCBlbGVtZW50KyA7XG5cblxuICAgIHByZWFtYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICAgIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgY29tbWVudCB8IGNvbXBsZXRlVGFnIHwgc3RhcnRUYWcgKCBlbGVtZW50IHwgdGV4dCApKiBlbmRUYWcgO1xuXG5cbiAgICBjb21tZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPCEtLVwiIHRleHQqIFwiLS0+XCIgO1xuXG5cbiAgICBjb21wbGV0ZVRhZyAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBhdHRyaWJ1dGUqIFwiLz5cIiA7XG5cblxuICAgIHN0YXJ0VGFnICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgICBlbmRUYWcgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPC9cIjxOT19XSElURVNQQUNFPm5hbWUgXCI+XCIgO1xuICAgIFxuXG4gICAgYXR0cmlidXRlICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl08Tk9fV0hJVEVTUEFDRT5cIj1cIjxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gO1xuXG5cbiAgICB0ZXh0ICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuICAgIFxuICAgIFxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWE1MUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgIHhtbFBhcnNlciA9IFhNTFBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIHhtbFBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIGNvbnN0IHhtbFBhcnNlciA9IG5ldyBYTUxQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHJldHVybiB4bWxQYXJzZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVhLFlBQWM7SUFDQSxzQkFBeUI7SUFDeEIsYUFBZTtJQUVGLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuRSxRQUFRLEdBTlcsWUFBYyxVQU1iLFdBQVcsSUFDL0IsU0FBUyxHQUx5QixhQUFlLFdBSzNCLFdBQVc7SUFFakMsR0FBRyxJQUFJLDA5QkFxQ2I7SUFFcUIsU0FBUyxZQUFTLFlBQVk7Y0FBOUIsU0FBUyxFQTlDVSxhQUFlO2FBOENsQyxTQUFTOzhCQUFULFNBQVM7Z0VBQVQsU0FBUzs7aUJBQVQsU0FBUzs7WUFHckIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVztvQkFDVixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQ25DLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FDeEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSzt1QkFFcEMsU0FBUzs7OztZQUdYLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLO29CQUNkLE9BQU8sR0F4RG9DLE1BQW9CLGtCQXdEcEMsS0FBSztvQkFFbEMsU0FBUyxHQTFEb0MsTUFBb0Isb0JBMERsQyxLQUFLO2dCQUV4QyxTQUFTLEdBL0QwQixzQkFBeUIsd0JBK0R6QixTQUFTLEVBQUUsT0FBTztvQkFFL0MsU0FBUyxPQUFPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTzt1QkFFM0MsU0FBUzs7OztXQXBCQyxTQUFTO0VBOUNVLGFBQWU7Z0JBOENsQyxTQUFTLEdBQ3JCLEdBQUcsR0FBRyxHQUFHO2tCQURHLFNBQVMifQ==