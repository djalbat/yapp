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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easyrichtextarea = require("easy-richtextarea");
var _gutter = /*#__PURE__*/ _interop_require_default(require("./div/gutter"));
var _pretty = /*#__PURE__*/ _interop_require_default(require("./div/pretty"));
var _richTextarea = /*#__PURE__*/ _interop_require_default(require("./richTextarea"));
var _scrollbar = require("./utilities/scrollbar");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
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
function _object_spread_props(target, source) {
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto;\n  grid-template-areas: "gutter pretty-richtextarea";\n  grid-template-columns: min-content auto;  \n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CHANGE_CUSTOM_EVENT_TYPE = _easyrichtextarea.customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
var PrettyPrinter = /*#__PURE__*/ function(Element) {
    _inherits(PrettyPrinter, Element);
    var _super = _create_super(PrettyPrinter);
    function PrettyPrinter() {
        _class_call_check(this, PrettyPrinter);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeCustomHandler", function(event, element) {
            var customEventType = CHANGE_CUSTOM_EVENT_TYPE; ///
            _this.callCustomHandlers(customEventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "scrollCustomHandler", function(event, element) {
            var richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
            _this.scrollGutterDiv(scrollTop, scrollLeft);
            _this.scrollPrettyDiv(scrollTop, scrollLeft);
        });
        return _this;
    }
    _create_class(PrettyPrinter, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateGutterDiv(tokens);
                this.updatePrettyDiv(tokens);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this_properties = this.properties, editable = _this_properties.editable, hiddenGutter = _this_properties.hiddenGutter, fancyScrollbars = _this_properties.fancyScrollbars, hiddenScrollbars = _this_properties.hiddenScrollbars, scrollbarThickness = (0, _scrollbar.getScrollbarThickness)(hiddenScrollbars, fancyScrollbars), readOnly = !editable, hidden = hiddenGutter; ///
                return [
                    /*#__PURE__*/ _easy.React.createElement(_gutter.default, {
                        hidden: hidden
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_pretty.default, {
                        scrollbarThickness: scrollbarThickness
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_richTextarea.default, {
                        readOnly: readOnly,
                        fancyScrollbars: fancyScrollbars,
                        hiddenScrollbars: hiddenScrollbars,
                        onCustomChange: this.changeCustomHandler,
                        onCustomScroll: this.scrollCustomHandler
                    })
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), updatePrettyPrinter = this.update.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    updatePrettyPrinter: updatePrettyPrinter
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "updateGutterDiv",
                    "scrollGutterDiv",
                    "updatePrettyDiv",
                    "scrollPrettyDiv"
                ]);
            }
        }
    ]);
    return PrettyPrinter;
}(_wrap_native_super(_easy.Element));
_define_property(PrettyPrinter, "tagName", "div");
_define_property(PrettyPrinter, "defaultProperties", {
    className: "pretty-printer"
});
_define_property(PrettyPrinter, "ignoredProperties", [
    "onChange",
    "editable",
    "hiddenGutter",
    "noScrollbars",
    "fancyScrollbars"
]);
var _default = (0, _easywithstyle.default)(PrettyPrinter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjdXN0b21FdmVudFR5cGVzICB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuXG5pbXBvcnQgR3V0dGVyRGl2IGZyb20gXCIuL2Rpdi9ndXR0ZXJcIjtcbmltcG9ydCBQcmV0dHlEaXYgZnJvbSBcIi4vZGl2L3ByZXR0eVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclwiO1xuXG5jb25zdCB7IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9ID0gY3VzdG9tRXZlbnRUeXBlcztcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFOyAvLy9cblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgc2Nyb2xsQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsR3V0dGVyRGl2KHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eURpdihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlR3V0dGVyRGl2KHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVQcmV0dHlEaXYodG9rZW5zKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBlZGl0YWJsZSwgaGlkZGVuR3V0dGVyLCBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoaGlkZGVuU2Nyb2xsYmFycywgZmFuY3lTY3JvbGxiYXJzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyRGl2IGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxQcmV0dHlEaXYgc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZT17dGhpcy5jaGFuZ2VDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVNjcm9sbD17dGhpcy5zY3JvbGxDdXN0b21IYW5kbGVyfVxuICAgICAgLz5cblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICB1cGRhdGVQcmV0dHlQcmludGVyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcInVwZGF0ZUd1dHRlckRpdlwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJEaXZcIixcbiAgICAgIFwidXBkYXRlUHJldHR5RGl2XCIsXG4gICAgICBcInNjcm9sbFByZXR0eURpdlwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJndXR0ZXIgcHJldHR5LXJpY2h0ZXh0YXJlYVwiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87ICBcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tRXZlbnRUeXBlcyIsIlByZXR0eVByaW50ZXIiLCJjaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic2Nyb2xsQ3VzdG9tSGFuZGxlciIsInJpY2hUZXh0YXJlYSIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsR3V0dGVyRGl2Iiwic2Nyb2xsUHJldHR5RGl2IiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlR3V0dGVyRGl2IiwidXBkYXRlUHJldHR5RGl2IiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJlZGl0YWJsZSIsImhpZGRlbkd1dHRlciIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJyZWFkT25seSIsImhpZGRlbiIsIkd1dHRlckRpdiIsIlByZXR0eURpdiIsIlJpY2hUZXh0YXJlYSIsIm9uQ3VzdG9tQ2hhbmdlIiwib25DdXN0b21TY3JvbGwiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkZBOzs7ZUFBQTs7O29FQXpGc0I7b0JBRVM7Z0NBQ0c7NkRBRVo7NkRBQ0E7bUVBQ0c7eUJBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTSxBQUFFQSwyQkFBNkJDLGtDQUFnQixDQUE3Q0Q7QUFFUixJQUFBLEFBQU1FLDhCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSx1QkFBc0IsU0FBQ0MsT0FBT0M7WUFDNUIsSUFBTUMsa0JBQWtCTiwwQkFBMEIsR0FBRztZQUVyRCxNQUFLTyxrQkFBa0IsQ0FBQ0QsaUJBQWlCRixPQUFPQztRQUNsRDtRQUVBRyxrREFBQUEsdUJBQXNCLFNBQUNKLE9BQU9DO1lBQzVCLElBQU1JLGVBQWVKLFNBQ2ZLLFlBQVlELGFBQWFFLFlBQVksSUFDckNDLGFBQWFILGFBQWFJLGFBQWE7WUFFN0MsTUFBS0MsZUFBZSxDQUFDSixXQUFXRTtZQUVoQyxNQUFLRyxlQUFlLENBQUNMLFdBQVdFO1FBQ2xDOzs7a0JBZklWOztZQWlCSmMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBSSxDQUFDQyxlQUFlLENBQUNEO2dCQUNyQixJQUFJLENBQUNFLGVBQWUsQ0FBQ0Y7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBc0UsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLEVBQTdFQyxXQUE4RCxpQkFBOURBLFVBQVVDLGVBQW9ELGlCQUFwREEsY0FBY0Msa0JBQXNDLGlCQUF0Q0EsaUJBQWlCQyxtQkFBcUIsaUJBQXJCQSxrQkFDM0NDLHFCQUFxQkMsSUFBQUEsZ0NBQXFCLEVBQUNGLGtCQUFrQkQsa0JBQzdESSxXQUFXLENBQUNOLFVBQ1pPLFNBQVNOLGNBQWUsR0FBRztnQkFFakMsT0FBUTtrQ0FFTiwwQkFBQ08sZUFBUzt3QkFBQ0QsUUFBUUE7O2tDQUNuQiwwQkFBQ0UsZUFBUzt3QkFBQ0wsb0JBQW9CQTs7a0NBQy9CLDBCQUFDTSxxQkFBWTt3QkFBQ0osVUFBVUE7d0JBQ1ZKLGlCQUFpQkE7d0JBQ2pCQyxrQkFBa0JBO3dCQUNsQlEsZ0JBQWdCLElBQUksQ0FBQzlCLG1CQUFtQjt3QkFDeEMrQixnQkFBZ0IsSUFBSSxDQUFDMUIsbUJBQW1COztpQkFHdkQ7WUFDSDs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLHNCQUFzQixJQUFJLENBQUN0QixNQUFNLENBQUN1QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXZELE9BQVEsd0NBQ0hIO29CQUNIRSxxQkFBQUE7O1lBRUo7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhLENBQUM7b0JBQ2pCO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO1lBQ0g7OztXQTNESXZDO3FCQUFzQndDLGFBQU87QUE2RGpDLGlCQTdESXhDLGVBNkRHeUMsV0FBVTtBQUVqQixpQkEvREl6QyxlQStERzBDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBRUEsaUJBbkVJM0MsZUFtRUc0QyxxQkFBb0I7SUFDekI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0lBR0gsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzdDIn0=