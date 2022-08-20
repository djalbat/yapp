"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptProcessor;
    }
});
var _occamDom = require("occam-dom");
var _necessary = require("necessary");
var _processor = /*#__PURE__*/ _interopRequireDefault(require("../processor"));
var _error = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/error"));
var _string = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/string"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/variable"));
var _argument = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/argument"));
var _tagName = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/jsx/tagName"));
var _attributeName = /*#__PURE__*/ _interopRequireDefault(require("../token/significant/jsx/attributeName"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    "@swc/helpers - typeof";
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
var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"), jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"), variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//functionBody|arrowFunction"), argumentVariableTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//const/destructure/variable/@*");
var BACKTICK_CHARACTER = _necessary.characters.BACKTICK_CHARACTER;
var JavaScriptProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JavaScriptProcessor, Processor);
    var _super = _createSuper(JavaScriptProcessor);
    function JavaScriptProcessor() {
        _classCallCheck(this, JavaScriptProcessor);
        return _super.apply(this, arguments);
    }
    _createClass(JavaScriptProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                var _this = this;
                if (node !== null) {
                    var jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node), functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _error.default;
                    }, errorTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _string.default;
                    }, templateLiteralStringTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return content === BACKTICK_CHARACTER ? _string.default : null;
                    }, templateLiteralDelimiterTerminalNodeQuery);
                    jsxNonTerminalNodes.forEach(function(jsxNonTerminalNode) {
                        _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                            return _tagName.default;
                        }, jsxTagNameTerminalNodeQuery);
                        _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                            return _attributeName.default;
                        }, jsxTagAttributeNameTerminalNodeQuery);
                    });
                    functionNonTerminalNodes.forEach(function(functionNonTerminalNode) {
                        var argumentNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _argument.default;
                        }, argumentVariableTerminalNodeQuery), variableNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _variable.default;
                        }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);
                        _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            var Token = null;
                            var variableName = content, variableNamesIncludesVariableName = variableNames.includes(variableName), argumentNamesIncludesVariableName = argumentNames.includes(variableName);
                            if (false) {
                            ///
                            } else if (variableNamesIncludesVariableName) {
                                Token = _variable.default;
                            } else if (argumentNamesIncludesVariableName) {
                                Token = _argument.default;
                            }
                            return Token;
                        }, variableTerminalNodeQuery);
                    });
                }
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _processor.default.fromNothing(JavaScriptProcessor);
            }
        }
    ]);
    return JavaScriptProcessor;
}(_processor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5pbXBvcnQgVGFnTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvdGFnTmFtZVwiO1xuaW1wb3J0IEF0dHJpYnV0ZU5hbWVKU1hUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvanN4L2F0dHJpYnV0ZU5hbWVcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Z1bmN0aW9uQm9keXxhcnJvd0Z1bmN0aW9uXCIpLFxuICAgICAgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmNvbnN0IHsgQkFDS1RJQ0tfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiAoY29udGVudCA9PT0gQkFDS1RJQ0tfQ0hBUkFDVEVSKSA/IFN0cmluZ1Rva2VuIDogbnVsbCwgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFRhZ05hbWVKU1hUb2tlbiwganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBqc3hOb25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBBdHRyaWJ1dGVOYW1lSlNYVG9rZW4sIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBWYXJpYWJsZVRva2VuLCB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBWYXJpYWJsZVRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IEFyZ3VtZW50VG9rZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgICB9LCB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0UHJvY2Vzc29yIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkJBQ0tUSUNLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJTdHJpbmdUb2tlbiIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJUYWdOYW1lSlNYVG9rZW4iLCJBdHRyaWJ1dGVOYW1lSlNYVG9rZW4iLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSIsImFyZ3VtZW50TmFtZXMiLCJBcmd1bWVudFRva2VuIiwidmFyaWFibGVOYW1lcyIsIlZhcmlhYmxlVG9rZW4iLCJUb2tlbiIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImluY2x1ZGVzIiwiYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiZnJvbU5vdGhpbmciLCJQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQTJCUUEsbUJBQW1COzs7d0JBekJsQixXQUFXO3lCQUNOLFdBQVc7OERBRWhCLGNBQWM7MERBQ2IsNEJBQTRCOzJEQUMzQiw2QkFBNkI7NkRBQzNCLCtCQUErQjs2REFDL0IsK0JBQStCOzREQUM3QixrQ0FBa0M7a0VBQzVCLHdDQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRSxJQUFNQyxzQkFBc0IsR0FBR0MsU0FB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