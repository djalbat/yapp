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
var _lineNumbers = /*#__PURE__*/ _interopRequireDefault(require("../div/lineNumbers"));
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
        "\n\n  width: fit-content;\n  overflow: hidden;\n  position: relative;\n  grid-area: gutter;\n  border-right-width: 1px;\n  border-right-style: dotted;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var GutterDiv = /*#__PURE__*/ function(Element) {
    _inherits(GutterDiv, Element);
    var _super = _createSuper(GutterDiv);
    function GutterDiv() {
        _classCallCheck(this, GutterDiv);
        return _super.apply(this, arguments);
    }
    _createClass(GutterDiv, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateLineNumbersDiv(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollLineNumbersDiv(scrollTop, scrollLeft);
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
                var context = this.getContext(), updateGutterDiv = this.update.bind(this), scrollGutterDiv = this.scroll.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updateGutterDiv: updateGutterDiv,
                    scrollGutterDiv: scrollGutterDiv
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
    return GutterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(GutterDiv, "tagName", "div");
_defineProperty(GutterDiv, "defaultProperties", {
    className: "gutter"
});
var _default = (0, _easyWithStyle.default)(GutterDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvZ3V0dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVyc0RpdiBmcm9tIFwiLi4vZGl2L2xpbmVOdW1iZXJzXCI7XHJcblxyXG5jbGFzcyBHdXR0ZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzRGl2KHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbExpbmVOdW1iZXJzRGl2KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVyc0Rpdi8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXJEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXJEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgIHVwZGF0ZUd1dHRlckRpdixcclxuICAgICAgc2Nyb2xsR3V0dGVyRGl2XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXJEaXYpYFxyXG5cclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1hcmVhOiBndXR0ZXI7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3R0ZWQ7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiR3V0dGVyRGl2IiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlTGluZU51bWJlcnNEaXYiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsTGluZU51bWJlcnNEaXYiLCJzZXRMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkxpbmVOdW1iZXJzRGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlR3V0dGVyRGl2IiwiYmluZCIsInNjcm9sbEd1dHRlckRpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0VBOzs7ZUFBQTs7O2tFQTlEc0I7b0JBRVM7Z0VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDBCQXdETCxBQXhERDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNEO1lBQzVCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLG9CQUFvQixDQUFDRixXQUFXQztZQUN2Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ0MsV0FBVyxDQUFDO29CQUNmRCxXQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBTUYsWUFBWSxJQUFJO2dCQUV0QixJQUFJLENBQUNHLFFBQVEsQ0FBQztvQkFDWkgsV0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsMEJBQUNDLG9CQUFjO1lBR25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUM1QkMsa0JBQWtCLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxrQkFBa0IsSUFBSSxDQUFDaEIsTUFBTSxDQUFDZSxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRWhELE9BQVEscUNBQ0hIO29CQUNIRSxpQkFBQUE7b0JBQ0FFLGlCQUFBQTs7WUFFSjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDWCxlQUFlO1lBQ3RCOzs7V0EvQ0lYO21CQUFrQnVCLGFBQU87QUFpRDdCLGdCQWpESXZCLFdBaURHd0IsV0FBVTtBQUVqQixnQkFuREl4QixXQW1ER3lCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzNCIn0=