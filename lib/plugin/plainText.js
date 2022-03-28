"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _plainText = _interopRequireDefault(require("../lexer/plainText"));
var _plainText1 = _interopRequireDefault(require("../parser/plainText"));
var _plainText2 = _interopRequireDefault(require("../processor/plainText"));
var _languages = require("../languages");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var PlainTextPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(PlainTextPlugin, Plugin);
    var _super = _createSuper(PlainTextPlugin);
    function PlainTextPlugin() {
        _classCallCheck(this, PlainTextPlugin);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "language", _languages.PLAIN_TEXT_LANGUAGE);
        return _this;
    }
    _createClass(PlainTextPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(PlainTextPlugin);
            }
        }
    ]);
    return PlainTextPlugin;
}(_wrapNativeSuper(_plugin.default));
exports.default = PlainTextPlugin;
_defineProperty(PlainTextPlugin, "Lexer", _plainText.default);
_defineProperty(PlainTextPlugin, "Parser", _plainText1.default);
_defineProperty(PlainTextPlugin, "Processor", _plainText2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIiwiLi4vc3JjL2NvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFBsYWluVGV4dExleGVyIGZyb20gXCIuLi9sZXhlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9wbGFpblRleHRcIjtcblxuaW1wb3J0IHsgUExBSU5fVEVYVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IFBMQUlOX1RFWFRfTEFOR1VBR0U7XG5cbiAgc3RhdGljIExleGVyID0gUGxhaW5UZXh0TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IFBsYWluVGV4dFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gUGxhaW5UZXh0UHJvY2Vzc29yO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsdWdpbi5mcm9tTm90aGluZyhQbGFpblRleHRQbHVnaW4pOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNwcmluZ1dvb2QgPSBcIiNmOGY2ZjFcIjtcbmV4cG9ydCBjb25zdCBib25qb3VyID0gXCIjZTVlMGUxXCI7XG5leHBvcnQgY29uc3QgZ2FpbnNib3JvdWdoID0gXCIjZDVkOGQyXCI7XG5leHBvcnQgY29uc3Qgc3RhcmR1c3QgPSBcIiM5ZjlmOWNcIjtcbmV4cG9ydCBjb25zdCBodXJyaWNhbmUgPSBcIiM5MDg5ODlcIjtcbmV4cG9ydCBjb25zdCBzdG9ybUR1c3QgPSBcIiM2NDY0NjNcIjtcbmV4cG9ydCBjb25zdCBlbXBlcm9yID0gXCIjNTE1MTUwXCI7XG5leHBvcnQgY29uc3QgdHVhdGFyYSA9IFwiIzM2MzUzNFwiO1xuZXhwb3J0IGNvbnN0IHdvb2RzbW9rZSA9IFwiIzBjMGQwZlwiO1xuXG5leHBvcnQgY29uc3QgY2l0cm9uID0gXCIjODZiOTIzXCI7XG5leHBvcnQgY29uc3Qgc3VzaGkgPSBcIiM3ZmE4MmZcIjtcbmV4cG9ydCBjb25zdCBvbGl2ZURyYWIgPSBcIiM2Mzg4MjlcIjtcbmV4cG9ydCBjb25zdCByaWZsZUdyZWVuID0gXCIjNDE0ODMzXCI7XG5leHBvcnQgY29uc3QgbG9nQ2FiaW4gPSBcIiMyNDMwMWRcIjtcbmV4cG9ydCBjb25zdCBibGFja09saXZlID0gXCIjMWMyNDEyXCI7XG5leHBvcnQgY29uc3QgaHVudGVyR3JlZW4gPSBcIiMxNjFkMTBcIjtcblxuZXhwb3J0IGNvbnN0IGNhZGV0Qmx1ZSA9IFwiIzVmOWVhMFwiO1xuZXhwb3J0IGNvbnN0IGhhdmVsb2NrQmx1ZSA9IFwiIzVCOERlMVwiO1xuXG5leHBvcnQgY29uc3QgcG9tZWdyYW5hdGUgPSBcIiNmNTI5MjlcIjtcbmV4cG9ydCBjb25zdCByYXp6bWF0YXp6ID0gXCIjZTMyNTZiXCI7XG5leHBvcnQgY29uc3QgZmxhbWluZ28gPSBcIiNmMzRiNDRcIjtcbmV4cG9ydCBjb25zdCB0YWhpdGkgPSBcIiNGNThBMEFcIjtcbmV4cG9ydCBjb25zdCBlcXVhdG9yID0gXCIjZTRhQzVlXCI7XG5cbmV4cG9ydCBjb25zdCBwb3J0aWNhID0gXCIjZjdlNzVmXCI7XG5leHBvcnQgY29uc3QgY2VsZXJ5ID0gXCIjYmNiODUyXCI7XG5leHBvcnQgY29uc3Qgc3ljYW1vcmUgPSBcIiM5MDhkMzlcIjtcbiJdLCJuYW1lcyI6WyJQbGFpblRleHRQbHVnaW4iLCJsYW5ndWFnZSIsIlBMQUlOX1RFWFRfTEFOR1VBR0UiLCJmcm9tTm90aGluZyIsIlBsdWdpbiIsIkxleGVyIiwiUGxhaW5UZXh0TGV4ZXIiLCJQYXJzZXIiLCJQbGFpblRleHRQYXJzZXIiLCJQcm9jZXNzb3IiLCJQbGFpblRleHRQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVtQixHQUFXLENBQVgsT0FBVztBQUNILEdBQW9CLENBQXBCLFVBQW9CO0FBQ25CLEdBQXFCLENBQXJCLFdBQXFCO0FBQ2xCLEdBQXdCLENBQXhCLFdBQXdCO0FBRW5CLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztnRkFQbEQ7Ozs7Ozs7O3NDQUFBOzs7Ozs7aUNBQUE7OztpRUFBQTs7U0FBQTs7Ozs7Ozs4REFBQTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7Ozs7O3NDQUFBOzs7Ozs7Ozs7Ozs7VUFBQTs7S0FBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBU2UsR0FBSyxDQUFDQSxlQUFlLGlCQUFyQixRQUFRO3NDQVR2Qjs7YUFTcUJBLGVBQWU7OENBVHBDOzs2Q0FBQTt1REFVRUMsQ0FBUSxXQUFHQyxVQUFtQixxQkNWaEMsQ0RVaUM7Ozs7O1lBUXhCQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxPQUFNLFNBQUNELFdBQVcsQ0FBQ0gsZUFBZTtZQUFHLENBQUM7O01BbEJ0RTs7bUJBUzZDSSxPQUFNO2tCQUE5QkosZUFBZSxBQVRwQztnQkFTcUJBLGVBQWUsRUFHM0JLLENBQUssUUFBR0MsVUFBYyxTQVovQjtnQkFTcUJOLGVBQWUsRUFLM0JPLENBQU0sU0FBR0MsV0FBZSxTQWRqQztnQkFTcUJSLGVBQWUsRUFPM0JTLENBQVMsWUFBR0MsV0FBa0IsU0FoQnZDIn0=