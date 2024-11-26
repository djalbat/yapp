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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("//error/@*"), jsxNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsx"), variableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//functionBody|arrowFunction"), argumentVariableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//argument/variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//const/destructure/variable/@*");
var BACKTICK_CHARACTER = _necessary.characters.BACKTICK_CHARACTER;
var JavaScriptProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JavaScriptProcessor, Processor);
    function JavaScriptProcessor() {
        _class_call_check(this, JavaScriptProcessor);
        return _call_super(this, JavaScriptProcessor, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcbmltcG9ydCBUYWdOYW1lSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeC90YWdOYW1lXCI7XG5pbXBvcnQgQXR0cmlidXRlTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZVwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Vycm9yL0AqXCIpLFxuICAgICAganN4Tm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vanN4XCIpLFxuICAgICAgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy92YXJpYWJsZS9AKlwiKSxcbiAgICAgIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9qc3hDb21wbGV0ZVRhZ3xqc3hTdGFydFRhZ3xqc3hFbmRUYWcvbmFtZS9AKlwiKSxcbiAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vZnVuY3Rpb25Cb2R5fGFycm93RnVuY3Rpb25cIiksXG4gICAgICBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vYXJndW1lbnQvdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vanN4QXR0cmlidXRlL25hbWUvQCpcIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdmFyfGxldHxjb25zdC92YXJpYWJsZS9AKlwiKSxcbiAgICAgIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3RlbXBsYXRlTGl0ZXJhbC9zdHJpbmcvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy90ZW1wbGF0ZUxpdGVyYWwvQGRlbGltaXRlclwiKSxcbiAgICAgIGRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9jb25zdC9kZXN0cnVjdHVyZS92YXJpYWJsZS9AKlwiKTtcblxuY29uc3QgeyBCQUNLVElDS19DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyA9IGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IFN0cmluZ1Rva2VuLCB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IChjb250ZW50ID09PSBCQUNLVElDS19DSEFSQUNURVIpID8gU3RyaW5nVG9rZW4gOiBudWxsLCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoanN4Tm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gVGFnTmFtZUpTWFRva2VuLCBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IEF0dHJpYnV0ZU5hbWVKU1hUb2tlbiwganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMuZm9yRWFjaCgoZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgYXJndW1lbnROYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBBcmd1bWVudFRva2VuLCBhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpLFxuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFZhcmlhYmxlVG9rZW4sIHZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgbGV0IFRva2VuID0gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSBhcmd1bWVudE5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAgIC8vL1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgIFRva2VuID0gQXJndW1lbnRUb2tlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gVG9rZW47XG4gICAgICAgIH0sIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiSmF2YVNjcmlwdFByb2Nlc3NvciIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwianN4Tm9uVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVRdWVyeSIsImFyZ3VtZW50VmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlRGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkiLCJkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJCQUNLVElDS19DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwicHJvY2VzcyIsInRva2VucyIsIm5vZGUiLCJqc3hOb25UZXJtaW5hbE5vZGVzIiwiZXhlY3V0ZSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlcyIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJFcnJvclRva2VuIiwiU3RyaW5nVG9rZW4iLCJmb3JFYWNoIiwianN4Tm9uVGVybWluYWxOb2RlIiwiVGFnTmFtZUpTWFRva2VuIiwiQXR0cmlidXRlTmFtZUpTWFRva2VuIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUiLCJhcmd1bWVudE5hbWVzIiwiQXJndW1lbnRUb2tlbiIsInZhcmlhYmxlTmFtZXMiLCJWYXJpYWJsZVRva2VuIiwiVG9rZW4iLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJpbmNsdWRlcyIsImFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQTJCcUJBOzs7MEJBekJDO3lCQUNLO2dFQUVMOzREQUNDOzZEQUNDOytEQUNFOytEQUNBOzhEQUNFO29FQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU1DLHlCQUF5QkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsZUFDcERDLDBCQUEwQkYsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsVUFDckRFLDRCQUE0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