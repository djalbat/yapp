"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PlainTextPlugin;
    }
});
var _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../lexer/plainText"));
var _plainText1 = /*#__PURE__*/ _interop_require_default(require("../parser/plainText"));
var _plainText2 = /*#__PURE__*/ _interop_require_default(require("../processor/plainText"));
var _languages = require("../languages");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var PlainTextPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(PlainTextPlugin, Plugin);
    var _super = _create_super(PlainTextPlugin);
    function PlainTextPlugin() {
        _class_call_check(this, PlainTextPlugin);
        return _super.apply(this, arguments);
    }
    _create_class(PlainTextPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(PlainTextPlugin);
            }
        }
    ]);
    return PlainTextPlugin;
}(_wrap_native_super(_plugin.default));
_define_property(PlainTextPlugin, "language", _languages.PLAIN_TEXT_LANGUAGE);
_define_property(PlainTextPlugin, "Lexer", _plainText.default);
_define_property(PlainTextPlugin, "Parser", _plainText1.default);
_define_property(PlainTextPlugin, "Processor", _plainText2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBQbGFpblRleHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IFBMQUlOX1RFWFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc3RhdGljIGxhbmd1YWdlID0gUExBSU5fVEVYVF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBQbGFpblRleHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBQbGFpblRleHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKFBsYWluVGV4dFBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJQbGFpblRleHRQbHVnaW4iLCJmcm9tTm90aGluZyIsIlBsdWdpbiIsImxhbmd1YWdlIiwiUExBSU5fVEVYVF9MQU5HVUFHRSIsIkxleGVyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQYXJzZXIiLCJQbGFpblRleHRQYXJzZXIiLCJQcm9jZXNzb3IiLCJQbGFpblRleHRQcm9jZXNzb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NkRBUEY7Z0VBQ1E7aUVBQ0M7aUVBQ0c7eUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFTWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGVBQU0sQ0FBQ0QsV0FBVyxDQVQ3QkQ7WUFTZ0Q7OztXQVRoREE7cUJBQXdCRSxlQUFNO0FBQ2pELGlCQURtQkYsaUJBQ1pHLFlBQVdDLDhCQUFtQjtBQUVyQyxpQkFIbUJKLGlCQUdaSyxTQUFRQyxrQkFBYztBQUU3QixpQkFMbUJOLGlCQUtaTyxVQUFTQyxtQkFBZTtBQUUvQixpQkFQbUJSLGlCQU9aUyxhQUFZQyxtQkFBa0IifQ==