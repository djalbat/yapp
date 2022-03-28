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
exports.default = PlainTextLexer;
_defineProperty(PlainTextLexer, "entries", entries);
_defineProperty(PlainTextLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken) ///
;
_defineProperty(PlainTextLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(PlainTextLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentNonSignificantToken) ///
;
_defineProperty(PlainTextLexer, "SingleLineCommentToken", null);
_defineProperty(PlainTextLexer, "RegularExpressionToken", null);
_defineProperty(PlainTextLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(PlainTextLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(PlainTextLexer, "DoublyQuotedStringLiteralToken", null);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuaW1wb3J0IFlhcHBMZXhlciBmcm9tIFwiLi4vbGV4ZXIveWFwcFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRMZXhlciBleHRlbmRzIFlhcHBMZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5UZXh0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tUnVsZXMoUGxhaW5UZXh0TGV4ZXIsIHJ1bGVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gWWFwcExleGVyLmZyb21FbnRyaWVzKFBsYWluVGV4dExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIiwiUGxhaW5UZXh0TGV4ZXIiLCJmcm9tTm90aGluZyIsIllhcHBMZXhlciIsImZyb21FbnRyaWVzIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVtRyxHQUFjLENBQWQsWUFBYztBQUUzRixHQUFlLENBQWYsS0FBZTs7Ozs7Ozs7Ozs7Ozs7OzhEQUpyQztzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7OzsyQkFBQTs7Ozs7Ozs7cUZBQUE7Ozs7Ozs7Ozs7OzttRUFBQTs7aURBQUE7Ozs7O0FBTUEsR0FBSyxDQUFDQSxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7UUFDQyxDQUFZLGFBQUUsQ0FBVTtJQUMxQixDQUFDO0FBQ0gsQ0FBQztBQUVjLEdBQUssQ0FBQ0MsY0FBYyxpQkFBcEIsUUFBUTt3Q0FadkI7O2FBWXFCQSxjQUFjOzZDQVpuQzs7Ozs7WUFtQ1NDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNDLEtBQVMsU0FBQ0MsV0FBVyxDQUFDSCxjQUFjLEVBQUVELE9BQU87WUFBRyxDQUFDOzs7WUFFeEVLLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0gsS0FBUyxTQUFDRSxTQUFTLENBQUNKLGNBQWMsRUFBRUssS0FBSztZQUFHLENBQUM7OztZQUV2RUYsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0osUUFBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDRyxLQUFTLFNBQUNDLFdBQVcsQ0FBQ0gsY0FBYyxFQUFFRCxRQUFPO1lBQUcsQ0FBQzs7TUF2Q3hGOztFQVk0Q0csS0FBUztrQkFBaENGLGNBQWMsQUFabkM7Z0JBWXFCQSxjQUFjLEVBQzFCRCxDQUFPLFVBQUdBLE9BQU8sQ0FiMUI7Z0JBWXFCQyxjQUFjLEVBRzFCTSxDQUFjLGlCQUFHQyxZQUE0QiwrQkFBRSxFQUFHLEFBQUgsQ0FBRztBQWYzRDtnQkFZcUJQLGNBQWMsRUFLMUJRLENBQWUsa0JBQUdBLFlBQWUsaUJBakIxQztnQkFZcUJSLGNBQWMsRUFPMUJTLENBQXFCLHdCQUFHQyxZQUFtQyxzQ0FBRSxFQUFHLEFBQUgsQ0FBRztBQW5CekU7Z0JBWXFCVixjQUFjLEVBUzFCVyxDQUFzQix5QkFBRyxJQUFJLENBckJ0QztnQkFZcUJYLGNBQWMsRUFXMUJZLENBQXNCLHlCQUFHLElBQUksQ0F2QnRDO2dCQVlxQlosY0FBYyxFQWExQmEsQ0FBMEIsNkJBQUcsSUFBSSxDQXpCMUM7Z0JBWXFCYixjQUFjLEVBZTFCYyxDQUE0QiwrQkFBRyxJQUFJLENBM0I1QztnQkFZcUJkLGNBQWMsRUFpQjFCZSxDQUE2QixnQ0FBRyxJQUFJLENBN0I3QztnQkFZcUJmLGNBQWMsRUFtQjFCZ0IsQ0FBOEIsaUNBQUcsSUFBSSxDQS9COUM7Z0JBWXFCaEIsY0FBYyxFQXFCMUJpQixDQUE4QixpQ0FBRyxJQUFJLENBakM5QyJ9