"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = ScrollableElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Njcm9sbGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeyBzY3JvbGxiYXJUaGlja25lc3MgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHdpZHRoID0gd2lkdGggLSBzY3JvbGxiYXJUaGlja25lc3M7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdGhpcy5zZXRUb3AodG9wKTtcbiAgICB0aGlzLnNldExlZnQobGVmdCk7XG5cbiAgICBsZXQgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgIHRvcCA9IHRvcCAtIHNjcm9sbFRvcDtcbiAgICBsZWZ0ID0gbGVmdCAtIHNjcm9sbExlZnQ7XG4gICAgd2lkdGggPSB3aWR0aCArIHNjcm9sbExlZnQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0ICsgc2Nyb2xsVG9wO1xuXG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB0b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gbGVmdDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgd2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgaGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBnZXRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBzY3JvbGxMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGxlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRvcCA9IDAsXG4gICAgICAgICAgbGVmdCA9IDAsXG4gICAgICAgICAgd2lkdGggPSAwLFxuICAgICAgICAgIGhlaWdodCA9IDAsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gMCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdG9wLFxuICAgICAgbGVmdCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgc2Nyb2xsVG9wLFxuICAgICAgc2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlUHJvcGVydGllcyA9IFtcbiAgICBcInNjcm9sbGJhclRoaWNrbmVzc1wiXG4gIF07XG59XG4iXSwibmFtZXMiOlsiU2Nyb2xsYWJsZUVsZW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsTGVmdCIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0IiwicG9zaXRpb24iLCJyZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsInNjcm9sbGJhclRoaWNrbmVzcyIsInByb3BlcnRpZXMiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsInNldFRvcCIsInNldExlZnQiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJjc3MiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaWdub3JlUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVRBLGlCQUFpQixpQkFBdkIsUUFBUTs7O2FBQUZBLGlCQUFpQjs7Ozs7O1lBQ3BDQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFB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