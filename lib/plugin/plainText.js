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
var PlainTextPlugin = /*#__PURE__*/ function(Plugin) {
    _inherits(PlainTextPlugin, Plugin);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4vcGxhaW5UZXh0LmpzIl0sIm5hbWVzIjpbIlBsdWdpbiIsIlBsYWluVGV4dExleGVyIiwiUGxhaW5UZXh0UGFyc2VyIiwiUGxhaW5UZXh0UHJvY2Vzc29yIiwiUGxhaW5UZXh0X0xBTkdVQUdFIiwiUGxhaW5UZXh0UGx1Z2luIiwibGFuZ3VhZ2UiLCJMZXhlciIsIlBhcnNlciIsIlByb2Nlc3NvciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBQ0gsR0FBb0IsQ0FBcEIsVUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsV0FBcUI7QUFDbEIsR0FBd0IsQ0FBeEIsV0FBd0I7QUFFcEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLGVBQWUsaUJBQXJCLFFBQVE7Y0FBRixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlOztpRUFBZixlQUFlO3dEQUNsQyxRQUFRLEdBSHlCLFVBQWM7OztpQkFFNUIsZUFBZTs7WUFTM0IsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBaEJaLE9BQVcsU0FnQlMsV0FBVyxDQUFDLGVBQWU7WUFBRyxDQUFDOzs7V0FUakQsZUFBZTttQkFQakIsT0FBVztnQkFPVCxlQUFlLEdBRzNCLEtBQUssR0FUYSxVQUFvQjtnQkFNMUIsZUFBZSxHQUszQixNQUFNLEdBVmEsV0FBcUI7Z0JBSzVCLGVBQWUsR0FPM0IsU0FBUyxHQVhhLFdBQXdCO2tCQUlsQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQbHVnaW4gZnJvbSBcIi4uL3BsdWdpblwiO1xuaW1wb3J0IFBsYWluVGV4dExleGVyIGZyb20gXCIuLi9sZXhlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9wbGFpblRleHRcIjtcbmltcG9ydCBQbGFpblRleHRQcm9jZXNzb3IgZnJvbSBcIi4uL3Byb2Nlc3Nvci9wbGFpblRleHRcIjtcblxuaW1wb3J0IHsgUGxhaW5UZXh0X0xBTkdVQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIGxhbmd1YWdlID0gUGxhaW5UZXh0X0xBTkdVQUdFO1xuXG4gIHN0YXRpYyBMZXhlciA9IFBsYWluVGV4dExleGVyO1xuXG4gIHN0YXRpYyBQYXJzZXIgPSBQbGFpblRleHRQYXJzZXI7XG5cbiAgc3RhdGljIFByb2Nlc3NvciA9IFBsYWluVGV4dFByb2Nlc3NvcjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBQbHVnaW4uZnJvbU5vdGhpbmcoUGxhaW5UZXh0UGx1Z2luKTsgfVxufVxuIl19