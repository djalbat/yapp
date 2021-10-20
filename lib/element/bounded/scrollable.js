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
var ScrollableBoundedElement = /*#__PURE__*/ function(Element) {
    _inherits(ScrollableBoundedElement, Element);
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
                var _properties = this.properties, scrollbarThickness = _properties.scrollbarThickness;
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
    return ScrollableBoundedElement;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ScrollableBoundedElement, "ignoreProperties", [
    "scrollbarThickness"
]);
exports.default = ScrollableBoundedElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGFibGVCb3VuZGVkRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZHMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IGJvdW5kcy5nZXRMZWZ0KCksXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICB3aWR0aCA9IHdpZHRoIC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIGhlaWdodCA9IGhlaWdodCAtIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHBvc2l0aW9uKHRvcCwgbGVmdCkge1xuICAgIHRoaXMuc2V0VG9wKHRvcCk7XG4gICAgdGhpcy5zZXRMZWZ0KGxlZnQpO1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0b3AgPSB0b3AgLSBzY3JvbGxUb3A7XG4gICAgbGVmdCA9IGxlZnQgLSBzY3JvbGxMZWZ0O1xuICAgIHdpZHRoID0gd2lkdGggKyBzY3JvbGxMZWZ0O1xuICAgIGhlaWdodCA9IGhlaWdodCArIHNjcm9sbFRvcDtcblxuICAgIHRvcCA9IGAke3RvcH1weGA7XG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gdG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgd2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgICAgIGxlZnQgPSAwLFxuICAgICAgICAgIHdpZHRoID0gMCxcbiAgICAgICAgICBoZWlnaHQgPSAwLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZVByb3BlcnRpZXMgPSBbXG4gICAgXCJzY3JvbGxiYXJUaGlja25lc3NcIlxuICBdO1xufVxuIl0sIm5hbWVzIjpbIlNjcm9sbGFibGVCb3VuZGVkRWxlbWVudCIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJzZXRTY3JvbGxUb3AiLCJzZXRTY3JvbGxMZWZ0IiwidG9wIiwiZ2V0VG9wIiwibGVmdCIsImdldExlZnQiLCJwb3NpdGlvbiIsInNldEJvdW5kcyIsImJvdW5kcyIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwcm9wZXJ0aWVzIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRUb3AiLCJzZXRMZWZ0IiwiZ2V0U2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsTGVmdCIsImNzcyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpZ25vcmVQ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