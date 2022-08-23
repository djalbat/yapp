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
var _constants = require("./constants");
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
        "\n\n  position: relative;\n  white-space: pre;\n  user-select: none;\n  pointer-events: none;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Syntax = /*#__PURE__*/ function(Element) {
    _inherits(Syntax, Element);
    var _super = _createSuper(Syntax);
    function Syntax() {
        _classCallCheck(this, Syntax);
        return _super.apply(this, arguments);
    }
    _createClass(Syntax, [
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
                var state = this.getState(), language = state.language;
                if (language !== null) {
                    var languageClass = language; ///
                    this.addClass(languageClass);
                }
            }
        },
        {
            key: "removeLanguageClass",
            value: function removeLanguageClass() {
                var state = this.getState(), language = state.language;
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
                var setLanguage = this.setLanguage.bind(this), updateSyntax = this.update.bind(this), scrollSyntax = this.scroll.bind(this); ///
                return {
                    setLanguage: setLanguage,
                    updateSyntax: updateSyntax,
                    scrollSyntax: scrollSyntax
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
    return Syntax;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Syntax, "tagName", "div");
_defineProperty(Syntax, "defaultProperties", {
    className: "syntax"
});
var _default = (0, _easyWithStyle.default)(Syntax)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNsYXNzIFN5bnRheCBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHNldExhbmd1YWdlKGxhbmd1YWdlKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgbGFuZ3VhZ2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW1vdmVMYW5ndWFnZUNsYXNzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgdGhpcy5hZGRMYW5ndWFnZUNsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRMYW5ndWFnZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxhbmd1YWdlIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMuYWRkQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVMYW5ndWFnZUNsYXNzKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxhbmd1YWdlIH0gPSBzdGF0ZTtcclxuXHJcbiAgICBpZiAobGFuZ3VhZ2UgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2VDbGFzcyA9IGxhbmd1YWdlOyAvLy9cclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MobGFuZ3VhZ2VDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHsgLy8vXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuV2l0aFNlbGVjdGlvbkhUTUwgPSB0b2tlbi5hc0hUTUwoKTtcclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gdG9rZW5XaXRoU2VsZWN0aW9uSFRNTDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGxlZnQgPSBgJHstc2Nyb2xsTGVmdH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcCxcclxuICAgICAgICAgICAgbGVmdFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2V0TGFuZ3VhZ2UgPSB0aGlzLnNldExhbmd1YWdlLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB1cGRhdGVTeW50YXggPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbFN5bnRheCA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyk7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgc2V0TGFuZ3VhZ2UsXHJcbiAgICAgIHVwZGF0ZVN5bnRheCxcclxuICAgICAgc2Nyb2xsU3ludGF4XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwic3ludGF4XCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3ludGF4KWBcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiU3ludGF4Iiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN0YXRlIiwicmVtb3ZlTGFuZ3VhZ2VDbGFzcyIsInVwZGF0ZVN0YXRlIiwiYWRkTGFuZ3VhZ2VDbGFzcyIsImdldFN0YXRlIiwibGFuZ3VhZ2VDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbldpdGhTZWxlY3Rpb25IVE1MIiwiYXNIVE1MIiwiRU1QVFlfU1RSSU5HIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInRvcCIsImxlZnQiLCJjc3MiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidXBkYXRlU3ludGF4Iiwic2Nyb2xsU3ludGF4IiwiaW5pdGlhbGlzZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFpR2IsU0FhRTs7O2VBYkYsUUFhRTs7O2tFQTVHb0IsaUJBQWlCO29CQUVmLE1BQU07eUJBRUQsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQUEsQUFBTUEsTUFBTSxpQkF5RlgsQUF6RkQ7Y0FBTUEsTUFBTTs4QkFBTkEsTUFBTTthQUFOQSxNQUFNOzhCQUFOQSxNQUFNOzs7aUJBQU5BLE1BQU07O1lBQ1ZDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDQyxRQUFRLEVBQUU7Z0JBQ3BCLElBQU1DLEtBQUssR0FBRztvQkFDWkQsUUFBUSxFQUFSQSxRQUFRO2lCQUNULEFBQUM7Z0JBRUYsSUFBSSxDQUFDRSxtQkFBbUIsRUFBRSxDQUFDO2dCQUUzQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBRXhCLElBQUksQ0FBQ0csZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixDQUFDOzs7WUFFREEsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixHQUFHO2dCQUNqQixJQUFNSCxLQUFLLEdBQUcsSUFBSSxDQUFDSSxRQUFRLEVBQUUsRUFDdkIsQUFBRUwsUUFBUSxHQUFLQyxLQUFLLENBQWxCRCxRQUFRLEFBQVUsQUFBQztnQkFFM0IsSUFBSUEsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDckIsSUFBTU0sYUFBYSxHQUFHTixRQUFRLEFBQUMsRUFBQyxHQUFHO29CQUVuQyxJQUFJLENBQUNPLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7WUFDSCxDQUFDOzs7WUFFREosR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBbkJBLFNBQUFBLG1CQUFtQixHQUFHO2dCQUNwQixJQUFNRCxLQUFLLEdBQUcsSUFBSSxDQUFDSSxRQUFRLEVBQUUsRUFDdkIsQUFBRUwsUUFBUSxHQUFLQyxLQUFLLENBQWxCRCxRQUFRLEFBQVUsQUFBQztnQkFFM0IsSUFBSUEsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDckIsSUFBTU0sYUFBYSxHQUFHTixRQUFRLEFBQUMsRUFBQyxHQUFHO29CQUVuQyxJQUFJLENBQUNRLFdBQVcsQ0FBQ0YsYUFBYSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7WUFDSCxDQUFDOzs7WUFFREcsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtnQkFDYixJQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFNBQUNELElBQUksRUFBRUUsS0FBSyxFQUFLO29CQUNwQyxJQUFNQyxzQkFBc0IsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEVBQUUsQUFBQztvQkFFOUNKLElBQUksSUFBSUcsc0JBQXNCLENBQUM7b0JBRS9CLE9BQU9ILElBQUksQ0FBQztnQkFDZCxDQUFDLEVBQUVLLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRXZCLElBQUksQ0FBQ0wsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDOzs7WUFFRE0sR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFNQyxHQUFHLEdBQUcsQUFBQyxFQUFBLENBQWEsTUFBRSxDQUFiLENBQUNGLFNBQVMsRUFBQyxJQUFFLENBQUMsRUFDdkJHLElBQUksR0FBRyxBQUFDLEVBQUEsQ0FBYyxNQUFFLENBQWQsQ0FBQ0YsVUFBVSxFQUFDLElBQUUsQ0FBQyxFQUN6QkcsR0FBRyxHQUFHO29CQUNKRixHQUFHLEVBQUhBLEdBQUc7b0JBQ0hDLElBQUksRUFBSkEsSUFBSTtpQkFDTCxBQUFDO2dCQUVSLElBQUksQ0FBQ0MsR0FBRyxDQUFDQSxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDOzs7WUFFREMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixJQUFNdkIsUUFBUSxHQUFHLElBQUksQUFBQztnQkFFdEIsSUFBSSxDQUFDd0IsUUFBUSxDQUFDO29CQUNaeEIsUUFBUSxFQUFSQSxRQUFRO2lCQUNULENBQUMsQ0FBQztZQUNMLENBQUM7OztZQUVEeUIsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2YsSUFBTTFCLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQzJCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDeENDLFlBQVksR0FBRyxJQUFJLENBQUNsQixNQUFNLENBQUNpQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3pDRSxZQUFZLEdBQUcsSUFBSSxDQUFDWCxNQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFFLEdBQUc7Z0JBRTdDLE9BQVE7b0JBQ04zQixXQUFXLEVBQVhBLFdBQVc7b0JBQ1g0QixZQUFZLEVBQVpBLFlBQVk7b0JBQ1pDLFlBQVksRUFBWkEsWUFBWTtpQkFDYixDQUFFO1lBQ0wsQ0FBQzs7O1lBRURDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLElBQUksQ0FBQ04sZUFBZSxFQUFFLENBQUM7WUFDekIsQ0FBQzs7O1dBaEZHekIsTUFBTTtDQXVGWCxrQkF2Rm9CZ0MsS0FBTyxRQUFBLEVBdUYzQjtBQUxDLGdCQWxGSWhDLE1BQU0sRUFrRkhpQyxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQXBGSWpDLE1BQU0sRUFvRkhrQyxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQztJQUdKLFFBYUUsR0FiYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNwQyxNQUFNLENBQUMifQ==