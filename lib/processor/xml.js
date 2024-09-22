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
var nameTerminalNodeQuery = _occamquery.Query.fromExpression("//name/@*"), errorTerminalNodeQuery = _occamquery.Query.fromExpression("//error/@*"), attributeTerminalNodeQuery = _occamquery.Query.fromExpression("//attribute/@identifier"), commentNonTerminalNodeQuery = _occamquery.Query.fromExpression("//comment");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3JcIjtcbmltcG9ydCBOYW1lVG9rZW4gZnJvbSBcIi4uL3Rva2VuL3NpZ25pZmljYW50L25hbWVcIjtcbmltcG9ydCBFcnJvclRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9lcnJvclwiO1xuaW1wb3J0IENvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvY29tbWVudFwiO1xuaW1wb3J0IEF0dHJpYnV0ZVRva2VuIGZyb20gXCIuLi90b2tlbi9zaWduaWZpY2FudC9hdHRyaWJ1dGVcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL25hbWUvQCpcIiksXG4gICAgICBlcnJvclRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2Vycm9yL0AqXCIpLFxuICAgICAgYXR0cmlidXRlVGVybWluYWxOb2RlUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vYXR0cmlidXRlL0BpZGVudGlmaWVyXCIpLFxuICAgICAgY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL2NvbW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFByb2Nlc3NvciBleHRlbmRzIFByb2Nlc3NvciB7XG4gIHByb2Nlc3ModG9rZW5zLCBub2RlKSB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEVycm9yVG9rZW4sIGVycm9yVGVybWluYWxOb2RlUXVlcnkpO1xuXG4gICAgICB0aGlzLnJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbih0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBOYW1lVG9rZW4sIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZVRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VuKHRva2Vucywgbm9kZSwgKGNvbnRlbnQpID0+IEF0dHJpYnV0ZVRva2VuLCBhdHRyaWJ1dGVUZXJtaW5hbE5vZGVRdWVyeSk7XG5cbiAgICAgIHRoaXMucmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2Vucyh0b2tlbnMsIG5vZGUsIChjb250ZW50KSA9PiBDb21tZW50VG9rZW4sIGNvbW1lbnROb25UZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKFhNTFByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJYTUxQcm9jZXNzb3IiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsImF0dHJpYnV0ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiY29tbWVudE5vblRlcm1pbmFsTm9kZVF1ZXJ5IiwicHJvY2VzcyIsInRva2VucyIsIm5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsIk5hbWVUb2tlbiIsIkF0dHJpYnV0ZVRva2VuIiwicmVwbGFjZU5vblRlcm1pbmFsTm9kZXNTaWduaWZpY2FudFRva2VucyIsIkNvbW1lbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OzswQkFiQztnRUFFQTsyREFDQTs0REFDQzs4REFDRTtnRUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyx3QkFBd0JDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQyxjQUM3Q0MseUJBQXlCRixpQkFBSyxDQUFDQyxjQUFjLENBQUMsZUFDOUNFLDZCQUE2QkgsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDLDRCQUNsREcsOEJBQThCSixpQkFBSyxDQUFDQyxjQUFjLENBQUM7QUFFMUMsSUFBQSxBQUFNSCw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ25CTyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsTUFBTSxFQUFFQyxJQUFJO2dCQUNsQixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCLElBQUksQ0FBQ0Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sU0FBQ0U7K0JBQVlDLGNBQVU7dUJBQUVSO29CQUVqRixJQUFJLENBQUNNLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLFNBQUNFOytCQUFZRSxhQUFTO3VCQUFFWjtvQkFFaEYsSUFBSSxDQUFDUyxvQ0FBb0MsQ0FBQ0YsUUFBUUMsTUFBTSxTQUFDRTsrQkFBWUcsa0JBQWM7dUJBQUVUO29CQUVyRixJQUFJLENBQUNVLHdDQUF3QyxDQUFDUCxRQUFRQyxNQUFNLFNBQUNFOytCQUFZSyxnQkFBWTt1QkFBRVY7Z0JBQ3pGO1lBQ0Y7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGtCQUFTLENBQUNELFdBQVcsQ0FiaENqQjtZQWFnRDs7O1dBYmhEQTtFQUFxQmtCLGtCQUFTIn0=