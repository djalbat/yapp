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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"), jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"), jsxTagTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/@*"), argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"), variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//functionBody|arrowFunction"), jsxTagAttributeTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//const/destructure/variable/@*");
var JavaScriptProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JavaScriptProcessor, Processor);
    function JavaScriptProcessor() {
        _classCallCheck(this, JavaScriptProcessor);
        return _possibleConstructorReturn(this, _getPrototypeOf(JavaScriptProcessor).apply(this, arguments));
    }
    _createClass(JavaScriptProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node !== null) {
                    var _this = this, _this1 = this;
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
                        var argumentNames = _this1.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _argument.default;
                        }, argumentTerminalNodeQuery), variableNames = _this1.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _variable.default;
                        }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);
                        _this1.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAganN4VGFnVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL0AqXCIpLFxuICAgICAgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9hcmd1bWVudC9AKlwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Z1bmN0aW9uQm9keXxhcnJvd0Z1bmN0aW9uXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4QXR0cmlidXRlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IFN0cmluZ1Rva2VuLCB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IChjb250ZW50ID09PSBURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUikgPyBTdHJpbmdUb2tlbiA6IG51bGwsIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAganN4Tm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChqc3hOb25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gSlNYVG9rZW4sIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gVmFyaWFibGVUb2tlbiwgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gVmFyaWFibGVUb2tlbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBUb2tlbjtcbiAgICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwianN4Tm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiZm9yRWFjaCIsImpzeE5vblRlcm1pbmFsTm9kZSIsIkpTWFRva2VuIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsInZhcmlhYmxlTmFtZXMiLCJWYXJpYWJsZVRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRVgsR0FBYyxDQUFkLFVBQWM7QUFDZixHQUEwQixDQUExQixJQUEwQjtBQUN4QixHQUE0QixDQUE1QixNQUE0QjtBQUMzQixHQUE2QixDQUE3QixPQUE2QjtBQUMzQixHQUErQixDQUEvQixTQUErQjtBQUMvQixHQUErQixDQUEvQixTQUErQjtBQUVkLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsR0FBSyxDQUFDQSxzQkFBc0IsR0FYTixTQUFXLE9BV0lDLGNBQWMsQ0FBQyxDQUFZLGNBQzFEQyx1QkFBdUIsR0FaUCxTQUFXLE9BWUtELGNBQWMsQ0FBQyxDQUFPLFNBQ3RERSx1QkFBdUIsR0FiUCxTQUFXLE9BYUtGLGNBQWMsQ0FBQyxDQUEyQyw2Q0FDMUZHLHlCQUF5QixHQWRULFNBQVcsT0FjT0gsY0FBYyxDQUFDLENBQWUsaUJBQ2hFSSx5QkFBeUIsR0FmVCxTQUFXLE9BZU9KLGNBQWMsQ0FBQyxDQUFlLGlCQUNoRUssMkJBQTJCLEdBaEJYLFNBQVcsT0FnQlNMLGNBQWMsQ0FBQyxDQUFnRCxrREFDbkdNLDRCQUE0QixHQWpCWixTQUFXLE9BaUJVTixjQUFjLENBQUMsQ0FBOEIsZ0NBQ2xGTyxnQ0FBZ0MsR0FsQmhCLFNBQVcsT0FrQmNQLGNBQWMsQ0FBQyxDQUFtQixxQkFDM0VRLG9DQUFvQyxHQW5CcEIsU0FBVyxPQW1Ca0JSLGNBQWMsQ0FBQyxDQUF3QiwwQkFDcEZTLG9DQUFvQyxHQXBCcEIsU0FBVyxPQW9Ca0JULGNBQWMsQ0FBQyxDQUE2QiwrQkFDekZVLHNDQUFzQyxHQXJCdEIsU0FBVyxPQXFCb0JWLGNBQWMsQ0FBQyxDQUE2QiwrQkFDM0ZXLHlDQUF5QyxHQXRCekIsU0FBVyxPQXNCdUJY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