"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _lineNumbers = _interopRequireDefault(require("./lineNumbers"));
var _constants = require("./constants");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    function Gutter() {
        _classCallCheck(this, Gutter);
        return _possibleConstructorReturn(this, _getPrototypeOf(Gutter).apply(this, arguments));
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
                var context = this.getContext(), getLineCount = this.getLineCount.bind(this), getGutterWidth = this.getWidth.bind(this), positionGutter = this.position.bind(this), updateGutter = this.update.bind(this), scrollGutter = this.scroll.bind(this), parentContext1 = Object.assign({
                }, context, {
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
var _default = (0, _easyWithStyle).default(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUmVhY3QiLCJFbGVtZW50IiwiTGluZU51bWJlcnMiLCJHVVRURVJfSEVJR0hUIiwibGluZUNvdW50RnJvbVRva2VucyIsIkd1dHRlciIsInVwZGF0ZSIsInRva2VucyIsImxpbmVDb3VudCIsInNldExpbmVDb3VudCIsInVwZGF0ZUxpbmVOdW1iZXJzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInBvc2l0aW9uIiwiZ2V0U2Nyb2xsVG9wIiwidG9wIiwiY3NzIiwiZ2V0TGluZUNvdW50Iiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJnZXRHdXR0ZXJXaWR0aCIsImdldFdpZHRoIiwicG9zaXRpb25HdXR0ZXIiLCJ1cGRhdGVHdXR0ZXIiLCJzY3JvbGxHdXR0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVIsR0FBTSxDQUFOLEtBQU07QUFFYixHQUFlLENBQWYsWUFBZTtBQUVULEdBQWEsQ0FBYixVQUFhO0FBQ1AsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBdUd2QixDQUV2QjtRQUFnQixD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QyxZQUFZLEVBQVosWUFBWTtvQkFDWixjQUFjLEVBQWQsY0FBYztvQkFDZCxjQUFjLEVBQWQsY0FBYztvQkFDZCxZQUFZLEVBQVosWUFBWTtvQkFDWixZQUFZLEVBQVosWUFBWTtnQkFDZCxDQUFDO2dCQUVQLE1BQU0sQ0FBQyxjQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQWUsRUFBZixDQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLEdBQUcsQ0FBQztnQkFDakIsR0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQ2IsU0FBUyxHQUFHLElBQUk7Z0JBRXRCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDYixTQUFTLEVBQVQsU0FBUztvQkFDVCxTQUFTLEVBQVQsU0FBUztnQkFDWCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVSxFQUFWLENBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLElBQUksQ0FBQyxhQUFhO2dCQUVsQixJQUFJLENBQUMsZUFBZTtZQUN0QixDQUFDOzs7V0E1RkcsTUFBTTttQkFQbUIsS0FBTTtnQkFPL0IsTUFBTSxFQThGSCxDQUFPLFVBQUcsQ0FBSztnQkE5RmxCLE1BQU0sRUFnR0gsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBUTtBQUNyQixDQUFDO21CQTNHbUIsY0FBaUIsVUE4R2QsTUFBTSxxQkF4R0QsVUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCBMaW5lTnVtYmVycyBmcm9tIFwiLi9saW5lTnVtYmVyc1wiO1xyXG5cclxuaW1wb3J0IHsgR1VUVEVSX0hFSUdIVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgR3V0dGVyIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0TGluZUNvdW50KGxpbmVDb3VudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaW5lTnVtYmVycyhsaW5lQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgY29uc3QgdG9wID0gYCR7LXNjcm9sbFRvcH1weGAsXHJcbiAgICAgICAgICBjc3MgPSB7XHJcbiAgICAgICAgICAgIHRvcFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICB0aGlzLmNzcyhjc3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZUNvdW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxpbmVDb3VudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVDb3VudDtcclxuICB9XHJcblxyXG4gIGdldFNjcm9sbFRvcCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3BcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRFbGVtZW50cygpIHtcclxuICAgIHJldHVybiAoW1xyXG5cclxuICAgICAgPExpbmVOdW1iZXJzIC8+LFxyXG5cclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgcGFyZW50Q29udGV4dCgpIHtcclxuXHQgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcclxuICAgICAgICAgIGdldExpbmVDb3VudCA9IHRoaXMuZ2V0TGluZUNvdW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICBnZXRHdXR0ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgcG9zaXRpb25HdXR0ZXIgPSB0aGlzLnBvc2l0aW9uLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHVwZGF0ZUd1dHRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksICAvLy9cclxuXHRcdFx0XHQgIHNjcm9sbEd1dHRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksICAvLy9cclxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XHJcbiAgICAgICAgICAgIGdldExpbmVDb3VudCxcclxuICAgICAgICAgICAgZ2V0R3V0dGVyV2lkdGgsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uR3V0dGVyLFxyXG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXIsXHJcbiAgICAgICAgICAgIHNjcm9sbEd1dHRlclxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDAsXHJcbiAgICAgICAgICBsaW5lQ291bnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzY3JvbGxUb3AsXHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcImd1dHRlclwiXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEd1dHRlcilgXHJcblxyXG4gIGhlaWdodDogJHtHVVRURVJfSEVJR0hUfTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGRvdHRlZDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXX0=