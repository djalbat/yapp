"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _json = _interopRequireDefault(require("../lexer/json"));
var _json1 = _interopRequireDefault(require("../parser/json"));
var _json2 = _interopRequireDefault(require("../processor/json"));
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
var JSONPlugin = function(Plugin1) {
    _inherits(JSONPlugin, _plugin.default);
    function JSONPlugin() {
        _classCallCheck(this, JSONPlugin);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(JSONPlugin).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "language", _constants.JSON_LANGUAGE);
        return _this;
    }
    _createClass(JSONPlugin, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _plugin.default.fromNothing(JSONPlugin);
            }
        }
    ]);
    return JSONPlugin;
}(_wrapNativeSuper(_plugin.default));
_defineProperty(JSONPlugin, "Lexer", _json.default);
_defineProperty(JSONPlugin, "Parser", _json1.default);
_defineProperty(JSONPlugin, "Processor", _json2.default);
exports.default = JSONPlugin;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBsdWdpbiBmcm9tIFwiLi4vcGx1Z2luXCI7XG5pbXBvcnQgSlNPTkxleGVyIGZyb20gXCIuLi9sZXhlci9qc29uXCI7XG5pbXBvcnQgSlNPTlBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2pzb25cIjtcbmltcG9ydCBKU09OUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvanNvblwiO1xuXG5pbXBvcnQgeyBKU09OX0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IEpTT05fTEFOR1VBR0U7XG5cbiAgc3RhdGljIExleGVyID0gSlNPTkxleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBKU09OUGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBKU09OUHJvY2Vzc29yO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFBsdWdpbi5mcm9tTm90aGluZyhKU09OUGx1Z2luKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRU8sT0FBVztJQUNSLEtBQWU7SUFDZCxNQUFnQjtJQUNiLE1BQW1CO0lBRWYsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsVUFBVSxZQUFTLE9BQU07Y0FBekIsVUFBVSxFQVBaLE9BQVc7YUFPVCxVQUFVOzhCQUFWLFVBQVU7O2lFQUFWLFVBQVU7d0RBQzdCLFFBQVEsR0FIb0IsVUFBYzs7O2lCQUV2QixVQUFVOztZQVN0QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3VCQWhCRCxPQUFXLFNBZ0JTLFdBQVcsQ0FBQyxVQUFVOzs7O1dBVHhDLFVBQVU7bUJBUFosT0FBVztnQkFPVCxVQUFVLEdBR3RCLEtBQUssR0FUUSxLQUFlO2dCQU1oQixVQUFVLEdBS3RCLE1BQU0sR0FWUSxNQUFnQjtnQkFLbEIsVUFBVSxHQU90QixTQUFTLEdBWFEsTUFBbUI7a0JBSXhCLFVBQVUifQ==