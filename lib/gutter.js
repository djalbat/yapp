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
        "\n\n  width: fit-content;\n  overflow: hidden;\n  position: relative;\n  grid-area: gutter;\n  border-right-width: 1px;\n  border-right-style: dotted;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n"
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
                this.updateLineNumbers(tokens);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollLineNumbers(scrollTop, scrollLeft);
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
                var context = this.getContext(), updateGutter = this.update.bind(this), scrollGutter = this.scroll.bind(this), parentContext1 = Object.assign({}, context, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xyXG5cclxuaW1wb3J0IHsgUmVhY3QsIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IExpbmVOdW1iZXJzIGZyb20gXCIuL2xpbmVOdW1iZXJzXCI7XHJcblxyXG5jbGFzcyBHdXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUxpbmVOdW1iZXJzKHRva2Vucyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICB0aGlzLnNjcm9sbExpbmVOdW1iZXJzKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5lQ291bnQobGluZUNvdW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgbGluZUNvdW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGxpbmVDb3VudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxpbmVDb3VudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGlsZEVsZW1lbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxMaW5lTnVtYmVycy8+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXHJcblx0XHRcdFx0ICB1cGRhdGVHdXR0ZXIgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpLCAgLy8vXHJcblx0XHRcdFx0ICBzY3JvbGxHdXR0ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAgLy8vXHJcbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xyXG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXIsXHJcbiAgICAgICAgICAgIHNjcm9sbEd1dHRlclxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcclxuXHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiZ3V0dGVyXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoR3V0dGVyKWBcclxuXHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGdyaWQtYXJlYTogZ3V0dGVyO1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogZG90dGVkO1xyXG5cclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblxyXG5gO1xyXG4iXSwibmFtZXMiOlsiR3V0dGVyIiwidXBkYXRlIiwidG9rZW5zIiwidXBkYXRlTGluZU51bWJlcnMiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsTGluZU51bWJlcnMiLCJzZXRMaW5lQ291bnQiLCJsaW5lQ291bnQiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkxpbmVOdW1iZXJzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlR3V0dGVyIiwiYmluZCIsInNjcm9sbEd1dHRlciIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWdFYixTQWVFOzs7ZUFmRixRQWVFOzs7a0VBN0VvQixpQkFBaUI7b0JBRVIsTUFBTTtnRUFFYixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBQSxBQUFNQSxNQUFNLGlCQXdEWCxBQXhERDtjQUFNQSxNQUFNOzhCQUFOQSxNQUFNO2FBQU5BLE1BQU07OEJBQU5BLE1BQU07OztpQkFBTkEsTUFBTTs7WUFDVkMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUNDLGlCQUFpQixDQUFDRCxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDOzs7WUFFREUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLFNBQVMsRUFBRUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLENBQUNDLGlCQUFpQixDQUFDRixTQUFTLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7OztZQUVERSxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsU0FBUyxFQUFFO2dCQUN0QixJQUFJLENBQUNDLFdBQVcsQ0FBQztvQkFDZkQsU0FBUyxFQUFUQSxTQUFTO2lCQUNWLENBQUMsQ0FBQztZQUNMLENBQUM7OztZQUVERSxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUc7Z0JBQ2hCLElBQU1GLFNBQVMsR0FBRyxJQUFJLEFBQUM7Z0JBRXZCLElBQUksQ0FBQ0csUUFBUSxDQUFDO29CQUNaSCxTQUFTLEVBQVRBLFNBQVM7aUJBQ1YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7O1lBRURJLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLHFCQUVFLDBCQUFDQyxZQUFXLFFBQUEsT0FBRSxDQUVkO1lBQ0osQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNmLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxFQUM5QkMsWUFBWSxHQUFHLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDckNDLFlBQVksR0FBRyxJQUFJLENBQUNoQixNQUFNLENBQUNlLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDakNKLGNBQWEsR0FBR00sTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFTixPQUFPLEVBQUU7b0JBQ3pDRSxZQUFZLEVBQVpBLFlBQVk7b0JBQ1pFLFlBQVksRUFBWkEsWUFBWTtpQkFDYixDQUFDLEFBQUM7Z0JBRVQsT0FBT0wsY0FBYSxDQUFDO1lBQ3ZCLENBQUM7OztZQUVEUSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUVyQixJQUFJLENBQUNiLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7OztXQS9DR1gsTUFBTTtDQXNEWCxrQkF0RG9CeUIsS0FBTyxRQUFBLEVBc0QzQjtBQUxDLGdCQWpESXpCLE1BQU0sRUFpREgwQixTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQW5ESTFCLE1BQU0sRUFtREgyQixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLFFBQVE7Q0FDcEIsQ0FBQztJQUdKLFFBZUUsR0FmYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUM3QixNQUFNLENBQUMifQ==