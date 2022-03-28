"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _javascript = _interopRequireDefault(require("../lexer/javascript"));
var _javascript1 = _interopRequireDefault(require("../parser/javascript"));
var _javascript2 = _interopRequireDefault(require("../processor/javascript"));
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
var JavaScriptPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(JavaScriptPlugin, Plugin);
    var _super = _createSuper(JavaScriptPlugin);
    function JavaScriptPlugin() {
        _classCallCheck(this, JavaScriptPlugin);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "language", _languages.JAVASCRIPT_LANGUAGE);
        return _this;
    }
    _createClass(JavaScriptPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(JavaScriptPlugin);
            }
        }
    ]);
    return JavaScriptPlugin;
}(_wrapNativeSuper(_plugin.default));
exports.default = JavaScriptPlugin;
_defineProperty(JavaScriptPlugin, "Lexer", _javascript.default);
_defineProperty(JavaScriptPlugin, "Parser", _javascript1.default);
_defineProperty(JavaScriptPlugin, "Processor", _javascript2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vamF2YXNjcmlwdC5qcyIsIi4uL3NyYy9jb2xvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEphdmFTY3JpcHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQbHVnaW4pOyB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNwcmluZ1dvb2QgPSBcIiNmOGY2ZjFcIjtcbmV4cG9ydCBjb25zdCBib25qb3VyID0gXCIjZTVlMGUxXCI7XG5leHBvcnQgY29uc3QgZ2FpbnNib3JvdWdoID0gXCIjZDVkOGQyXCI7XG5leHBvcnQgY29uc3Qgc3RhcmR1c3QgPSBcIiM5ZjlmOWNcIjtcbmV4cG9ydCBjb25zdCBodXJyaWNhbmUgPSBcIiM5MDg5ODlcIjtcbmV4cG9ydCBjb25zdCBzdG9ybUR1c3QgPSBcIiM2NDY0NjNcIjtcbmV4cG9ydCBjb25zdCBlbXBlcm9yID0gXCIjNTE1MTUwXCI7XG5leHBvcnQgY29uc3QgdHVhdGFyYSA9IFwiIzM2MzUzNFwiO1xuZXhwb3J0IGNvbnN0IHdvb2RzbW9rZSA9IFwiIzBjMGQwZlwiO1xuXG5leHBvcnQgY29uc3QgY2l0cm9uID0gXCIjODZiOTIzXCI7XG5leHBvcnQgY29uc3Qgc3VzaGkgPSBcIiM3ZmE4MmZcIjtcbmV4cG9ydCBjb25zdCBvbGl2ZURyYWIgPSBcIiM2Mzg4MjlcIjtcbmV4cG9ydCBjb25zdCByaWZsZUdyZWVuID0gXCIjNDE0ODMzXCI7XG5leHBvcnQgY29uc3QgbG9nQ2FiaW4gPSBcIiMyNDMwMWRcIjtcbmV4cG9ydCBjb25zdCBibGFja09saXZlID0gXCIjMWMyNDEyXCI7XG5leHBvcnQgY29uc3QgaHVudGVyR3JlZW4gPSBcIiMxNjFkMTBcIjtcblxuZXhwb3J0IGNvbnN0IGNhZGV0Qmx1ZSA9IFwiIzVmOWVhMFwiO1xuZXhwb3J0IGNvbnN0IGhhdmVsb2NrQmx1ZSA9IFwiIzVCOERlMVwiO1xuXG5leHBvcnQgY29uc3QgcG9tZWdyYW5hdGUgPSBcIiNmNTI5MjlcIjtcbmV4cG9ydCBjb25zdCByYXp6bWF0YXp6ID0gXCIjZTMyNTZiXCI7XG5leHBvcnQgY29uc3QgZmxhbWluZ28gPSBcIiNmMzRiNDRcIjtcbmV4cG9ydCBjb25zdCB0YWhpdGkgPSBcIiNGNThBMEFcIjtcbmV4cG9ydCBjb25zdCBlcXVhdG9yID0gXCIjZTRhQzVlXCI7XG5cbmV4cG9ydCBjb25zdCBwb3J0aWNhID0gXCIjZjdlNzVmXCI7XG5leHBvcnQgY29uc3QgY2VsZXJ5ID0gXCIjYmNiODUyXCI7XG5leHBvcnQgY29uc3Qgc3ljYW1vcmUgPSBcIiM5MDhkMzlcIjtcbiJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0UGx1Z2luIiwibGFuZ3VhZ2UiLCJKQVZBU0NSSVBUX0xBTkdVQUdFIiwiZnJvbU5vdGhpbmciLCJQbHVnaW4iLCJMZXhlciIsIkphdmFTY3JpcHRMZXhlciIsIlBhcnNlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJQcm9jZXNzb3IiLCJKYXZhU2NyaXB0UHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFbUIsR0FBVyxDQUFYLE9BQVc7QUFDRixHQUFxQixDQUFyQixXQUFxQjtBQUNwQixHQUFzQixDQUF0QixZQUFzQjtBQUNuQixHQUF5QixDQUF6QixZQUF5QjtBQUVyQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBUGxEOzs7Ozs7OztzQ0FBQTs7Ozs7O2lDQUFBOzs7aUVBQUE7O1NBQUE7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7Ozs7OztzQ0FBQTs7Ozs7Ozs7Ozs7O1VBQUE7O0tBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVNlLEdBQUssQ0FBQ0EsZ0JBQWdCLGlCQUF0QixRQUFRO3VDQVR2Qjs7YUFTcUJBLGdCQUFnQjsrQ0FUckM7OzZDQUFBO3VEQVVFQyxDQUFRLFdBQUdDLFVBQW1CLHFCQ1ZoQyxDRFVpQzs7Ozs7WUFReEJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNDLE9BQU0sU0FBQ0QsV0FBVyxDQUFDSCxnQkFBZ0I7WUFBRyxDQUFDOztNQWxCdkU7O21CQVM4Q0ksT0FBTTtrQkFBL0JKLGdCQUFnQixBQVRyQztnQkFTcUJBLGdCQUFnQixFQUc1QkssQ0FBSyxRQUFHQyxXQUFlLFNBWmhDO2dCQVNxQk4sZ0JBQWdCLEVBSzVCTyxDQUFNLFNBQUdDLFlBQWdCLFNBZGxDO2dCQVNxQlIsZ0JBQWdCLEVBTzVCUyxDQUFTLFlBQUdDLFlBQW1CLFNBaEJ4QyJ9