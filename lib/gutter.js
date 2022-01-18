"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _lineNumbers = _interopRequireDefault(require("./lineNumbers"));
var _styles = require("./styles");
var _tokens = require("./utilities/tokens");
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
        "\n\n  height: ",
        ";\n  z-index: 2;\n  position: absolute;\n  text-align: right;\n  user-select: none;\n  pointer-events: none;\n  border-right-style: dotted;\n  border-right-width: 1px;\n\n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Gutter = /*#__PURE__*/ function(Element) {
    _inherits(Gutter, Element);
    var _super = _createSuper(Gutter);
    function Gutter() {
        _classCallCheck(this, Gutter);
        return _super.apply(this, arguments);
    }
    _createClass(Gutter, [
        {
            key: "update",
            value: function update(tokens) {
                var lineCount = (0, _tokens).lineCountFromTokens(tokens);
                this.setLineCount(lineCount);
                this.updateLineNumbers(lineCount);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.setScrollTop(scrollTop);
                this.position();
            }
        },
        {
            key: "position",
            value: function position() {
                var scrollTop = this.getScrollTop();
                var top = "".concat(-scrollTop, "px"), css = {
                    top: top
                };
                this.css(css);
            }
        },
        {
            key: "getLineCount",
            value: function getLineCount() {
                var state = this.getState(), lineCount = state.lineCount;
                return lineCount;
            }
        },
        {
            key: "getScrollTop",
            value: function getScrollTop() {
                var state = this.getState(), scrollTop = state.scrollTop;
                return scrollTop;
            }
        },
        {
            key: "setLineCount",
            value: function setLineCount(lineCount) {
                this.updateState({
                    lineCount: lineCount
                });
            }
        },
        {
            key: "setScrollTop",
            value: function setScrollTop(scrollTop) {
                this.updateState({
                    scrollTop: scrollTop
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ _easy.React.createElement(_lineNumbers.default, null), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), getLineCount = this.getLineCount.bind(this), getGutterWidth = this.getWidth.bind(this), positionGutter = this.position.bind(this), updateGutter = this.update.bind(this), scrollGutter = this.scroll.bind(this), parentContext1 = Object.assign({}, context, {
                    getLineCount: getLineCount,
                    getGutterWidth: getGutterWidth,
                    positionGutter: positionGutter,
                    updateGutter: updateGutter,
                    scrollGutter: scrollGutter
                });
                return parentContext1;
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var scrollTop = 0, lineCount = null;
                this.setState({
                    scrollTop: scrollTop,
                    lineCount: lineCount
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return Gutter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Gutter, "tagName", "div");
_defineProperty(Gutter, "defaultProperties", {
    className: "gutter"
});
var _default = (0, _easyWithStyle).default(Gutter)(_templateObject(), _styles.gutterHeight);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBndXR0ZXJIZWlnaHQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgbGluZUNvdW50RnJvbVRva2VucyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcclxuXHJcbmNsYXNzIEd1dHRlciBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHVwZGF0ZSh0b2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IGxpbmVDb3VudEZyb21Ub2tlbnModG9rZW5zKTtcclxuXHJcbiAgICB0aGlzLnNldExpbmVDb3VudChsaW5lQ291bnQpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlTGluZU51bWJlcnMobGluZUNvdW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IGAkey1zY3JvbGxUb3B9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3BcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIGdldExpbmVDb3VudCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBsaW5lQ291bnQgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBsaW5lQ291bnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTY3JvbGxUb3AoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgc2Nyb2xsVG9wIH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gc2Nyb2xsVG9wO1xyXG4gIH1cclxuXHJcbiAgc2V0TGluZUNvdW50KGxpbmVDb3VudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFtcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVycyAvPixcclxuXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICBnZXRMaW5lQ291bnQgPSB0aGlzLmdldExpbmVDb3VudC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgZ2V0R3V0dGVyV2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHBvc2l0aW9uR3V0dGVyID0gdGhpcy5wb3NpdGlvbi5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAgLy8vXHJcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xyXG4gICAgICAgICAgICBnZXRMaW5lQ291bnQsXHJcbiAgICAgICAgICAgIGdldEd1dHRlcldpZHRoLFxyXG4gICAgICAgICAgICBwb3NpdGlvbkd1dHRlcixcclxuICAgICAgICAgICAgdXBkYXRlR3V0dGVyLFxyXG4gICAgICAgICAgICBzY3JvbGxHdXR0ZXJcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xyXG4gIH1cclxuICBcclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgICAgbGluZUNvdW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2Nyb2xsVG9wLFxyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJndXR0ZXJcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXIpYFxyXG5cclxuICBoZWlnaHQ6ICR7Z3V0dGVySGVpZ2h0fTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGRvdHRlZDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiR3V0dGVyIiwidXBkYXRlIiwidG9rZW5zIiwibGluZUNvdW50Iiwic2V0TGluZUNvdW50IiwidXBkYXRlTGluZU51bWJlcnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwicG9zaXRpb24iLCJnZXRTY3JvbGxUb3AiLCJ0b3AiLCJjc3MiLCJnZXRMaW5lQ291bnQiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImdldEd1dHRlcldpZHRoIiwiZ2V0V2lkdGgiLCJwb3NpdGlvbkd1dHRlciIsInVwZGF0ZUd1dHRlciIsInNjcm9sbEd1dHRlciIsIk9iamVjdCIsImFzc2lnbiIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFUixHQUFNLENBQU4sS0FBTTtBQUViLEdBQWUsQ0FBZixZQUFlO0FBRVYsR0FBVSxDQUFWLE9BQVU7QUFDSCxHQUFvQixDQUFwQixPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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