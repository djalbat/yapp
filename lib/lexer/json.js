"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _yapp = _interopRequireDefault(require("../lexer/yapp"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
        "special": "^(?:,|\\:|\\{|\\}|\\[|\\])"
    },
    {
        "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
    },
    {
        "keyword": "^(?:null|true|false)"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var JSONLexer = /*#__PURE__*/ function(YappLexer) {
    _inherits(JSONLexer, YappLexer);
    var _super = _createSuper(JSONLexer);
    function JSONLexer() {
        _classCallCheck(this, JSONLexer);
        return _super.apply(this, arguments);
    }
    _createClass(JSONLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromEntries(JSONLexer, entries);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(JSONLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries1) {
                return _yapp.default.fromEntries(JSONLexer, entries1);
            }
        }
    ]);
    return JSONLexer;
}(_yapp.default);
_defineProperty(JSONLexer, "entries", entries);
_defineProperty(JSONLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken) ///
;
_defineProperty(JSONLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(JSONLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentNonSignificantToken) ///
;
_defineProperty(JSONLexer, "SingleLineCommentToken", null);
_defineProperty(JSONLexer, "RegularExpressionToken", null);
_defineProperty(JSONLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(JSONLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(JSONLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(JSONLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(JSONLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);
exports.default = JSONLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qc29uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFlhcHBMZXhlciBmcm9tIFwiLi4vbGV4ZXIveWFwcFwiO1xyXG5pbXBvcnQgeyBXaGl0ZXNwYWNlVG9rZW4sIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4sIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiwgRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwic3BlY2lhbFwiOiBcIl4oPzosfFxcXFw6fFxcXFx7fFxcXFx9fFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBcIl5cXFxcLT9bMS05XVswLTldKihcXFxcLlswLTldKyk/XCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzpudWxsfHRydWV8ZmFsc2UpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05MZXhlciBleHRlbmRzIFlhcHBMZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbjtcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZUNvbW1lbnRUb2tlbiA9IEVuZE9mTGluZUNvbW1lbnROb25TaWduaWZpY2FudFRva2VuOyAvLy9cclxuXHJcbiAgc3RhdGljIFNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgUmVndWxhckV4cHJlc3Npb25Ub2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4gPSBEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW47XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhKU09OTGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tUnVsZXMoSlNPTkxleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhKU09OTGV4ZXIsIGVudHJpZXMpOyB9XHJcbn1cclxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJlbnRyaWVzIiwiSlNPTkxleGVyIiwiZnJvbU5vdGhpbmciLCJZYXBwTGV4ZXIiLCJmcm9tRW50cmllcyIsImZyb21SdWxlcyIsInJ1bGVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxLQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUM4RixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpKLElBQU1BLE9BQU8sR0FBRztJQUNkO1FBQ0UsU0FBUyxFQUFFLDRCQUE0QjtLQUN4QztJQUNEO1FBQ0UsUUFBUSxFQUFFLDhCQUE4QjtLQUN6QztJQUNEO1FBQ0UsU0FBUyxFQUFFLHNCQUFzQjtLQUNsQztJQUNEO1FBQ0UsWUFBWSxFQUFFLFVBQVU7S0FDekI7Q0FDRixBQUFDO0FBRWEsSUFBQSxBQUFNQyxTQUFTLGlCQ3BCNUIsQURvQmE7OzthQUFNQSxTQUFTOzs7Ozs7WUF1QnJCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxLQUFTLFFBQUEsQ0FBQ0MsV0FBVyxDQUFDSCxTQUFTLEVBQUVELE9BQU8sQ0FBQyxDQUFDO2FBQUU7OztZQUVuRUssR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSCxLQUFTLFFBQUEsQ0FBQ0UsU0FBUyxDQUFDSixTQUFTLEVBQUVLLEtBQUssQ0FBQyxDQUFDO2FBQUU7OztZQUVsRUYsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNKLFFBQU8sRUFBRTtnQkFBRSxPQUFPRyxLQUFTLFFBQUEsQ0FBQ0MsV0FBVyxDQUFDSCxTQUFTLEVBQUVELFFBQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDbEYsQ0E1QnNDRyxLQUFTLFFBQUEsQ0E0Qi9DO0FBM0JDLGdCQURtQkYsU0FBUyxFQUNyQkQsU0FBTyxFQUFHQSxPQUFPLENBQUM7QUFFekIsZ0JBSG1CQyxTQUFTLEVBR3JCTSxnQkFBYyxFQUFHQyxZQUE0Qiw2QkFBQSxDQUFDLENBQUMsR0FBRzs7QUFFekQsZ0JBTG1CUCxTQUFTLEVBS3JCUSxpQkFBZSxFQUFHQSxZQUFlLGdCQUFBLENBQUM7QUFFekMsZ0JBUG1CUixTQUFTLEVBT3JCUyx1QkFBcUIsRUFBR0MsWUFBbUMsb0NBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXZFLGdCQVRtQlYsU0FBUyxFQVNyQlcsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVhtQlgsU0FBUyxFQVdyQlksd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQWJtQlosU0FBUyxFQWFyQmEsNEJBQTBCLEVBQUcsSUFBSSxDQUFDO0FBRXpDLGdCQWZtQmIsU0FBUyxFQWVyQmMsOEJBQTRCLEVBQUcsSUFBSSxDQUFDO0FBRTNDLGdCQWpCbUJkLFNBQVMsRUFpQnJCZSwrQkFBNkIsRUFBRyxJQUFJLENBQUM7QUFFNUMsZ0JBbkJtQmYsU0FBUyxFQW1CckJnQixnQ0FBOEIsRUFBRyxJQUFJLENBQUM7QUFFN0MsZ0JBckJtQmhCLFNBQVMsRUFxQnJCaUIsZ0NBQThCLEVBQUdBLFlBQThCLCtCQUFBLENBQUM7a0JBckJwRGpCLFNBQVMifQ==