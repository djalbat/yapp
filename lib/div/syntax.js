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
var _token = require("../utilities/token");
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
        "\n\n  position: relative;\n  white-space: pre;\n  user-select: none;\n  pointer-events: none;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SyntaxDiv = /*#__PURE__*/ function(Element) {
    _inherits(SyntaxDiv, Element);
    var _super = _create_super(SyntaxDiv);
    function SyntaxDiv() {
        _class_call_check(this, SyntaxDiv);
        return _super.apply(this, arguments);
    }
    _create_class(SyntaxDiv, [
        {
            key: "setLanguage",
            value: function setLanguage(language) {
                var state = {
                    language: language
                };
                this.removeLanguageClass();
                this.updateState(state);
                this.addLanguageClass();
            }
        },
        {
            key: "addLanguageClass",
            value: function addLanguageClass() {
                var language = this.getState().language;
                if (language !== null) {
                    var languageClass = language; ///
                    this.addClass(languageClass);
                }
            }
        },
        {
            key: "removeLanguageClass",
            value: function removeLanguageClass() {
                var language = this.getState().language;
                if (language !== null) {
                    var languageClass = language; ///
                    this.removeClass(languageClass);
                }
            }
        },
        {
            key: "update",
            value: function update(tokens) {
                var html = tokens.reduce(function(html, token) {
                    var tokenHTML = (0, _token.tokenAsHTML)(token);
                    html += tokenHTML;
                    return html;
                }, _constants.EMPTY_STRING);
                this.html(html);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                var top = "".concat(-scrollTop, "px"), left = "".concat(-scrollLeft, "px"), css = {
                    top: top,
                    left: left
                };
                this.css(css);
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var language = null;
                this.setState({
                    language: language
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setLanguage = this.setLanguage.bind(this), updateSyntaxDiv = this.update.bind(this), scrollSyntaxDiv = this.scroll.bind(this); ///
                return {
                    setLanguage: setLanguage,
                    updateSyntaxDiv: updateSyntaxDiv,
                    scrollSyntaxDiv: scrollSyntaxDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return SyntaxDiv;
}(_wrap_native_super(_easy.Element));
_define_property(SyntaxDiv, "tagName", "div");
_define_property(SyntaxDiv, "defaultProperties", {
    className: "syntax"
});
var _default = (0, _easywithstyle.default)(SyntaxDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IHsgdG9rZW5Bc0hUTUwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2VuXCI7XHJcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIFN5bnRheERpdiBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW1vdmVMYW5ndWFnZUNsYXNzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgdGhpcy5hZGRMYW5ndWFnZUNsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRMYW5ndWFnZUNsYXNzKCkge1xyXG4gICAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIGlmIChsYW5ndWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZ3VhZ2U7IC8vL1xyXG5cclxuICAgICAgdGhpcy5hZGRDbGFzcyhsYW5ndWFnZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGxhbmd1YWdlIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7IC8vL1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbkFzSFRNTCh0b2tlbik7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGxlZnQgPSBgJHstc2Nyb2xsTGVmdH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgbGVmdFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2V0TGFuZ3VhZ2UgPSB0aGlzLnNldExhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXhEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheERpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheERpdixcclxuICAgICAgc2Nyb2xsU3ludGF4RGl2XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4RGl2KWBcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiU3ludGF4RGl2Iiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJ0b2tlbkFzSFRNTCIsIkVNUFRZX1NUUklORyIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ0b3AiLCJsZWZ0IiwiY3NzIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVN5bnRheERpdiIsInNjcm9sbFN5bnRheERpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR0E7OztlQUFBOzs7b0VBOUZzQjtvQkFFRTtxQkFFSTt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDBCQXVGTCxBQXZGRDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsUUFBUSxFQUFFO2dCQUNwQixJQUFNQyxRQUFRO29CQUNaRCxVQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNFLG1CQUFtQjtnQkFFeEIsSUFBSSxDQUFDQyxXQUFXLENBQUNGO2dCQUVqQixJQUFJLENBQUNHLGdCQUFnQjtZQUN2Qjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLElBQU0sQUFBRUosV0FBYSxJQUFJLENBQUNLLFFBQVEsR0FBMUJMO2dCQUVSLElBQUlBLGFBQWEsSUFBSSxFQUFFO29CQUNyQixJQUFNTSxnQkFBZ0JOLFVBQVUsR0FBRztvQkFFbkMsSUFBSSxDQUFDTyxRQUFRLENBQUNEO2dCQUNoQixDQUFDO1lBQ0g7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixJQUFNLEFBQUVGLFdBQWEsSUFBSSxDQUFDSyxRQUFRLEdBQTFCTDtnQkFFUixJQUFJQSxhQUFhLElBQUksRUFBRTtvQkFDckIsSUFBTU0sZ0JBQWdCTixVQUFVLEdBQUc7b0JBRW5DLElBQUksQ0FBQ1EsV0FBVyxDQUFDRjtnQkFDbkIsQ0FBQztZQUNIOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixJQUFNQyxPQUFPRCxPQUFPRSxNQUFNLENBQUMsU0FBQ0QsTUFBTUUsT0FBVTtvQkFDcEMsSUFBTUMsWUFBWUMsSUFBQUEsa0JBQVcsRUFBQ0Y7b0JBRTlCRixRQUFRRztvQkFFUixPQUFPSDtnQkFDVCxHQUFHSyx1QkFBWTtnQkFFckIsSUFBSSxDQUFDTCxJQUFJLENBQUNBO1lBQ1o7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsU0FBUyxFQUFFQyxVQUFVLEVBQUU7Z0JBQzVCLElBQU1DLE1BQU0sQUFBQyxHQUFhLE9BQVgsQ0FBQ0YsV0FBVSxPQUNwQkcsT0FBTyxBQUFDLEdBQWMsT0FBWixDQUFDRixZQUFXLE9BQ3RCRyxNQUFNO29CQUNKRixLQUFBQTtvQkFDQUMsTUFBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixJQUFNdkIsV0FBVyxJQUFJO2dCQUVyQixJQUFJLENBQUN3QixRQUFRLENBQUM7b0JBQ1p4QixVQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2YsSUFBTTFCLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUMyQixJQUFJLENBQUMsSUFBSSxHQUN2Q0Msa0JBQWtCLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxJQUFJLEdBQzNDRSxrQkFBa0IsSUFBSSxDQUFDWCxNQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFaEQsT0FBUTtvQkFDTjNCLGFBQUFBO29CQUNBNEIsaUJBQUFBO29CQUNBQyxpQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQUksQ0FBQ04sZUFBZTtZQUN0Qjs7O1dBOUVJekI7cUJBQWtCZ0MsYUFBTztBQWdGN0IsaUJBaEZJaEMsV0FnRkdpQyxXQUFVO0FBRWpCLGlCQWxGSWpDLFdBa0ZHa0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDcEMifQ==