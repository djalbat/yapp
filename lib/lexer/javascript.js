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
        "identifier": "^[a-zA-Z]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var JavaScriptLexer = /*#__PURE__*/ function(YappLexer) {
    _inherits(JavaScriptLexer, YappLexer);
    var _super = _createSuper(JavaScriptLexer);
    function JavaScriptLexer() {
        _classCallCheck(this, JavaScriptLexer);
        return _super.apply(this, arguments);
    }
    _createClass(JavaScriptLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromEntries(JavaScriptLexer, entries);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(JavaScriptLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries1) {
                return _yapp.default.fromEntries(JavaScriptLexer, entries1);
            }
        }
    ]);
    return JavaScriptLexer;
}(_yapp.default);
exports.default = JavaScriptLexer;
_defineProperty(JavaScriptLexer, "entries", entries);
_defineProperty(JavaScriptLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
_defineProperty(JavaScriptLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(JavaScriptLexer, "RegularExpressionToken", null);
_defineProperty(JavaScriptLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentNonSignificantToken);
_defineProperty(JavaScriptLexer, "SingleLineCommentToken", _occamLexers.CStyleSingleLineCommentToken);
_defineProperty(JavaScriptLexer, "EndOfMultiLineCommentToken", _occamLexers.CStyleEndOfMultiLineCommentToken);
_defineProperty(JavaScriptLexer, "StartOfMultiLineCommentToken", _occamLexers.CStyleStartOfMultiLineCommentToken);
_defineProperty(JavaScriptLexer, "MiddleOfMultiLineCommentToken", _occamLexers.CStyleMiddleOfMultiLineCommentToken);
_defineProperty(JavaScriptLexer, "SinglyQuotedStringLiteralToken", _occamLexers.SinglyQuotedStringLiteralToken);
_defineProperty(JavaScriptLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBZYXBwTGV4ZXIgZnJvbSBcIi4uL2xleGVyL3lhcHBcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86YHxcXFxcJFxcXFx7fDxcXFxcL3xcXFxcLz4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlxcXFwtP1sxLTldWzAtOV0qKFxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Ojt8OnwsfD0+fFxcXFw/fFxcXFx7fFxcXFx9fFxcXFxbfFxcXFxdfFxcXFwofFxcXFwpfFxcXFw6fFxcXFxcXFxcYClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzomPXw+Pj49fD4+PXw8PD18XFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFwqXFxcXCo9fFxcXFwqPXxcXFxcKz18XFxcXC09fFxcXFwvPXxcXFxcXj18XFxcXHw9PT18PT18PXwhPT18JT18Pj18PD18Pj4+fD4+fDw8fD58PHw9fCV8JiZ8Jnx+fCF8XFxcXF58XFxcXHxcXFxcfHxcXFxcfHxcXFxcK1xcXFwrfFxcXFwtXFxcXC18XFxcXCpcXFxcKnxcXFxcK3xcXFxcLXxcXFxcKnxcXFxcLylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydHxleHBvcnR8ZGVmYXVsdHx2YXJ8bGV0fGNvbnN0fGZ1bmN0aW9ufGNsYXNzfGV4dGVuZHN8Y29uc3RydWN0b3J8c3RhdGljfGJyZWFrfHJldHVybnxjb250aW51ZXxpZnxlbHNlfHN3aXRjaHxjYXNlfHRocm93fHRyeXxjYXRjaHxmaW5hbGx5fGluc3RhbmNlb2Z8dHlwZW9mfGFzeW5jfGF3YWl0fGRvfHdoaWxlfGZvcnxpbnxvZnxhc3xuZXd8dGhpc3xzdXBlcnxkZWxldGV8dW5kZWZpbmVkfG51bGx8dHJ1ZXxmYWxzZXx2b2lkfG1ldGF8ZGVidWdnZXIpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpBLVpdK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0TGV4ZXIgZXh0ZW5kcyBZYXBwTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tUnVsZXMoSmF2YVNjcmlwdExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImVudHJpZXMiLCJKYXZhU2NyaXB0TGV4ZXIiLCJmcm9tTm90aGluZyIsIllhcHBMZXhlciIsImZyb21FbnRyaWVzIiwiZnJvbVJ1bGVzIiwicnVsZXMiLCJFbmRPZkxpbmVUb2tlbiIsIkVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4iLCJXaGl0ZXNwYWNlVG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBVXdDLEdBQWMsQ0FBZCxZQUFjO0FBRTVDLEdBQWUsQ0FBZixLQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVcsWUFBRSxDQUF5QjtJQUN4QyxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVEsU0FBRSxDQUE4QjtJQUMxQyxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVMsVUFBRSxDQUFxRDtJQUNsRSxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVUsV0FBRSxDQUE2SztJQUMzTCxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVMsVUFBRSxDQUFnUjtJQUM3UixDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFZO0lBQzVCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7SUFFb0JDLGVBQWUsaUJBQXJCLFFBQVE7OzthQUFGQSxlQUFlOzs7Ozs7WUF1QjNCQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxLQUFTLFNBQUNDLFdBQVcsQ0FBQ0gsZUFBZSxFQUFFRCxPQUFPO1lBQUcsQ0FBQzs7O1lBRXpFSyxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNILEtBQVMsU0FBQ0UsU0FBUyxDQUFDSixlQUFlLEVBQUVLLEtBQUs7WUFBRyxDQUFDOzs7WUFFeEVGLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNKLFFBQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0csS0FBUyxTQUFDQyxXQUFXLENBQUNILGVBQWUsRUFBRUQsUUFBTztZQUFHLENBQUM7Ozs7RUEzQjVDRyxLQUFTO2tCQUFqQ0YsZUFBZTtnQkFBZkEsZUFBZSxFQUMzQkQsQ0FBTyxVQUFHQSxPQUFPO2dCQURMQyxlQUFlLEVBRzNCTSxDQUFjLGlCQUFHQyxZQUE0QjtnQkFIakNQLGVBQWUsRUFLM0JRLENBQWUsa0JBQUdBLFlBQWU7Z0JBTHJCUixlQUFlLEVBTzNCUyxDQUFzQix5QkFBRyxJQUFJO2dCQVBqQlQsZUFBZSxFQVMzQlUsQ0FBcUIsd0JBQUdDLFlBQW1DO2dCQVQvQ1gsZUFBZSxFQVczQlksQ0FBc0IseUJBQUdDLFlBQTRCO2dCQVh6Q2IsZUFBZSxFQWEzQmMsQ0FBMEIsNkJBQUdDLFlBQWdDO2dCQWJqRGYsZUFBZSxFQWUzQmdCLENBQTRCLCtCQUFHQyxZQUFrQztnQkFmckRqQixlQUFlLEVBaUIzQmtCLENBQTZCLGdDQUFHQyxZQUFtQztnQkFqQnZEbkIsZUFBZSxFQW1CM0JvQixDQUE4QixpQ0FBR0EsWUFBOEI7Z0JBbkJuRHBCLGVBQWUsRUFxQjNCcUIsQ0FBOEIsaUNBQUdBLFlBQThCIn0=