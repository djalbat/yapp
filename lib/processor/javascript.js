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
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
var _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
var _string = /*#__PURE__*/ _interop_require_default(require("../token/significant/string"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../token/significant/variable"));
var _argument = /*#__PURE__*/ _interop_require_default(require("../token/significant/argument"));
var _tagName = /*#__PURE__*/ _interop_require_default(require("../token/significant/jsx/tagName"));
var _attributeName = /*#__PURE__*/ _interop_require_default(require("../token/significant/jsx/attributeName"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var errorTerminalNodeQuery = _occamquery.Query.fromExpression("//error/@*"), jsxNonTerminalNodeQuery = _occamquery.Query.fromExpression("//jsx"), variableTerminalNodeQuery = _occamquery.Query.fromExpression("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamquery.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamquery.Query.fromExpression("//functionBody|arrowFunction"), argumentVariableTerminalNodeQuery = _occamquery.Query.fromExpression("//argument/variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamquery.Query.fromExpression("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamquery.Query.fromExpression("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamquery.Query.fromExpression("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamquery.Query.fromExpression("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamquery.Query.fromExpression("//const/destructure/variable/@*");
var BACKTICK_CHARACTER = _necessary.characters.BACKTICK_CHARACTER;
var JavaScriptProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JavaScriptProcessor, Processor);
    var _super = _create_super(JavaScriptProcessor);
    function JavaScriptProcessor() {
        _class_call_check(this, JavaScriptProcessor);
        return _super.apply(this, arguments);
    }
    _create_class(JavaScriptProcessor, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcbmltcG9ydCBUYWdOYW1lSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeC90YWdOYW1lXCI7XG5pbXBvcnQgQXR0cmlidXRlTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZVwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4XCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vZnVuY3Rpb25Cb2R5fGFycm93RnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXJndW1lbnQvdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vanN4QXR0cmlidXRlL25hbWUvQCpcIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vdmFyfGxldHxjb25zdC92YXJpYWJsZS9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3RlbXBsYXRlTGl0ZXJhbC9zdHJpbmcvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy90ZW1wbGF0ZUxpdGVyYWwvQGRlbGltaXRlclwiKSxcbiAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb25zdC9kZXN0cnVjdHVyZS92YXJpYWJsZS9AKlwiKTtcblxuY29uc3QgeyBCQUNLVElDS19DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IFN0cmluZ1Rva2VuLCB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IChjb250ZW50ID09PSBCQUNLVElDS19DSEFSQUNURVIpID8gU3RyaW5nVG9rZW4gOiBudWxsLCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoanN4Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gVGFnTmFtZUpTWFRva2VuLCBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IEF0dHJpYnV0ZU5hbWVKU1hUb2tlbiwganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBBcmd1bWVudFRva2VuLCBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFZhcmlhYmxlVG9rZW4sIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiSmF2YVNjcmlwdFByb2Nlc3NvciIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwianN4Tm9uVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJCQUNLVElDS19DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwicHJvY2VzcyIsInRva2VucyIsIm5vZGUiLCJqc3hOb25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwiU3RyaW5nVG9rZW4iLCJmb3JFYWNoIiwianN4Tm9uVGVybWluYWxOb2RlIiwiVGFnTmFtZUpTWFRva2VuIiwiQXR0cmlidXRlTmFtZUpTWFRva2VuIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsInZhcmlhYmxlTmFtZXMiLCJWYXJpYWJsZVRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQTJCcUJBOzs7MEJBekJDO3lCQUNLO2dFQUVMOzREQUNDOzZEQUNDOytEQUNFOytEQUNBOzhEQUNFO29FQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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