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
                    var tokenHTML = token.asHTML();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgU3ludGF4RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUxhbmd1YWdlQ2xhc3MoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICB0aGlzLmFkZExhbmd1YWdlQ2xhc3MoKTtcclxuICB9XHJcblxyXG4gIGFkZExhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGxhbmd1YWdlIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XHJcblxyXG4gICAgdGhpcy5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBsZWZ0ID0gYCR7LXNjcm9sbExlZnR9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgIGxlZnRcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IHNldExhbmd1YWdlID0gdGhpcy5zZXRMYW5ndWFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgdXBkYXRlU3ludGF4RGl2ID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxTeW50YXhEaXYgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHNldExhbmd1YWdlLFxyXG4gICAgICB1cGRhdGVTeW50YXhEaXYsXHJcbiAgICAgIHNjcm9sbFN5bnRheERpdlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInN5bnRheFwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFN5bnRheERpdilgXHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbIlN5bnRheERpdiIsInNldExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzdGF0ZSIsInJlbW92ZUxhbmd1YWdlQ2xhc3MiLCJ1cGRhdGVTdGF0ZSIsImFkZExhbmd1YWdlQ2xhc3MiLCJnZXRTdGF0ZSIsImxhbmd1YWdlQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlIiwidG9rZW5zIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlU3ludGF4RGl2Iiwic2Nyb2xsU3ludGF4RGl2IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStGQTs7O2VBQUE7OztvRUE3RnNCO29CQUVFO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsMEJBdUZMLEFBdkZEO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxRQUFRLEVBQUU7Z0JBQ3BCLElBQU1DLFFBQVE7b0JBQ1pELFVBQUFBO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0UsbUJBQW1CO2dCQUV4QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0Y7Z0JBRWpCLElBQUksQ0FBQ0csZ0JBQWdCO1lBQ3ZCOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsSUFBTSxBQUFFSixXQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUExQkw7Z0JBRVIsSUFBSUEsYUFBYSxJQUFJLEVBQUU7b0JBQ3JCLElBQU1NLGdCQUFnQk4sVUFBVSxHQUFHO29CQUVuQyxJQUFJLENBQUNPLFFBQVEsQ0FBQ0Q7Z0JBQ2hCLENBQUM7WUFDSDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLElBQU0sQUFBRUYsV0FBYSxJQUFJLENBQUNLLFFBQVEsR0FBMUJMO2dCQUVSLElBQUlBLGFBQWEsSUFBSSxFQUFFO29CQUNyQixJQUFNTSxnQkFBZ0JOLFVBQVUsR0FBRztvQkFFbkMsSUFBSSxDQUFDUSxXQUFXLENBQUNGO2dCQUNuQixDQUFDO1lBQ0g7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQU1DLE9BQU9ELE9BQU9FLE1BQU0sQ0FBQyxTQUFDRCxNQUFNRSxPQUFVO29CQUNwQyxJQUFNQyxZQUFZRCxNQUFNRSxNQUFNO29CQUU5QkosUUFBUUc7b0JBRVIsT0FBT0g7Z0JBQ1QsR0FBR0ssdUJBQVk7Z0JBRXJCLElBQUksQ0FBQ0wsSUFBSSxDQUFDQTtZQUNaOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFNQyxNQUFNLEFBQUMsR0FBYSxPQUFYLENBQUNGLFdBQVUsT0FDcEJHLE9BQU8sQUFBQyxHQUFjLE9BQVosQ0FBQ0YsWUFBVyxPQUN0QkcsTUFBTTtvQkFDSkYsS0FBQUE7b0JBQ0FDLE1BQUFBO2dCQUNGO2dCQUVOLElBQUksQ0FBQ0MsR0FBRyxDQUFDQTtZQUNYOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsSUFBTXZCLFdBQVcsSUFBSTtnQkFFckIsSUFBSSxDQUFDd0IsUUFBUSxDQUFDO29CQUNaeEIsVUFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUF5QixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNmLElBQU0xQixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDMkIsSUFBSSxDQUFDLElBQUksR0FDdkNDLGtCQUFrQixJQUFJLENBQUNsQixNQUFNLENBQUNpQixJQUFJLENBQUMsSUFBSSxHQUMzQ0Usa0JBQWtCLElBQUksQ0FBQ1gsTUFBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRWhELE9BQVE7b0JBQ04zQixhQUFBQTtvQkFDQTRCLGlCQUFBQTtvQkFDQUMsaUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxJQUFJLENBQUNOLGVBQWU7WUFDdEI7OztXQTlFSXpCO3FCQUFrQmdDLGFBQU87QUFnRjdCLGlCQWhGSWhDLFdBZ0ZHaUMsV0FBVTtBQUVqQixpQkFsRklqQyxXQWtGR2tDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3BDIn0=