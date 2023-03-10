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
        '\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto;\n  grid-template-areas: "gutter highlights-rich-textarea";\n  grid-template-columns: min-content auto;  \n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: transparent;\n  font-feature-settings: inherit;\n\n'
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
                var _this_properties = this.properties, editable = _this_properties.editable, onChange = _this_properties.onChange, hiddenGutter = _this_properties.hiddenGutter, fancyScrollbars = _this_properties.fancyScrollbars, hiddenScrollbars = _this_properties.hiddenScrollbars, hidden = hiddenGutter, readOnly = !editable, changeHandler = onChange, scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(hiddenScrollbars, fancyScrollbars);
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
                        readOnly: readOnly
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updatePrettyPrinter = this.update.bind(this); ///
                return _objectSpreadProps(_objectSpread({}, context), {
                    updatePrettyPrinter: updatePrettyPrinter
                });
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
    "editable",
    "hiddenGutter",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
]);
var _default = (0, _easyWithStyle.default)(PrettyPrinter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXIgZnJvbSBcIi4vZ3V0dGVyXCI7XG5pbXBvcnQgSGlnaGxpZ2h0cyBmcm9tIFwiLi9oaWdobGlnaHRzXCI7XG5pbXBvcnQgUmljaFRleHRhcmVhIGZyb20gXCIuL3JpY2hUZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBnZXRTY3JvbGxiYXJUaGlja25lc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvc2Nyb2xsYmFyXCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsR3V0dGVyKHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNjcm9sbEhpZ2hsaWdodHMoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHVwZGF0ZSh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuXG4gICAgdGhpcy51cGRhdGVIaWdobGlnaHRzKHRva2Vucyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZWRpdGFibGUsIG9uQ2hhbmdlLCBoaWRkZW5HdXR0ZXIsIGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGhpZGRlbiA9IGhpZGRlbkd1dHRlciwgIC8vL1xuICAgICAgICAgIHJlYWRPbmx5ID0gIWVkaXRhYmxlLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2Nyb2xsYmFyVGhpY2tuZXNzID0gZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzKGhpZGRlblNjcm9sbGJhcnMsIGZhbmN5U2Nyb2xsYmFycyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEd1dHRlciBoaWRkZW49e2hpZGRlbn0gLz4sXG4gICAgICA8SGlnaGxpZ2h0cyBzY3JvbGxiYXJUaGlja25lc3M9e3Njcm9sbGJhclRoaWNrbmVzc30gLz4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uU2Nyb2xsPXt0aGlzLnNjcm9sbEhhbmRsZXJ9IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBmYW5jeVNjcm9sbGJhcnM9e2ZhbmN5U2Nyb2xsYmFyc30gaGlkZGVuU2Nyb2xsYmFycz17aGlkZGVuU2Nyb2xsYmFyc30gcmVhZE9ubHk9e3JlYWRPbmx5fSAvPlxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXJcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInNjcm9sbEd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVIaWdobGlnaHRzXCIsXG4gICAgICBcInNjcm9sbEhpZ2hsaWdodHNcIlxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJlZGl0YWJsZVwiLFxuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJndXR0ZXIgaGlnaGxpZ2h0cy1yaWNoLXRleHRhcmVhXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bzsgIFxuXG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIlByZXR0eVByaW50ZXIiLCJzY3JvbGxIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxHdXR0ZXIiLCJzY3JvbGxIaWdobGlnaHRzIiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlR3V0dGVyIiwidXBkYXRlSGlnaGxpZ2h0cyIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWRpdGFibGUiLCJvbkNoYW5nZSIsImhpZGRlbkd1dHRlciIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJoaWRkZW4iLCJyZWFkT25seSIsImNoYW5nZUhhbmRsZXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJHdXR0ZXIiLCJIaWdobGlnaHRzIiwiUmljaFRleHRhcmVhIiwib25TY3JvbGwiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRkE7OztlQUFBOzs7a0VBOUVzQjtvQkFFUzsyREFFWjsrREFDSTtpRUFDRTt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsOEJBb0VILEFBcEVIO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztRQUNKQywrQ0FBQUEsaUJBQWdCLFNBQUNDLE9BQU9DLFNBQVk7WUFDbEMsSUFBTUMsZUFBZUQsU0FDZkUsWUFBWUQsYUFBYUUsWUFBWSxJQUNyQ0MsYUFBYUgsYUFBYUksYUFBYTtZQUU3QyxNQUFLQyxZQUFZLENBQUNKLFdBQVdFO1lBRTdCLE1BQUtHLGdCQUFnQixDQUFDTCxXQUFXRTtRQUNuQzs7O2lCQVRJUDs7WUFXSlcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUNDLFlBQVksQ0FBQ0Q7Z0JBRWxCLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNGO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFnRixtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBdkZDLFdBQXdFLGlCQUF4RUEsVUFBVUMsV0FBOEQsaUJBQTlEQSxVQUFVQyxlQUFvRCxpQkFBcERBLGNBQWNDLGtCQUFzQyxpQkFBdENBLGlCQUFpQkMsbUJBQXFCLGlCQUFyQkEsa0JBQ3JEQyxTQUFTSCxjQUNUSSxXQUFXLENBQUNOLFVBQ1pPLGdCQUFnQk4sVUFDaEJPLHFCQUFxQkMsSUFBQUEsZ0NBQXFCLEVBQUNMLGtCQUFrQkQ7Z0JBRW5FLE9BQVE7a0NBRU4sMEJBQUNPLGVBQU07d0JBQUNMLFFBQVFBOztrQ0FDaEIsMEJBQUNNLG1CQUFVO3dCQUFDSCxvQkFBb0JBOztrQ0FDaEMsMEJBQUNJLHFCQUFZO3dCQUFDQyxVQUFVLElBQUksQ0FBQzdCLGFBQWE7d0JBQUVpQixVQUFVTTt3QkFBZUosaUJBQWlCQTt3QkFBaUJDLGtCQUFrQkE7d0JBQWtCRSxVQUFVQTs7aUJBRXRKO1lBQ0g7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxzQkFBc0IsSUFBSSxDQUFDdkIsTUFBTSxDQUFDd0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV2RCxPQUFRLHFDQUNISDtvQkFDSEUscUJBQUFBOztZQUVKOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhLENBQUM7b0JBQ2pCO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO1lBQ0g7OztXQWxESXJDO21CQUFzQnNDLGFBQU87QUFvRGpDLGdCQXBESXRDLGVBb0RHdUMsV0FBVTtBQUVqQixnQkF0REl2QyxlQXNER3dDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBRUEsZ0JBMURJekMsZUEwREcwQyxxQkFBb0I7SUFDekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7SUFHSCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDM0MifQ==