"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptPlugin;
    }
});
var _index = require("../index");
var _javascript = /*#__PURE__*/ _interop_require_default(require("../lexer/javascript"));
var _javascript1 = /*#__PURE__*/ _interop_require_default(require("../parser/javascript"));
var _javascript2 = /*#__PURE__*/ _interop_require_default(require("../processor/javascript"));
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
var JavaScriptPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(JavaScriptPlugin, Plugin);
    var _super = _create_super(JavaScriptPlugin);
    function JavaScriptPlugin() {
        _class_call_check(this, JavaScriptPlugin);
        return _super.apply(this, arguments);
    }
    _create_class(JavaScriptPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _index.Plugin.fromNothing(JavaScriptPlugin);
            }
        }
    ]);
    return JavaScriptPlugin;
}(_wrap_native_super(_index.Plugin));
_define_property(JavaScriptPlugin, "language", _languages.JAVASCRIPT_LANGUAGE);
_define_property(JavaScriptPlugin, "Lexer", _javascript.default);
_define_property(JavaScriptPlugin, "Parser", _javascript1.default);
_define_property(JavaScriptPlugin, "Processor", _javascript2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yL2phdmFzY3JpcHRcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc3RhdGljIGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEphdmFTY3JpcHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQbHVnaW4pOyB9XG59XG4iXSwibmFtZXMiOlsiSmF2YVNjcmlwdFBsdWdpbiIsImZyb21Ob3RoaW5nIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwiTGV4ZXIiLCJKYXZhU2NyaXB0TGV4ZXIiLCJQYXJzZXIiLCJKYXZhU2NyaXB0UGFyc2VyIiwiUHJvY2Vzc29yIiwiSmF2YVNjcmlwdFByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7cUJBUkU7aUVBRUs7a0VBQ0M7a0VBQ0c7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFTWkMsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQU0sQ0FBQ0QsV0FBVyxDQVQ3QkQ7WUFTaUQ7OztXQVRqREE7cUJBQXlCRSxhQUFNO0FBQ2xELGlCQURtQkYsa0JBQ1pHLFlBQVdDLDhCQUFtQjtBQUVyQyxpQkFIbUJKLGtCQUdaSyxTQUFRQyxtQkFBZTtBQUU5QixpQkFMbUJOLGtCQUtaTyxVQUFTQyxvQkFBZ0I7QUFFaEMsaUJBUG1CUixrQkFPWlMsYUFBWUMsb0JBQW1CIn0=