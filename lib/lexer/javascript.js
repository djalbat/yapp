"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                return _occamLexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamLexers.CommonLexer.fromRules(JavaScriptLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries1) {
                return _occamLexers.CommonLexer.fromEntries(JavaScriptLexer, entries1);
            }
        }
    ]);
    return JavaScriptLexer;
}(_occamLexers.CommonLexer);
_defineProperty(JavaScriptLexer, "entries", entries);
_defineProperty(JavaScriptLexer, "RegularExpressionToken", null);
exports.default = JavaScriptLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/OmB8XFxcXCRcXFxce3w8XFxcXC98XFxcXC8+KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5cXFxcLT9bMS05XVswLTldKihcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzo7fDp8LHw9PnxcXFxcP3xcXFxce3xcXFxcfXxcXFxcW3xcXFxcXXxcXFxcKHxcXFxcKXxcXFxcOnxcXFxcXFxcXGApXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwib3BlcmF0b3JcIjogXCJeKD86Jj18Pj4+PXw+Pj18PDw9fFxcXFwuXFxcXC5cXFxcLnxcXFxcLnxcXFxcKlxcXFwqPXxcXFxcKj18XFxcXCs9fFxcXFwtPXxcXFxcLz18XFxcXF49fFxcXFx8PT09fD09fD18IT09fCU9fD49fDw9fD4+Pnw+Pnw8PHw+fDx8PXwlfCYmfCZ8fnwhfFxcXFxefFxcXFx8XFxcXHx8XFxcXHx8XFxcXCtcXFxcK3xcXFxcLVxcXFwtfFxcXFwqXFxcXCp8XFxcXCt8XFxcXC18XFxcXCp8XFxcXC8pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzppbXBvcnR8ZXhwb3J0fGRlZmF1bHR8dmFyfGxldHxjb25zdHxmdW5jdGlvbnxjbGFzc3xleHRlbmRzfGNvbnN0cnVjdG9yfHN0YXRpY3xicmVha3xyZXR1cm58Y29udGludWV8aWZ8ZWxzZXxzd2l0Y2h8Y2FzZXx0aHJvd3x0cnl8Y2F0Y2h8ZmluYWxseXxpbnN0YW5jZW9mfHR5cGVvZnxhc3luY3xhd2FpdHxkb3x3aGlsZXxmb3J8aW58b2Z8YXN8bmV3fHRoaXN8c3VwZXJ8ZGVsZXRlfHVuZGVmaW5lZHxudWxsfHRydWV8ZmFsc2V8dm9pZHxtZXRhfGRlYnVnZ2VyKVxcXFxiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmF2YVNjcmlwdExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIFJlZ3VsYXJFeHByZXNzaW9uVG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tRW50cmllcyhKYXZhU2NyaXB0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21SdWxlcyhKYXZhU2NyaXB0TGV4ZXIsIHJ1bGVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoSmF2YVNjcmlwdExleGVyLCBlbnRyaWVzKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIiwiSmF2YVNjcmlwdExleGVyIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyIsImZyb21SdWxlcyIsInJ1bGVzIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBYyxDQUFkLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLEdBQUssQ0FBQ0EsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO1FBQ0MsQ0FBVyxZQUFFLENBQXlCO0lBQ3hDLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUSxTQUFFLENBQThCO0lBQzFDLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUyxVQUFFLENBQXFEO0lBQ2xFLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBVSxXQUFFLENBQTZLO0lBQzNMLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUyxVQUFFLENBQWdSO0lBQzdSLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVk7SUFDNUIsQ0FBQztJQUNELENBQUM7UUFDQyxDQUFZLGFBQUUsQ0FBVTtJQUMxQixDQUFDO0FBQ0gsQ0FBQztJQUVvQkMsZUFBZSxpQkFBckIsUUFBUTtjQUFGQSxlQUFlOzhCQUFmQSxlQUFlO2FBQWZBLGVBQWU7OEJBQWZBLGVBQWU7OztpQkFBZkEsZUFBZTs7WUFLM0JDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBL0JILFlBQWMsYUErQkVDLFdBQVcsQ0FBQ0YsZUFBZSxFQUFFRCxPQUFPO1lBQUcsQ0FBQzs7O1lBRTNFSSxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakNOLFlBQWMsYUFpQ0tELFNBQVMsQ0FBQ0gsZUFBZSxFQUFFSSxLQUFLO1lBQUcsQ0FBQzs7O1lBRTFFRixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDSCxRQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBbkNWLFlBQWMsYUFtQ1NHLFdBQVcsQ0FBQ0YsZUFBZSxFQUFFRCxRQUFPO1lBQUcsQ0FBQzs7O1dBVHRFQyxlQUFlO0VBMUJSLFlBQWM7Z0JBMEJyQkEsZUFBZSxFQUMzQkQsQ0FBTyxVQUFHQSxPQUFPO2dCQURMQyxlQUFlLEVBRzNCSyxDQUFzQix5QkFBRyxJQUFJO2tCQUhqQkwsZUFBZSJ9