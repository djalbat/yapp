"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _plainText = _interopRequireDefault(require("../lexer/plainText"));
var _plainText1 = _interopRequireDefault(require("../parser/plainText"));
var _plainText2 = _interopRequireDefault(require("../processor/plainText"));
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
var PlainTextPlugin = function(Plugin1) {
    _inherits(PlainTextPlugin, _plugin.default);
    function PlainTextPlugin() {
        _classCallCheck(this, PlainTextPlugin);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PlainTextPlugin).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "language", _constants.PlainText_LANGUAGE);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBQbGFpblRleHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgUGxhaW5UZXh0UHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IvcGxhaW5UZXh0XCI7XG5cbmltcG9ydCB7IFBsYWluVGV4dF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IFBsYWluVGV4dF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBQbGFpblRleHRMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gUGxhaW5UZXh0UGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBQbGFpblRleHRQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKFBsYWluVGV4dFBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVPLE9BQVc7SUFDSCxVQUFvQjtJQUNuQixXQUFxQjtJQUNsQixXQUF3QjtJQUVwQixVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixlQUFlLFlBQVMsT0FBTTtjQUE5QixlQUFlLEVBUGpCLE9BQVc7YUFPVCxlQUFlOzhCQUFmLGVBQWU7O2lFQUFmLGVBQWU7d0RBQ2xDLFFBQVEsR0FIeUIsVUFBYzs7O2lCQUU1QixlQUFlOztZQVMzQixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO3VCQWhCRCxPQUFXLFNBZ0JTLFdBQVcsQ0FBQyxlQUFlOzs7O1dBVDdDLGVBQWU7bUJBUGpCLE9BQVc7Z0JBT1QsZUFBZSxHQUczQixLQUFLLEdBVGEsVUFBb0I7Z0JBTTFCLGVBQWUsR0FLM0IsTUFBTSxHQVZhLFdBQXFCO2dCQUs1QixlQUFlLEdBTzNCLFNBQVMsR0FYYSxXQUF3QjtrQkFJbEMsZUFBZSJ9