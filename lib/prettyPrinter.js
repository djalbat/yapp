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
var _gutter = /*#__PURE__*/ _interopRequireDefault(require("./gutter"));
var _highlights = /*#__PURE__*/ _interopRequireDefault(require("./highlights"));
var _richTextarea = /*#__PURE__*/ _interopRequireDefault(require("./richTextarea"));
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
        '\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto;\n  grid-template-areas: "gutter highlights-rich-textarea";\n  grid-template-columns: min-content auto;  \n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: inherit;\n  font-feature-settings: inherit;\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PrettyPrinter = /*#__PURE__*/ function(Element) {
    _inherits(PrettyPrinter, Element);
    var _super = _createSuper(PrettyPrinter);
    function PrettyPrinter() {
        _classCallCheck(this, PrettyPrinter);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "scrollHandler", function(event, element) {
            var richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
            _this.scrollGutter(scrollTop, scrollLeft);
            _this.scrollHighlights(scrollTop, scrollLeft);
        });
        return _this;
    }
    _createClass(PrettyPrinter, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateGutter(tokens);
                this.updateHighlights(tokens);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, onChange = _properties.onChange, hiddenGutter = _properties.hiddenGutter, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars, scrollbarThickness = _properties.scrollbarThickness, hidden = hiddenGutter, changeHandler = onChange; ///
                return [
                    /*#__PURE__*/ _easy.React.createElement(_gutter.default, {
                        hidden: hidden
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_highlights.default, {
                        scrollbarThickness: scrollbarThickness
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                        onScroll: this.scrollHandler,
                        onChange: changeHandler,
                        fancyScrollbars: fancyScrollbars,
                        hiddenScrollbars: hiddenScrollbars,
                        active: true
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updatePrettyPrinter = this.update.bind(this), parentContext1 = Object.assign({}, context, {
                    updatePrettyPrinter: updatePrettyPrinter
                });
                return parentContext1;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "updateGutter",
                    "scrollGutter",
                    "updateHighlights",
                    "scrollHighlights"
                ]);
            }
        }
    ]);
    return PrettyPrinter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PrettyPrinter, "tagName", "div");
_defineProperty(PrettyPrinter, "defaultProperties", {
    className: "pretty-printer"
});
_defineProperty(PrettyPrinter, "ignoredProperties", [
    "onChange",
    "hiddenGutter",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars",
    "scrollbarThickness"
]);
var _default = (0, _easyWithStyle.default)(PrettyPrinter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgSGlnaGxpZ2h0cyBmcm9tIFwiLi9oaWdobGlnaHRzXCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuXG5jbGFzcyBQcmV0dHlQcmludGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuXG4gICAgdGhpcy5zY3JvbGxIaWdobGlnaHRzKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIodG9rZW5zKTtcblxuICAgIHRoaXMudXBkYXRlSGlnaGxpZ2h0cyh0b2tlbnMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBoaWRkZW5HdXR0ZXIsIGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycywgc2Nyb2xsYmFyVGhpY2tuZXNzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgaGlkZGVuID0gaGlkZGVuR3V0dGVyLCAgLy8vXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxIaWdobGlnaHRzIHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25TY3JvbGw9e3RoaXMuc2Nyb2xsSGFuZGxlcn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXJcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVIaWdobGlnaHRzXCIsXG4gICAgICBcInNjcm9sbEhpZ2hsaWdodHNcIlxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIixcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQcmV0dHlQcmludGVyKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZ3V0dGVyIGhpZ2hsaWdodHMtcmljaC10ZXh0YXJlYVwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87ICBcblxuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiUHJldHR5UHJpbnRlciIsInNjcm9sbEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbEhpZ2hsaWdodHMiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJ1cGRhdGVHdXR0ZXIiLCJ1cGRhdGVIaWdobGlnaHRzIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJvbkNoYW5nZSIsImhpZGRlbkd1dHRlciIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJoaWRkZW4iLCJjaGFuZ2VIYW5kbGVyIiwiR3V0dGVyIiwiSGlnaGxpZ2h0cyIsIlJpY2hUZXh0YXJlYSIsIm9uU2Nyb2xsIiwiYWN0aXZlIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlUHJldHR5UHJpbnRlciIsImJpbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTRFYixTQW9CRTs7O2VBcEJGLFFBb0JFOzs7a0VBOUZvQixpQkFBaUI7b0JBRVIsTUFBTTsyREFFbEIsVUFBVTsrREFDTixjQUFjO2lFQUNaLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQUEsQUFBTUEsYUFBYSxpQkFrRWhCLEFBbEVIO2NBQU1BLGFBQWE7OEJBQWJBLGFBQWE7YUFBYkEsYUFBYTs4QkFBYkEsYUFBYTs7O1FBQ2pCQywrQ0FBQUEsZUFBYSxFQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQ2xDLElBQU1DLFlBQVksR0FBR0QsT0FBTyxFQUN0QkUsU0FBUyxHQUFHRCxZQUFZLENBQUNFLFlBQVksRUFBRSxFQUN2Q0MsVUFBVSxHQUFHSCxZ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