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
var BoundedScrollableElement = /*#__PURE__*/ function(Element) {
    _inherits(BoundedScrollableElement, Element);
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
    ]);
    return BoundedScrollableElement;
}(_wrapNativeSuper(_easy.Element));
exports.default = BoundedScrollableElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2JvdW5kZWQvc2Nyb2xsYWJsZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwiQm91bmRlZFNjcm9sbGFibGVFbGVtZW50Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsInNldFNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsInBvc2l0aW9uIiwic2V0Qm91bmRzIiwiYm91bmRzIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJlc2l6ZSIsInNldFdpZHRoIiwic2V0SGVpZ2h0Iiwic2V0VG9wIiwic2V0TGVmdCIsImdldFNjcm9sbFRvcCIsImdldFNjcm9sbExlZnQiLCJjc3MiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNO0FBRUMsR0FBMEIsQ0FBMUIsbUJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBDLHdCQUF3QixpQkFBOUIsUUFBUTtjQUFGLHdCQUF3QjthQUF4Qix3QkFBd0I7OEJBQXhCLHdCQUF3QjtnRUFBeEIsd0JBQXdCOztpQkFBeEIsd0JBQXdCOztZQUMzQyxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO2dCQUMzQixJQUFJLENBQUMsYUFBYSxD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