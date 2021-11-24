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
        "\n\n  overflow: hidden;\n  position: absolute;\n  \n  color: inherit;\n  border-color: inherit;\n  background-color: inherit;\n\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
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
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.scrollGutter(scrollTop, scrollLeft);
                this.scrollSyntax(scrollTop, scrollLeft);
            }
        },
        {
            key: "update",
            value: function update(tokens) {
                var gutterWidth = this.getGutterWidth(), previousGutterWidth = this.getPreviousGutterWidth();
                this.updateSyntax(tokens);
                this.updateGutter(tokens);
                if (previousGutterWidth !== gutterWidth) {
                    previousGutterWidth = gutterWidth; ///
                    this.setPreviousGutterWidth(previousGutterWidth);
                    this.resize();
                } else {
                    gutterWidth = null;
                }
                return gutterWidth;
            }
        },
        {
            key: "getInnerBounds",
            value: function getInnerBounds(gutterWidth) {
                var top = 0, left = 0, width = this.getWidth(), height = this.getHeight();
                left += gutterWidth;
                width -= gutterWidth;
                var bounds = _easy.Bounds.fromTopLeftWidthAndHeight(top, left, width, height), innerBounds = bounds; ///
                return innerBounds;
            }
        },
        {
            key: "resize",
            value: function resize() {
                var gutterWidth = this.getGutterWidth(), innerBounds = this.getInnerBounds(gutterWidth), syntaxBounds = innerBounds; ///
                this.positionGutter();
                this.setSyntaxBounds(syntaxBounds);
                return gutterWidth;
            }
        },
        {
            key: "setBounds",
            value: function setBounds(bounds) {
                var top = bounds.getTop(), left = bounds.getLeft(), width = bounds.getWidth(), height = bounds.getHeight();
                this.position(top, left);
                this.setWidth(width);
                this.setHeight(height);
            }
        },
        {
            key: "position",
            value: function position(top, left) {
                top = "".concat(top, "px");
                left = "".concat(left, "px");
                var css = {
                    top: top,
                    left: left
                };
                this.css(css);
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
                var context = this.getContext(), resizePrettyPrinter = this.resize.bind(this), updatePrettyPrinter = this.update.bind(this), scrollPrettyPrinter = this.scroll.bind(this), setPrettyPrinterBounds = this.setBounds.bind(this), parentContext1 = Object.assign({
                }, context, {
                    resizePrettyPrinter: resizePrettyPrinter,
                    updatePrettyPrinter: updatePrettyPrinter,
                    scrollPrettyPrinter: scrollPrettyPrinter,
                    setPrettyPrinterBounds: setPrettyPrinterBounds
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
                    "updateGutter",
                    "updateSyntax",
                    "scrollGutter",
                    "scrollSyntax",
                    "positionGutter",
                    "getGutterWidth",
                    "setSyntaxBounds"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmV0dHlQcmludGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgQm91bmRzLCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEd1dHRlciBmcm9tIFwiLi9ndXR0ZXJcIjtcbmltcG9ydCBTeW50YXggZnJvbSBcIi4vc3ludGF4XCI7XG5cbmNsYXNzIFByZXR0eVByaW50ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgaGlkZGVuID0gdGhpcy5pc0hpZGRlbigpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBzdXBlci5nZXRXaWR0aCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaXNIaWRkZW4oKTtcblxuICAgIGlmIChoaWRkZW4pIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHN1cGVyLmdldEhlaWdodCgpO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnNjcm9sbEd1dHRlcihzY3JvbGxUb3AgLHNjcm9sbExlZnQpO1xuICAgIHRoaXMuc2Nyb2xsU3ludGF4KHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gIH1cblxuICB1cGRhdGUodG9rZW5zKSB7XG4gICAgbGV0IGd1dHRlcldpZHRoID0gdGhpcy5nZXRHdXR0ZXJXaWR0aCgpLFxuICAgICAgICBwcmV2aW91c0d1dHRlcldpZHRoID0gdGhpcy5nZXRQcmV2aW91c0d1dHRlcldpZHRoKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVN5bnRheCh0b2tlbnMpO1xuXG4gICAgdGhpcy51cGRhdGVHdXR0ZXIodG9rZW5zKTtcblxuICAgIGlmIChwcmV2aW91c0d1dHRlcldpZHRoICE9PSBndXR0ZXJXaWR0aCkge1xuICAgICAgcHJldmlvdXNHdXR0ZXJXaWR0aCA9IGd1dHRlcldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKTtcblxuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ3V0dGVyV2lkdGggPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBndXR0ZXJXaWR0aDtcbiAgfVxuXG4gIGdldElubmVyQm91bmRzKGd1dHRlcldpZHRoKSB7XG4gICAgbGV0IHRvcCA9IDAsXG4gICAgICAgIGxlZnQgPSAwLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICAgIGxlZnQgKz0gZ3V0dGVyV2lkdGg7XG4gICAgd2lkdGggLT0gZ3V0dGVyV2lkdGg7XG5cbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIGlubmVyQm91bmRzID0gYm91bmRzOyAvLy9cblxuICAgIHJldHVybiBpbm5lckJvdW5kcztcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBndXR0ZXJXaWR0aCA9IHRoaXMuZ2V0R3V0dGVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckJvdW5kcyA9IHRoaXMuZ2V0SW5uZXJCb3VuZHMoZ3V0dGVyV2lkdGgpLFxuICAgICAgICAgIHN5bnRheEJvdW5kcyA9IGlubmVyQm91bmRzOyAvLy9cblxuICAgIHRoaXMucG9zaXRpb25HdXR0ZXIoKTtcblxuICAgIHRoaXMuc2V0U3ludGF4Qm91bmRzKHN5bnRheEJvdW5kcyk7XG5cbiAgICByZXR1cm4gZ3V0dGVyV2lkdGg7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBwb3NpdGlvbih0b3AsIGxlZnQpIHtcbiAgICB0b3AgPSBgJHt0b3B9cHhgO1xuICAgIGxlZnQgPSBgJHtsZWZ0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGdldFByZXZpb3VzR3V0dGVyV2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c0d1dHRlcldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c0d1dHRlcldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNHdXR0ZXJXaWR0aChwcmV2aW91c0d1dHRlcldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuR3V0dGVyLCBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBoaWRkZW4gPSBoaWRkZW5HdXR0ZXI7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8R3V0dGVyIGhpZGRlbj17aGlkZGVufSAvPixcbiAgICAgIDxTeW50YXggc2Nyb2xsYmFyVGhpY2tlbnNzPXtzY3JvbGxiYXJUaGlja25lc3N9IC8+LFxuXG4gICAgXSk7XG4gIH1cbiAgXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlc2l6ZVByZXR0eVByaW50ZXIgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICB1cGRhdGVQcmV0dHlQcmludGVyID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2Nyb2xsUHJldHR5UHJpbnRlciA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFByZXR0eVByaW50ZXJCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwge1xuICAgICAgICAgICAgcmVzaXplUHJldHR5UHJpbnRlcixcbiAgICAgICAgICAgIHVwZGF0ZVByZXR0eVByaW50ZXIsXG4gICAgICAgICAgICBzY3JvbGxQcmV0dHlQcmludGVyLFxuICAgICAgICAgICAgc2V0UHJldHR5UHJpbnRlckJvdW5kc1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzR3V0dGVyV2lkdGggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c0d1dHRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KFtcbiAgICAgIFwidXBkYXRlR3V0dGVyXCIsXG4gICAgICBcInVwZGF0ZVN5bnRheFwiLFxuICAgICAgXCJzY3JvbGxHdXR0ZXJcIixcbiAgICAgIFwic2Nyb2xsU3ludGF4XCIsXG4gICAgICBcInBvc2l0aW9uR3V0dGVyXCIsXG4gICAgICBcImdldEd1dHRlcldpZHRoXCIsXG4gICAgICBcInNldFN5bnRheEJvdW5kc1wiXG4gICAgXSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicHJldHR5LXByaW50ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImhpZGRlbkd1dHRlclwiLFxuICAgIFwic2Nyb2xsYmFyVGhpY2tuZXNzXCJcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFByZXR0eVByaW50ZXIpYFxuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgXG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG5cbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiUHJldHR5UHJpbnRlciIsImdldFdpZHRoIiwiaGlkZGVuIiwiaXNIaWRkZW4iLCJzaG93Iiwid2lkdGgiLCJoaWRlIiwiZ2V0SGVpZ2h0IiwiaGVpZ2h0Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNjcm9sbEd1dHRlciIsInNjcm9sbFN5bnRheCIsInVwZGF0ZSIsInRva2VucyIsImd1dHRlcldpZHRoIiwiZ2V0R3V0dGVyV2lkdGgiLCJwcmV2aW91c0d1dHRlcldpZHRoIiwiZ2V0UHJldmlvdXNHdXR0ZXJXaWR0aCIsInVwZGF0ZVN5bnRheCIsInVwZGF0ZUd1dHRlciIsInNldFByZXZpb3VzR3V0dGVyV2lkdGgiLCJyZXNpemUiLCJnZXRJbm5lckJvdW5kcyIsInRvcCIsImxlZnQiLCJib3VuZHMiLCJmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0IiwiaW5uZXJCb3VuZHMiLCJzeW50YXhCb3VuZHMiLCJwb3NpdGlvbkd1dHRlciIsInNldFN5bnRheEJvdW5kcyIsInNldEJvdW5kcyIsImdldFRvcCIsImdldExlZnQiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiY2hpbGRFbGVtZW50cyIsInByb3BlcnRpZXMiLCJoaWRkZW5HdXR0ZXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaGlja2Vuc3MiLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJyZXNpemVQcmV0dHlQcmludGVyIiwiYmluZCIsInVwZGF0ZVByZXR0eVByaW50ZXIiLCJzY3JvbGxQcmV0dHlQcmludGVyIiwic2V0UHJldHR5UHJpbnRlckJvdW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVBLEdBQU0sQ0FBTixLQUFNO0FBRTFCLEdBQVUsQ0FBVixPQUFVO0FBQ1YsR0FBVSxDQUFWLE9BQVU7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