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
        '\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto;\n  grid-template-areas: "gutter pretty-rich-textarea";\n  grid-template-columns: min-content auto;  \n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n'
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
        _define_property(_assert_this_initialized(_this), "customChangeHandler", function(event, element) {
            var customEventType = CHANGE_CUSTOM_EVENT_TYPE; ///
            _this.callCustomHandlers(customEventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "customScrollHandler", function(event, element) {
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
                        onCustomChange: this.customChangeHandler,
                        onCustomScroll: this.customScrollHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjdXN0b21FdmVudFR5cGVzICB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuXG5pbXBvcnQgR3V0dGVyRGl2IGZyb20gXCIuL2Rpdi9ndXR0ZXJcIjtcbmltcG9ydCBQcmV0dHlEaXYgZnJvbSBcIi4vZGl2L3ByZXR0eVwiO1xuaW1wb3J0IFJpY2hUZXh0YXJlYSBmcm9tIFwiLi9yaWNoVGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Njcm9sbGJhclwiO1xuXG5jb25zdCB7IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9ID0gY3VzdG9tRXZlbnRUeXBlcztcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjdXN0b21DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFOyAvLy9cblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgY3VzdG9tU2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcmljaFRleHRhcmVhLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRoaXMuc2Nyb2xsR3V0dGVyRGl2KHNjcm9sbFRvcCAsc2Nyb2xsTGVmdCk7XG5cbiAgICB0aGlzLnNjcm9sbFByZXR0eURpdihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlR3V0dGVyRGl2KHRva2Vucyk7XG4gICAgdGhpcy51cGRhdGVQcmV0dHlEaXYodG9rZW5zKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBlZGl0YWJsZSwgaGlkZGVuR3V0dGVyLCBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoaGlkZGVuU2Nyb2xsYmFycywgZmFuY3lTY3JvbGxiYXJzKSxcbiAgICAgICAgICByZWFkT25seSA9ICFlZGl0YWJsZSxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyRGl2IGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxQcmV0dHlEaXYgc2Nyb2xsYmFyVGhpY2tuZXNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuICAgICAgPFJpY2hUZXh0YXJlYSByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICAgIGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZT17dGhpcy5jdXN0b21DaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVNjcm9sbD17dGhpcy5jdXN0b21TY3JvbGxIYW5kbGVyfVxuICAgICAgLz5cblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIC4uLmNvbnRleHQsXG4gICAgICB1cGRhdGVQcmV0dHlQcmludGVyXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXG4gICAgICBcInVwZGF0ZUd1dHRlckRpdlwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJEaXZcIixcbiAgICAgIFwidXBkYXRlUHJldHR5RGl2XCIsXG4gICAgICBcInNjcm9sbFByZXR0eURpdlwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJndXR0ZXIgcHJldHR5LXJpY2gtdGV4dGFyZWFcIjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvOyAgXG5cbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUV2ZW50VHlwZXMiLCJQcmV0dHlQcmludGVyIiwiY3VzdG9tQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsImNhbGxDdXN0b21IYW5kbGVycyIsImN1c3RvbVNjcm9sbEhhbmRsZXIiLCJyaWNoVGV4dGFyZWEiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlckRpdiIsInNjcm9sbFByZXR0eURpdiIsInVwZGF0ZSIsInRva2VucyIsInVwZGF0ZUd1dHRlckRpdiIsInVwZGF0ZVByZXR0eURpdiIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWRpdGFibGUiLCJoaWRkZW5HdXR0ZXIiLCJmYW5jeVNjcm9sbGJhcnMiLCJoaWRkZW5TY3JvbGxiYXJzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiZ2V0U2Nyb2xsYmFyVGhpY2tuZXNzIiwicmVhZE9ubHkiLCJoaWRkZW4iLCJHdXR0ZXJEaXYiLCJQcmV0dHlEaXYiLCJSaWNoVGV4dGFyZWEiLCJvbkN1c3RvbUNoYW5nZSIsIm9uQ3VzdG9tU2Nyb2xsIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlUHJldHR5UHJpbnRlciIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJGQTs7O2VBQUE7OztvRUF6RnNCO29CQUVTO2dDQUNHOzZEQUVaOzZEQUNBO21FQUNHO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUEsMkJBQTZCQyxrQ0FBZ0IsQ0FBN0NEO0FBRVIsSUFBQSxBQUFNRSw4QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsdUJBQXNCLFNBQUNDLE9BQU9DO1lBQzVCLElBQU1DLGtCQUFrQk4sMEJBQTBCLEdBQUc7WUFFckQsTUFBS08sa0JBQWtCLENBQUNELGlCQUFpQkYsT0FBT0M7UUFDbEQ7UUFFQUcsa0RBQUFBLHVCQUFzQixTQUFDSixPQUFPQztZQUM1QixJQUFNSSxlQUFlSixTQUNmSyxZQUFZRCxhQUFhRSxZQUFZLElBQ3JDQyxhQUFhSCxhQUFhSSxhQUFhO1lBRTdDLE1BQUtDLGVBQWUsQ0FBQ0osV0FBV0U7WUFFaEMsTUFBS0csZUFBZSxDQUFDTCxXQUFXRTtRQUNsQzs7O2tCQWZJVjs7WUFpQkpjLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQUksQ0FBQ0MsZUFBZSxDQUFDRDtnQkFDckIsSUFBSSxDQUFDRSxlQUFlLENBQUNGO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQXNFLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUE3RUMsV0FBOEQsaUJBQTlEQSxVQUFVQyxlQUFvRCxpQkFBcERBLGNBQWNDLGtCQUFzQyxpQkFBdENBLGlCQUFpQkMsbUJBQXFCLGlCQUFyQkEsa0JBQzNDQyxxQkFBcUJDLElBQUFBLGdDQUFxQixFQUFDRixrQkFBa0JELGtCQUM3REksV0FBVyxDQUFDTixVQUNaTyxTQUFTTixjQUFlLEdBQUc7Z0JBRWpDLE9BQVE7a0NBRU4sMEJBQUNPLGVBQVM7d0JBQUNELFFBQVFBOztrQ0FDbkIsMEJBQUNFLGVBQVM7d0JBQUNMLG9CQUFvQkE7O2tDQUMvQiwwQkFBQ00scUJBQVk7d0JBQUNKLFVBQVVBO3dCQUNWSixpQkFBaUJBO3dCQUNqQkMsa0JBQWtCQTt3QkFDbEJRLGdCQUFnQixJQUFJLENBQUM5QixtQkFBbUI7d0JBQ3hDK0IsZ0JBQWdCLElBQUksQ0FBQzFCLG1CQUFtQjs7aUJBR3ZEO1lBQ0g7OztZQUVBMkIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxzQkFBc0IsSUFBSSxDQUFDdEIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV2RCxPQUFRLHdDQUNISDtvQkFDSEUscUJBQUFBOztZQUVKOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYSxDQUFDO29CQUNqQjtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIOzs7V0EzREl2QztxQkFBc0J3QyxhQUFPO0FBNkRqQyxpQkE3REl4QyxlQTZER3lDLFdBQVU7QUFFakIsaUJBL0RJekMsZUErREcwQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUVBLGlCQW5FSTNDLGVBbUVHNEMscUJBQW9CO0lBQ3pCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtJQUdILFdBQWVDLElBQUFBLHNCQUFTLEVBQUM3QyJ9