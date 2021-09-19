"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _scrollbarThickness = _interopRequireDefault(require("../../scrollbarThickness"));
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
var ScrollableBoundedElement = /*#__PURE__*/ function(Element1) {
    _inherits(ScrollableBoundedElement, Element1);
    function ScrollableBoundedElement() {
        _classCallCheck(this, ScrollableBoundedElement);
        return _possibleConstructorReturn(this, _getPrototypeOf(ScrollableBoundedElement).apply(this, arguments));
    }
    _createClass(ScrollableBoundedElement, [
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
            key: "setBounds",
            value: function setBounds(bounds) {
                var top = bounds.getTop(), left = bounds.getLeft(), width = bounds.getWidth(), height = bounds.getHeight();
                this.resize(width, height);
                this.position(top, left);
            }
        },
        {
            key: "resize",
            value: function resize(width, height) {
                width = width - _scrollbarThickness.default;
                height = height - _scrollbarThickness.default;
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
    return ScrollableBoundedElement;
}(_wrapNativeSuper(_easy.Element));
exports.default = ScrollableBoundedElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzY3JvbGxiYXJUaGlja25lc3MgZnJvbSBcIi4uLy4uL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxhYmxlQm91bmRlZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gdGhpcy5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3aWR0aCA9IHdpZHRoIC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIGhlaWdodCA9IGhlaWdodCAtIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHBvc2l0aW9uKHRvcCwgbGVmdCkge1xuICAgIHRoaXMuc2V0VG9wKHRvcCk7XG4gICAgdGhpcy5zZXRMZWZ0KGxlZnQpO1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0b3AgPSB0b3AgLSBzY3JvbGxUb3A7XG4gICAgbGVmdCA9IGxlZnQgLSBzY3JvbGxMZWZ0O1xuICAgIHdpZHRoID0gd2lkdGggKyBzY3JvbGxMZWZ0O1xuICAgIGhlaWdodCA9IGhlaWdodCArIHNjcm9sbFRvcDtcblxuICAgIHRvcCA9IGAke3RvcH1weGA7XG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gdG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgd2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgICAgIGxlZnQgPSAwLFxuICAgICAgICAgIHdpZHRoID0gMCxcbiAgICAgICAgICBoZWlnaHQgPSAwLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUVDLEdBQTBCLENBQTFCLG1CQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQyx3QkFBd0I7Y0FBeEIsd0JBQXdCO2FBQXhCLHdCQUF3Qjs4QkFBeEIsd0JBQXdCO2dFQUF4Qix3QkFBd0I7O2lCQUF4Qix3QkFBd0I7O1lBQzNDLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7cUJBQ3hCLFlBQVksQ0FBQyxTQUFTO3FCQUN0QixhQUFhLENBQUMsVUFBVTtnQkFFN0IsR0FBSyxDQUFDLEdBQUcsUUFBUSxNQUFNLElBQ2pCLElBQUksUUFBUSxPQUFPO3FCQUVwQixRQUFRLENBQUMsR0FBRyxFQUFFLElBQUk7WUFDekIs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