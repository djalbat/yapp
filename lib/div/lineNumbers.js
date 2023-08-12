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
var _constants = require("../constants");
var _tokens = require("../utilities/tokens");
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
        "\n\n  margin: 0 6px 0 6px;\n  position: relative;\n  text-align: right;\n  user-select: none;\n  pointer-events: none;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;\n  font-weight: normal;\n  caret-color: initial;\n  border-color: initial;\n  text-rendering: initial;\n  background-color: initial;\n  font-feature-settings: initial;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LineNumbersDiv = /*#__PURE__*/ function(Element) {
    _inherits(LineNumbersDiv, Element);
    var _super = _create_super(LineNumbersDiv);
    function LineNumbersDiv() {
        _class_call_check(this, LineNumbersDiv);
        return _super.apply(this, arguments);
    }
    _create_class(LineNumbersDiv, [
        {
            key: "update",
            value: function update(tokens) {
                var html = _constants.EMPTY_STRING;
                var lineCount = (0, _tokens.lineCountFromTokens)(tokens);
                for(var lineNumber = 1; lineNumber <= lineCount; lineNumber++){
                    html = "".concat(html).concat(lineNumber, "<br/>");
                }
                this.html(html);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                var top = "".concat(-scrollTop, "px"), css = {
                    top: top
                };
                this.css(css);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var scrollLineNumbersDiv = this.scroll.bind(this), updateLineNumbersDiv = this.update.bind(this); ///
                return {
                    scrollLineNumbersDiv: scrollLineNumbersDiv,
                    updateLineNumbersDiv: updateLineNumbersDiv
                };
            }
        }
    ]);
    return LineNumbersDiv;
}(_wrap_native_super(_easy.Element));
_define_property(LineNumbersDiv, "tagName", "div");
_define_property(LineNumbersDiv, "defaultProperties", {
    className: "line-numbers"
});
var _default = (0, _easywithstyle.default)(LineNumbersDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvbGluZU51bWJlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Ub2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcclxuXHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgZm9yIChsZXQgbGluZU51bWJlciA9IDE7IGxpbmVOdW1iZXIgPD0gbGluZUNvdW50OyBsaW5lTnVtYmVyKyspIHtcclxuICAgICAgaHRtbCA9IGAke2h0bWx9JHtsaW5lTnVtYmVyfTxici8+YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2Nyb2xsTGluZU51bWJlcnNEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHVwZGF0ZUxpbmVOdW1iZXJzRGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBzY3JvbGxMaW5lTnVtYmVyc0RpdixcclxuICAgICAgdXBkYXRlTGluZU51bWJlcnNEaXZcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwibGluZS1udW1iZXJzXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGluZU51bWJlcnNEaXYpYFxyXG5cclxuICBtYXJnaW46IDAgNnB4IDAgNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiAnRGVqYVZ1IFNhbnMgTW9ubycsIE1lbmxvLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNhcmV0LWNvbG9yOiBpbml0aWFsO1xyXG4gIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5pdGlhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5pdGlhbDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJMaW5lTnVtYmVyc0RpdiIsInVwZGF0ZSIsInRva2VucyIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tVG9rZW5zIiwibGluZU51bWJlciIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ0b3AiLCJjc3MiLCJwYXJlbnRDb250ZXh0Iiwic2Nyb2xsTGluZU51bWJlcnNEaXYiLCJiaW5kIiwidXBkYXRlTGluZU51bWJlcnNEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnREE7OztlQUFBOzs7b0VBOUNzQjtvQkFFRTt5QkFFSztzQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFBLEFBQU1BLCtCQXVDTCxBQXZDRDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFJQyxPQUFPQyx1QkFBWTtnQkFFdkIsSUFBTUMsWUFBWUMsSUFBQUEsMkJBQW1CLEVBQUNKO2dCQUV0QyxJQUFLLElBQUlLLGFBQWEsR0FBR0EsY0FBY0YsV0FBV0UsYUFBYztvQkFDOURKLE9BQU8sQUFBQyxHQUFTSSxPQUFQSixNQUFrQixPQUFYSSxZQUFXO2dCQUM5QjtnQkFFQSxJQUFJLENBQUNKLElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxTQUFTLEVBQUVDLFVBQVU7Z0JBQzFCLElBQU1DLE1BQU0sQUFBQyxHQUFhLE9BQVgsQ0FBQ0YsV0FBVSxPQUNwQkcsTUFBTTtvQkFDSkQsS0FBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUMzQ0MsdUJBQXVCLElBQUksQ0FBQ2YsTUFBTSxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXpELE9BQVE7b0JBQ05ELHNCQUFBQTtvQkFDQUUsc0JBQUFBO2dCQUNGO1lBQ0Y7OztXQTlCSWhCO3FCQUF1QmlCLGFBQU87QUFnQ2xDLGlCQWhDSWpCLGdCQWdDR2tCLFdBQVU7QUFFakIsaUJBbENJbEIsZ0JBa0NHbUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDckIifQ==