"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _javascript = _interopRequireDefault(require("../lexer/javascript"));
var _javascript1 = _interopRequireDefault(require("../parser/javascript"));
var _javascript2 = _interopRequireDefault(require("../processor/javascript"));
var _constants = require("../constants");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
var JavaScriptPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(JavaScriptPlugin, Plugin);
    function JavaScriptPlugin() {
        _classCallCheck(this, JavaScriptPlugin);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(JavaScriptPlugin).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "language", _constants.JAVASCRIPT_LANGUAGE);
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
_defineProperty(JavaScriptPlugin, "Lexer", _javascript.default);
_defineProperty(JavaScriptPlugin, "Parser", _javascript1.default);
_defineProperty(JavaScriptPlugin, "Processor", _javascript2.default);
exports.default = JavaScriptPlugin;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vamF2YXNjcmlwdC5qcyJdLCJuYW1lcyI6WyJQbHVnaW4iLCJKYXZhU2NyaXB0TGV4ZXIiLCJKYXZhU2NyaXB0UGFyc2VyIiwiSmF2YVNjcmlwdFByb2Nlc3NvciIsIkpBVkFTQ1JJUFRfTEFOR1VBR0UiLCJKYXZhU2NyaXB0UGx1Z2luIiwibGFuZ3VhZ2UiLCJMZXhlciIsIlBhcnNlciIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBQ0YsR0FBcUIsQ0FBckIsV0FBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsWUFBc0I7QUFDbkIsR0FBeUIsQ0FBekIsWUFBeUI7QUFFckIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCLGdCQUFnQixpQkFBdEIsUUFBUTtjQUFGLGdCQUFnQjthQUFoQixnQkFBZ0I7OEJBQWhCLGdCQUFnQjs7aUVBQWhCLGdCQUFnQjt3REFDbkMsUUFBUSxHQUgwQixVQUFjOzs7aUJBRTdCLGdCQUFnQjs7WUFTNUIsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBaEJaLE9BQVcsU0FnQlMsV0FBVyxDQUFDLGdCQUFnQjtZQUFHLENBQUM7OztXQVRsRCxnQkFBZ0I7bUJBUGxCLE9BQVc7Z0JBT1QsZ0JBQWdCLEdBRzVCLEtBQUssR0FUYyxXQUFxQjtnQkFNNUIsZ0JBQWdCLEdBSzVCLE1BQU0sR0FWYyxZQUFzQjtnQkFLOUIsZ0JBQWdCLEdBTzVCLFNBQVMsR0FYYyxZQUF5QjtrQkFJcEMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgSmF2YVNjcmlwdFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yL2phdmFzY3JpcHRcIjtcblxuaW1wb3J0IHsgSkFWQVNDUklQVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgbGFuZ3VhZ2UgPSBKQVZBU0NSSVBUX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IEphdmFTY3JpcHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gSmF2YVNjcmlwdFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gSmF2YVNjcmlwdFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoSmF2YVNjcmlwdFBsdWdpbik7IH1cbn1cbiJdfQ==