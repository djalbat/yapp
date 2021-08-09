"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _plugin = _interopRequireDefault(require("../plugin"));
var _xml = _interopRequireDefault(require("../lexer/xml"));
var _xml1 = _interopRequireDefault(require("../parser/xml"));
var _xml2 = _interopRequireDefault(require("../processor/xml"));
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
var XMLPlugin = /*#__PURE__*/ function(Plugin1) {
    _inherits(XMLPlugin, Plugin1);
    function XMLPlugin() {
        _classCallCheck(this, XMLPlugin);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(XMLPlugin).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "language", _constants.XML_LANGUAGE);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbHVnaW4veG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gXCIuLi9wbHVnaW5cIjtcbmltcG9ydCBYTUxMZXhlciBmcm9tIFwiLi4vbGV4ZXIveG1sXCI7XG5pbXBvcnQgWE1MUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIveG1sXCI7XG5pbXBvcnQgWE1MUHJvY2Vzc29yIGZyb20gXCIuLi9wcm9jZXNzb3IveG1sXCI7XG5cbmltcG9ydCB7IFhNTF9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBsYW5ndWFnZSA9IFhNTF9MQU5HVUFHRTtcblxuICBzdGF0aWMgTGV4ZXIgPSBYTUxMZXhlcjtcblxuICBzdGF0aWMgUGFyc2VyID0gWE1MUGFyc2VyO1xuXG4gIHN0YXRpYyBQcm9jZXNzb3IgPSBYTUxQcm9jZXNzb3I7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUGx1Z2luLmZyb21Ob3RoaW5nKFhNTFBsdWdpbik7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVPLEdBQVcsQ0FBWCxPQUFXO0FBQ1QsR0FBYyxDQUFkLElBQWM7QUFDYixHQUFlLENBQWYsS0FBZTtBQUNaLEdBQWtCLENBQWxCLEtBQWtCO0FBRWQsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRCLFNBQVM7Y0FBVCxTQUFTO2FBQVQsU0FBUzs4QkFBVCxTQUFTOztpRUFBVCxTQUFTO3dEQUM1QixRQUFRLEdBSG1CLFVBQWM7OztpQkFFdEIsU0FBUzs7WUFTckIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7dUJBaEJMLE9BQVcsU0FnQlMsV0FBVyxDQUFDLFNBQVM7WUFBRyxDQUFDOzs7V0FUM0MsU0FBUzttQkFQWCxPQUFXO2dCQU9ULFNBQVMsR0FHckIsS0FBSyxHQVRPLElBQWM7Z0JBTWQsU0FBUyxHQUtyQixNQUFNLEdBVk8sS0FBZTtnQkFLaEIsU0FBUyxHQU9yQixTQUFTLEdBWE8sS0FBa0I7a0JBSXRCLFNBQVMifQ==