"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLProcessor;
    }
});
var _occamquery = require("occam-query");
var _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
var _name = /*#__PURE__*/ _interop_require_default(require("../token/significant/name"));
var _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
var _comment = /*#__PURE__*/ _interop_require_default(require("../token/significant/comment"));
var _attribute = /*#__PURE__*/ _interop_require_default(require("../token/significant/attribute"));
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
var nameTerminalNodeQuery = _occamquery.Query.fromExpressionString("//name/@*"), errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*"), attributeTerminalNodeQuery = _occamquery.Query.fromExpressionString("//attribute/@identifier"), commentNonTerminalNodeQuery = _occamquery.Query.fromExpressionString("//comment");
var XMLProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(XMLProcessor, Processor);
    function XMLProcessor() {
        _class_call_check(this, XMLProcessor);
        return _call_super(this, XMLProcessor, arguments);
    }
    _create_class(XMLProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node === null) {
                    return;
                }
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _name.default;
                    return token;
                }, nameTerminalNodeQuery);
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _error.default;
                    return token;
                }, errorTerminalNodeQuery);
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _attribute.default;
                    return token;
                }, attributeTerminalNodeQuery);
                this.replaceNonTerminalNodesSignificantTokens(tokens, node, function(content) {
                    var token = _comment.default;
                    return token;
                }, commentNonTerminalNodeQuery);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _processor.default.fromNothing(XMLProcessor);
            }
        }
    ]);
    return XMLProcessor;
}(_processor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBOYW1lVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L25hbWVcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IENvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudFwiO1xuaW1wb3J0IEF0dHJpYnV0ZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hdHRyaWJ1dGVcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL25hbWUvQCpcIiksXG4gICAgICBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9lcnJvci9AKlwiKSxcbiAgICAgIGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvL2F0dHJpYnV0ZS9AaWRlbnRpZmllclwiKSxcbiAgICAgIGNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9jb21tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBOYW1lVG9rZW47XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LCBuYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBFcnJvclRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbiA9IEF0dHJpYnV0ZVRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgdGhpcy5yZXBsYWNlTm9uVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW5zKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gQ29tbWVudFRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhYTUxQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiWE1MUHJvY2Vzc29yIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJhdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSIsImNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsInRva2VuIiwiTmFtZVRva2VuIiwiRXJyb3JUb2tlbiIsIkF0dHJpYnV0ZVRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsIkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OzswQkFiQztnRUFFQTsyREFDQTs0REFDQzs4REFDRTtnRUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyx3QkFBd0JDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGNBQ25EQyx5QkFBeUJGLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLGdCQUNwREUsNkJBQTZCSCxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyw0QkFDeERHLDhCQUE4QkosaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUM7QUFFaEQsSUFBQSxBQUFNSCw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJPLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxNQUFNLEVBQUVDLElBQUk7Z0JBQ2xCLElBQUlBLFNBQVMsTUFBTTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQyxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTtvQkFDdkQsSUFBTUMsUUFBUUMsYUFBUztvQkFFdkIsT0FBT0Q7Z0JBQ1QsR0FBR1g7Z0JBRUgsSUFBSSxDQUFDUyxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTtvQkFDdkQsSUFBTUMsUUFBUUUsY0FBVTtvQkFFeEIsT0FBT0Y7Z0JBQ1QsR0FBR1I7Z0JBRUgsSUFBSSxDQUFDTSxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTtvQkFDdkQsSUFBTUMsUUFBUUcsa0JBQWM7b0JBRTVCLE9BQU9IO2dCQUNULEdBQUdQO2dCQUVILElBQUksQ0FBQ1csd0NBQXdDLENBQUNSLFFBQVFDLE1BQU0sU0FBQ0U7b0JBQzNELElBQU1DLFFBQVFLLGdCQUFZO29CQUUxQixPQUFPTDtnQkFDVCxHQUFHTjtZQUNMOzs7O1lBRU9ZLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxrQkFBUyxDQUFDRCxXQUFXLENBL0JoQ2xCO1lBK0JnRDs7O1dBL0JoREE7RUFBcUJtQixrQkFBUyJ9