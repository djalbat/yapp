"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONPlugin;
    }
});
var _index = require("../index");
var _json = /*#__PURE__*/ _interop_require_default(require("../lexer/json"));
var _json1 = /*#__PURE__*/ _interop_require_default(require("../parser/json"));
var _json2 = /*#__PURE__*/ _interop_require_default(require("../processor/json"));
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
var JSONPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(JSONPlugin, Plugin);
    var _super = _create_super(JSONPlugin);
    function JSONPlugin() {
        _class_call_check(this, JSONPlugin);
        return _super.apply(this, arguments);
    }
    _create_class(JSONPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _index.Plugin.fromNothing(JSONPlugin);
            }
        }
    ]);
    return JSONPlugin;
}(_wrap_native_super(_index.Plugin));
_define_property(JSONPlugin, "language", _languages.JSON_LANGUAGE);
_define_property(JSONPlugin, "Lexer", _json.default);
_define_property(JSONPlugin, "Parser", _json1.default);
_define_property(JSONPlugin, "Processor", _json2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEpTT05MZXhlciBmcm9tIFwiLi4vbGV4ZXIvanNvblwiO1xuaW1wb3J0IEpTT05QYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qc29uXCI7XG5pbXBvcnQgSlNPTlByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yL2pzb25cIjtcblxuaW1wb3J0IHsgSlNPTl9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc3RhdGljIGxhbmd1YWdlID0gSlNPTl9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKU09OTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEpTT05QYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEpTT05Qcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKEpTT05QbHVnaW4pOyB9XG59XG4iXSwibmFtZXMiOlsiSlNPTlBsdWdpbiIsImZyb21Ob3RoaW5nIiwiUGx1Z2luIiwibGFuZ3VhZ2UiLCJKU09OX0xBTkdVQUdFIiwiTGV4ZXIiLCJKU09OTGV4ZXIiLCJQYXJzZXIiLCJKU09OUGFyc2VyIiwiUHJvY2Vzc29yIiwiSlNPTlByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7cUJBUkU7MkRBRUQ7NERBQ0M7NERBQ0c7eUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQVNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsYUFBTSxDQUFDRCxXQUFXLENBVDdCRDtZQVMyQzs7O1dBVDNDQTtxQkFBbUJFLGFBQU07QUFDNUMsaUJBRG1CRixZQUNaRyxZQUFXQyx3QkFBYTtBQUUvQixpQkFIbUJKLFlBR1pLLFNBQVFDLGFBQVM7QUFFeEIsaUJBTG1CTixZQUtaTyxVQUFTQyxjQUFVO0FBRTFCLGlCQVBtQlIsWUFPWlMsYUFBWUMsY0FBYSJ9