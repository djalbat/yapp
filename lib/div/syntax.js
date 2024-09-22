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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  position: relative;\n  white-space: pre;\n  user-select: none;\n  pointer-events: none;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SyntaxDiv = /*#__PURE__*/ function(Element) {
    _inherits(SyntaxDiv, Element);
    function SyntaxDiv() {
        _class_call_check(this, SyntaxDiv);
        return _call_super(this, SyntaxDiv, arguments);
    }
    _create_class(SyntaxDiv, [
        {
            key: "updateLanguage",
            value: function updateLanguage(language) {
                this.removeLanguageClass();
                this.setLanguage(language);
                this.addLanguageClass();
            }
        },
        {
            key: "addLanguageClass",
            value: function addLanguageClass() {
                var language = this.getLanguage();
                if (language !== null) {
                    var languageClass = language; ///
                    this.addClass(languageClass);
                }
            }
        },
        {
            key: "removeLanguageClass",
            value: function removeLanguageClass() {
                var language = this.getLanguage();
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
            key: "getLanguage",
            value: function getLanguage() {
                var language = this.getState().language;
                return language;
            }
        },
        {
            key: "setLanguage",
            value: function setLanguage(language) {
                this.updateState({
                    language: language
                });
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
                var updateLanguage = this.updateLanguage.bind(this), updateSyntaxDiv = this.update.bind(this), scrollSyntaxDiv = this.scroll.bind(this); ///
                return {
                    updateLanguage: updateLanguage,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgU3ludGF4RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgIHRoaXMucmVtb3ZlTGFuZ3VhZ2VDbGFzcygpO1xyXG5cclxuICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIHRoaXMuYWRkTGFuZ3VhZ2VDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgIGlmIChsYW5ndWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZUNsYXNzID0gbGFuZ3VhZ2U7IC8vL1xyXG5cclxuICAgICAgdGhpcy5hZGRDbGFzcyhsYW5ndWFnZUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XHJcblxyXG4gICAgdGhpcy5odG1sKGh0bWwpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBsZWZ0ID0gYCR7LXNjcm9sbExlZnR9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgIGxlZnRcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIGdldExhbmd1YWdlKCkge1xyXG4gICAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9XHJcblxyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgdXBkYXRlTGFuZ3VhZ2UgPSB0aGlzLnVwZGF0ZUxhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXhEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheERpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdXBkYXRlTGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheERpdixcclxuICAgICAgc2Nyb2xsU3ludGF4RGl2XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4RGl2KWBcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiU3ludGF4RGl2IiwidXBkYXRlTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInJlbW92ZUxhbmd1YWdlQ2xhc3MiLCJzZXRMYW5ndWFnZSIsImFkZExhbmd1YWdlQ2xhc3MiLCJnZXRMYW5ndWFnZSIsImxhbmd1YWdlQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlIiwidG9rZW5zIiwiaHRtbCIsInJlZHVjZSIsInRva2VuIiwidG9rZW5IVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInVwZGF0ZVN5bnRheERpdiIsInNjcm9sbFN5bnRheERpdiIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1R0E7OztlQUFBOzs7b0VBckdzQjtvQkFFRTt5QkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDBCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFFBQVE7Z0JBQ3JCLElBQUksQ0FBQ0MsbUJBQW1CO2dCQUV4QixJQUFJLENBQUNDLFdBQVcsQ0FBQ0Y7Z0JBRWpCLElBQUksQ0FBQ0csZ0JBQWdCO1lBQ3ZCOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILFdBQVcsSUFBSSxDQUFDSSxXQUFXO2dCQUVqQyxJQUFJSixhQUFhLE1BQU07b0JBQ3JCLElBQU1LLGdCQUFnQkwsVUFBVSxHQUFHO29CQUVuQyxJQUFJLENBQUNNLFFBQVEsQ0FBQ0Q7Z0JBQ2hCO1lBQ0Y7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsV0FBVyxJQUFJLENBQUNJLFdBQVc7Z0JBRWpDLElBQUlKLGFBQWEsTUFBTTtvQkFDckIsSUFBTUssZ0JBQWdCTCxVQUFVLEdBQUc7b0JBRW5DLElBQUksQ0FBQ08sV0FBVyxDQUFDRjtnQkFDbkI7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLE9BQU9ELE9BQU9FLE1BQU0sQ0FBQyxTQUFDRCxNQUFNRTtvQkFDMUIsSUFBTUMsWUFBWUQsTUFBTUUsTUFBTTtvQkFFOUJKLFFBQVFHO29CQUVSLE9BQU9IO2dCQUNULEdBQUdLLHVCQUFZO2dCQUVyQixJQUFJLENBQUNMLElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxTQUFTLEVBQUVDLFVBQVU7Z0JBQzFCLElBQU1DLE1BQU0sQUFBQyxHQUFhLE9BQVgsQ0FBQ0YsV0FBVSxPQUNwQkcsT0FBTyxBQUFDLEdBQWMsT0FBWixDQUFDRixZQUFXLE9BQ3RCRyxNQUFNO29CQUNKRixLQUFBQTtvQkFDQUMsTUFBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBakIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUosV0FBYSxJQUFJLENBQUNzQixRQUFRLEdBQTFCdEI7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRixRQUFRO2dCQUNsQixJQUFJLENBQUN1QixXQUFXLENBQUM7b0JBQ2Z2QixVQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNeEIsV0FBVztnQkFFakIsSUFBSSxDQUFDeUIsUUFBUSxDQUFDO29CQUNaekIsVUFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUEwQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0MsSUFBTTNCLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQzRCLElBQUksQ0FBQyxJQUFJLEdBQzdDQyxrQkFBa0IsSUFBSSxDQUFDcEIsTUFBTSxDQUFDbUIsSUFBSSxDQUFDLElBQUksR0FDM0NFLGtCQUFrQixJQUFJLENBQUNiLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVoRCxPQUFRO29CQUNONUIsZ0JBQUFBO29CQUNBNkIsaUJBQUFBO29CQUNBQyxpQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNOLGVBQWU7WUFDdEI7OztXQXRGSTFCO3FCQUFrQmlDLGFBQU87QUF3RjdCLGlCQXhGSWpDLFdBd0ZHa0MsV0FBVTtBQUVqQixpQkExRklsQyxXQTBGR21DLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3JDIn0=