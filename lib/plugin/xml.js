"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _xml = _interopRequireDefault(require("../lexer/xml"));
var _xml1 = _interopRequireDefault(require("../parser/xml"));
var _xml2 = _interopRequireDefault(require("../processor/xml"));
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
var XMLPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(XMLPlugin, Plugin);
    var _super = _createSuper(XMLPlugin);
    function XMLPlugin() {
        _classCallCheck(this, XMLPlugin);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "language", _languages.XML_LANGUAGE);
        return _this;
    }
    _createClass(XMLPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(XMLPlugin);
            }
        }
    ]);
    return XMLPlugin;
}(_wrapNativeSuper(_plugin.default));
exports.default = XMLPlugin;
_defineProperty(XMLPlugin, "Lexer", _xml.default);
_defineProperty(XMLPlugin, "Parser", _xml1.default);
_defineProperty(XMLPlugin, "Processor", _xml2.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4veG1sLmpzIiwiLi4vc3JjL2NvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFhNTExleGVyIGZyb20gXCIuLi9sZXhlci94bWxcIjtcbmltcG9ydCBYTUxQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci94bWxcIjtcbmltcG9ydCBYTUxQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci94bWxcIjtcblxuaW1wb3J0IHsgWE1MX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2xhbmd1YWdlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gWE1MX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IFhNTExleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBYTUxQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IFhNTFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoWE1MUGx1Z2luKTsgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzcHJpbmdXb29kID0gXCIjZjhmNmYxXCI7XG5leHBvcnQgY29uc3QgYm9uam91ciA9IFwiI2U1ZTBlMVwiO1xuZXhwb3J0IGNvbnN0IGdhaW5zYm9yb3VnaCA9IFwiI2Q1ZDhkMlwiO1xuZXhwb3J0IGNvbnN0IHN0YXJkdXN0ID0gXCIjOWY5ZjljXCI7XG5leHBvcnQgY29uc3QgaHVycmljYW5lID0gXCIjOTA4OTg5XCI7XG5leHBvcnQgY29uc3Qgc3Rvcm1EdXN0ID0gXCIjNjQ2NDYzXCI7XG5leHBvcnQgY29uc3QgZW1wZXJvciA9IFwiIzUxNTE1MFwiO1xuZXhwb3J0IGNvbnN0IHR1YXRhcmEgPSBcIiMzNjM1MzRcIjtcbmV4cG9ydCBjb25zdCB3b29kc21va2UgPSBcIiMwYzBkMGZcIjtcblxuZXhwb3J0IGNvbnN0IGNpdHJvbiA9IFwiIzg2YjkyM1wiO1xuZXhwb3J0IGNvbnN0IHN1c2hpID0gXCIjN2ZhODJmXCI7XG5leHBvcnQgY29uc3Qgb2xpdmVEcmFiID0gXCIjNjM4ODI5XCI7XG5leHBvcnQgY29uc3QgcmlmbGVHcmVlbiA9IFwiIzQxNDgzM1wiO1xuZXhwb3J0IGNvbnN0IGxvZ0NhYmluID0gXCIjMjQzMDFkXCI7XG5leHBvcnQgY29uc3QgYmxhY2tPbGl2ZSA9IFwiIzFjMjQxMlwiO1xuZXhwb3J0IGNvbnN0IGh1bnRlckdyZWVuID0gXCIjMTYxZDEwXCI7XG5cbmV4cG9ydCBjb25zdCBjYWRldEJsdWUgPSBcIiM1ZjllYTBcIjtcbmV4cG9ydCBjb25zdCBoYXZlbG9ja0JsdWUgPSBcIiM1QjhEZTFcIjtcblxuZXhwb3J0IGNvbnN0IHBvbWVncmFuYXRlID0gXCIjZjUyOTI5XCI7XG5leHBvcnQgY29uc3QgcmF6em1hdGF6eiA9IFwiI2UzMjU2YlwiO1xuZXhwb3J0IGNvbnN0IGZsYW1pbmdvID0gXCIjZjM0YjQ0XCI7XG5leHBvcnQgY29uc3QgdGFoaXRpID0gXCIjRjU4QTBBXCI7XG5leHBvcnQgY29uc3QgZXF1YXRvciA9IFwiI2U0YUM1ZVwiO1xuXG5leHBvcnQgY29uc3QgcG9ydGljYSA9IFwiI2Y3ZTc1ZlwiO1xuZXhwb3J0IGNvbnN0IGNlbGVyeSA9IFwiI2JjYjg1MlwiO1xuZXhwb3J0IGNvbnN0IHN5Y2Ftb3JlID0gXCIjOTA4ZDM5XCI7XG4iXSwibmFtZXMiOlsiWE1MUGx1Z2luIiwibGFuZ3VhZ2UiLCJYTUxfTEFOR1VBR0UiLCJmcm9tTm90aGluZyIsIlBsdWdpbiIsIkxleGVyIiwiWE1MTGV4ZXIiLCJQYXJzZXIiLCJYTUxQYXJzZXIiLCJQcm9jZXNzb3IiLCJYTUxQcm9jZXNzb3IiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVtQixHQUFXLENBQVgsT0FBVztBQUNULEdBQWMsQ0FBZCxJQUFjO0FBQ2IsR0FBZSxDQUFmLEtBQWU7QUFDWixHQUFrQixDQUFsQixLQUFrQjtBQUVkLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztnRkFQM0M7Ozs7Ozs7O3NDQUFBOzs7Ozs7aUNBQUE7OztpRUFBQTs7U0FBQTs7Ozs7Ozs4REFBQTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7Ozs7O3NDQUFBOzs7Ozs7Ozs7Ozs7VUFBQTs7S0FBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBU2UsR0FBSyxDQUFDQSxTQUFTLGlCQUFmLFFBQVE7Z0NBVHZCOzthQVNxQkEsU0FBUzt3Q0FUOUI7OzZDQUFBO3VEQVVFQyxDQUFRLFdBQUdDLFVBQVksY0NWekIsQ0RVMEI7Ozs7O1lBUWpCQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxPQUFNLFNBQUNELFdBQVcsQ0FBQ0gsU0FBUztZQUFHLENBQUM7O01BbEJoRTs7bUJBU3VDSSxPQUFNO2tCQUF4QkosU0FBUyxBQVQ5QjtnQkFTcUJBLFNBQVMsRUFHckJLLENBQUssUUFBR0MsSUFBUSxTQVp6QjtnQkFTcUJOLFNBQVMsRUFLckJPLENBQU0sU0FBR0MsS0FBUyxTQWQzQjtnQkFTcUJSLFNBQVMsRUFPckJTLENBQVMsWUFBR0MsS0FBWSxTQWhCakMifQ==