"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _lineNumbers = /*#__PURE__*/ _interopRequireDefault(require("./lineNumbers"));
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: fit-content;\n  overflow: hidden;\n  position: relative;\n  grid-area: gutter;\n  border-right-width: 1px;\n  border-right-style: dotted;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Gutter = /*#__PURE__*/ function(Element) {
    _inherits(Gutter, Element);
    var _super = _createSuper(Gutter);
    function Gutter() {
        _classCallCheck(this, Gutter);
        return _super.apply(this, arguments);
    }
    _createClass(Gutter, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateLineNumbers(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollLineNumbers(scrollTop, scrollLeft);
            }
        },
        {
            key: "setLineCount",
            value: function setLineCount(lineCount) {
                this.updateState({
                    lineCount: lineCount
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var lineCount = null;
                this.setState({
                    lineCount: lineCount
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ _easy.React.createElement(_lineNumbers.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updateGutter = this.update.bind(this), scrollGutter = this.scroll.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updateGutter: updateGutter,
                    scrollGutter: scrollGutter
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return Gutter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Gutter, "tagName", "div");
_defineProperty(Gutter, "defaultProperties", {
    className: "gutter"
});
var _default = (0, _easyWithStyle.default)(Gutter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzKHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbExpbmVOdW1iZXJzKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVycy8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgIHVwZGF0ZUd1dHRlcixcclxuICAgICAgc2Nyb2xsR3V0dGVyXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXIpYFxyXG5cclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1hcmVhOiBndXR0ZXI7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3R0ZWQ7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJ1cGRhdGVMaW5lTnVtYmVycyIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxMaW5lTnVtYmVycyIsInNldExpbmVDb3VudCIsImxpbmVDb3VudCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiTGluZU51bWJlcnMiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVHdXR0ZXIiLCJiaW5kIiwic2Nyb2xsR3V0dGVyIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRUE7OztlQUFBOzs7a0VBOURzQjtvQkFFUztnRUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsdUJBd0RMLEFBeEREO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0Q7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsU0FBUyxFQUFFQyxVQUFVLEVBQUU7Z0JBQzVCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLFdBQVdDO1lBQ3BDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDQyxXQUFXLENBQUM7b0JBQ2ZELFdBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFNRixZQUFZLElBQUk7Z0JBRXRCLElBQUksQ0FBQ0csUUFBUSxDQUFDO29CQUNaSCxXQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSwwQkFBQ0Msb0JBQVc7WUFHaEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNmLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQzVCQyxlQUFlLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLEdBQ3BDQyxlQUFlLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU3QyxPQUFRLHFDQUNISDtvQkFDSEUsY0FBQUE7b0JBQ0FFLGNBQUFBOztZQUVKOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFJLENBQUNYLGVBQWU7WUFDdEI7OztXQS9DSVg7bUJBQWV1QixhQUFPO0FBaUQxQixnQkFqREl2QixRQWlER3dCLFdBQVU7QUFFakIsZ0JBbkRJeEIsUUFtREd5QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMzQiJ9