"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _necessary = require("necessary");
var _processor = _interopRequireDefault(require("../processor"));
var _jsx = _interopRequireDefault(require("../token/significant/jsx"));
var _error = _interopRequireDefault(require("../token/significant/error"));
var _string = _interopRequireDefault(require("../token/significant/string"));
var _variable = _interopRequireDefault(require("../token/significant/variable"));
var _argument = _interopRequireDefault(require("../token/significant/argument"));
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
var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"), jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"), jsxTagTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/@*"), variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//functionBody|arrowFunction"), jsxTagAttributeTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/@*"), argumentVariableTerminalNodeQuery = _occamDom.Query.fromExpression("//argument//variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//const/destructure/variable/@*");
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
                if (node !== null) {
                    var _this = this;
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
                        return _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                            return _jsx.default;
                        }, jsxTagTerminalNodeQuery, jsxTagNameTerminalNodeQuery, jsxTagAttributeTerminalNodeQuery, jsxTagAttributeNameTerminalNodeQuery);
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
exports.default = JavaScriptProcessor;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBKU1hUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvanN4XCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcbmltcG9ydCBTdHJpbmdUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nXCI7XG5pbXBvcnQgVmFyaWFibGVUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvdmFyaWFibGVcIjtcbmltcG9ydCBBcmd1bWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hcmd1bWVudFwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAganN4VGFnVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25Cb2R5fGFycm93RnVuY3Rpb25cIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvQCpcIiksXG4gICAgICBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmNvbnN0IHsgQkFDS1RJQ0tfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiAoY29udGVudCA9PT0gQkFDS1RJQ0tfQ0hBUkFDVEVSKSA/IFN0cmluZ1Rva2VuIDogbnVsbCwgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBqc3hOb25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBKU1hUb2tlbiwganN4VGFnVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSkpO1xuXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBBcmd1bWVudFRva2VuLCBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFZhcmlhYmxlVG9rZW4sIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJCQUNLVElDS19DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwianN4Tm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiZm9yRWFjaCIsImpzeE5vblRlcm1pbmFsTm9kZSIsIkpTWFRva2VuIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsInZhcmlhYmxlTmFtZXMiLCJWYXJpYWJsZVRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBQ04sR0FBVyxDQUFYLFVBQVc7QUFFaEIsR0FBYyxDQUFkLFVBQWM7QUFDZixHQUEwQixDQUExQixJQUEwQjtBQUN4QixHQUE0QixDQUE1QixNQUE0QjtBQUMzQixHQUE2QixDQUE3QixPQUE2QjtBQUMzQixHQUErQixDQUEvQixTQUErQjtBQUMvQixHQUErQixDQUEvQixTQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxHQUFLLENBQUNBLHNCQUFzQixHQUFHQyxTQUFLLE9BQUNDLGNBQWMsQ0FBQyxDQUFZLGNBQzFEQyx1QkFBdUIsR0FBR0YsU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBTyxTQUN0REUsdUJBQXVCLEdBQUdILFNBQUssT0FBQ0MsY0FBYyxDQUFDLENBQTJDLDZDQUMxRkcseUJBQXlCLEdBQUdKLFNBQUssT0FBQ0MsY0FBYyxDQUFDLENBQWUsaUJBQ2hFSSwyQkFBMkIsR0FBR0wsU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBZ0Qsa0RBQ25HSyw0QkFBNEIsR0FBR04sU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBOEIsZ0NBQ2xGTSxnQ0FBZ0MsR0FBR1AsU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBbUIscUJBQzNFTyxpQ0FBaUMsR0FBR1IsU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBeUIsMkJBQ2xGUSxvQ0FBb0MsR0FBR1QsU0FBSyxPQUFDQyxjQUFjLENBQUMsQ0FBd0IsMEJBQ3BG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