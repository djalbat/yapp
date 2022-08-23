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
var _tokens = require("./utilities/tokens");
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
            value: function update(tokens) {
                var lineCount = (0, _tokens.lineCountFromTokens)(tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saW5lTnVtYmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcclxuXHJcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBsaW5lQ291bnRGcm9tVG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xyXG5cclxuY2xhc3MgTGluZU51bWJlcnMgZXh0ZW5kcyBFbGVtZW50IHtcclxuICB1cGRhdGUodG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lQ291bnQgPSBsaW5lQ291bnRGcm9tVG9rZW5zKHRva2Vucyk7XHJcblxyXG4gICAgbGV0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XHJcblxyXG4gICAgZm9yIChsZXQgbGluZU51bWJlciA9IDE7IGxpbmVOdW1iZXIgPD0gbGluZUNvdW50OyBsaW5lTnVtYmVyKyspIHtcclxuICAgICAgaHRtbCA9IGAke2h0bWx9JHtsaW5lTnVtYmVyfTxici8+YDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmh0bWwoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGwoc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7XHJcbiAgICBjb25zdCB0b3AgPSBgJHstc2Nyb2xsVG9wfXB4YCxcclxuICAgICAgICAgIGNzcyA9IHtcclxuICAgICAgICAgICAgdG9wXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBwYXJlbnRDb250ZXh0KCkge1xyXG5cdCAgY29uc3Qgc2Nyb2xsTGluZU51bWJlcnMgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpLCAvLy9cclxuICAgICAgICAgIHVwZGF0ZUxpbmVOdW1iZXJzID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTsgIC8vL1xyXG5cclxuICAgIHJldHVybiAoe1xyXG4gICAgICBzY3JvbGxMaW5lTnVtYmVycyxcclxuICAgICAgdXBkYXRlTGluZU51bWJlcnNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwibGluZS1udW1iZXJzXCJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGluZU51bWJlcnMpYFxyXG5cclxuICBtYXJnaW46IDAgNnB4IDAgNnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmb250LWZhbWlseTogJ0RlamFWdSBTYW5zIE1vbm8nLCBNZW5sbywgJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBtb25vc3BhY2U7XHJcblxyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJMaW5lTnVtYmVycyIsInVwZGF0ZSIsInRva2VucyIsImxpbmVDb3VudCIsImxpbmVDb3VudEZyb21Ub2tlbnMiLCJodG1sIiwiRU1QVFlfU1RSSU5HIiwibGluZU51bWJlciIsInNjcm9sbCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJ0b3AiLCJjc3MiLCJwYXJlbnRDb250ZXh0Iiwic2Nyb2xsTGluZU51bWJlcnMiLCJiaW5kIiwidXBkYXRlTGluZU51bWJlcnMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFB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