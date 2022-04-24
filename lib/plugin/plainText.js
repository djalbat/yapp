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
_defineProperty(PlainTextPlugin, "Lexer", _plainText.default);
_defineProperty(PlainTextPlugin, "Parser", _plainText1.default);
_defineProperty(PlainTextPlugin, "Processor", _plainText2.default);
exports.default = PlainTextPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFBsYWluVGV4dExleGVyIGZyb20gXCIuLi9sZXhlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9wbGFpblRleHRcIjtcblxuaW1wb3J0IHsgUExBSU5fVEVYVF9MQU5HVUFHRSB9IGZyb20gXCIuLi9sYW5ndWFnZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IFBMQUlOX1RFWFRfTEFOR1VBR0U7XG5cbiAgc3RhdGljIExleGVyID0gUGxhaW5UZXh0TGV4ZXI7XG5cbiAgc3RhdGljIFBhcnNlciA9IFBsYWluVGV4dFBhcnNlcjtcblxuICBzdGF0aWMgUHJvY2Vzc29yID0gUGxhaW5UZXh0UHJvY2Vzc29yO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsdWdpbi5mcm9tTm90aGluZyhQbGFpblRleHRQbHVnaW4pOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzcHJpbmdXb29kID0gXCIjZjhmNmYxXCI7XG5leHBvcnQgY29uc3QgYm9uam91ciA9IFwiI2U1ZTBlMVwiO1xuZXhwb3J0IGNvbnN0IGdhaW5zYm9yb3VnaCA9IFwiI2Q1ZDhkMlwiO1xuZXhwb3J0IGNvbnN0IHN0YXJkdXN0ID0gXCIjOWY5ZjljXCI7XG5leHBvcnQgY29uc3QgaHVycmljYW5lID0gXCIjOTA4OTg5XCI7XG5leHBvcnQgY29uc3Qgc3Rvcm1EdXN0ID0gXCIjNjQ2NDYzXCI7XG5leHBvcnQgY29uc3QgZW1wZXJvciA9IFwiIzUxNTE1MFwiO1xuZXhwb3J0IGNvbnN0IHR1YXRhcmEgPSBcIiMzNjM1MzRcIjtcbmV4cG9ydCBjb25zdCB3b29kc21va2UgPSBcIiMwYzBkMGZcIjtcblxuZXhwb3J0IGNvbnN0IGNpdHJvbiA9IFwiIzg2YjkyM1wiO1xuZXhwb3J0IGNvbnN0IHN1c2hpID0gXCIjN2ZhODJmXCI7XG5leHBvcnQgY29uc3Qgb2xpdmVEcmFiID0gXCIjNjM4ODI5XCI7XG5leHBvcnQgY29uc3QgcmlmbGVHcmVlbiA9IFwiIzQxNDgzM1wiO1xuZXhwb3J0IGNvbnN0IGxvZ0NhYmluID0gXCIjMjQzMDFkXCI7XG5leHBvcnQgY29uc3QgYmxhY2tPbGl2ZSA9IFwiIzFjMjQxMlwiO1xuZXhwb3J0IGNvbnN0IGh1bnRlckdyZWVuID0gXCIjMTYxZDEwXCI7XG5cbmV4cG9ydCBjb25zdCBjYWRldEJsdWUgPSBcIiM1ZjllYTBcIjtcbmV4cG9ydCBjb25zdCBoYXZlbG9ja0JsdWUgPSBcIiM1QjhEZTFcIjtcblxuZXhwb3J0IGNvbnN0IHBvbWVncmFuYXRlID0gXCIjZjUyOTI5XCI7XG5leHBvcnQgY29uc3QgcmF6em1hdGF6eiA9IFwiI2UzMjU2YlwiO1xuZXhwb3J0IGNvbnN0IGZsYW1pbmdvID0gXCIjZjM0YjQ0XCI7XG5leHBvcnQgY29uc3QgdGFoaXRpID0gXCIjRjU4QTBBXCI7XG5leHBvcnQgY29uc3QgZXF1YXRvciA9IFwiI2U0YUM1ZVwiO1xuXG5leHBvcnQgY29uc3QgcG9ydGljYSA9IFwiI2Y3ZTc1ZlwiO1xuZXhwb3J0IGNvbnN0IGNlbGVyeSA9IFwiI2JjYjg1MlwiO1xuZXhwb3J0IGNvbnN0IHN5Y2Ftb3JlID0gXCIjOTA4ZDM5XCI7XG4iXSwibmFtZXMiOlsiUGxhaW5UZXh0UGx1Z2luIiwibGFuZ3VhZ2UiLCJQTEFJTl9URVhUX0xBTkdVQUdFIiwiZnJvbU5vdGhpbmciLCJQbHVnaW4iLCJMZXhlciIsIlBsYWluVGV4dExleGVyIiwiUGFyc2VyIiwiUGxhaW5UZXh0UGFyc2VyIiwiUHJvY2Vzc29yIiwiUGxhaW5UZXh0UHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU0sSUFBQSxPQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUNILElBQUEsVUFBb0Isa0NBQXBCLG9CQUFvQixFQUFBO0FBQ25CLElBQUEsV0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ2xCLElBQUEsV0FBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRW5CLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSxlQUFlLGlCQ1RqQyxBRFNZOzs7YUFBTUEsZUFBZTs7OztRQUNsQ0MsK0NBQUFBLFVBQVEsRUFBR0MsVUFBbUIsb0JBQUEsQ0FBQyxBRVZqQyxDRlVpQzs7Ozs7WUFReEJDLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLE9BQU0sUUFBQSxDQUFDRCxXQUFXLENBQUNILGVBQWUsQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDckUsa0JBVjRDSSxPQUFNLFFBQUEsRUFVbEQ7QUFQQyxnQkFIbUJKLGVBQWUsRUFHM0JLLE9BQUssRUFBR0MsVUFBYyxRQUFBLENBQUM7QUFFOUIsZ0JBTG1CTixlQUFlLEVBSzNCTyxRQUFNLEVBQUdDLFdBQWUsUUFBQSxDQUFDO0FBRWhDLGdCQVBtQlIsZUFBZSxFQU8zQlMsV0FBUyxFQUFHQyxXQUFrQixRQUFBLENBQUM7a0JBUG5CVixlQUFlIn0=