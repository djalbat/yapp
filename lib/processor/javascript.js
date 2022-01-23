"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _processor = _interopRequireDefault(require("../processor"));
var _jsx = _interopRequireDefault(require("../token/significant/jsx"));
var _error = _interopRequireDefault(require("../token/significant/error"));
var _string = _interopRequireDefault(require("../token/significant/string"));
var _variable = _interopRequireDefault(require("../token/significant/variable"));
var _argument = _interopRequireDefault(require("../token/significant/argument"));
var _constants = require("../constants");
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
                        return content === _constants.TEMPLATE_LITERAL_DELIMITER ? _string.default : null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAganN4VGFnVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25Cb2R5fGFycm93RnVuY3Rpb25cIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvQCpcIiksXG4gICAgICBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IFN0cmluZ1Rva2VuLCB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IChjb250ZW50ID09PSBURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUikgPyBTdHJpbmdUb2tlbiA6IG51bGwsIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAganN4Tm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChqc3hOb25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gSlNYVG9rZW4sIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBWYXJpYWJsZVRva2VuLCB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBWYXJpYWJsZVRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IEFyZ3VtZW50VG9rZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgICB9LCB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl0sIm5hbWVzIjpbImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJTdHJpbmdUb2tlbiIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVYLEdBQWMsQ0FBZCxVQUFjO0FBQ2YsR0FBMEIsQ0FBMUIsSUFBMEI7QUFDeEIsR0FBNEIsQ0FBNUIsTUFBNEI7QUFDM0IsR0FBNkIsQ0FBN0IsT0FBNkI7QUFDM0IsR0FBK0IsQ0FBL0IsU0FBK0I7QUFDL0IsR0FBK0IsQ0FBL0IsU0FBK0I7QUFFZCxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxHQUFLLENBQUNBLHNCQUFzQixHQVhOLFNBQVcsT0FXSUMsY0FBYyxDQUFDLENBQVksY0FDMURDLHVCQUF1QixHQVpQLFNBQVcsT0FZS0QsY0FBYyxDQUFDLENBQU8sU0FDdERFLHVCQUF1QixHQWJQLFNBQVcsT0FhS0YsY0FBYyxDQUFDLENBQTJDLDZDQUMxRkcseUJBQXlCLEdBZFQsU0FBVyxPQWNPSCxjQUFjLENBQUMsQ0FBZSxpQkFDaEVJLDJCQUEyQixHQWZYLFNBQVcsT0FlU0osY0FBYyxDQUFDLENBQWdELGtEQUNuR0ssNEJBQTRCLEdBaEJaLFNBQVcsT0FnQlVMLGNBQWMsQ0FBQyxDQUE4QixnQ0FDbEZNLGdDQUFnQyxHQWpCaEIsU0FBVyxPQWlCY04sY0FBYyxDQUFDLENBQW1CLHFCQUMzRU8saUNBQWlDLEdBbEJqQixTQUFXLE9Ba0JlUCxjQUFjLENBQUMsQ0FBeUIsMkJBQ2xGUSxvQ0FBb0MsR0FuQnBCLFNBQVcsT0FtQmtCUixjQUFjLENBQUMsQ0FBd0IsMEJBQ3BGUyxvQ0FBb0MsR0FwQnBCLFNBQVcsT0FvQmtCVCxjQUFjLENBQUMsQ0FBNkIsK0JBQ3pGVSxzQ0FBc0MsR0FyQnRCLFNB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