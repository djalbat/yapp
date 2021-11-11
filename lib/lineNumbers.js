"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _constants = require("./constants");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  float: left;\n  margin: 0 6px 0 6px;\n  \n  color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LineNumbers = /*#__PURE__*/ function(Element) {
    _inherits(LineNumbers, Element);
    var _super = _createSuper(LineNumbers);
    function LineNumbers() {
        _classCallCheck(this, LineNumbers);
        return _super.apply(this, arguments);
    }
    _createClass(LineNumbers, [
        {
            key: "update",
            value: function update(lineCount) {
                var html = _constants.EMPTY_STRING;
                for(var lineNumber = 1; lineNumber <= lineCount; lineNumber++){
                    html = "".concat(html).concat(lineNumber, "<br/>");
                }
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateLineNumbers = this.update.bind(this); ///
                return {
                    updateLineNumbers: updateLineNumbers
                };
            }
        }
    ]);
    return LineNumbers;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(LineNumbers, "tagName", "div");
_defineProperty(LineNumbers, "defaultProperties", {
    className: "line-numbers"
});
var _default = (0, _easyWithStyle).default(LineNumbers)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lTnVtYmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUobGluZUNvdW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcclxuXHJcbiAgICBmb3IgKGxldCBsaW5lTnVtYmVyID0gMTsgbGluZU51bWJlciA8PSBsaW5lQ291bnQ7IGxpbmVOdW1iZXIrKykge1xyXG4gICAgICBodG1sID0gYCR7aHRtbH0ke2xpbmVOdW1iZXJ9PGJyLz5gO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCB1cGRhdGVMaW5lTnVtYmVycyA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdXBkYXRlTGluZU51bWJlcnNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwibGluZS1udW1iZXJzXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGluZU51bWJlcnMpYFxyXG5cclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgNnB4IDAgNnB4O1xyXG4gIFxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6ICdEZWphVnUgU2FucyBNb25vJywgTWVubG8sICdMdWNpZGEgQ29uc29sZScsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJMaW5lTnVtYmVycyIsInVwZGF0ZSIsImxpbmVDb3VudCIsImh0bWwiLCJsaW5lTnVtYmVyIiwicGFyZW50Q29udGV4dCIsInVwZGF0ZUxpbmVOdW1iZXJzIiwiYmluZCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBRUQsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTRCSixDQWF0Qzs7Ozs7OztJQXZDTUEsV0FBVyxpQkFBakIsUUFBUTtjQUFGQSxXQUFXOzhCQUFYQSxXQUFXO2FBQVhBLFdBQVc7OEJBQVhBLFdBQVc7OztpQkFBWEEsV0FBVzs7WUFDZkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQ0MsSUFBSSxHQUppQixVQUFhO2dCQU10QyxHQUFHLENBQUUsR0FBRyxDQUFDQyxVQUFVLEdBQUcsQ0FBQyxFQUFFQSxVQUFVLElBQUlGLFNBQVMsRUFBRUUsVUFBVSxHQUFJLENBQUM7b0JBQy9ERCxJQUFJLEdBQUksQ0FBQSxFQUFTQyxNQUFVLENBQWpCRCxJQUFJLEVBQWMsTUFBSyxDQUFoQkMsVUFBVSxFQUFDLENBQUs7Z0JBQ25DLENBQUM7Z0JBRUQsSUFBSSxDQUFDRCxJQUFJLENBQUNBLElBQUk7WUFDaEIsQ0FBQzs7O1lBRURFLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDaEIsR0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJELE1BQU0sQ0FBRSxDQUFDO29CQUNQRCxpQkFBaUIsRUFBakJBLGlCQUFpQjtnQkFDbkIsQ0FBQztZQUNILENBQUM7OztXQWpCR04sV0FBVzttQkFKTyxLQUFNO2dCQUl4QkEsV0FBVyxFQW1CUlEsQ0FBTyxVQUFHLENBQUs7Z0JBbkJsQlIsV0FBVyxFQXFCUlMsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQWM7QUFDM0IsQ0FBQzttQkE3Qm1CLGNBQWlCLFVBZ0NkVixXQUFXIn0=