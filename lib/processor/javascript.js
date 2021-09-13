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
                    jsxNonTerminalNodes.forEach((function(jsxNonTerminalNode) {
                        return this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                            return _jsx.default;
                        }, jsxTagTerminalNodeQuery, jsxTagNameTerminalNodeQuery, jsxTagAttributeTerminalNodeQuery, jsxTagAttributeNameTerminalNodeQuery);
                    }).bind(this));
                    functionNonTerminalNodes.forEach((function(functionNonTerminalNode) {
                        var argumentNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _argument.default;
                        }, argumentTerminalNodeQuery), variableNames = this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                            return _variable.default;
                        }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);
                        this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
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
                    }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsIlByb2Nlc3NvciIsIkpTWFRva2VuIiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiVmFyaWFibGVUb2tlbiIsIkFyZ3VtZW50VG9rZW4iLCJURU1QTEFURV9MSVRFUkFMX0RFTElNSVRFUl9DT05URU5UIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsImZyb21FeHByZXNzaW9uIiwianN4Tm9uVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdUZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImZvckVhY2giLCJqc3hOb25UZXJtaW5hbE5vZGUiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSIsImFyZ3VtZW50TmFtZXMiLCJ2YXJpYWJsZU5hbWVzIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRVgsR0FBYyxDQUFkLFVBQWM7QUFDZixHQUEwQixDQUExQixJQUEwQjtBQUN4QixHQUE0QixDQUE1QixNQUE0QjtBQUMzQixHQUE2QixDQUE3QixPQUE2QjtBQUMzQixHQUErQixDQUEvQixTQUErQjtBQUMvQixHQUErQixDQUEvQixTQUErQjtBQUVOLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakUsR0FBSyxDQUFDLHNCQUFzQixHQVhOLFNBQVcsT0FXSSxjQUFjLEVBQUMsVUFBWSxJQUMxRCx1QkFBdUIsR0FaUCxTQUFXLE9BWUssY0FBYyxFQUFDLEtBQU8sSUFDdEQsdUJBQXVCLEdBYlAsU0FBVyxPQWFLLGNBQWMsRUFBQyx5Q0FBMkMsSUFDMUYseUJBQXlCLEdBZFQsU0FBVyxPQWNPLGNBQWMsRUFBQyxhQUFlLElBQ2hFLHlCQUF5QixHQWZULFNBQVcsT0FlTyxjQUFjLEVBQUMsYUFBZSxJQUNoRSwyQkFBMkIsR0FoQlgsU0FBVyxPQWdCUyxjQUFjLEVBQUMsOENBQWdELElBQ25HLDRCQUE0QixHQWpCWixTQUFXLE9BaUJVLGNBQWMsRUFBQyw0QkFBOEIsSUFDbEYsZ0NBQWdDLEdBbEJoQixTQUFXLE9Ba0JjLGNBQWMsRUFBQyxpQkFBbUIsSUFDM0Usb0NBQW9DLEdBbkJwQixTQUFXLE9BbUJrQixjQUFjLEVBQUMsc0JBQXdCLElBQ3BGLG9DQUFvQyxHQXBCcEIsU0FBVyxPQW9Ca0IsY0FBYyxFQUFDLDJCQUE2QixJQUN6RixzQ0FBc0MsR0FyQnRCLFNBQVcsT0FxQm9CLGNBQWMsRUFBQywy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USxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FsRVQsVUFBYyxTQWtFTSxXQUFXLENBQUMsbUJBQW1CO1lBQUcsQ0FBQzs7O1dBM0N4RCxtQkFBbUI7RUF2QmxCLFVBQWM7a0JBdUJmLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeFwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcblxuaW1wb3J0IHsgVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeFwiKSxcbiAgICAgIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeENvbXBsZXRlVGFnfGpzeFN0YXJ0VGFnfGpzeEVuZFRhZy9AKlwiKSxcbiAgICAgIGFyZ3VtZW50VGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvQCpcIiksXG4gICAgICB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeENvbXBsZXRlVGFnfGpzeFN0YXJ0VGFnfGpzeEVuZFRhZy9uYW1lL0AqXCIpLFxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9mdW5jdGlvbkJvZHl8YXJyb3dGdW5jdGlvblwiKSxcbiAgICAgIGpzeFRhZ0F0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2pzeEF0dHJpYnV0ZS9AKlwiKSxcbiAgICAgIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hBdHRyaWJ1dGUvbmFtZS9AKlwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJ8bGV0fGNvbnN0L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdGVtcGxhdGVMaXRlcmFsL3N0cmluZy9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9AZGVsaW1pdGVyXCIpLFxuICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2NvbnN0L2Rlc3RydWN0dXJlL3ZhcmlhYmxlL0AqXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiAoY29udGVudCA9PT0gVEVNUExBVEVfTElURVJBTF9ERUxJTUlURVJfQ09OVEVOVCkgPyBTdHJpbmdUb2tlbiA6IG51bGwsIHRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAganN4Tm9uVGVybWluYWxOb2Rlcy5mb3JFYWNoKChqc3hOb25UZXJtaW5hbE5vZGUpID0+IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gSlNYVG9rZW4sIGpzeFRhZ1Rlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpKTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRUZXJtaW5hbE5vZGVRdWVyeSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gVmFyaWFibGVUb2tlbiwgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gY29udGVudCwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgLy8vXG4gICAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gVmFyaWFibGVUb2tlbjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBUb2tlbjtcbiAgICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdfQ==