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
var _gutter = /*#__PURE__*/ _interop_require_default(require("./div/gutter"));
var _overlay = /*#__PURE__*/ _interop_require_default(require("./div/overlay"));
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
        '\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  overflow: hidden;\n  grid-template-rows: auto;\n  grid-template-areas: "gutter overlay-rich-textarea";\n  grid-template-columns: min-content auto;  \n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: transparent;\n  font-feature-settings: inherit;\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PrettyPrinter = /*#__PURE__*/ function(Element) {
    _inherits(PrettyPrinter, Element);
    var _super = _create_super(PrettyPrinter);
    function PrettyPrinter() {
        _class_call_check(this, PrettyPrinter);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "scrollHandler", function(event, element) {
            var richTextarea = element, scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
            _this.scrollGutterDiv(scrollTop, scrollLeft);
            _this.scrollOverlayDiv(scrollTop, scrollLeft);
        });
        return _this;
    }
    _create_class(PrettyPrinter, [
        {
            key: "update",
            value: function update(tokens) {
                this.updateGutterDiv(tokens);
                this.updateOverlayDiv(tokens);
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
                    /*#__PURE__*/ _easy.React.createElement(_overlay.default, {
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
                    "updateOverlayDiv",
                    "scrollOverlayDiv"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBHdXR0ZXJEaXYgZnJvbSBcIi4vZGl2L2d1dHRlclwiO1xuaW1wb3J0IE92ZXJsYXlEaXYgZnJvbSBcIi4vZGl2L292ZXJsYXlcIjtcbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5cbmltcG9ydCB7IGdldFNjcm9sbGJhclRoaWNrbmVzcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zY3JvbGxiYXJcIjtcblxuY2xhc3MgUHJldHR5UHJpbnRlciBleHRlbmRzIEVsZW1lbnQge1xuICBzY3JvbGxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgc2Nyb2xsVG9wID0gcmljaFRleHRhcmVhLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgdGhpcy5zY3JvbGxHdXR0ZXJEaXYoc2Nyb2xsVG9wICxzY3JvbGxMZWZ0KTtcblxuICAgIHRoaXMuc2Nyb2xsT3ZlcmxheURpdihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlR3V0dGVyRGl2KHRva2Vucyk7XG5cbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlEaXYodG9rZW5zKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBlZGl0YWJsZSwgb25DaGFuZ2UsIGhpZGRlbkd1dHRlciwgZmFuY3lTY3JvbGxiYXJzLCBoaWRkZW5TY3JvbGxiYXJzIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgaGlkZGVuID0gaGlkZGVuR3V0dGVyLCAgLy8vXG4gICAgICAgICAgcmVhZE9ubHkgPSAhZWRpdGFibGUsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlLCAvLy9cbiAgICAgICAgICBzY3JvbGxiYXJUaGlja25lc3MgPSBnZXRTY3JvbGxiYXJUaGlja25lc3MoaGlkZGVuU2Nyb2xsYmFycywgZmFuY3lTY3JvbGxiYXJzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyRGl2IGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxPdmVybGF5RGl2IHNjcm9sbGJhclRoaWNrbmVzcz17c2Nyb2xsYmFyVGhpY2tuZXNzfSAvPixcbiAgICAgIDxSaWNoVGV4dGFyZWEgb25TY3JvbGw9e3RoaXMuc2Nyb2xsSGFuZGxlcn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGZhbmN5U2Nyb2xsYmFycz17ZmFuY3lTY3JvbGxiYXJzfSBoaWRkZW5TY3JvbGxiYXJzPXtoaWRkZW5TY3JvbGxiYXJzfSByZWFkT25seT17cmVhZE9ubHl9IC8+XG5cbiAgICBdKTtcbiAgfVxuICBcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgdXBkYXRlUHJldHR5UHJpbnRlclxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJ1cGRhdGVHdXR0ZXJEaXZcIixcbiAgICAgIFwic2Nyb2xsR3V0dGVyRGl2XCIsXG4gICAgICBcInVwZGF0ZU92ZXJsYXlEaXZcIixcbiAgICAgIFwic2Nyb2xsT3ZlcmxheURpdlwiXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIixcbiAgICBcImVkaXRhYmxlXCIsXG4gICAgXCJoaWRkZW5HdXR0ZXJcIixcbiAgICBcIm5vU2Nyb2xsYmFyc1wiLFxuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJndXR0ZXIgb3ZlcmxheS1yaWNoLXRleHRhcmVhXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgYXV0bzsgIFxuXG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIlByZXR0eVByaW50ZXIiLCJzY3JvbGxIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxHdXR0ZXJEaXYiLCJzY3JvbGxPdmVybGF5RGl2IiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlR3V0dGVyRGl2IiwidXBkYXRlT3ZlcmxheURpdiIsImNoaWxkRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWRpdGFibGUiLCJvbkNoYW5nZSIsImhpZGRlbkd1dHRlciIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJoaWRkZW4iLCJyZWFkT25seSIsImNoYW5nZUhhbmRsZXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJnZXRTY3JvbGxiYXJUaGlja25lc3MiLCJHdXR0ZXJEaXYiLCJPdmVybGF5RGl2IiwiUmljaFRleHRhcmVhIiwib25TY3JvbGwiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVQcmV0dHlQcmludGVyIiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErRUE7OztlQUFBOzs7b0VBN0VzQjtvQkFFUzs2REFFVDs4REFDQzttRUFDRTt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFBLEFBQU1BLDhCQW1FSCxBQW5FSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGlCQUFnQixTQUFDQyxPQUFPQztZQUN0QixJQUFNQyxlQUFlRCxTQUNmRSxZQUFZRCxhQUFhRSxZQUFZLElBQ3JDQyxhQUFhSCxhQUFhSSxhQUFhO1lBRTdDLE1BQUtDLGVBQWUsQ0FBQ0osV0FBV0U7WUFFaEMsTUFBS0csZ0JBQWdCLENBQUNMLFdBQVdFO1FBQ25DOzs7a0JBVElQOztZQVdKVyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFJLENBQUNDLGVBQWUsQ0FBQ0Q7Z0JBRXJCLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNGO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQWdGLG1CQUFBLElBQUksQ0FBQ0MsVUFBVSxFQUF2RkMsV0FBd0UsaUJBQXhFQSxVQUFVQyxXQUE4RCxpQkFBOURBLFVBQVVDLGVBQW9ELGlCQUFwREEsY0FBY0Msa0JBQXNDLGlCQUF0Q0EsaUJBQWlCQyxtQkFBcUIsaUJBQXJCQSxrQkFDckRDLFNBQVNILGNBQ1RJLFdBQVcsQ0FBQ04sVUFDWk8sZ0JBQWdCTixVQUNoQk8scUJBQXFCQyxJQUFBQSxnQ0FBcUIsRUFBQ0wsa0JBQWtCRDtnQkFFbkUsT0FBUTtrQ0FFTiwwQkFBQ08sZUFBUzt3QkFBQ0wsUUFBUUE7O2tDQUNuQiwwQkFBQ00sZ0JBQVU7d0JBQUNILG9CQUFvQkE7O2tDQUNoQywwQkFBQ0kscUJBQVk7d0JBQUNDLFVBQVUsSUFBSSxDQUFDN0IsYUFBYTt3QkFBRWlCLFVBQVVNO3dCQUFlSixpQkFBaUJBO3dCQUFpQkMsa0JBQWtCQTt3QkFBa0JFLFVBQVVBOztpQkFFdEo7WUFDSDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsc0JBQXNCLElBQUksQ0FBQ3ZCLE1BQU0sQ0FBQ3dCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFdkQsT0FBUSx3Q0FDSEg7b0JBQ0hFLHFCQUFBQTs7WUFFSjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWEsQ0FBQztvQkFDakI7b0JBQ0E7b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDs7O1dBbERJckM7cUJBQXNCc0MsYUFBTztBQW9EakMsaUJBcERJdEMsZUFvREd1QyxXQUFVO0FBRWpCLGlCQXRESXZDLGVBc0RHd0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFFQSxpQkExREl6QyxlQTBERzBDLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7SUFHSCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDM0MifQ==