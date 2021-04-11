"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _scrollbarThickness = _interopRequireDefault(require("../../scrollbarThickness"));
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
var _Element;
var BoundedScrollableElement = function(Element1) {
    _inherits(BoundedScrollableElement, _easy.Element);
    function BoundedScrollableElement() {
        _classCallCheck(this, BoundedScrollableElement);
        return _possibleConstructorReturn(this, _getPrototypeOf(BoundedScrollableElement).apply(this, arguments));
    }
    _createClass(BoundedScrollableElement, [
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
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var boundedScrollableElement = (_Element = _easy.Element).fromClass.apply(_Element, [
                    Class,
                    properties
                ].concat(_toConsumableArray(remainingArguments)));
                boundedScrollableElement.initialise();
                return boundedScrollableElement;
            }
        }
    ]);
    return BoundedScrollableElement;
}(_wrapNativeSuper(_easy.Element));
exports.default = BoundedScrollableElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBzY3JvbGxiYXJUaGlja25lc3MgZnJvbSBcIi4uLy4uL3Njcm9sbGJhclRoaWNrbmVzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2Nyb2xsKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3QgdG9wID0gdGhpcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gdGhpcy5nZXRMZWZ0KCk7XG5cbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB3aWR0aCA9IHdpZHRoIC0gc2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIGhlaWdodCA9IGhlaWdodCAtIHNjcm9sbGJhclRoaWNrbmVzcztcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICBjb25zdCB0b3AgPSB0aGlzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmdldExlZnQoKTtcblxuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHBvc2l0aW9uKHRvcCwgbGVmdCkge1xuICAgIHRoaXMuc2V0VG9wKHRvcCk7XG4gICAgdGhpcy5zZXRMZWZ0KGxlZnQpO1xuXG4gICAgbGV0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICB0b3AgPSB0b3AgLSBzY3JvbGxUb3A7XG4gICAgbGVmdCA9IGxlZnQgLSBzY3JvbGxMZWZ0O1xuICAgIHdpZHRoID0gd2lkdGggKyBzY3JvbGxMZWZ0O1xuICAgIGhlaWdodCA9IGhlaWdodCArIHNjcm9sbFRvcDtcblxuICAgIHRvcCA9IGAke3RvcH1weGA7XG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gdG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIGxlZnQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IGhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBzY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgc2Nyb2xsTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gc2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBsZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgd2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b3AgPSAwLFxuICAgICAgICAgIGxlZnQgPSAwLFxuICAgICAgICAgIHdpZHRoID0gMCxcbiAgICAgICAgICBoZWlnaHQgPSAwLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IDAsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgYm91bmRlZFNjcm9sbGFibGVFbGVtZW50ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBib3VuZGVkU2Nyb2xsYWJsZUVsZW1lbnQuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGJvdW5kZWRTY3JvbGxhYmxlRWxlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVksS0FBTTtJQUVDLG1CQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeUtwQixRQUFPO0lBdkt2Qix3QkFBd0IsWUFB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