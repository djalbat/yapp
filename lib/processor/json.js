"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONProcessor;
    }
});
var _occamquery = require("occam-query");
var _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
var _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
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
var errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("/*/error/@*");
var JSONProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JSONProcessor, Processor);
    function JSONProcessor() {
        _class_call_check(this, JSONProcessor);
        return _call_super(this, JSONProcessor, arguments);
    }
    _create_class(JSONProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node === null) {
                    return;
                }
                this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                    var token = _error.default;
                    return token;
                }, errorTerminalNodeQuery);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _processor.default.fromNothing(JSONProcessor);
            }
        }
    ]);
    return JSONProcessor;
}(_processor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLyovZXJyb3IvQCpcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05Qcm9jZXNzb3IgZXh0ZW5kcyBQcm9jZXNzb3Ige1xuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSBFcnJvclRva2VuO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQcm9jZXNzb3IuZnJvbU5vdGhpbmcoSlNPTlByb2Nlc3Nvcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUHJvY2Vzc29yIiwiZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJwcm9jZXNzIiwidG9rZW5zIiwibm9kZSIsInJlcGxhY2VUZXJtaW5hbE5vZGVzU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJ0b2tlbiIsIkVycm9yVG9rZW4iLCJmcm9tTm90aGluZyIsIlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7MEJBUEM7Z0VBRUE7NERBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBTUMseUJBQXlCQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUUzQyxJQUFBLEFBQU1ILDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsTUFBTSxFQUFFQyxJQUFJO2dCQUNsQixJQUFJQSxTQUFTLE1BQU07b0JBQ2pCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0Msb0NBQW9DLENBQUNGLFFBQVFDLE1BQU0sU0FBQ0U7b0JBQ3ZELElBQU1DLFFBQVFDLGNBQVU7b0JBRXhCLE9BQU9EO2dCQUNULEdBQUdSO1lBQ0w7Ozs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGtCQUFTLENBQUNELFdBQVcsQ0FiaENYO1lBYWlEOzs7V0FiakRBO0VBQXNCWSxrQkFBUyJ9