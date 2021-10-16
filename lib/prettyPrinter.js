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
var PrettyPrinter = /*#__PURE__*/ function(Element1) {
    _inherits(PrettyPrinter, Element1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpIHtcbiAgICBsZXQgdG9wID0gMCwgLy8vXG4gICAgICAgIGxlZnQgPSAwLCAgLy8vXG4gICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgbGVmdCArPSBwcmV2aW91c0d1dHRlcldpZHRoO1xuICAgIHdpZHRoIC09IHByZXZpb3VzR3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBpbm5lckJvdW5kcyA9IEJvdW5kcy5mcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gaW5uZXJCb3VuZHM7XG4gIH1cblxuICBnZXRSaWNoVGV4dGFyZWFCb3VuZHMoaW5uZXJCb3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBpbm5lckJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gaW5uZXJCb3VuZHMuZ2V0TGVmdCgpLC8vL1xuICAgICAgICAgIHdpZHRoID0gaW5uZXJCb3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBpbm5lckJvdW5kcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByaWNoVGV4dGFyZWFCb3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IHJpY2hUZXh0YXJlYUJvdW5kcyA9IG51bGwsXG4gICAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSB0aGlzLmdldFByZXZpb3VzR3V0dGVyV2lkdGgoKTtcblxuICAgIHRoaXMudXBkYXRlU3ludGF4KHRva2Vucyk7XG5cbiAgICB0aGlzLnVwZGF0ZUd1dHRlcih0b2tlbnMpO1xuXG4gICAgY29uc3QgZ3V0dGVyV2lkdGggPSB0aGlzLmdldEd1dHRlcldpZHRoKCk7XG5cbiAgICBpZiAocHJldmlvdXNHdXR0ZXJXaWR0aCAhPT0gZ3V0dGVyV2lkdGgpIHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGggPSBndXR0ZXJXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzR3V0dGVyV2lkdGgocHJldmlvdXNHdXR0ZXJXaWR0aCk7XG5cbiAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMucmVzaXplKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJCb3VuZHMgPSB0aGlzLmdldElubmVyQm91bmRzKHByZXZpb3VzR3V0dGVyV2lkdGgpLFxuICAgICAgICAgIHJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuZ2V0UmljaFRleHRhcmVhQm91bmRzKGlubmVyQm91bmRzKSxcbiAgICAgICAgICBib3VuZHMgPSBpbm5lckJvdW5kczsgLy8vXG5cbiAgICB0aGlzLnBvc2l0aW9uR3V0dGVyKCk7XG5cbiAgICB0aGlzLnNldFN5bnRheEJvdW5kcyhib3VuZHMpO1xuXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYUJvdW5kcztcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyLCBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxTeW50YXggc2Nyb2xsYmFyVGhpY2tlbnNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXR0eVByaW50ZXJXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0UHJldHR5UHJpbnRlckhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCB7XG4gICAgICAgICAgICByZXNpemVQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgdXBkYXRlUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHNjcm9sbFByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVyV2lkdGgsXG4gICAgICAgICAgICBzZXRQcmV0dHlQcmludGVySGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzR3V0dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoW1xuICAgICAgXCJnZXRHdXR0ZXJXaWR0aFwiLFxuICAgICAgXCJzZXRTeW50YXhCb3VuZHNcIixcbiAgICAgIFwicG9zaXRpb25HdXR0ZXJcIixcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCJcbiAgICBdKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwcmV0dHktcHJpbnRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiaGlkZGVuR3V0dGVyXCIsXG4gICAgXCJzY3JvbGxiYXJUaGlja25lc3NcIlxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUHJldHR5UHJpbnRlcilgXG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcblxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJp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