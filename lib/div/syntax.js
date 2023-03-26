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
var _constants = require("../constants");
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
        "\n\n  position: relative;\n  white-space: pre;\n  user-select: none;\n  pointer-events: none;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  font-weight: inherit;\n  caret-color: inherit;\n  border-color: inherit;\n  text-rendering: inherit;\n  background-color: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SyntaxDiv = /*#__PURE__*/ function(Element) {
    _inherits(SyntaxDiv, Element);
    var _super = _createSuper(SyntaxDiv);
    function SyntaxDiv() {
        _classCallCheck(this, SyntaxDiv);
        return _super.apply(this, arguments);
    }
    _createClass(SyntaxDiv, [
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
                    var tokenWithSelectionHTML = token.asHTML();
                    html += tokenWithSelectionHTML;
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SyntaxDiv, "tagName", "div");
_defineProperty(SyntaxDiv, "defaultProperties", {
    className: "syntax"
});
var _default = (0, _easyWithStyle.default)(SyntaxDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3ludGF4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgU3ludGF4RGl2IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUxhbmd1YWdlQ2xhc3MoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICB0aGlzLmFkZExhbmd1YWdlQ2xhc3MoKTtcclxuICB9XHJcblxyXG4gIGFkZExhbmd1YWdlQ2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGxhbmd1YWdlIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgaWYgKGxhbmd1YWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlQ2xhc3MgPSBsYW5ndWFnZTsgLy8vXHJcblxyXG4gICAgICB0aGlzLmFkZENsYXNzKGxhbmd1YWdlQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGFuZ3VhZ2VDbGFzcygpIHtcclxuICAgIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuV2l0aFNlbGVjdGlvbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gdG9rZW5XaXRoU2VsZWN0aW9uSFRNTDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGxlZnQgPSBgJHstc2Nyb2xsTGVmdH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgbGVmdFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2V0TGFuZ3VhZ2UgPSB0aGlzLnNldExhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXhEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheERpdiA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheERpdixcclxuICAgICAgc2Nyb2xsU3ludGF4RGl2XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4RGl2KWBcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiU3ludGF4RGl2Iiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlU3ludGF4RGl2Iiwic2Nyb2xsU3ludGF4RGl2IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStGQTs7O2VBQUE7OztrRUE3RnNCO29CQUVFO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSwwQkF1RkwsQUF2RkQ7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVEsRUFBRTtnQkFDcEIsSUFBTUMsUUFBUTtvQkFDWkQsVUFBQUE7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRSxtQkFBbUI7Z0JBRXhCLElBQUksQ0FBQ0MsV0FBVyxDQUFDRjtnQkFFakIsSUFBSSxDQUFDRyxnQkFBZ0I7WUFDdkI7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixJQUFNLEFBQUVKLFdBQWEsSUFBSSxDQUFDSyxRQUFRLEdBQTFCTDtnQkFFUixJQUFJQSxhQUFhLElBQUksRUFBRTtvQkFDckIsSUFBTU0sZ0JBQWdCTixVQUFVLEdBQUc7b0JBRW5DLElBQUksQ0FBQ08sUUFBUSxDQUFDRDtnQkFDaEIsQ0FBQztZQUNIOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsSUFBTSxBQUFFRixXQUFhLElBQUksQ0FBQ0ssUUFBUSxHQUExQkw7Z0JBRVIsSUFBSUEsYUFBYSxJQUFJLEVBQUU7b0JBQ3JCLElBQU1NLGdCQUFnQk4sVUFBVSxHQUFHO29CQUVuQyxJQUFJLENBQUNRLFdBQVcsQ0FBQ0Y7Z0JBQ25CLENBQUM7WUFDSDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsT0FBT0QsT0FBT0UsTUFBTSxDQUFDLFNBQUNELE1BQU1FLE9BQVU7b0JBQ3BDLElBQU1DLHlCQUF5QkQsTUFBTUUsTUFBTTtvQkFFM0NKLFFBQVFHO29CQUVSLE9BQU9IO2dCQUNULEdBQUdLLHVCQUFZO2dCQUVyQixJQUFJLENBQUNMLElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxTQUFTLEVBQUVDLFVBQVUsRUFBRTtnQkFDNUIsSUFBTUMsTUFBTSxBQUFDLEdBQWEsT0FBWCxDQUFDRixXQUFVLE9BQ3BCRyxPQUFPLEFBQUMsR0FBYyxPQUFaLENBQUNGLFlBQVcsT0FDdEJHLE1BQU07b0JBQ0pGLEtBQUFBO29CQUNBQyxNQUFBQTtnQkFDRjtnQkFFTixJQUFJLENBQUNDLEdBQUcsQ0FBQ0E7WUFDWDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQU12QixXQUFXLElBQUk7Z0JBRXJCLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQztvQkFDWnhCLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBeUIsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZixJQUFNMUIsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQzJCLElBQUksQ0FBQyxJQUFJLEdBQ3ZDQyxrQkFBa0IsSUFBSSxDQUFDbEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDLElBQUksR0FDM0NFLGtCQUFrQixJQUFJLENBQUNYLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUVoRCxPQUFRO29CQUNOM0IsYUFBQUE7b0JBQ0E0QixpQkFBQUE7b0JBQ0FDLGlCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBSSxDQUFDTixlQUFlO1lBQ3RCOzs7V0E5RUl6QjttQkFBa0JnQyxhQUFPO0FBZ0Y3QixnQkFoRkloQyxXQWdGR2lDLFdBQVU7QUFFakIsZ0JBbEZJakMsV0FrRkdrQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNwQyJ9