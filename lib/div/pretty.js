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
var _syntax = /*#__PURE__*/ _interop_require_default(require("../div/syntax"));
var _constants = require("../constants");
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
        "\n\n  z-index: 0;\n  width: auto;\n  height: auto;\n  overflow: hidden;\n  position: relative;\n  grid-area: pretty-richtextarea;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PrettyDiv = /*#__PURE__*/ function(Element) {
    _inherits(PrettyDiv, Element);
    var _super = _create_super(PrettyDiv);
    function PrettyDiv() {
        _class_call_check(this, PrettyDiv);
        return _super.apply(this, arguments);
    }
    _create_class(PrettyDiv, [
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
                var context = this.getContext(), updatePrettyDiv = this.update.bind(this), scrollPrettyDiv = this.scroll.bind(this); ///
                return _object_spread_props(_object_spread({}, context), {
                    updatePrettyDiv: updatePrettyDiv,
                    scrollPrettyDiv: scrollPrettyDiv
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
    return PrettyDiv;
}(_wrap_native_super(_easy.Element));
_define_property(PrettyDiv, "tagName", "div");
_define_property(PrettyDiv, "ignoredProperties", [
    "scrollbarThickness"
]);
_define_property(PrettyDiv, "defaultProperties", {
    className: "pretty"
});
var _default = (0, _easywithstyle.default)(PrettyDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvcHJldHR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFN5bnRheERpdiBmcm9tIFwiLi4vZGl2L3N5bnRheFwiO1xyXG5cclxuaW1wb3J0IHsgTUFSR0lOX1JJR0hULCBNQVJHSU5fQk9UVE9NIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgUHJldHR5RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgdGhpcy51cGRhdGVTeW50YXhEaXYodG9rZW5zKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIHRoaXMuc2Nyb2xsU3ludGF4RGl2KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodCA9IGAke3Njcm9sbGJhclRoaWNrbmVzc31weGAsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBgJHtzY3JvbGxiYXJUaGlja25lc3N9cHhgO1xyXG5cclxuICAgIHRoaXMuc3R5bGUoTUFSR0lOX1JJR0hULCBtYXJnaW5SaWdodCk7XHJcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9CT1RUT00sIG1hcmdpbkJvdHRvbSk7XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgY2hpbGRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICA8U3ludGF4RGl2Lz5cclxuXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcclxuICAgICAgICAgIHVwZGF0ZVByZXR0eURpdiA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFByZXR0eURpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgLi4uY29udGV4dCxcclxuICAgICAgdXBkYXRlUHJldHR5RGl2LFxyXG4gICAgICBzY3JvbGxQcmV0dHlEaXZcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dChbXHJcbiAgICAgIFwidXBkYXRlU3ludGF4RGl2XCIsXHJcbiAgICAgIFwic2Nyb2xsU3ludGF4RGl2XCJcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInByZXR0eVwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eURpdilgXHJcblxyXG4gIHotaW5kZXg6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGdyaWQtYXJlYTogcHJldHR5LXJpY2h0ZXh0YXJlYTtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJQcmV0dHlEaXYiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJ1cGRhdGVTeW50YXhEaXYiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsU3ludGF4RGl2IiwiZGlkTW91bnQiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJwcm9wZXJ0aWVzIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJzdHlsZSIsIk1BUkdJTl9SSUdIVCIsIk1BUkdJTl9CT1RUT00iLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJTeW50YXhEaXYiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ1cGRhdGVQcmV0dHlEaXYiLCJiaW5kIiwic2Nyb2xsUHJldHR5RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNFQTs7O2VBQUE7OztvRUFwRXNCO29CQUVFOzZEQUVGO3lCQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLDBCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBSSxDQUFDQyxlQUFlLENBQUNEO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFNBQVMsRUFBRUMsVUFBVTtnQkFDMUIsSUFBSSxDQUFDQyxlQUFlLENBQUNGLFdBQVdDO1lBQ2xDOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMscUJBQXVCLElBQUksQ0FBQ0MsVUFBVSxDQUF0Q0Qsb0JBQ0ZFLGNBQWMsQUFBQyxHQUFxQixPQUFuQkYsb0JBQW1CLE9BQ3BDRyxlQUFlLEFBQUMsR0FBcUIsT0FBbkJILG9CQUFtQjtnQkFFM0MsSUFBSSxDQUFDSSxLQUFLLENBQUNDLHVCQUFZLEVBQUVIO2dCQUN6QixJQUFJLENBQUNFLEtBQUssQ0FBQ0Usd0JBQWEsRUFBRUg7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLGVBQVM7WUFHZDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDQyxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN4QkMsa0JBQWtCLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ3NCLElBQUksQ0FBQyxJQUFJLEdBQzNDQyxrQkFBa0IsSUFBSSxDQUFDcEIsTUFBTSxDQUFDbUIsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVoRCxPQUFRLHdDQUNISDtvQkFDSEUsaUJBQUFBO29CQUNBRSxpQkFBQUE7O1lBRUo7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhLENBQUM7b0JBQ2pCO29CQUNBO2lCQUNEO1lBQ0g7OztXQS9DSTFCO3FCQUFrQjJCLGFBQU87QUFpRDdCLGlCQWpESTNCLFdBaURHNEIsV0FBVTtBQUVqQixpQkFuREk1QixXQW1ERzZCLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBdkRJN0IsV0F1REc4QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNoQyJ9