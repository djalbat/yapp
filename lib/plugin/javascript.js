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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
_defineProperty(JavaScriptPlugin, "Lexer", _javascript.default);
_defineProperty(JavaScriptPlugin, "Parser", _javascript1.default);
_defineProperty(JavaScriptPlugin, "Processor", _javascript2.default);
exports.default = JavaScriptPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vamF2YXNjcmlwdC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsIi4uL3NyYy9jb2xvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9qYXZhc2NyaXB0XCI7XG5cbmltcG9ydCB7IEpBVkFTQ1JJUFRfTEFOR1VBR0UgfSBmcm9tIFwiLi4vbGFuZ3VhZ2VzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gSkFWQVNDUklQVF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IEphdmFTY3JpcHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKEphdmFTY3JpcHRQbHVnaW4pOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzcHJpbmdXb29kID0gXCIjZjhmNmYxXCI7XG5leHBvcnQgY29uc3QgYm9uam91ciA9IFwiI2U1ZTBlMVwiO1xuZXhwb3J0IGNvbnN0IGdhaW5zYm9yb3VnaCA9IFwiI2Q1ZDhkMlwiO1xuZXhwb3J0IGNvbnN0IHN0YXJkdXN0ID0gXCIjOWY5ZjljXCI7XG5leHBvcnQgY29uc3QgaHVycmljYW5lID0gXCIjOTA4OTg5XCI7XG5leHBvcnQgY29uc3Qgc3Rvcm1EdXN0ID0gXCIjNjQ2NDYzXCI7XG5leHBvcnQgY29uc3QgZW1wZXJvciA9IFwiIzUxNTE1MFwiO1xuZXhwb3J0IGNvbnN0IHR1YXRhcmEgPSBcIiMzNjM1MzRcIjtcbmV4cG9ydCBjb25zdCB3b29kc21va2UgPSBcIiMwYzBkMGZcIjtcblxuZXhwb3J0IGNvbnN0IGNpdHJvbiA9IFwiIzg2YjkyM1wiO1xuZXhwb3J0IGNvbnN0IHN1c2hpID0gXCIjN2ZhODJmXCI7XG5leHBvcnQgY29uc3Qgb2xpdmVEcmFiID0gXCIjNjM4ODI5XCI7XG5leHBvcnQgY29uc3QgcmlmbGVHcmVlbiA9IFwiIzQxNDgzM1wiO1xuZXhwb3J0IGNvbnN0IGxvZ0NhYmluID0gXCIjMjQzMDFkXCI7XG5leHBvcnQgY29uc3QgYmxhY2tPbGl2ZSA9IFwiIzFjMjQxMlwiO1xuZXhwb3J0IGNvbnN0IGh1bnRlckdyZWVuID0gXCIjMTYxZDEwXCI7XG5cbmV4cG9ydCBjb25zdCBjYWRldEJsdWUgPSBcIiM1ZjllYTBcIjtcbmV4cG9ydCBjb25zdCBoYXZlbG9ja0JsdWUgPSBcIiM1QjhEZTFcIjtcblxuZXhwb3J0IGNvbnN0IHBvbWVncmFuYXRlID0gXCIjZjUyOTI5XCI7XG5leHBvcnQgY29uc3QgcmF6em1hdGF6eiA9IFwiI2UzMjU2YlwiO1xuZXhwb3J0IGNvbnN0IGZsYW1pbmdvID0gXCIjZjM0YjQ0XCI7XG5leHBvcnQgY29uc3QgdGFoaXRpID0gXCIjRjU4QTBBXCI7XG5leHBvcnQgY29uc3QgZXF1YXRvciA9IFwiI2U0YUM1ZVwiO1xuXG5leHBvcnQgY29uc3QgcG9ydGljYSA9IFwiI2Y3ZTc1ZlwiO1xuZXhwb3J0IGNvbnN0IGNlbGVyeSA9IFwiI2JjYjg1MlwiO1xuZXhwb3J0IGNvbnN0IHN5Y2Ftb3JlID0gXCIjOTA4ZDM5XCI7XG4iXSwibmFtZXMiOlsiSmF2YVNjcmlwdFBsdWdpbiIsImxhbmd1YWdlIiwiSkFWQVNDUklQVF9MQU5HVUFHRSIsImZyb21Ob3RoaW5nIiwiUGx1Z2luIiwiTGV4ZXIiLCJKYXZhU2NyaXB0TGV4ZXIiLCJQYXJzZXIiLCJKYXZhU2NyaXB0UGFyc2VyIiwiUHJvY2Vzc29yIiwiSmF2YVNjcmlwdFByb2Nlc3NvciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVNLElBQUEsT0FBVyxrQ0FBWCxXQUFXLEVBQUE7QUFDRixJQUFBLFdBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUNwQixJQUFBLFlBQXNCLGtDQUF0QixzQkFBc0IsRUFBQTtBQUNuQixJQUFBLFlBQXlCLGtDQUF6Qix5QkFBeUIsRUFBQTtBQUVyQixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsZ0JBQWdCLGlCQ1RsQyxBRFNZOzs7YUFBTUEsZ0JBQWdCOzs7O1FBQ25DQywrQ0FBQUEsVUFBUSxFQUFHQyxVQUFtQixvQkFBQSxDQUFDLEFFVmpDLENGVWlDOzs7OztZQVF4QkMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsT0FBTSxRQUFBLENBQUNELFdBQVcsQ0FBQ0gsZ0JBQWdCLENBQUMsQ0FBQzthQUFFOzs7O0NBQ3RFLGtCQVY2Q0ksT0FBTSxRQUFBLEVBVW5EO0FBUEMsZ0JBSG1CSixnQkFBZ0IsRUFHNUJLLE9BQUssRUFBR0MsV0FBZSxRQUFBLENBQUM7QUFFL0IsZ0JBTG1CTixnQkFBZ0IsRUFLNUJPLFFBQU0sRUFBR0MsWUFBZ0IsUUFBQSxDQUFDO0FBRWpDLGdCQVBtQlIsZ0JBQWdCLEVBTzVCUyxXQUFTLEVBQUdDLFlBQW1CLFFBQUEsQ0FBQztrQkFQcEJWLGdCQUFnQiJ9