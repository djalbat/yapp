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
var _occamdom = require("occam-dom");
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
var nameTerminalNodeQuery = _occamdom.Query.fromExpression("//name/@*"), errorTerminalNodeQuery = _occamdom.Query.fromExpression("//error/@*"), attributeTerminalNodeQuery = _occamdom.Query.fromExpression("//attribute/@identifier"), commentNonTerminalNodeQuery = _occamdom.Query.fromExpression("//comment");
var XMLProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(XMLProcessor, Processor);
    var _super = _create_super(XMLProcessor);
    function XMLProcessor() {
        _class_call_check(this, XMLProcessor);
        return _super.apply(this, arguments);
    }
    _create_class(XMLProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node !== null) {
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _error.default;
                    }, errorTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _name.default;
                    }, nameTerminalNodeQuery);
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _attribute.default;
                    }, attributeTerminalNodeQuery);
                    this.replaceNonTerminalNodesSignificantTokens(tokens, node, function(content) {
                        return _comment.default;
                    }, commentNonTerminalNodeQuery);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgTmFtZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9uYW1lXCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcbmltcG9ydCBDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L2NvbW1lbnRcIjtcbmltcG9ydCBBdHRyaWJ1dGVUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvYXR0cmlidXRlXCI7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9uYW1lL0AqXCIpLFxuICAgICAgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9lcnJvci9AKlwiKSxcbiAgICAgIGF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2F0dHJpYnV0ZS9AaWRlbnRpZmllclwiKSxcbiAgICAgIGNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9jb21tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBFcnJvclRva2VuLCBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5KTtcblxuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gTmFtZVRva2VuLCBuYW1lVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBBdHRyaWJ1dGVUb2tlbiwgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnModG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gQ29tbWVudFRva2VuLCBjb21tZW50Tm9uVGVybWluYWxOb2RlUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFByb2Nlc3Nvci5mcm9tTm90aGluZyhYTUxQcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiWE1MUHJvY2Vzc29yIiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJhdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSIsImNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSIsInByb2Nlc3MiLCJ0b2tlbnMiLCJub2RlIiwicmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsIkVycm9yVG9rZW4iLCJOYW1lVG9rZW4iLCJBdHRyaWJ1dGVUb2tlbiIsInJlcGxhY2VOb25UZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbnMiLCJDb21tZW50VG9rZW4iLCJmcm9tTm90aGluZyIsIlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7d0JBYkM7Z0VBRUE7MkRBQ0E7NERBQ0M7OERBQ0U7Z0VBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsd0JBQXdCQyxlQUFLLENBQUNDLGNBQWMsQ0FBQyxjQUM3Q0MseUJBQXlCRixlQUFLLENBQUNDLGNBQWMsQ0FBQyxlQUM5Q0UsNkJBQTZCSCxlQUFLLENBQUNDLGNBQWMsQ0FBQyw0QkFDbERHLDhCQUE4QkosZUFBSyxDQUFDQyxjQUFjLENBQUM7QUFFMUMsSUFBQSxBQUFNSCw2QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQk8sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE1BQU0sRUFBRUMsSUFBSTtnQkFDbEIsSUFBSUEsU0FBUyxNQUFNO29CQUNqQixJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLFNBQUNFOytCQUFZQyxjQUFVO3VCQUFFUjtvQkFFakYsSUFBSSxDQUFDTSxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTsrQkFBWUUsYUFBUzt1QkFBRVo7b0JBRWhGLElBQUksQ0FBQ1Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sU0FBQ0U7K0JBQVlHLGtCQUFjO3VCQUFFVDtvQkFFckYsSUFBSSxDQUFDVSx3Q0FBd0MsQ0FBQ1AsUUFBUUMsTUFBTSxTQUFDRTsrQkFBWUssZ0JBQVk7dUJBQUVWO2dCQUN6RjtZQUNGOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxrQkFBUyxDQUFDRCxXQUFXLENBYmhDakI7WUFhZ0Q7OztXQWJoREE7RUFBcUJrQixrQkFBUyJ9