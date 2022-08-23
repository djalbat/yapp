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
var _lineNumbers = /*#__PURE__*/ _interopRequireDefault(require("./lineNumbers"));
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
        "\n\n  width: fit-content;\n  overflow: hidden;\n  position: relative;\n  grid-area: gutter;\n  text-align: right;\n  user-select: none;\n  pointer-events: none;\n  border-right-style: dotted;\n  border-right-width: 1px;\n\n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
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
                var lineCount = (0, _tokens.lineCountFromTokens)(tokens);
                this.setLineCount(lineCount);
                this.updateLineNumbers(lineCount);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollLineNumbers(scrollTop, scrollLeft);
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
            key: "setLineCount",
            value: function setLineCount(lineCount) {
                this.updateState({
                    lineCount: lineCount
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var lineCount = null;
                this.setState({
                    lineCount: lineCount
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ _easy.React.createElement(_lineNumbers.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), getLineCount = this.getLineCount.bind(this), updateGutter = this.update.bind(this), scrollGutter = this.scroll.bind(this), parentContext1 = Object.assign({}, context, {
                    getLineCount: getLineCount,
                    updateGutter: updateGutter,
                    scrollGutter: scrollGutter
                });
                return parentContext1;
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
var _default = (0, _easyWithStyle.default)(Gutter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgR3V0dGVyIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgdXBkYXRlKHRva2Vucykge1xyXG4gICAgY29uc3QgbGluZUNvdW50ID0gbGluZUNvdW50RnJvbVRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIHRoaXMuc2V0TGluZUNvdW50KGxpbmVDb3VudCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVMaW5lTnVtYmVycyhsaW5lQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xyXG4gICAgdGhpcy5zY3JvbGxMaW5lTnVtYmVycyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZUNvdW50KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXHJcbiAgICAgICAgICB7IGxpbmVDb3VudCB9ID0gc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVDb3VudDtcclxuICB9XHJcblxyXG4gIHNldExpbmVDb3VudChsaW5lQ291bnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBsaW5lQ291bnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgbGluZUNvdW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoaWxkRWxlbWVudHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPExpbmVOdW1iZXJzIC8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcbiAgICAgICAgICBnZXRMaW5lQ291bnQgPSB0aGlzLmdldExpbmVDb3VudC5iaW5kKHRoaXMpLFxyXG5cdFx0XHRcdCAgdXBkYXRlR3V0dGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgIC8vL1xyXG5cdFx0XHRcdCAgc2Nyb2xsR3V0dGVyID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKSwgIC8vL1xyXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIHtcclxuICAgICAgICAgICAgZ2V0TGluZUNvdW50LFxyXG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXIsXHJcbiAgICAgICAgICAgIHNjcm9sbEd1dHRlclxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcclxuXHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiZ3V0dGVyXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoR3V0dGVyKWBcclxuXHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGdyaWQtYXJlYTogZ3V0dGVyO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG5cclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJ1cGRhdGUiLCJ0b2tlbnMiLCJsaW5lQ291bnQiLCJsaW5lQ291bnRGcm9tVG9rZW5zIiwic2V0TGluZUNvdW50IiwidXBkYXRlTGluZU51bWJlcnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsTGluZU51bWJlcnMiLCJnZXRMaW5lQ291bnQiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJMaW5lTnVtYmVycyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJ1cGRhdGVHdXR0ZXIiLCJzY3JvbGxHdXR0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwi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