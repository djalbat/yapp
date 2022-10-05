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
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("./syntax"));
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
        "\n\n  z-index: 0;\n  width: auto;\n  height: auto;\n  overflow: hidden;\n  position: relative;\n  grid-area: highlights-rich-textarea;\n\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Highlights = /*#__PURE__*/ function(Element) {
    _inherits(Highlights, Element);
    var _super = _createSuper(Highlights);
    function Highlights() {
        _classCallCheck(this, Highlights);
        return _super.apply(this, arguments);
    }
    _createClass(Highlights, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateSyntax(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollSyntax(scrollTop, scrollLeft);
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
                var context = this.getContext(), updateHighlights = this.update.bind(this), scrollHighlights = this.scroll.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updateHighlights: updateHighlights,
                    scrollHighlights: scrollHighlights
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "updateSyntax",
                    "scrollSyntax"
                ]);
            }
        }
    ]);
    return Highlights;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Highlights, "tagName", "div");
_defineProperty(Highlights, "ignoredProperties", [
    "scrollbarThickness"
]);
_defineProperty(Highlights, "defaultProperties", {
    className: "highlights"
});
var _default = (0, _easyWithStyle.default)(Highlights)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oaWdobGlnaHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcclxuXHJcbmltcG9ydCB7IE1BUkdJTl9SSUdIVCwgTUFSR0lOX0JPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgSGlnaGxpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbFN5bnRheChzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IHNjcm9sbGJhclRoaWNrbmVzcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQgPSBgJHtzY3JvbGxiYXJUaGlja25lc3N9cHhgLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tID0gYCR7c2Nyb2xsYmFyVGhpY2tuZXNzfXB4YDtcclxuXHJcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9SSUdIVCwgbWFyZ2luUmlnaHQpO1xyXG4gICAgdGhpcy5zdHlsZShNQVJHSU5fQk9UVE9NLCBtYXJnaW5Cb3R0b20pO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPFN5bnRheC8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICB1cGRhdGVIaWdobGlnaHRzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsSGlnaGxpZ2h0cyA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgLi4uY29udGV4dCxcclxuICAgICAgdXBkYXRlSGlnaGxpZ2h0cyxcclxuICAgICAgc2Nyb2xsSGlnaGxpZ2h0c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcclxuICAgICAgXCJ1cGRhdGVTeW50YXhcIixcclxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwic2Nyb2xsYmFyVGhpY2tuZXNzXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiaGlnaGxpZ2h0c1wiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhpZ2hsaWdodHMpYFxyXG5cclxuICB6LWluZGV4OiAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBncmlkLWFyZWE6IGhpZ2hsaWdodHMtcmljaC10ZXh0YXJlYTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJIaWdobGlnaHRzIiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlU3ludGF4Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbFN5bnRheCIsImRpZE1vdW50Iiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJNQVJHSU5fUklHSFQiLCJNQVJHSU5fQk9UVE9NIiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiU3ludGF4IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlSGlnaGxpZ2h0cyIsImJpbmQiLCJzY3JvbGxIaWdobGlnaHRzIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNFQTs7O2VBQUE7OztrRUFwRXNCO29CQUVFOzJEQUVMO3lCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQUEsQUFBTUEsMkJBNERMLEFBNUREO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDQyxZQUFZLENBQUNEO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLFlBQVksQ0FBQ0YsV0FBV0M7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNLEFBQUVDLHFCQUF1QixJQUFJLENBQUNDLFVBQVUsQ0FBdENELG9CQUNGRSxjQUFjLEFBQUMsR0FBcUIsT0FBbkJGLG9CQUFtQixPQUNwQ0csZUFBZSxBQUFDLEdBQXFCLE9BQW5CSCxvQkFBbUI7Z0JBRTNDLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyx1QkFBWSxFQUFFSDtnQkFDekIsSUFBSSxDQUFDRSxLQUFLLENBQUNFLHdCQUFhLEVBQUVIO1lBQzVCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7WUFDWixHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQyxlQUFNO1lBR1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNmLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3hCQyxtQkFBbUIsSUFBSSxDQUFDckIsTUFBTSxDQUFDc0IsSUFBSSxDQUFDLElBQUksR0FDNUNDLG1CQUFtQixJQUFJLENBQUNwQixNQUFNLENBQUNtQixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRWpELE9BQVEscUNBQ0hIO29CQUNIRSxrQkFBQUE7b0JBQ0FFLGtCQUFBQTs7WUFFSjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQUksQ0FBQ0MsYUFBYSxDQUFDO29CQUNqQjtvQkFDQTtpQkFDRDtZQUNIOzs7V0EvQ0kxQjttQkFBbUIyQixhQUFPO0FBaUQ5QixnQkFqREkzQixZQWlERzRCLFdBQVU7QUFFakIsZ0JBbkRJNUIsWUFtREc2QixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGdCQXZESTdCLFlBdURHOEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEMifQ==