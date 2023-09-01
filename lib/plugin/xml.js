"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLPlugin;
    }
});
var _plugin = /*#__PURE__*/ _interop_require_default(require("../plugin"));
var _xml = /*#__PURE__*/ _interop_require_default(require("../lexer/xml"));
var _xml1 = /*#__PURE__*/ _interop_require_default(require("../parser/xml"));
var _xml2 = /*#__PURE__*/ _interop_require_default(require("../processor/xml"));
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
var XMLPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(XMLPlugin, Plugin);
    var _super = _create_super(XMLPlugin);
    function XMLPlugin() {
        _class_call_check(this, XMLPlugin);
        return _super.apply(this, arguments);
    }
    _create_class(XMLPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(XMLPlugin);
            }
        }
    ]);
    return XMLPlugin;
}(_wrap_native_super(_plugin.default));
_define_property(XMLPlugin, "language", _languages.XML_LANGUAGE);
_define_property(XMLPlugin, "Lexer", _xml.default);
_define_property(XMLPlugin, "Parser", _xml1.default);
_define_property(XMLPlugin, "Processor", _xml2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4veG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBYTUxMZXhlciBmcm9tIFwiLi4vbGV4ZXIveG1sXCI7XG5pbXBvcnQgWE1MUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIveG1sXCI7XG5pbXBvcnQgWE1MUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IveG1sXCI7XG5cbmltcG9ydCB7IFhNTF9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzdGF0aWMgbGFuZ3VhZ2UgPSBYTUxfTEFOR1VBR0U7XG5cbiAgc3RhdGljIExleGVyID0gWE1MTGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IFhNTFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gWE1MUHJvY2Vzc29yO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsdWdpbi5mcm9tTm90aGluZyhYTUxQbHVnaW4pOyB9XG59XG4iXSwibmFtZXMiOlsiWE1MUGx1Z2luIiwiZnJvbU5vdGhpbmciLCJQbHVnaW4iLCJsYW5ndWFnZSIsIlhNTF9MQU5HVUFHRSIsIkxleGVyIiwiWE1MTGV4ZXIiLCJQYXJzZXIiLCJYTUxQYXJzZXIiLCJQcm9jZXNzb3IiLCJYTUxQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzZEQVBGOzBEQUNFOzJEQUNDOzJEQUNHO3lCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDBCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBU1pDLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPQyxlQUFNLENBQUNELFdBQVcsQ0FUN0JEO1lBUzBDOzs7V0FUMUNBO3FCQUFrQkUsZUFBTTtBQUMzQyxpQkFEbUJGLFdBQ1pHLFlBQVdDLHVCQUFZO0FBRTlCLGlCQUhtQkosV0FHWkssU0FBUUMsWUFBUTtBQUV2QixpQkFMbUJOLFdBS1pPLFVBQVNDLGFBQVM7QUFFekIsaUJBUG1CUixXQU9aUyxhQUFZQyxhQUFZIn0=