"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptLexer;
    }
});
var _occamLexers = require("occam-lexers");
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
        "delimiter": "^(?:`|\\$\\{|<\\/|\\/>)"
    },
    {
        "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
    },
    {
        "special": "^(?:;|:|,|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\:|\\\\`)"
    },
    {
        "operator": "^(?:&=|>>>=|>>=|<<=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\-=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|\\^|\\|\\||\\||\\+\\+|\\-\\-|\\*\\*|\\+|\\-|\\*|\\/)"
    },
    {
        "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)\\b"
    },
    {
        "identifier": "^[a-zA-Z_]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var JavaScriptLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(JavaScriptLexer, CommonLexer);
    var _super = _createSuper(JavaScriptLexer);
    function JavaScriptLexer() {
        _classCallCheck(this, JavaScriptLexer);
        return _super.apply(this, arguments);
    }
    _createClass(JavaScriptLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(JavaScriptLexer);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
            }
        }
    ]);
    return JavaScriptLexer;
}(_occamLexers.CommonLexer);
_defineProperty(JavaScriptLexer, "entries", entries);
_defineProperty(JavaScriptLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken) ///
;
_defineProperty(JavaScriptLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(JavaScriptLexer, "RegularExpressionToken", null);
_defineProperty(JavaScriptLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentNonSignificantToken) ///
;
_defineProperty(JavaScriptLexer, "SingleLineCommentToken", _occamLexers.CStyleSingleLineCommentToken) ///
;
_defineProperty(JavaScriptLexer, "EndOfMultiLineCommentToken", _occamLexers.CStyleEndOfMultiLineCommentToken) ///
;
_defineProperty(JavaScriptLexer, "StartOfMultiLineCommentToken", _occamLexers.CStyleStartOfMultiLineCommentToken) ///
;
_defineProperty(JavaScriptLexer, "MiddleOfMultiLineCommentToken", _occamLexers.CStyleMiddleOfMultiLineCommentToken) ///
;
_defineProperty(JavaScriptLexer, "SinglyQuotedStringLiteralToken", _occamLexers.SinglyQuotedStringLiteralToken);
_defineProperty(JavaScriptLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsXHJcbiAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OmB8XFxcXCRcXFxce3w8XFxcXC98XFxcXC8+KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5cXFxcLT9bMS05XVswLTldKihcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo7fDp8LHw9PnxcXFxcP3xcXFxce3xcXFxcfXxcXFxcW3xcXFxcXXxcXFxcKHxcXFxcKXxcXFxcOnxcXFxcXFxcXGApXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwib3BlcmF0b3JcIjogXCJeKD86Jj18Pj4+PXw+Pj18PDw9fFxcXFwuXFxcXC5cXFxcLnxcXFxcLnxcXFxcKlxcXFwqPXxcXFxcKj18XFxcXCs9fFxcXFwtPXxcXFxcLz18XFxcXF49fFxcXFx8PT09fD09fD18IT09fCU9fD49fDw9fD4+Pnw+Pnw8PHw+fDx8PXwlfCYmfCZ8fnwhfFxcXFxefFxcXFx8XFxcXHx8XFxcXHx8XFxcXCtcXFxcK3xcXFxcLVxcXFwtfFxcXFwqXFxcXCp8XFxcXCt8XFxcXC18XFxcXCp8XFxcXC8pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzppbXBvcnR8ZXhwb3J0fGRlZmF1bHR8dmFyfGxldHxjb25zdHxmdW5jdGlvbnxjbGFzc3xleHRlbmRzfGNvbnN0cnVjdG9yfHN0YXRpY3xicmVha3xyZXR1cm58Y29udGludWV8aWZ8ZWxzZXxzd2l0Y2h8Y2FzZXx0aHJvd3x0cnl8Y2F0Y2h8ZmluYWxseXxpbnN0YW5jZW9mfHR5cGVvZnxhc3luY3xhd2FpdHxkb3x3aGlsZXxmb3J8aW58b2Z8YXN8bmV3fHRoaXN8c3VwZXJ8ZGVsZXRlfHVuZGVmaW5lZHxudWxsfHRydWV8ZmFsc2V8dm9pZHxtZXRhfGRlYnVnZ2VyKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aX10rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhKYXZhU2NyaXB0TGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0TGV4ZXIiLCJlbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFxQ1FBLGVBQWU7OzsyQkExQmdCLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxJQUFNQyxPQUFPLEdBQUc7SUFDZDtRQUNFLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkM7SUFDRDtRQUNFLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFDRDtRQUNFLFNBQVMsRUFBRSxxREFBcUQ7S0FDakU7SUFDRDtRQUNFLFVBQVUsRUFBRSw2S0FBNks7S0FDMUw7SUFDRDtRQUNFLFNBQVMsRUFBRSxnUkFBZ1I7S0FDNVI7SUFDRDtRQUNFLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0Q7UUFDRSxZQUFZLEVBQUUsVUFBVTtLQUN6QjtDQUNGLEFBQUM7QUFFYSxJQUFBLEFBQU1ELGVBQWUsaUJBQXJCOzs7YUFBTUEsZUFBZTs7Ozs7O1lBdUIzQkUsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsWUFBVyxZQUFBLENBQUNELFdBQVcsQ0FBQ0YsZUFBZSxDQUFDLENBQUM7YUFBRTs7O1lBRWxFSSxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0gsT0FBTyxFQUFFO2dCQUFFLE9BQU9FLFlBQVcsWUFBQSxDQUFDQyxXQUFXLENBQUNKLGVBQWUsRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztDQUMxRixDQTFCNENFLFlBQVcsWUFBQSxDQTBCdkQ7QUF6QkMsZ0JBRG1CSCxlQUFlLEVBQzNCQyxTQUFPLEVBQUdBLE9BQU8sQ0FBQztBQUV6QixnQkFIbUJELGVBQWUsRUFHM0JLLGdCQUFjLEVBQUdDLFlBQTRCLDZCQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV6RCxnQkFMbUJOLGVBQWUsRUFLM0JPLGlCQUFlLEVBQUdBLFlBQWUsZ0JBQUEsQ0FBQztBQUV6QyxnQkFQbUJQLGVBQWUsRUFPM0JRLHdCQUFzQixFQUFHLElBQUksQ0FBQztBQUVyQyxnQkFUbUJSLGVBQWUsRUFTM0JTLHVCQUFxQixFQUFHQyxZQUFtQyxvQ0FBQSxDQUFDLENBQUMsR0FBRzs7QUFFdkUsZ0JBWG1CVixlQUFlLEVBVzNCVyx3QkFBc0IsRUFBR0MsWUFBNEIsNkJBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRWpFLGdCQWJtQlosZUFBZSxFQWEzQmEsNEJBQTBCLEVBQUdDLFlBQWdDLGlDQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV6RSxnQkFmbUJkLGVBQWUsRUFlM0JlLDhCQUE0QixFQUFHQyxZQUFrQyxtQ0FBQSxDQUFDLENBQUMsR0FBRzs7QUFFN0UsZ0JBakJtQmhCLGVBQWUsRUFpQjNCaUIsK0JBQTZCLEVBQUdDLFlBQW1DLG9DQUFBLENBQUMsQ0FBQyxHQUFHOztBQUUvRSxnQkFuQm1CbEIsZUFBZSxFQW1CM0JtQixnQ0FBOEIsRUFBR0EsWUFBOEIsK0JBQUEsQ0FBQztBQUV2RSxnQkFyQm1CbkIsZUFBZSxFQXFCM0JvQixnQ0FBOEIsRUFBR0EsWUFBOEIsK0JBQUEsQ0FBQyJ9