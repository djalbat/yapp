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
                        return content === _constants.TEMPLATE_LITERAL_DELIMITER_CONTENT ? _string.default : null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsIlByb2Nlc3NvciIsIkpTWFRva2VuIiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVmFyaWFibGVUb2tlbiIsIkFyZ3VtZW50VG9rZW4iLCJURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUl9DT05URU5UIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsImZyb21FeHByZXNzaW9uIiwianN4Tm9uVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSIsImFyZ3VtZW50TmFtZXMiLCJ2YXJpYWJsZU5hbWVzIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRVgsR0FBYyxDQUFkLFVBQWM7QUFDZixHQUEwQixDQUExQixJQUEwQjtBQUN4QixHQUE0QixDQUE1QixNQUE0QjtBQUMzQixHQUE2QixDQUE3QixPQUE2QjtBQUMzQixHQUErQixDQUEvQixTQUErQjtBQUMvQixHQUErQixDQUEvQixTQUErQjtBQUVOLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsR0FBSyxDQUFDLHNCQUFzQixHQVhOLFNBQVcsT0FXSSxjQUFjLENBQUMsQ0FBWSxjQUMxRCx1QkFBdUIsR0FaUCxTQUFXLE9BWUssY0FBYyxDQUFDLENBQU8sU0FDdEQsdUJBQXVCLEdBYlAsU0FBVyxPQWFLLGNBQWMsQ0FBQyxDQUEyQyw2Q0FDMUYseUJBQXlCLEdBZFQsU0FBVyxPQWNPLGNBQWMsQ0FBQyxDQUFlLGlCQUNoRSx5QkFBeUIsR0FmVCxTQUFXLE9BZU8sY0FBYyxDQUFDLENBQWUsaUJBQ2hFLDJCQUEyQixHQWhCWCxTQUFXLE9BZ0JTLGNBQWMsQ0FBQyxDQUFnRCxrREFDbkcsNEJBQTRCLEdBakJaLFNBQVcsT0FpQlUsY0FBYyxDQUFDLENBQThCLGdDQUNsRixnQ0FBZ0MsR0FsQmhCLFNBQVcsT0FrQmMsY0FBYyxDQUFDLENBQW1CLHFCQUMzRSxvQ0FBb0MsR0FuQnBCLFNBQVcsT0FtQmtCLGNBQWMsQ0FBQyxDQUF3QiwwQkFDcEYsb0NBQW9DLEdBcEJwQixTQUFXLE9Bb0JrQixjQUFjLENBQUMsQ0FBNkIsK0JBQ3pGLHNDQUFzQyxHQXJCdEIsU0FBVyxPQXFCb0IsY0FBYyxDQUFD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LFVBQWMsU0FrRU0sV0FBVyxDQUFDLG1CQUFtQjtZQUFHLENBQUM7OztXQTNDeEQsbUJBQW1CO0VBdkJsQixVQUFjO2tCQXVCZixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3hcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IFN0cmluZ1Rva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmdcIjtcbmltcG9ydCBWYXJpYWJsZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZVwiO1xuaW1wb3J0IEFyZ3VtZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2FyZ3VtZW50XCI7XG5cbmltcG9ydCB7IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGVycm9yVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZXJyb3IvQCpcIiksXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hcIiksXG4gICAgICBqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvQCpcIiksXG4gICAgICBhcmd1bWVudFRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2FyZ3VtZW50L0AqXCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25Cb2R5fGFycm93RnVuY3Rpb25cIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvQCpcIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4QXR0cmlidXRlL25hbWUvQCpcIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyfGxldHxjb25zdC92YXJpYWJsZS9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9zdHJpbmcvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvQGRlbGltaXRlclwiKSxcbiAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb25zdC9kZXN0cnVjdHVyZS92YXJpYWJsZS9AKlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFByb2Nlc3NvciBleHRlbmRzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGpzeE5vblRlcm1pbmFsTm9kZXMgPSBqc3hOb25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzID0gZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeS5leGVjdXRlKG5vZGUpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBFcnJvclRva2VuLCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gU3RyaW5nVG9rZW4sIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gKGNvbnRlbnQgPT09IFRFTVBMQVRFX0xJVEVSQUxfREVMSU1JVEVSX0NPTlRFTlQpID8gU3RyaW5nVG9rZW4gOiBudWxsLCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoanN4Tm9uVGVybWluYWxOb2RlKSA9PiB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IEpTWFRva2VuLCBqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganN4VGFnQXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KSk7XG5cbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBhcmd1bWVudE5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IEFyZ3VtZW50VG9rZW4sIGFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFZhcmlhYmxlVG9rZW4sIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXX0=