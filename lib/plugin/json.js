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
var _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
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
                return _plugin.default.fromNothing(JSONPlugin);
            }
        }
    ]);
    return JSONPlugin;
}(_wrap_native_super(_plugin.default));
_define_property(JSONPlugin, "language", _languages.JSON_LANGUAGE);
_define_property(JSONPlugin, "Lexer", _json.default);
_define_property(JSONPlugin, "Parser", _json1.default);
_define_property(JSONPlugin, "Processor", _json2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luXCI7XG5pbXBvcnQgSlNPTkxleGVyIGZyb20gXCIuLi9sZXhlci9qc29uXCI7XG5pbXBvcnQgSlNPTlBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2pzb25cIjtcbmltcG9ydCBKU09OUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvanNvblwiO1xuXG5pbXBvcnQgeyBKU09OX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2xhbmd1YWdlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzdGF0aWMgbGFuZ3VhZ2UgPSBKU09OX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IEpTT05MZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gSlNPTlBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gSlNPTlByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoSlNPTlBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUGx1Z2luIiwiZnJvbU5vdGhpbmciLCJQbHVnaW4iLCJsYW5ndWFnZSIsIkpTT05fTEFOR1VBR0UiLCJMZXhlciIsIkpTT05MZXhlciIsIlBhcnNlciIsIkpTT05QYXJzZXIiLCJQcm9jZXNzb3IiLCJKU09OUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs2REFQRjsyREFDRzs0REFDQzs0REFDRzt5QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQVNaQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0MsZUFBTSxDQUFDRCxXQUFXLENBVDdCRDtZQVMyQzs7O1dBVDNDQTtxQkFBbUJFLGVBQU07QUFDNUMsaUJBRG1CRixZQUNaRyxZQUFXQyx3QkFBYTtBQUUvQixpQkFIbUJKLFlBR1pLLFNBQVFDLGFBQVM7QUFFeEIsaUJBTG1CTixZQUtaTyxVQUFTQyxjQUFVO0FBRTFCLGlCQVBtQlIsWUFPWlMsYUFBWUMsY0FBYSJ9