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
var _yapp = /*#__PURE__*/ _interopRequireDefault(require("../lexer/yapp"));
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
        "identifier": "^[a-zA-Z_]+"
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
            value: function fromEntries(entries) {
                return _yapp.default.fromEntries(JavaScriptLexer, entries);
            }
        }
    ]);
    return JavaScriptLexer;
}(_yapp.default);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgV2hpdGVzcGFjZVRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuLFxyXG4gICAgICAgICBDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4sXHJcbiAgICAgICAgIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbixcclxuICAgICAgICAgQ1N0eWxlRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZVN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sXHJcbiAgICAgICAgIENTdHlsZU1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuLFxyXG4gICAgICAgICBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmltcG9ydCBZYXBwTGV4ZXIgZnJvbSBcIi4uL2xleGVyL3lhcHBcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86YHxcXFxcJFxcXFx7fDxcXFxcL3xcXFxcLz4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IFwiXlxcXFwtP1sxLTldWzAtOV0qKFxcXFwuWzAtOV0rKT9cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Ojt8OnwsfD0+fFxcXFw/fFxcXFx7fFxcXFx9fFxcXFxbfFxcXFxdfFxcXFwofFxcXFwpfFxcXFw6fFxcXFxcXFxcYClcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJvcGVyYXRvclwiOiBcIl4oPzomPXw+Pj49fD4+PXw8PD18XFxcXC5cXFxcLlxcXFwufFxcXFwufFxcXFwqXFxcXCo9fFxcXFwqPXxcXFxcKz18XFxcXC09fFxcXFwvPXxcXFxcXj18XFxcXHw9PT18PT18PXwhPT18JT18Pj18PD18Pj4+fD4+fDw8fD58PHw9fCV8JiZ8Jnx+fCF8XFxcXF58XFxcXHxcXFxcfHxcXFxcfHxcXFxcK1xcXFwrfFxcXFwtXFxcXC18XFxcXCpcXFxcKnxcXFxcK3xcXFxcLXxcXFxcKnxcXFxcLylcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OmltcG9ydHxleHBvcnR8ZGVmYXVsdHx2YXJ8bGV0fGNvbnN0fGZ1bmN0aW9ufGNsYXNzfGV4dGVuZHN8Y29uc3RydWN0b3J8c3RhdGljfGJyZWFrfHJldHVybnxjb250aW51ZXxpZnxlbHNlfHN3aXRjaHxjYXNlfHRocm93fHRyeXxjYXRjaHxmaW5hbGx5fGluc3RhbmNlb2Z8dHlwZW9mfGFzeW5jfGF3YWl0fGRvfHdoaWxlfGZvcnxpbnxvZnxhc3xuZXd8dGhpc3xzdXBlcnxkZWxldGV8dW5kZWZpbmVkfG51bGx8dHJ1ZXxmYWxzZXx2b2lkfG1ldGF8ZGVidWdnZXIpXFxcXGJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpBLVpfXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdExleGVyIGV4dGVuZHMgWWFwcExleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBTaW5nbGVMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlU2luZ2xlTGluZUNvbW1lbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IENTdHlsZUVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gQ1N0eWxlTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbVJ1bGVzKEphdmFTY3JpcHRMZXhlciwgcnVsZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSmF2YVNjcmlwdExleGVyIiwiZW50cmllcyIsImZyb21Ob3RoaW5nIiwiWWFwcExleGVyIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZkxpbmVDb21tZW50VG9rZW4iLCJFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDU3R5bGVNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiIsIkRvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBc0NRQSxlQUFlOzs7MkJBNUJnQixjQUFjO3lEQUU1QyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQyxPQUFPLEdBQUc7SUFDZDtRQUNFLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkM7SUFDRDtRQUNFLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFDRDtRQUNFLFNBQVMsRUFBRSxxREFBcUQ7S0FDakU7SUFDRDtRQUNFLFVBQVUsRUFBRSw2S0FBNks7S0FDMUw7SUFDRDtRQUNFLFNBQVMsRUFBRSxnUkFBZ1I7S0FDNVI7SUFDRDtRQUNFLFlBQVksRUFBRSxhQUFhO0tBQzVCO0lBQ0Q7UUFDRSxZQUFZLEVBQUUsVUFBVTtLQUN6QjtDQUNGLEFBQUM7QUFFYSxJQUFBLEFBQU1ELGVBQWUsaUJBQXJCOzs7YUFBTUEsZUFBZTs7Ozs7O1lBdUIzQkUsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsS0FBUyxRQUFBLENBQUNDLFdBQVcsQ0FBQ0osZUFBZSxFQUFFQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7WUFFekVJLEdBQVMsRUFBVEEsV0FBUzttQkFBaEIsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0gsS0FBUyxRQUFBLENBQUNFLFNBQVMsQ0FBQ0wsZUFBZSxFQUFFTSxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFeEVGLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDSCxPQUFPLEVBQUU7Z0JBQUUsT0FBT0UsS0FBUyxRQUFBLENBQUNDLFdBQVcsQ0FBQ0osZUFBZSxFQUFFQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O0NBQ3hGLENBNUI0Q0UsS0FBUyxRQUFBLENBNEJyRDtBQTNCQyxnQkFEbUJILGVBQWUsRUFDM0JDLFNBQU8sRUFBR0EsT0FBTyxDQUFDO0FBRXpCLGdCQUhtQkQsZUFBZSxFQUczQk8sZ0JBQWMsRUFBR0MsWUFBNEIsNkJBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXpELGdCQUxtQlIsZUFBZSxFQUszQlMsaUJBQWUsRUFBR0EsWUFBZSxnQkFBQSxDQUFDO0FBRXpDLGdCQVBtQlQsZUFBZSxFQU8zQlUsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVRtQlYsZUFBZSxFQVMzQlcsdUJBQXFCLEVBQUdDLFlBQW1DLG9DQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV2RSxnQkFYbUJaLGVBQWUsRUFXM0JhLHdCQUFzQixFQUFHQyxZQUE0Qiw2QkFBQSxDQUFDLENBQUMsR0FBRzs7QUFFakUsZ0JBYm1CZCxlQUFlLEVBYTNCZSw0QkFBMEIsRUFBR0MsWUFBZ0MsaUNBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXpFLGdCQWZtQmhCLGVBQWUsRUFlM0JpQiw4QkFBNEIsRUFBR0MsWUFBa0MsbUNBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRTdFLGdCQWpCbUJsQixlQUFlLEVBaUIzQm1CLCtCQUE2QixFQUFHQyxZQUFtQyxvQ0FBQSxDQUFDLENBQUMsR0FBRzs7QUFFL0UsZ0JBbkJtQnBCLGVBQWUsRUFtQjNCcUIsZ0NBQThCLEVBQUdBLFlBQThCLCtCQUFBLENBQUM7QUFFdkUsZ0JBckJtQnJCLGVBQWUsRUFxQjNCc0IsZ0NBQThCLEVBQUdBLFlBQThCLCtCQUFBLENBQUMifQ==