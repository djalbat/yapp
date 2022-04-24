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
_defineProperty(XMLPlugin, "Lexer", _xml.default);
_defineProperty(XMLPlugin, "Parser", _xml1.default);
_defineProperty(XMLPlugin, "Processor", _xml2.default);
exports.default = XMLPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4veG1sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwiLi4vc3JjL2NvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFhNTExleGVyIGZyb20gXCIuLi9sZXhlci94bWxcIjtcbmltcG9ydCBYTUxQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci94bWxcIjtcbmltcG9ydCBYTUxQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci94bWxcIjtcblxuaW1wb3J0IHsgWE1MX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2xhbmd1YWdlc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gWE1MX0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IFhNTExleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBYTUxQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IFhNTFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoWE1MUGx1Z2luKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nV29vZCA9IFwiI2Y4ZjZmMVwiO1xuZXhwb3J0IGNvbnN0IGJvbmpvdXIgPSBcIiNlNWUwZTFcIjtcbmV4cG9ydCBjb25zdCBnYWluc2Jvcm91Z2ggPSBcIiNkNWQ4ZDJcIjtcbmV4cG9ydCBjb25zdCBzdGFyZHVzdCA9IFwiIzlmOWY5Y1wiO1xuZXhwb3J0IGNvbnN0IGh1cnJpY2FuZSA9IFwiIzkwODk4OVwiO1xuZXhwb3J0IGNvbnN0IHN0b3JtRHVzdCA9IFwiIzY0NjQ2M1wiO1xuZXhwb3J0IGNvbnN0IGVtcGVyb3IgPSBcIiM1MTUxNTBcIjtcbmV4cG9ydCBjb25zdCB0dWF0YXJhID0gXCIjMzYzNTM0XCI7XG5leHBvcnQgY29uc3Qgd29vZHNtb2tlID0gXCIjMGMwZDBmXCI7XG5cbmV4cG9ydCBjb25zdCBjaXRyb24gPSBcIiM4NmI5MjNcIjtcbmV4cG9ydCBjb25zdCBzdXNoaSA9IFwiIzdmYTgyZlwiO1xuZXhwb3J0IGNvbnN0IG9saXZlRHJhYiA9IFwiIzYzODgyOVwiO1xuZXhwb3J0IGNvbnN0IHJpZmxlR3JlZW4gPSBcIiM0MTQ4MzNcIjtcbmV4cG9ydCBjb25zdCBsb2dDYWJpbiA9IFwiIzI0MzAxZFwiO1xuZXhwb3J0IGNvbnN0IGJsYWNrT2xpdmUgPSBcIiMxYzI0MTJcIjtcbmV4cG9ydCBjb25zdCBodW50ZXJHcmVlbiA9IFwiIzE2MWQxMFwiO1xuXG5leHBvcnQgY29uc3QgY2FkZXRCbHVlID0gXCIjNWY5ZWEwXCI7XG5leHBvcnQgY29uc3QgaGF2ZWxvY2tCbHVlID0gXCIjNUI4RGUxXCI7XG5cbmV4cG9ydCBjb25zdCBwb21lZ3JhbmF0ZSA9IFwiI2Y1MjkyOVwiO1xuZXhwb3J0IGNvbnN0IHJhenptYXRhenogPSBcIiNlMzI1NmJcIjtcbmV4cG9ydCBjb25zdCBmbGFtaW5nbyA9IFwiI2YzNGI0NFwiO1xuZXhwb3J0IGNvbnN0IHRhaGl0aSA9IFwiI0Y1OEEwQVwiO1xuZXhwb3J0IGNvbnN0IGVxdWF0b3IgPSBcIiNlNGFDNWVcIjtcblxuZXhwb3J0IGNvbnN0IHBvcnRpY2EgPSBcIiNmN2U3NWZcIjtcbmV4cG9ydCBjb25zdCBjZWxlcnkgPSBcIiNiY2I4NTJcIjtcbmV4cG9ydCBjb25zdCBzeWNhbW9yZSA9IFwiIzkwOGQzOVwiO1xuIl0sIm5hbWVzIjpbIlhNTFBsdWdpbiIsImxhbmd1YWdlIiwiWE1MX0xBTkdVQUdFIiwiZnJvbU5vdGhpbmciLCJQbHVnaW4iLCJMZXhlciIsIlhNTExleGVyIiwiUGFyc2VyIiwiWE1MUGFyc2VyIiwiUHJvY2Vzc29yIiwiWE1MUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU0sSUFBQSxPQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUNULElBQUEsSUFBYyxrQ0FBZCxjQUFjLEVBQUE7QUFDYixJQUFBLEtBQWUsa0NBQWYsZUFBZSxFQUFBO0FBQ1osSUFBQSxLQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7QUFFZCxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsU0FBUyxpQkNUM0IsQURTWTs7O2FBQU1BLFNBQVM7Ozs7UUFDNUJDLCtDQUFBQSxVQUFRLEVBQUdDLFVBQVksYUFBQSxDQUFDLEFFVjFCLENGVTBCOzs7OztZQVFqQkMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsT0FBTSxRQUFBLENBQUNELFdBQVcsQ0FBQ0gsU0FBUyxDQUFDLENBQUM7YUFBRTs7OztDQUMvRCxrQkFWc0NJLE9BQU0sUUFBQSxFQVU1QztBQVBDLGdCQUhtQkosU0FBUyxFQUdyQkssT0FBSyxFQUFHQyxJQUFRLFFBQUEsQ0FBQztBQUV4QixnQkFMbUJOLFNBQVMsRUFLckJPLFFBQU0sRUFBR0MsS0FBUyxRQUFBLENBQUM7QUFFMUIsZ0JBUG1CUixTQUFTLEVBT3JCUyxXQUFTLEVBQUdDLEtBQVksUUFBQSxDQUFDO2tCQVBiVixTQUFTIn0=