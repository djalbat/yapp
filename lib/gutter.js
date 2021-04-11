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
var Gutter = function(Element1) {
    _inherits(Gutter, _easy.Element);
    function Gutter() {
        _classCallCheck(this, Gutter);
        return _possibleConstructorReturn(this, _getPrototypeOf(Gutter).apply(this, arguments));
    }
    _createClass(Gutter, [
        {
            key: "update",
            value: function update(tokens) {
                var lineCount = _tokens.lineCountFromTokens(tokens);
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
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var gutter = _easy.Element.fromClass(Class, properties);
                gutter.initialise();
                return gutter;
            }
        }
    ]);
    return Gutter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(Gutter, "tagName", "div");
_defineProperty(Gutter, "defaultProperties", {
    className: "gutter"
});
var _default = _easyWithStyle.default(Gutter)(_templateObject(), _constants.GUTTER_HEIGHT);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBHVVRURVJfSEVJR0hUIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGxpbmVDb3VudEZyb21Ub2tlbnMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdG9rZW5zXCI7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgdGhpcy5zZXRMaW5lQ291bnQobGluZUNvdW50KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzKGxpbmVDb3VudCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIHBvc2l0aW9uKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBnZXRMaW5lQ291bnQoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgIHsgbGluZUNvdW50IH0gPSBzdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gbGluZUNvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsVG9wKCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IHNjcm9sbFRvcCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcclxuICB9XHJcblxyXG4gIHNldExpbmVDb3VudChsaW5lQ291bnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChbXHJcblxyXG4gICAgICA8TGluZU51bWJlcnMgLz4sXHJcblxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxyXG4gICAgICAgICAgZ2V0TGluZUNvdW50ID0gdGhpcy5nZXRMaW5lQ291bnQuYmluZCh0aGlzKSxcclxuICAgICAgICAgIGdldEd1dHRlcldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBwb3NpdGlvbkd1dHRlciA9IHRoaXMucG9zaXRpb24uYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgdXBkYXRlR3V0dGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsR3V0dGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcclxuICAgICAgICAgICAgZ2V0TGluZUNvdW50LFxyXG4gICAgICAgICAgICBnZXRHdXR0ZXJXaWR0aCxcclxuICAgICAgICAgICAgcG9zaXRpb25HdXR0ZXIsXHJcbiAgICAgICAgICAgIHVwZGF0ZUd1dHRlcixcclxuICAgICAgICAgICAgc2Nyb2xsR3V0dGVyXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcclxuICB9XHJcbiAgXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMCxcclxuICAgICAgICAgIGxpbmVDb3VudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCxcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcclxuXHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiZ3V0dGVyXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBjb25zdCBndXR0ZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XHJcblxyXG4gICAgZ3V0dGVyLmluaXRpYWxpc2UoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGd1dHRlcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShHdXR0ZXIpYFxyXG5cclxuICBoZWlnaHQ6ICR7R1VUVEVSX0hFSUdIVH07XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBkb3R0ZWQ7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVUsY0FBaUI7SUFFUixLQUFNO0lBRWIsWUFBZTtJQUVULFVBQWE7SUFDUCxPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErR3ZCLGNBRXZCO1NBQWdCLGtZQW1CMUI7Ozs7Ozs7SUFsSU0sTUFBTSxZQUFTLFFBQU87Y0FBdEIsTUFBTSxFQVBtQixLQUFNO2FBTy9CLE1BQU07OEJBQU4sTUFBTTtnRUFBTixNQUFNOztpQkFBTixNQUFNOztZQUNWLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxNQUFNO29CQUNMLFNBQVMsR0FKaUIsT0FBb0IscUJBSWQsTUFBTTtxQkFFdkMsWUFBWSxDQUFDLFNBQVM7cUJBRXRCLGlCQUFpQixDQUFD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