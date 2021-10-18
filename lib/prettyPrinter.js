"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _gutter = _interopRequireDefault(require("./gutter"));
var _syntax = _interopRequireDefault(require("./syntax"));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
        "\n\n  position: relative;\n  overflow: hidden;\n  \n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PrettyPrinter = /*#__PURE__*/ function(Element) {
    _inherits(PrettyPrinter, Element);
    function PrettyPrinter() {
        _classCallCheck(this, PrettyPrinter);
        return _possibleConstructorReturn(this, _getPrototypeOf(PrettyPrinter).apply(this, arguments));
    }
    _createClass(PrettyPrinter, [
        {
            key: "getWidth",
            value: function getWidth() {
                var hidden = this.isHidden();
                if (hidden) {
                    this.show();
                }
                var width = _get(_getPrototypeOf(PrettyPrinter.prototype), "getWidth", this).call(this);
                if (hidden) {
                    this.hide();
                }
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var hidden = this.isHidden();
                if (hidden) {
                    this.show();
                }
                var height = _get(_getPrototypeOf(PrettyPrinter.prototype), "getHeight", this).call(this);
                if (hidden) {
                    this.hide();
                }
                return height;
            }
        },
        {
            key: "getInnerBounds",
            value: function getInnerBounds() {
                var gutterWidth = this.getGutterWidth();
                var top = 0, left = 0, width = this.getWidth(), height = this.getHeight();
                left += gutterWidth;
                width -= gutterWidth;
                var innerBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);
                return innerBounds;
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollGutter(scrollTop, scrollLeft);
                this.scrollSyntax(scrollTop, scrollLeft);
            }
        },
        {
            key: "update",
            value: function update(tokens) {
                var innerBounds = null, previousGutterWidth = this.getPreviousGutterWidth();
                this.updateSyntax(tokens);
                this.updateGutter(tokens);
                var gutterWidth = this.getGutterWidth();
                if (previousGutterWidth !== gutterWidth) {
                    previousGutterWidth = gutterWidth; ///
                    this.setPreviousGutterWidth(previousGutterWidth);
                    innerBounds = this.resize();
                }
                return innerBounds;
            }
        },
        {
            key: "resize",
            value: function resize() {
                var innerBounds = this.getInnerBounds(), bounds = innerBounds; ///
                this.positionGutter();
                this.setSyntaxBounds(bounds);
                return innerBounds;
            }
        },
        {
            key: "getPreviousGutterWidth",
            value: function getPreviousGutterWidth() {
                var state = this.getState(), previousGutterWidth = state.previousGutterWidth;
                return previousGutterWidth;
            }
        },
        {
            key: "setPreviousGutterWidth",
            value: function setPreviousGutterWidth(previousGutterWidth) {
                this.updateState({
                    previousGutterWidth: previousGutterWidth
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _properties = this.properties, hiddenGutter = _properties.hiddenGutter, scrollbarThickness = _properties.scrollbarThickness, hidden = hiddenGutter; ///
                return [
                    /*#__PURE__*/ _easy.React.createElement(_gutter.default, {
                        hidden: hidden
                    }),
                    /*#__PURE__*/ _easy.React.createElement(_syntax.default, {
                        scrollbarThickenss: scrollbarThickness
                    }), 
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), resizePrettyPrinter = this.resize.bind(this), updatePrettyPrinter = this.update.bind(this), scrollPrettyPrinter = this.scroll.bind(this), setPrettyPrinterWidth = this.setWidth.bind(this), setPrettyPrinterHeight = this.setHeight.bind(this), parentContext1 = Object.assign({
                }, context, {
                    resizePrettyPrinter: resizePrettyPrinter,
                    updatePrettyPrinter: updatePrettyPrinter,
                    scrollPrettyPrinter: scrollPrettyPrinter,
                    setPrettyPrinterWidth: setPrettyPrinterWidth,
                    setPrettyPrinterHeight: setPrettyPrinterHeight
                });
                return parentContext1;
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousGutterWidth = 0;
                this.setState({
                    previousGutterWidth: previousGutterWidth
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext([
                    "getGutterWidth",
                    "setSyntaxBounds",
                    "positionGutter",
                    "updateGutter",
                    "updateSyntax",
                    "scrollGutter",
                    "scrollSyntax"
                ]);
                this.setInitialState();
            }
        }
    ]);
    return PrettyPrinter;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PrettyPrinter, "tagName", "div");
_defineProperty(PrettyPrinter, "defaultProperties", {
    className: "pretty-printer"
});
_defineProperty(PrettyPrinter, "ignoredProperties", [
    "hiddenGutter",
    "scrollbarThickness"
]);
var _default = (0, _easyWithStyle).default(PrettyPrinter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiQm91bmRzIiwiRWxlbWVudCIsIkd1dHRlciIsIlN5bnRheCIsIlByZXR0eVByaW50ZXIiLCJnZXRXaWR0aCIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImdldEhlaWdodCIsImhlaWdodCIsImdldElubmVyQm91bmRzIiwiZ3V0dGVyV2lkdGgiLCJnZXRHdXR0ZXJXaWR0aCIsInRvcCIsImxlZnQiLCJpbm5lckJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsR3V0dGVyIiwic2Nyb2xsU3ludGF4IiwidXBkYXRlIiwidG9rZW5zIiwicHJldmlvdXNHdXR0ZXJXaWR0aCIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVTeW50YXgiLCJ1cGRhdGVHdXR0ZXIiLCJzZXRQcmV2aW91c0d1dHRlcldpZHRoIiwicmVzaXplIiwiYm91bmRzIiwicG9zaXRpb25HdXR0ZXIiLCJzZXRTeW50YXhCb3VuZHMiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJjaGlsZEVsZW1lbnRzIiwiaGlkZGVuR3V0dGVyIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwicHJvcGVydGllcyIsInNjcm9sbGJhclRoaWNrZW5zcyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFQSxHQUFNLENBQU4sS0FBTTtBQUUxQixHQUFVLENBQVYsT0FBVTtBQUNWLEdBQVUsQ0FBVixPQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBcUtXLENBZXhDOzs7Ozs7O0lBbExNLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2pCLEdBQVEsRUFBUixDQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUU1QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ1gsSUFBSSxDQUFDLElBQUk7Z0JBQ1gsQ0FBQztnQkFFRCxHQUFLLENBQUMsS0FBSyx3QkFSVCxhQUFhLGFBUUssQ0FBUSxXQUFkLElBQUs7Z0JBRW5CLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxJQUFJLENBQUMsSUFBSTtnQkFDWCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQzs7O1lBRUQsR0FBUyxFQUFULENBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBRTVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFD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ZixDQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLEdBQUcsQ0FBQztnQkFDakIsR0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUM7Z0JBRTdCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDYixtQkFBbUIsRUFBbkIsbUJBQW1CO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVSxFQUFWLENBQVU7bUJBQVYsUUFBUSxDQUFSLFVBQVUsR0FBRyxDQUFDO2dCQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDbEIsQ0FBZ0I7b0JBQ2hCLENBQWlCO29CQUNqQixDQUFnQjtvQkFDaEIsQ0FBYztvQkFDZCxDQUFjO29CQUNkLENBQWM7b0JBQ2QsQ0FBYztnQkFDaEIsQ0FBQztnQkFFRCxJQUFJLENBQUMsZUFBZTtZQUN0QixDQUFDOzs7V0FySkcsYUFBYTttQkFMb0IsS0FBTTtnQkFLdkMsYUFBYSxFQXVKVixDQUFPLFVBQUcsQ0FBSztnQkF2SmxCLGFBQWEsRUF5SlYsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBZ0I7QUFDN0IsQ0FBQztnQkEzSkcsYUFBYSxFQTZKVixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLENBQWM7SUFDZCxDQUFvQjtBQUN0QixDQUFDO21CQXZLbUIsY0FBaUIsVUEwS2QsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKCkge1xuICAgIGNvbnN0IGd1dHRlcldpZHRoID0gdGhpcy5nZXRHdXR0ZXJXaWR0aCgpO1xuXG4gICAgbGV0IHRvcCA9IDAsIC8vL1xuICAgICAgICBsZWZ0ID0gMCwgIC8vL1xuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGxlZnQgKz0gZ3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gZ3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zY3JvbGxHdXR0ZXIoc2Nyb2xsVG9wICxzY3JvbGxMZWZ0KTtcbiAgICB0aGlzLnNjcm9sbFN5bnRheChzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICB9XG5cbiAgdXBkYXRlKHRva2Vucykge1xuICAgIGxldCBpbm5lckJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XG5cbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuXG4gICAgY29uc3QgZ3V0dGVyV2lkdGggPSB0aGlzLmdldEd1dHRlcldpZHRoKCk7XG5cbiAgICBpZiAocHJldmlvdXNHdXR0ZXJXaWR0aCAhPT0gZ3V0dGVyV2lkdGgpIHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSBndXR0ZXJXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCk7XG5cbiAgICAgIGlubmVyQm91bmRzID0gdGhpcy5yZXNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKCksXG4gICAgICAgICAgYm91bmRzID0gaW5uZXJCb3VuZHM7IC8vL1xuXG4gICAgdGhpcy5wb3NpdGlvbkd1dHRlcigpO1xuXG4gICAgdGhpcy5zZXRTeW50YXhCb3VuZHMoYm91bmRzKTtcblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyLCBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxTeW50YXggc2Nyb2xsYmFyVGhpY2tlbnNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldHR5UHJpbnRlckhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXNpemVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNjcm9sbFByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVyV2lkdGgsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVySGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCJcbiAgICBdKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJzY3JvbGxiYXJUaGlja25lc3NcIlxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdfQ==