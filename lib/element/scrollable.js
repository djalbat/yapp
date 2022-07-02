"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ScrollableElement;
    }
});
var _easy = require("easy");
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
var ScrollableElement = /*#__PURE__*/ function(Element) {
    _inherits(ScrollableElement, Element);
    var _super = _createSuper(ScrollableElement);
    function ScrollableElement() {
        _classCallCheck(this, ScrollableElement);
        return _super.apply(this, arguments);
    }
    _createClass(ScrollableElement, [
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                this.setScrollTop(scrollTop);
                this.setScrollLeft(scrollLeft);
                var top = this.getTop(), left = this.getLeft();
                this.position(top, left);
            }
        },
        {
            key: "resize",
            value: function resize(width, height) {
                var scrollbarThickness = this.properties.scrollbarThickness;
                width = width - scrollbarThickness;
                height = height - scrollbarThickness;
                this.setWidth(width);
                this.setHeight(height);
                var top = this.getTop(), left = this.getLeft();
                this.position(top, left);
            }
        },
        {
            key: "position",
            value: function position(top, left) {
                this.setTop(top);
                this.setLeft(left);
                var width = this.getWidth(), height = this.getHeight();
                var scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
                top = top - scrollTop;
                left = left - scrollLeft;
                width = width + scrollLeft;
                height = height + scrollTop;
                top = "".concat(top, "px");
                left = "".concat(left, "px");
                width = "".concat(width, "px");
                height = "".concat(height, "px");
                var css = {
                    top: top,
                    left: left,
                    width: width,
                    height: height
                };
                this.css(css);
            }
        },
        {
            key: "getTop",
            value: function getTop() {
                var state = this.getState(), top = state.top;
                return top;
            }
        },
        {
            key: "getLeft",
            value: function getLeft() {
                var state = this.getState(), left = state.left;
                return left;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var state = this.getState(), width = state.width;
                return width;
            }
        },
        {
            key: "getHeight",
            value: function getHeight() {
                var state = this.getState(), height = state.height;
                return height;
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
            key: "getScrollLeft",
            value: function getScrollLeft() {
                var state = this.getState(), scrollLeft = state.scrollLeft;
                return scrollLeft;
            }
        },
        {
            key: "setTop",
            value: function setTop(top) {
                this.updateState({
                    top: top
                });
            }
        },
        {
            key: "setLeft",
            value: function setLeft(left) {
                this.updateState({
                    left: left
                });
            }
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                this.updateState({
                    width: width
                });
            }
        },
        {
            key: "setHeight",
            value: function setHeight(height) {
                this.updateState({
                    height: height
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
            key: "setScrollLeft",
            value: function setScrollLeft(scrollLeft) {
                this.updateState({
                    scrollLeft: scrollLeft
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var top = 0, left = 0, width = 0, height = 0, scrollTop = 0, scrollLeft = 0;
                this.setState({
                    top: top,
                    left: left,
                    width: width,
                    height: height,
                    scrollTop: scrollTop,
                    scrollLeft: scrollLeft
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
    return ScrollableElement;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ScrollableElement, "ignoreProperties", [
    "scrollbarThickness"
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Njcm9sbGFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeyBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHdpZHRoID0gd2lkdGggLSBzY3JvbGxiYXJUaGlja25lc3M7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdGhpcy5zZXRUb3AodG9wKTtcbiAgICB0aGlzLnNldExlZnQobGVmdCk7XG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRvcCA9IHRvcCAtIHNjcm9sbFRvcDtcbiAgICBsZWZ0ID0gbGVmdCAtIHNjcm9sbExlZnQ7XG4gICAgd2lkdGggPSB3aWR0aCArIHNjcm9sbExlZnQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0ICsgc2Nyb2xsVG9wO1xuXG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB0b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgd2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgaGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRvcCA9IDAsXG4gICAgICAgICAgbGVmdCA9IDAsXG4gICAgICAgICAgd2lkdGggPSAwLFxuICAgICAgICAgIGhlaWdodCA9IDAsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9wLFxuICAgICAgbGVmdCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlUHJvcGVydGllcyA9IFtcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXG4gIF07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNjcm9sbGFibGVFbGVtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsInBvc2l0aW9uIiwicmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJwcm9wZXJ0aWVzIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRUb3AiLCJzZXRMZWZ0IiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJnZXRTY3JvbGxUb3AiLCJnZXRTY3JvbGxMZWZ0IiwiY3NzIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJpZ25vcmVQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsaUJBQWlCOzs7b0JBRmQsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYs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