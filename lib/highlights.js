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
                var context = this.getContext(), updateHighlights = this.update.bind(this), scrollHighlights = this.scroll.bind(this), parentContext1 = Object.assign({}, context, {
                    updateHighlights: updateHighlights,
                    scrollHighlights: scrollHighlights
                });
                return parentContext1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oaWdobGlnaHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFN5bnRheCBmcm9tIFwiLi9zeW50YXhcIjtcclxuXHJcbmltcG9ydCB7IE1BUkdJTl9SSUdIVCwgTUFSR0lOX0JPVFRPTSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgSGlnaGxpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbFN5bnRheChzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IHNjcm9sbGJhclRoaWNrbmVzcyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQgPSBgJHtzY3JvbGxiYXJUaGlja25lc3N9cHhgLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tID0gYCR7c2Nyb2xsYmFyVGhpY2tuZXNzfXB4YDtcclxuXHJcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9SSUdIVCwgbWFyZ2luUmlnaHQpO1xyXG4gICAgdGhpcy5zdHlsZShNQVJHSU5fQk9UVE9NLCBtYXJnaW5Cb3R0b20pO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPFN5bnRheC8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICB1cGRhdGVIaWdobGlnaHRzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxIaWdobGlnaHRzID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcclxuICAgICAgICAgICAgdXBkYXRlSGlnaGxpZ2h0cyxcclxuICAgICAgICAgICAgc2Nyb2xsSGlnaGxpZ2h0c1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcclxuICAgICAgXCJ1cGRhdGVTeW50YXhcIixcclxuICAgICAgXCJzY3JvbGxTeW50YXhcIlxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwic2Nyb2xsYmFyVGhpY2tuZXNzXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiaGlnaGxpZ2h0c1wiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhpZ2hsaWdodHMpYFxyXG5cclxuICB6LWluZGV4OiAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBncmlkLWFyZWE6IGhpZ2hsaWdodHMtcmljaC10ZXh0YXJlYTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJIaWdobGlnaHRzIiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlU3ludGF4Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbFN5bnRheCIsImRpZE1vdW50Iiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwic3R5bGUiLCJNQVJHSU5fUklHSFQiLCJNQVJHSU5fQk9UVE9NIiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiU3ludGF4IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlSGlnaGxpZ2h0cyIsImJpbmQiLCJzY3JvbGxIaWdobGlnaHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFzRWIsU0FpQkU7OztlQWpCRixRQWlCRTs7O2tFQXJGb0IsaUJBQWlCO29CQUVmLE1BQU07MkRBRVgsVUFBVTt5QkFFZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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