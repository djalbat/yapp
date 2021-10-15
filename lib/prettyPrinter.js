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
            value: function getInnerBounds(previousGutterWidth) {
                var top = 0, left = 0, width = this.getWidth(), height = this.getHeight();
                left += previousGutterWidth;
                width -= previousGutterWidth;
                var innerBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);
                return innerBounds;
            }
        },
        {
            key: "getRichTextareaBounds",
            value: function getRichTextareaBounds(innerBounds) {
                var top = innerBounds.getTop(), left = innerBounds.getLeft(), width = innerBounds.getWidth(), height = innerBounds.getHeight(), richTextareaBounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height);
                return richTextareaBounds;
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
                var richTextareaBounds = null, previousGutterWidth = this.getPreviousGutterWidth();
                this.updateSyntax(tokens);
                this.updateGutter(tokens);
                var gutterWidth = this.getGutterWidth();
                if (previousGutterWidth !== gutterWidth) {
                    previousGutterWidth = gutterWidth; ///
                    this.setPreviousGutterWidth(previousGutterWidth);
                    richTextareaBounds = this.resize();
                }
                return richTextareaBounds;
            }
        },
        {
            key: "resize",
            value: function resize() {
                var previousGutterWidth = this.getPreviousGutterWidth(), innerBounds = this.getInnerBounds(previousGutterWidth), richTextareaBounds = this.getRichTextareaBounds(innerBounds), bounds = innerBounds; ///
                this.positionGutter();
                this.setSyntaxBounds(bounds);
                return richTextareaBounds;
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
                return [
                    /*#__PURE__*/ _easy.React.createElement(_gutter.default, null),
                    /*#__PURE__*/ _easy.React.createElement(_syntax.default, null), 
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
var _default = (0, _easyWithStyle).default(PrettyPrinter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiQm91bmRzIiwiRWxlbWVudCIsIkd1dHRlciIsIlN5bnRheCIsIlByZXR0eVByaW50ZXIiLCJnZXRXaWR0aCIsImhpZGRlbiIsImlzSGlkZGVuIiwic2hvdyIsIndpZHRoIiwiaGlkZSIsImdldEhlaWdodCIsImhlaWdodCIsImdldElubmVyQm91bmRzIiwicHJldmlvdXNHdXR0ZXJXaWR0aCIsInRvcCIsImxlZnQiLCJpbm5lckJvdW5kcyIsImZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQiLCJnZXRSaWNoVGV4dGFyZWFCb3VuZHMiLCJnZXRUb3AiLCJnZXRMZWZ0IiwicmljaFRleHRhcmVhQm91bmRzIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInVwZGF0ZSIsInRva2VucyIsImdldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJ1cGRhdGVTeW50YXgiLCJ1cGRhdGVHdXR0ZXIiLCJndXR0ZXJXaWR0aCIsImdldEd1dHRlcldpZHRoIiwic2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInJlc2l6ZSIsImJvdW5kcyIsInBvc2l0aW9uR3V0dGVyIiwic2V0U3ludGF4Qm91bmRzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlc2l6ZVByZXR0eVByaW50ZXIiLCJiaW5kIiwidXBkYXRlUHJldHR5UHJpbnRlciIsInNjcm9sbFByZXR0eVByaW50ZXIiLCJzZXRQcmV0dHlQcmludGVyV2lkdGgiLCJzZXRXaWR0aCIsInNldFByZXR0eVByaW50ZXJIZWlnaHQiLCJzZXRIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRUEsR0FBTSxDQUFOLEtBQU07QUFFMUIsR0FBVSxDQUFWLE9BQVU7QUFDVixHQUFVLENBQVYsT0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXVLVyxDQWV4Qzs7Ozs7OztJQXBMTSxhQUFhLGlCQUFuQixRQUFRO2NBQUYsYUFBYTthQUFiLGFBQWE7OEJBQWIsYUFBYTtnRUFBYixhQUFhOztpQkFBYixhQUFhOztZQUNqQixHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUTtnQkFFNUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNYLElBQUksQ0FBQyxJQUFJO2dCQUNYLENBQUM7Z0JBRUQsR0FBSyxDQUFDLEtBQUssd0JBUlQsYUFBYSxhQVFLLENBQVEsV0FBZCxJQUFLO2dCQUVuQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ1gsSUFBSSxDQUFDLElBQUk7Z0JBQ1gsQ0FBQztnQkFFRCxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztZQUVELEdBQVMsRUFBVCxDQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUU1QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ1gsSUFBSSxDQUFDLElBQUk7Z0JBQ1gsQ0FB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QUFuQixtQkFBbUI7b0JBQ25CLG1CQUFtQixFQUFuQixtQkFBbUI7b0JBQ25CLHFCQUFxQixFQUFyQixxQkFBcUI7b0JBQ3JCLHNCQUFzQixFQUF0QixzQkFBc0I7Z0JBQ3hCLENBQUM7Z0JBRVAsTUFBTSxDQUFDLGNBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixHQUFLLENBQUMsbUJBQW1CLEdBQUcsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNiLG1CQUFtQixFQUFuQixtQkFBbUI7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFVLEVBQVYsQ0FBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNsQixDQUFnQjtvQkFDaEIsQ0FBaUI7b0JBQ2pCLENBQWdCO29CQUNoQixDQUFjO29CQUNkLENBQWM7b0JBQ2QsQ0FBYztvQkFDZCxDQUFjO2dCQUNoQixDQUFDO2dCQUVELElBQUksQ0FBQyxlQUFlO1lBQ3RCLENBQUM7OztXQTVKRyxhQUFhO21CQUxvQixLQUFNO2dCQUt2QyxhQUFhLEVBOEpWLENBQU8sVUFBRyxDQUFLO2dCQTlKbEIsYUFBYSxFQWdLVixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFnQjtBQUM3QixDQUFDO21CQXpLbUIsY0FBaUIsVUE0S2QsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICBsZXQgdG9wID0gMCwgLy8vXG4gICAgICAgIGxlZnQgPSAwLCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgbGVmdCArPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuICAgIHdpZHRoIC09IHByZXZpb3VzR3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBpbm5lckJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gaW5uZXJCb3VuZHMuZ2V0TGVmdCgpLC8vL1xuICAgICAgICAgIHdpZHRoID0gaW5uZXJCb3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBpbm5lckJvdW5kcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XG5cbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuXG4gICAgY29uc3QgZ3V0dGVyV2lkdGggPSB0aGlzLmdldEd1dHRlcldpZHRoKCk7XG5cbiAgICBpZiAocHJldmlvdXNHdXR0ZXJXaWR0aCAhPT0gZ3V0dGVyV2lkdGgpIHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSBndXR0ZXJXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCk7XG5cbiAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSxcbiAgICAgICAgICBib3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnBvc2l0aW9uR3V0dGVyKCk7XG5cbiAgICB0aGlzLnNldFN5bnRheEJvdW5kcyhib3VuZHMpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIC8+LFxuICAgICAgPFN5bnRheCAvPixcblxuICAgIF0pO1xuICB9XG4gIFxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZXNpemVQcmV0dHlQcmludGVyID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlciA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNjcm9sbFByZXR0eVByaW50ZXIgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRQcmV0dHlQcmludGVyV2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXR0eVByaW50ZXJIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICBzY3JvbGxQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgc2V0UHJldHR5UHJpbnRlcldpZHRoLFxuICAgICAgICAgICAgc2V0UHJldHR5UHJpbnRlckhlaWdodFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwiZ2V0R3V0dGVyV2lkdGhcIixcbiAgICAgIFwic2V0U3ludGF4Qm91bmRzXCIsXG4gICAgICBcInBvc2l0aW9uR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZUd1dHRlclwiLFxuICAgICAgXCJ1cGRhdGVTeW50YXhcIixcbiAgICAgIFwic2Nyb2xsR3V0dGVyXCIsXG4gICAgICBcInNjcm9sbFN5bnRheFwiXG4gICAgXSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdfQ==