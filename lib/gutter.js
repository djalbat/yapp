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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndXR0ZXIuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUmVhY3QiLCJFbGVtZW50IiwiTGluZU51bWJlcnMiLCJHVVRURVJfSEVJR0hUIiwibGluZUNvdW50RnJvbVRva2VucyIsIkd1dHRlciIsInVwZGF0ZSIsInRva2VucyIsImxpbmVDb3VudCIsInNldExpbmVDb3VudCIsInVwZGF0ZUxpbmVOdW1iZXJzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInBvc2l0aW9uIiwiZ2V0U2Nyb2xsVG9wIiwidG9wIiwiY3NzIiwiZ2V0TGluZUNvdW50Iiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJnZXRHdXR0ZXJXaWR0aCIsImdldFdpZHRoIiwicG9zaXRpb25HdXR0ZXIiLCJ1cGRhdGVHdXR0ZXIiLCJzY3JvbGxHdXR0ZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVIsR0FBTSxDQUFOLEtBQU07QUFFYixHQUFlLENBQWYsWUFBZTtBQUVULEdBQWEsQ0FBYixVQUFhO0FBQ1AsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBdUd2QixjQUV2QjtTQUFnQixr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