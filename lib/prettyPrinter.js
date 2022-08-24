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
var _scrollbar = require("./utilities/scrollbar");
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
                var _properties = this.properties, onChange = _properties.onChange, hiddenGutter = _properties.hiddenGutter, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars, hidden = hiddenGutter, changeHandler = onChange, scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(hiddenScrollbars, fancyScrollbars);
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
    "fancyScrollbars"
]);
var _default = (0, _easyWithStyle.default)(PrettyPrinter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgSGlnaGxpZ2h0cyBmcm9tIFwiLi9oaWdobGlnaHRzXCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNjcm9sbEhpZ2hsaWdodHMoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuXG4gICAgdGhpcy51cGRhdGVIaWdobGlnaHRzKHRva2Vucyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGhpZGRlbkd1dHRlciwgZmFuY3lTY3JvbGxiYXJzLCBoaWRkZW5TY3JvbGxiYXJzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgaGlkZGVuID0gaGlkZGVuR3V0dGVyLCAgLy8vXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoaGlkZGVuU2Nyb2xsYmFycywgZmFuY3lTY3JvbGxiYXJzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxIaWdobGlnaHRzIHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25TY3JvbGw9e3RoaXMuc2Nyb2xsSGFuZGxlcn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSBhY3RpdmUgLz5cblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcbiAgICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXJcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVIaWdobGlnaHRzXCIsXG4gICAgICBcInNjcm9sbEhpZ2hsaWdodHNcIlxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwibm9TY3JvbGxiYXJzXCIsXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImd1dHRlciBoaWdobGlnaHRzLXJpY2gtdGV4dGFyZWFcIjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvOyAgXG5cbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIlByZXR0eVByaW50ZXIiLCJzY3JvbGxIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGxIaWdobGlnaHRzIiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlR3V0dGVyIiwidXBkYXRlSGlnaGxpZ2h0cyIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJoaWRkZW5HdXR0ZXIiLCJmYW5jeVNjcm9sbGJhcnMiLCJoaWRkZW5TY3JvbGxiYXJzIiwiaGlkZGVuIiwiY2hhbmdlSGFuZGxlciIsInNjcm9sbGJhclRoaWNrbmVzcyIsImdldFNjcm9sbGJhclRoaWNrbmVzcyIsIkd1dHRlciIsIkhpZ2hsaWdodHMiLCJSaWNoVGV4dGFyZWEiLCJvblNjcm9sbCIsImFjdGl2ZSIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE4RWIsU0FvQkU7OztlQXBCRixRQW9CRTs7O2tFQWhHb0IsaUJBQWlCO29CQUVSLE1BQU07MkRBRWxCLFVBQVU7K0RBQ04sY0FBYztpRUFDWixnQkFBZ0I7eUJBRUgsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0QsSUFBQSxBQUFNQSxhQUFhLGlCQWtFaEIsQUFsRUg7Y0FBTUEsYUFBYTs4QkFBYkEsYUFBYTthQUFiQSxhQUFhOzhCQUFi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