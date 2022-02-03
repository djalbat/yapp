"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _yapp = _interopRequireDefault(require("../lexer/yapp"));
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
var entries = [
    {
        "unassigned": "^[^\\s]+"
    }
];
var PlainTextLexer = /*#__PURE__*/ function(YappLexer) {
    _inherits(PlainTextLexer, YappLexer);
    var _super = _createSuper(PlainTextLexer);
    function PlainTextLexer() {
        _classCallCheck(this, PlainTextLexer);
        return _super.apply(this, arguments);
    }
    _createClass(PlainTextLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromEntries(PlainTextLexer, entries);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(PlainTextLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries1) {
                return _yapp.default.fromEntries(PlainTextLexer, entries1);
            }
        }
    ]);
    return PlainTextLexer;
}(_yapp.default);
_defineProperty(PlainTextLexer, "entries", entries);
_defineProperty(PlainTextLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
_defineProperty(PlainTextLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(PlainTextLexer, "SingleLineCommentToken", null);
_defineProperty(PlainTextLexer, "RegularExpressionToken", null);
_defineProperty(PlainTextLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(PlainTextLexer, "DoublyQuotedStringLiteralToken", null);
exports.default = PlainTextLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgWWFwcExleGVyIGZyb20gXCIuLi9sZXhlci95YXBwXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dExleGVyIGV4dGVuZHMgWWFwcExleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhQbGFpblRleHRMZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gWWFwcExleGVyLmZyb21SdWxlcyhQbGFpblRleHRMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5UZXh0TGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImVudHJpZXMiLCJQbGFpblRleHRMZXhlciIsImZyb21Ob3RoaW5nIiwiWWFwcExleGVyIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWtELEdBQWMsQ0FBZCxZQUFjO0FBRXRELEdBQWUsQ0FBZixLQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFVO0lBQzFCLENBQUM7QUFDSCxDQUFDO0lBRW9CQyxjQUFjLGlCQUFwQixRQUFROzs7YUFBRkEsY0FBYzs7Ozs7O1lBcUIxQkMsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0MsS0FBUyxTQUFDQyxXQUFXLENBQUNILGNBQWMsRUFBRUQsT0FBTztZQUFHLENBQUM7OztZQUV4RUssR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDSCxLQUFTLFNBQUNFLFNBQVMsQ0FBQ0osY0FBYyxFQUFFSyxLQUFLO1lBQUcsQ0FBQzs7O1lBRXZFRixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDSixRQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNHLEtBQVMsU0FBQ0MsV0FBVyxDQUFDSCxjQUFjLEVBQUVELFFBQU87WUFBRyxDQUFDOzs7O0VBekI1Q0csS0FBUztnQkFBaENGLGNBQWMsRUFDMUJELENBQU8sVUFBR0EsT0FBTztnQkFETEMsY0FBYyxFQUcxQk0sQ0FBYyxpQkFBR0MsWUFBNEI7Z0JBSGpDUCxjQUFjLEVBSzFCUSxDQUFlLGtCQUFHQSxZQUFlO2dCQUxyQlIsY0FBYyxFQU8xQlMsQ0FBc0IseUJBQUcsSUFBSTtnQkFQakJULGNBQWMsRUFTMUJVLENBQXNCLHlCQUFHLElBQUk7Z0JBVGpCVixjQUFjLEVBVzFCVyxDQUEwQiw2QkFBRyxJQUFJO2dCQVhyQlgsY0FBYyxFQWExQlksQ0FBNEIsK0JBQUcsSUFBSTtnQkFidkJaLGNBQWMsRUFlMUJhLENBQTZCLGdDQUFHLElBQUk7Z0JBZnhCYixjQUFjLEVBaUIxQmMsQ0FBOEIsaUNBQUcsSUFBSTtnQkFqQnpCZCxjQUFjLEVBbUIxQmUsQ0FBOEIsaUNBQUcsSUFBSTtrQkFuQnpCZixjQUFjIn0=