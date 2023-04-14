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
var _occamlexers = require("occam-lexers");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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
    var _super = _create_super(JavaScriptLexer);
    function JavaScriptLexer() {
        _class_call_check(this, JavaScriptLexer);
        return _super.apply(this, arguments);
    }
    _create_class(JavaScriptLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamlexers.CommonLexer.fromNothing(JavaScriptLexer);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamlexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
            }
        }
    ]);
    return JavaScriptLexer;
}(_occamlexers.CommonLexer);
_define_property(JavaScriptLexer, "entries", entries);
_define_property(JavaScriptLexer, "EndOfLineToken", _occamlexers.EndOfLineNonSignificantToken) ///
;
_define_property(JavaScriptLexer, "WhitespaceToken", _occamlexers.WhitespaceToken);
_define_property(JavaScriptLexer, "RegularExpressionToken", null);
_define_property(JavaScriptLexer, "EndOfLineCommentToken", _occamlexers.EndOfLineCommentNonSignificantToken) ///
;
_define_property(JavaScriptLexer, "SingleLineCommentToken", _occamlexers.CStyleSingleLineCommentToken) ///
;
_define_property(JavaScriptLexer, "EndOfMultiLineCommentToken", _occamlexers.CStyleEndOfMultiLineCommentToken) ///
;
_define_property(JavaScriptLexer, "StartOfMultiLineCommentToken", _occamlexers.CStyleStartOfMultiLineCommentToken) ///
;
_define_property(JavaScriptLexer, "MiddleOfMultiLineCommentToken", _occamlexers.CStyleMiddleOfMultiLineCommentToken) ///
;
_define_property(JavaScriptLexer, "SinglyQuotedStringLiteralToken", _occamlexers.SinglyQuotedStringLiteralToken);
_define_property(JavaScriptLexer, "DoublyQuotedStringLiteralToken", _occamlexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsXHJcbiAgICAgICAgIFdoaXRlc3BhY2VUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbixcclxuICAgICAgICAgQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLFxyXG4gICAgICAgICBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbixcclxuICAgICAgICAgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OmB8XFxcXCRcXFxce3w8XFxcXC98XFxcXC8+KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5cXFxcLT9bMS05XVswLTldKihcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo7fDp8LHw9PnxcXFxcP3xcXFxce3xcXFxcfXxcXFxcW3xcXFxcXXxcXFxcKHxcXFxcKXxcXFxcOnxcXFxcXFxcXGApXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwib3BlcmF0b3JcIjogXCJeKD86Jj18Pj4+PXw+Pj18PDw9fFxcXFwuXFxcXC5cXFxcLnxcXFxcLnxcXFxcKlxcXFwqPXxcXFxcKj18XFxcXCs9fFxcXFwtPXxcXFxcLz18XFxcXF49fFxcXFx8PT09fD09fD18IT09fCU9fD49fDw9fD4+Pnw+Pnw8PHw+fDx8PXwlfCYmfCZ8fnwhfFxcXFxefFxcXFx8XFxcXHx8XFxcXHx8XFxcXCtcXFxcK3xcXFxcLVxcXFwtfFxcXFwqXFxcXCp8XFxcXCt8XFxcXC18XFxcXCp8XFxcXC8pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzppbXBvcnR8ZXhwb3J0fGRlZmF1bHR8dmFyfGxldHxjb25zdHxmdW5jdGlvbnxjbGFzc3xleHRlbmRzfGNvbnN0cnVjdG9yfHN0YXRpY3xicmVha3xyZXR1cm58Y29udGludWV8aWZ8ZWxzZXxzd2l0Y2h8Y2FzZXx0aHJvd3x0cnl8Y2F0Y2h8ZmluYWxseXxpbnN0YW5jZW9mfHR5cGVvZnxhc3luY3xhd2FpdHxkb3x3aGlsZXxmb3J8aW58b2Z8YXN8bmV3fHRoaXN8c3VwZXJ8ZGVsZXRlfHVuZGVmaW5lZHxudWxsfHRydWV8ZmFsc2V8dm9pZHxtZXRhfGRlYnVnZ2VyKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aX10rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhKYXZhU2NyaXB0TGV4ZXIpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJKYXZhU2NyaXB0TGV4ZXIiLCJlbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJDb21tb25MZXhlciIsImZyb21FbnRyaWVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIkNTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFDcUJBOzs7MkJBMUIrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU1DLFVBQVU7SUFDZDtRQUNFLGFBQWE7SUFDZjtJQUNBO1FBQ0UsVUFBVTtJQUNaO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFlBQVk7SUFDZDtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7QUFFYyxJQUFBLEFBQU1ELGdDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBdUJaRSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUFFLE9BQU9DLHdCQUFXLENBQUNELFdBQVcsQ0F2QmxDRjtZQXVCcUQ7OztZQUVqRUksS0FBQUE7bUJBQVAsU0FBT0EsWUFBWUgsT0FBTyxFQUFFO2dCQUFFLE9BQU9FLHdCQUFXLENBQUNDLFdBQVcsQ0F6QnpDSixpQkF5QjJEQztZQUFVOzs7V0F6QnJFRDtFQUF3Qkcsd0JBQVc7QUFDdEQsaUJBRG1CSCxpQkFDWkMsV0FBVUE7QUFFakIsaUJBSG1CRCxpQkFHWkssa0JBQWlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUV6RCxpQkFMbUJOLGlCQUtaTyxtQkFBa0JBLDRCQUFlO0FBRXhDLGlCQVBtQlAsaUJBT1pRLDBCQUF5QixJQUFJO0FBRXBDLGlCQVRtQlIsaUJBU1pTLHlCQUF3QkMsZ0RBQW1DLEVBQUUsR0FBRzs7QUFFdkUsaUJBWG1CVixpQkFXWlcsMEJBQXlCQyx5Q0FBNEIsRUFBRSxHQUFHOztBQUVqRSxpQkFibUJaLGlCQWFaYSw4QkFBNkJDLDZDQUFnQyxFQUFFLEdBQUc7O0FBRXpFLGlCQWZtQmQsaUJBZVplLGdDQUErQkMsK0NBQWtDLEVBQUUsR0FBRzs7QUFFN0UsaUJBakJtQmhCLGlCQWlCWmlCLGlDQUFnQ0MsZ0RBQW1DLEVBQUUsR0FBRzs7QUFFL0UsaUJBbkJtQmxCLGlCQW1CWm1CLGtDQUFpQ0EsMkNBQThCO0FBRXRFLGlCQXJCbUJuQixpQkFxQlpvQixrQ0FBaUNBLDJDQUE4QiJ9