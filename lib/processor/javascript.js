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
var errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*"), jsxNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsx"), variableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//variable/@*"), jsxTagNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"), functionNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//functionBody|arrowFunction"), argumentVariableTerminalNodeQuery = _occamquery.Query.fromExpressionString("//argument/variable/@*"), jsxTagAttributeNameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//jsxAttribute/name/@*"), variableDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//var|let|const/variable/@*"), templateLiteralStringTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/string/@*"), templateLiteralDelimiterTerminalNodeQuery = _occamquery.Query.fromExpressionString("//templateLiteral/@delimiter"), destructuredConstDeclarationTerminalNodeQuery = _occamquery.Query.fromExpressionString("//const/destructure/variable/@*");
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
                if (node === null) {
                    return;
                }
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _error.default;
                    return token;
                }, errorTerminalNodeQuery);
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _string.default;
                    return token;
                }, templateLiteralStringTerminalNodeQuery);
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = content === BACKTICK_CHARACTER ? _string.default : null;
                    return token;
                }, templateLiteralDelimiterTerminalNodeQuery);
                var jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node), functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
                jsxNonTerminalNodes.forEach(function(jsxNonTerminalNode) {
                    _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                        var token = _tagName.default;
                        return token;
                    }, jsxTagNameTerminalNodeQuery);
                    _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function(content) {
                        var token = _attributeName.default;
                        return token;
                    }, jsxTagAttributeNameTerminalNodeQuery);
                });
                functionNonTerminalNodes.forEach(function(functionNonTerminalNode) {
                    var argumentNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                        var token = _argument.default; ///
                        return token;
                    }, argumentVariableTerminalNodeQuery), variableNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function(content) {
                        var token = _variable.default;
                        return token;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcbmltcG9ydCBUYWdOYW1lSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeC90YWdOYW1lXCI7XG5pbXBvcnQgQXR0cmlidXRlTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZVwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeFwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Z1bmN0aW9uQm9keXxhcnJvd0Z1bmN0aW9uXCIpLFxuICAgICAgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2FyZ3VtZW50L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmNvbnN0IHsgQkFDS1RJQ0tfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gRXJyb3JUb2tlbjtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBTdHJpbmdUb2tlbjtcblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sIHRlbXBsYXRlTGl0ZXJhbFN0cmluZ1Rlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gKGNvbnRlbnQgPT09IEJBQ0tUSUNLX0NIQVJBQ1RFUikgP1xuICAgICAgICAgICAgICAgICAgICAgIFN0cmluZ1Rva2VuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LCB0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICBjb25zdCBqc3hOb25UZXJtaW5hbE5vZGVzID0ganN4Tm9uVGVybWluYWxOb2RlUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBqc3hOb25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gVGFnTmFtZUpTWFRva2VuO1xuXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH0sIGpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywganN4Tm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IEF0dHJpYnV0ZU5hbWVKU1hUb2tlbjtcblxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICB9LCBqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBhcmd1bWVudE5hbWVzID0gdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBBcmd1bWVudFRva2VuOyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSwgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgIHZhcmlhYmxlTmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IFZhcmlhYmxlVG9rZW47XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfSwgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5LCBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICBsZXQgVG9rZW4gPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIGFyZ3VtZW50TmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSA9IGFyZ3VtZW50TmFtZXMuaW5jbHVkZXModmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgICAvLy9cbiAgICAgICAgfSBlbHNlIGlmICh2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBUb2tlbiA9IFZhcmlhYmxlVG9rZW47XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgVG9rZW4gPSBBcmd1bWVudFRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgfSwgdmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0UHJvY2Vzc29yIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJqc3hOb25UZXJtaW5hbE5vZGVRdWVyeSIsInZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwiYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5IiwianN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwidGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxEZWxpbWl0ZXJUZXJtaW5hbE5vZGVRdWVyeSIsImRlc3RydWN0dXJlZENvbnN0RGVjbGFyYXRpb25UZXJtaW5hbE5vZGVRdWVyeSIsIkJBQ0tUSUNLX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0b2tlbiIsIkVycm9yVG9rZW4iLCJTdHJpbmdUb2tlbiIsImpzeE5vblRlcm1pbmFsTm9kZXMiLCJleGVjdXRlIiwiZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzIiwiZm9yRWFjaCIsImpzeE5vblRlcm1pbmFsTm9kZSIsIlRhZ05hbWVKU1hUb2tlbiIsIkF0dHJpYnV0ZU5hbWVKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJmcm9tTm90aGluZyIsIlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUEyQnFCQTs7OzBCQXpCQzt5QkFDSztnRUFFTDs0REFDQzs2REFDQzsrREFDRTsrREFDQTs4REFDRTtvRUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyx5QkFBeUJDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdCQUNwREMsMEJBQTBCRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxVQUNyREUsNEJBQTRCSCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxrQkFDdkRHLDhCQUE4QkosaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsbURBQ3pESSwrQkFBK0JMLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGlDQUMxREssb0NBQW9DTixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQywyQkFDL0RNLHVDQUF1Q1AsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsMkJBQ2xFTyx1Q0FBdUNSLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdDQUNsRVEseUNBQXlDVCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxnQ0FDcEVTLDRDQUE0Q1YsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsaUNBQ3ZFVSxnREFBZ0RYLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRWpGLElBQU0sQUFBRVcscUJBQXVCQyxxQkFBVSxDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1kLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQmdCLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxNQUFNLEVBQUVDLElBQUk7O2dCQUNsQixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sU0FBQ0U7b0JBQ3ZELElBQU1DLFFBQVFDLGNBQVU7b0JBRXhCLE9BQU9EO2dCQUNULEdBQUdwQjtnQkFFSCxJQUFJLENBQUNrQixvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTtvQkFDdkQsSUFBTUMsUUFBUUUsZUFBVztvQkFFekIsT0FBT0Y7Z0JBQ1QsR0FBR1Y7Z0JBRUgsSUFBSSxDQUFDUSxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTtvQkFDdkQsSUFBTUMsUUFBUSxBQUFDRCxZQUFZTixxQkFDWFMsZUFBVyxHQUNUO29CQUVsQixPQUFPRjtnQkFDVCxHQUFHVDtnQkFFSCxJQUFNWSxzQkFBc0JwQix3QkFBd0JxQixPQUFPLENBQUNQLE9BQ3REUSwyQkFBMkJuQiw2QkFBNkJrQixPQUFPLENBQUNQO2dCQUV0RU0sb0JBQW9CRyxPQUFPLENBQUMsU0FBQ0M7b0JBQzNCLE1BQUtULG9DQUFvQyxDQUFDRixRQUFRVyxvQkFBb0IsU0FBQ1I7d0JBQ3JFLElBQU1DLFFBQVFRLGdCQUFlO3dCQUU3QixPQUFPUjtvQkFDVCxHQUFHZjtvQkFFSCxNQUFLYSxvQ0FBb0MsQ0FBQ0YsUUFBUVcsb0JBQW9CLFNBQUNSO3dCQUNyRSxJQUFNQyxRQUFRUyxzQkFBcUI7d0JBRW5DLE9BQU9UO29CQUNULEdBQUdaO2dCQUNMO2dCQUVBaUIseUJBQXlCQyxPQUFPLENBQUMsU0FBQ0k7b0JBQ2hDLElBQU1DLGdCQUFnQixNQUFLYixvQ0FBb0MsQ0FBQ0YsUUFBUWMseUJBQXlCLFNBQUNYO3dCQUMxRixJQUFNQyxRQUFRWSxpQkFBYSxFQUFHLEdBQUc7d0JBRWpDLE9BQU9aO29CQUNULEdBQUdiLG9DQUNIMEIsZ0JBQWdCLE1BQUtmLG9DQUFvQyxDQUFDRixRQUFRYyx5QkFBeUIsU0FBQ1g7d0JBQzFGLElBQU1DLFFBQVFjLGlCQUFhO3dCQUUzQixPQUFPZDtvQkFDVCxHQUFHWCxzQ0FBc0NHO29CQUUvQyxNQUFLTSxvQ0FBb0MsQ0FBQ0YsUUFBUWMseUJBQXlCLFNBQUNYO3dCQUMxRSxJQUFJZ0IsUUFBUTt3QkFFWixJQUFNQyxlQUFlakIsU0FDZmtCLG9DQUFvQ0osY0FBY0ssUUFBUSxDQUFDRixlQUMzREcsb0NBQW9DUixjQUFjTyxRQUFRLENBQUNGO3dCQUVqRSxJQUFJLE9BQU87d0JBQ1QsR0FBRzt3QkFDTCxPQUFPLElBQUlDLG1DQUFtQzs0QkFDNUNGLFFBQVFELGlCQUFhO3dCQUN2QixPQUFPLElBQUlLLG1DQUFtQzs0QkFDNUNKLFFBQVFILGlCQUFhO3dCQUN2Qjt3QkFFQSxPQUFPRztvQkFDVCxHQUFHL0I7Z0JBQ0w7WUFDRjs7OztZQUVPb0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGtCQUFTLENBQUNELFdBQVcsQ0EzRWhDekM7WUEyRXVEOzs7V0EzRXZEQTtFQUE0QjBDLGtCQUFTIn0=