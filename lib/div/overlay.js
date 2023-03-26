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
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("../div/syntax"));
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
        "\n\n  z-index: 0;\n  width: auto;\n  height: auto;\n  overflow: hidden;\n  position: relative;\n  grid-area: overlay-rich-textarea;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OverlayDiv = /*#__PURE__*/ function(Element) {
    _inherits(OverlayDiv, Element);
    var _super = _createSuper(OverlayDiv);
    function OverlayDiv() {
        _classCallCheck(this, OverlayDiv);
        return _super.apply(this, arguments);
    }
    _createClass(OverlayDiv, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateSyntaxDiv(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollSyntaxDiv(scrollTop, scrollLeft);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var scrollbarThickness = this.properties.scrollbarThickness, marginRight = "".concat(scrollbarThickness, "px"), marginBottom = "".concat(scrollbarThickness, "px");
                this.style(_constants.MARGIN_RIGHT, marginRight);
                this.style(_constants.MARGIN_BOTTOM, marginBottom);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_syntax.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updateOverlayDiv = this.update.bind(this), scrollOverlayDiv = this.scroll.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updateOverlayDiv: updateOverlayDiv,
                    scrollOverlayDiv: scrollOverlayDiv
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "updateSyntaxDiv",
                    "scrollSyntaxDiv"
                ]);
            }
        }
    ]);
    return OverlayDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(OverlayDiv, "tagName", "div");
_defineProperty(OverlayDiv, "ignoredProperties", [
    "scrollbarThickness"
]);
_defineProperty(OverlayDiv, "defaultProperties", {
    className: "overlay"
});
var _default = (0, _easyWithStyle.default)(OverlayDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvb3ZlcmxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBTeW50YXhEaXYgZnJvbSBcIi4uL2Rpdi9zeW50YXhcIjtcclxuXHJcbmltcG9ydCB7IE1BUkdJTl9SSUdIVCwgTUFSR0lOX0JPVFRPTSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIE92ZXJsYXlEaXYgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN5bnRheERpdih0b2tlbnMpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zY3JvbGxTeW50YXhEaXYoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcyxcclxuICAgICAgICAgIG1hcmdpblJpZ2h0ID0gYCR7c2Nyb2xsYmFyVGhpY2tuZXNzfXB4YCxcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IGAke3Njcm9sbGJhclRoaWNrbmVzc31weGA7XHJcblxyXG4gICAgdGhpcy5zdHlsZShNQVJHSU5fUklHSFQsIG1hcmdpblJpZ2h0KTtcclxuICAgIHRoaXMuc3R5bGUoTUFSR0lOX0JPVFRPTSwgbWFyZ2luQm90dG9tKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8vXHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxTeW50YXhEaXYvPlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxyXG4gICAgICAgICAgdXBkYXRlT3ZlcmxheURpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbE92ZXJsYXlEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgIHVwZGF0ZU92ZXJsYXlEaXYsXHJcbiAgICAgIHNjcm9sbE92ZXJsYXlEaXZcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXHJcbiAgICAgIFwidXBkYXRlU3ludGF4RGl2XCIsXHJcbiAgICAgIFwic2Nyb2xsU3ludGF4RGl2XCJcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcIm92ZXJsYXlcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcclxuXHJcbiAgei1pbmRleDogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1hcmVhOiBvdmVybGF5LXJpY2gtdGV4dGFyZWE7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiT3ZlcmxheURpdiIsInVwZGF0ZSIsInRva2VucyIsInVwZGF0ZVN5bnRheERpdiIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzY3JvbGxTeW50YXhEaXYiLCJkaWRNb3VudCIsInNjcm9sbGJhclRoaWNrbmVzcyIsInByb3BlcnRpZXMiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsInN0eWxlIiwiTUFSR0lOX1JJR0hUIiwiTUFSR0lOX0JPVFRPTSIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIlN5bnRheERpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInVwZGF0ZU92ZXJsYXlEaXYiLCJiaW5kIiwic2Nyb2xsT3ZlcmxheURpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzRUE7OztlQUFBOzs7a0VBcEVzQjtvQkFFRTsyREFFRjt5QkFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLDJCQTRETCxBQTVERDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQ0MsZUFBZSxDQUFDRDtZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxTQUFTLEVBQUVDLFVBQVUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDQyxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTSxBQUFFQyxxQkFBdUIsSUFBSSxDQUFDQyxVQUFVLENBQXRDRCxvQkFDRkUsY0FBYyxBQUFDLEdBQXFCLE9BQW5CRixvQkFBbUIsT0FDcENHLGVBQWUsQUFBQyxHQUFxQixPQUFuQkgsb0JBQW1CO2dCQUUzQyxJQUFJLENBQUNJLEtBQUssQ0FBQ0MsdUJBQVksRUFBRUg7Z0JBQ3pCLElBQUksQ0FBQ0UsS0FBSyxDQUFDRSx3QkFBYSxFQUFFSDtZQUM1Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO1lBQ1osR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0MsZUFBUztZQUdkOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN4QkMsbUJBQW1CLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLEdBQzVDQyxtQkFBbUIsSUFBSSxDQUFDcEIsTUFBTSxDQUFDbUIsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVqRCxPQUFRLHFDQUNISDtvQkFDSEUsa0JBQUFBO29CQUNBRSxrQkFBQUE7O1lBRUo7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxJQUFJLENBQUNDLGFBQWEsQ0FBQztvQkFDakI7b0JBQ0E7aUJBQ0Q7WUFDSDs7O1dBL0NJMUI7bUJBQW1CMkIsYUFBTztBQWlEOUIsZ0JBakRJM0IsWUFpREc0QixXQUFVO0FBRWpCLGdCQW5ESTVCLFlBbURHNkIscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxnQkF2REk3QixZQXVERzhCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hDIn0=