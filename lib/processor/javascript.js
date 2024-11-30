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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3NvclwiO1xuaW1wb3J0IEVycm9yVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2Vycm9yXCI7XG5pbXBvcnQgU3RyaW5nVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZ1wiO1xuaW1wb3J0IFZhcmlhYmxlVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L3ZhcmlhYmxlXCI7XG5pbXBvcnQgQXJndW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXJndW1lbnRcIjtcbmltcG9ydCBUYWdOYW1lSlNYVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2pzeC90YWdOYW1lXCI7XG5pbXBvcnQgQXR0cmlidXRlTmFtZUpTWFRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZVwiO1xuXG5jb25zdCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9lcnJvci9AKlwiKSxcbiAgICAgIGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeFwiKSxcbiAgICAgIHZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdmFyaWFibGUvQCpcIiksXG4gICAgICBqc3hUYWdOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vanN4Q29tcGxldGVUYWd8anN4U3RhcnRUYWd8anN4RW5kVGFnL25hbWUvQCpcIiksXG4gICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2Z1bmN0aW9uQm9keXxhcnJvd0Z1bmN0aW9uXCIpLFxuICAgICAgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2FyZ3VtZW50L3ZhcmlhYmxlL0AqXCIpLFxuICAgICAganN4VGFnQXR0cmlidXRlTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2pzeEF0dHJpYnV0ZS9uYW1lL0AqXCIpLFxuICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL3ZhcnxsZXR8Y29uc3QvdmFyaWFibGUvQCpcIiksXG4gICAgICB0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy90ZW1wbGF0ZUxpdGVyYWwvc3RyaW5nL0AqXCIpLFxuICAgICAgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vdGVtcGxhdGVMaXRlcmFsL0BkZWxpbWl0ZXJcIiksXG4gICAgICBkZXN0cnVjdHVyZWRDb25zdERlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi8vY29uc3QvZGVzdHJ1Y3R1cmUvdmFyaWFibGUvQCpcIik7XG5cbmNvbnN0IHsgQkFDS1RJQ0tfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QganN4Tm9uVGVybWluYWxOb2RlcyA9IGpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgICBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMgPSBmdW5jdGlvbk5vblRlcm1pbmFsTm9kZVF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBTdHJpbmdUb2tlbiwgdGVtcGxhdGVMaXRlcmFsU3RyaW5nVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiAoY29udGVudCA9PT0gQkFDS1RJQ0tfQ0hBUkFDVEVSKSA/IFN0cmluZ1Rva2VuIDogbnVsbCwgdGVtcGxhdGVMaXRlcmFsRGVsaW1pdGVyVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICBqc3hOb25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGpzeE5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGpzeE5vblRlcm1pbmFsTm9kZSwgKGNvbnRlbnQpID0+IFRhZ05hbWVKU1hUb2tlbiwganN4VGFnTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBqc3hOb25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBBdHRyaWJ1dGVOYW1lSlNYVG9rZW4sIGpzeFRhZ0F0dHJpYnV0ZU5hbWVUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGVzLmZvckVhY2goKGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50TmFtZXMgPSB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4gQXJndW1lbnRUb2tlbiwgYXJndW1lbnRWYXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lcyA9IHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2VucywgZnVuY3Rpb25Ob25UZXJtaW5hbE5vZGUsIChjb250ZW50KSA9PiBWYXJpYWJsZVRva2VuLCB2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIGZ1bmN0aW9uTm9uVGVybWluYWxOb2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgIGxldCBUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZU5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVzLmluY2x1ZGVzKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lID0gYXJndW1lbnROYW1lcy5pbmNsdWRlcyh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgICAvLy9cbiAgICAgICAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTmFtZXNJbmNsdWRlc1ZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgVG9rZW4gPSBWYXJpYWJsZVRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnROYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICBUb2tlbiA9IEFyZ3VtZW50VG9rZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFRva2VuO1xuICAgICAgICB9LCB2YXJpYWJsZVRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhKYXZhU2NyaXB0UHJvY2Vzc29yKTsgfVxufVxuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRQcm9jZXNzb3IiLCJlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImpzeE5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwidmFyaWFibGVUZXJtaW5hbE5vZGVRdWVyeSIsImpzeFRhZ05hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlUXVlcnkiLCJhcmd1bWVudFZhcmlhYmxlVGVybWluYWxOb2RlUXVlcnkiLCJqc3hUYWdBdHRyaWJ1dGVOYW1lVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVGVybWluYWxOb2RlUXVlcnkiLCJ0ZW1wbGF0ZUxpdGVyYWxTdHJpbmdUZXJtaW5hbE5vZGVRdWVyeSIsInRlbXBsYXRlTGl0ZXJhbERlbGltaXRlclRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVzdHJ1Y3R1cmVkQ29uc3REZWNsYXJhdGlvblRlcm1pbmFsTm9kZVF1ZXJ5IiwiQkFDS1RJQ0tfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwianN4Tm9uVGVybWluYWxOb2RlcyIsImV4ZWN1dGUiLCJmdW5jdGlvbk5vblRlcm1pbmFsTm9kZXMiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsIlN0cmluZ1Rva2VuIiwiZm9yRWFjaCIsImpzeE5vblRlcm1pbmFsTm9kZSIsIlRhZ05hbWVKU1hUb2tlbiIsIkF0dHJpYnV0ZU5hbWVKU1hUb2tlbiIsImZ1bmN0aW9uTm9uVGVybWluYWxOb2RlIiwiYXJndW1lbnROYW1lcyIsIkFyZ3VtZW50VG9rZW4iLCJ2YXJpYWJsZU5hbWVzIiwiVmFyaWFibGVUb2tlbiIsIlRva2VuIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lc0luY2x1ZGVzVmFyaWFibGVOYW1lIiwiaW5jbHVkZXMiLCJhcmd1bWVudE5hbWVzSW5jbHVkZXNWYXJpYWJsZU5hbWUiLCJmcm9tTm90aGluZyIsIlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUEyQnFCQTs7OzBCQXpCQzt5QkFDSztnRUFFTDs0REFDQzs2REFDQzsrREFDRTsrREFDQTs4REFDRTtvRUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyx5QkFBeUJDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdCQUNwREMsMEJBQTBCRixpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyxVQUNyREUsNEJB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