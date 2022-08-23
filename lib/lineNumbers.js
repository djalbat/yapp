"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _constants = require("./constants");
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  margin: 0 6px 0 6px;\n  position: relative;\n  text-align: right;\n  user-select: none;\n  pointer-events: none;\n  font-family: 'DejaVu Sans Mono', Menlo, 'Lucida Console', Monaco, monospace;\n\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LineNumbers = /*#__PURE__*/ function(Element) {
    _inherits(LineNumbers, Element);
    var _super = _createSuper(LineNumbers);
    function LineNumbers() {
        _classCallCheck(this, LineNumbers);
        return _super.apply(this, arguments);
    }
    _createClass(LineNumbers, [
        {
            key: "update",
            value: function update(lineCount) {
                var html = _constants.EMPTY_STRING;
                for(var lineNumber = 1; lineNumber <= lineCount; lineNumber++){
                    html = "".concat(html).concat(lineNumber, "<br/>");
                }
                this.html(html);
            }
        },
        {
            key: "scroll",
            value: function scroll(scrollTop, scrollLeft) {
                var top = "".concat(-scrollTop, "px"), css = {
                    top: top
                };
                this.css(css);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var scrollLineNumbers = this.scroll.bind(this), updateLineNumbers = this.update.bind(this); ///
                return {
                    scrollLineNumbers: scrollLineNumbers,
                    updateLineNumbers: updateLineNumbers
                };
            }
        }
    ]);
    return LineNumbers;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(LineNumbers, "tagName", "div");
_defineProperty(LineNumbers, "defaultProperties", {
    className: "line-numbers"
});
var _default = (0, _easyWithStyle.default)(LineNumbers)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lTnVtYmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUobGluZUNvdW50KSB7XHJcbiAgICBsZXQgaHRtbCA9IEVNUFRZX1NUUklORztcclxuXHJcbiAgICBmb3IgKGxldCBsaW5lTnVtYmVyID0gMTsgbGluZU51bWJlciA8PSBsaW5lQ291bnQ7IGxpbmVOdW1iZXIrKykge1xyXG4gICAgICBodG1sID0gYCR7aHRtbH0ke2xpbmVOdW1iZXJ9PGJyLz5gO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaHRtbChodG1sKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbChzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHtcclxuICAgIGNvbnN0IHRvcCA9IGAkey1zY3JvbGxUb3B9cHhgLFxyXG4gICAgICAgICAgY3NzID0ge1xyXG4gICAgICAgICAgICB0b3BcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgdGhpcy5jc3MoY3NzKTtcclxuICB9XHJcblxyXG4gIHBhcmVudENvbnRleHQoKSB7XHJcblx0ICBjb25zdCBzY3JvbGxMaW5lTnVtYmVycyA9IHRoaXMuc2Nyb2xsLmJpbmQodGhpcyksIC8vL1xyXG4gICAgICAgICAgdXBkYXRlTGluZU51bWJlcnMgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIHNjcm9sbExpbmVOdW1iZXJzLFxyXG4gICAgICB1cGRhdGVMaW5lTnVtYmVyc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJsaW5lLW51bWJlcnNcIlxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMaW5lTnVtYmVycylgXHJcblxyXG4gIG1hcmdpbjogMCA2cHggMCA2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGVqYVZ1IFNhbnMgTW9ubycsIE1lbmxvLCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuXHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cclxuYDtcclxuIl0sIm5hbWVzIjpbIkxpbmVOdW1iZXJzIiwidXBkYXRlIiwibGluZUNvdW50IiwiaHRtbCIsIkVNUFRZX1NUUklORyIsImxpbmVOdW1iZXIiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwidG9wIiwiY3NzIiwicGFyZW50Q29udGV4dCIsInNjcm9sbExpbmVOdW1iZXJzIiwiYmluZCIsInVwZGF0ZUxpbmVOdW1iZXJzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTZDYixTQWFFOzs7ZUFiRixRQWFFOzs7a0VBeERvQixpQkFBaUI7b0JBRWYsTUFBTTt5QkFFRCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBQSxBQUFNQSxXQUFXLGlCQXFDaEIsQUFyQ0Q7Y0FBTUEsV0FBVzs4QkFBWEEsV0FBVzthQUFYQSxXQUFXOzhCQUFYQSxXQUFXOzs7aUJBQVhBLFdBQVc7O1lBQ2ZDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxDQUFDQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUlDLElBQUksR0FBR0MsVUFBWSxhQUFBLEFBQUM7Z0JBRXhCLElBQUssSUFBSUMsVUFBVSxHQUFHLENBQUMsRUFBRUEsVUFBVSxJQUFJSCxTQUFTLEVBQUVHLFVBQVUsRUFBRSxDQUFFO29CQUM5REYsSUFBSSxHQUFHLEFBQUMsRUFBQSxDQUFTRSxNQUFVLENBQWpCRixJQUFJLENBQWMsQ0FBQSxNQUFLLENBQWhCRSxVQUFVLEVBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsSUFBSSxDQUFDRixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7OztZQUVERyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxVQUFVLEVBQUU7Z0JBQzVCLElBQU1DLEdBQUcsR0FBRyxBQUFDLEVBQUEsQ0FBYSxNQUFFLENBQWIsQ0FBQ0YsU0FBUyxFQUFDLElBQUUsQ0FBQyxFQUN2QkcsR0FBRyxHQUFHO29CQUNKRCxHQUFHLEVBQUhBLEdBQUc7aUJBQ0osQUFBQztnQkFFUixJQUFJLENBQUNDLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQzs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNmLElBQU1DLGlCQUFpQixHQUFHLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ3pDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNiLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEVBQUUsR0FBRztnQkFFdEQsT0FBUTtvQkFDTkQsaUJBQWlCLEVBQWpCQSxpQkFBaUI7b0JBQ2pCRSxpQkFBaUIsRUFBakJBLGlCQUFpQjtpQkFDbEIsQ0FBRTtZQUNMLENBQUM7OztXQTVCR2QsV0FBVztDQW1DaEIsa0JBbkN5QmUsS0FBTyxRQUFBLEVBbUNoQztBQUxDLGdCQTlCSWYsV0FBVyxFQThCUmdCLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBaENJaEIsV0FBVyxFQWdDUmlCLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsY0FBYztDQUMxQixDQUFDO0lBR0osUUFhRSxHQWJhQyxJQUFBQSxjQUFTLFFBQUEsRUFBQ25CLFdBQVcsQ0FBQyJ9