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
        "delimiter": "^(?:=|<\\?|\\?>|<\\/|\\/>|<!--|-->|<|>)"
    },
    {
        "identifier": "^[a-zA-Z]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var XMLLexer = /*#__PURE__*/ function(YappLexer) {
    _inherits(XMLLexer, YappLexer);
    var _super = _createSuper(XMLLexer);
    function XMLLexer() {
        _classCallCheck(this, XMLLexer);
        return _super.apply(this, arguments);
    }
    _createClass(XMLLexer, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromEntries(XMLLexer, entries);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(XMLLexer, rules);
            }
        },
        {
            key: "fromEntries",
            value: function fromEntries(entries1) {
                return _yapp.default.fromEntries(XMLLexer, entries1);
            }
        }
    ]);
    return XMLLexer;
}(_yapp.default);
exports.default = XMLLexer;
_defineProperty(XMLLexer, "entries", entries);
_defineProperty(XMLLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken);
_defineProperty(XMLLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(XMLLexer, "EndOfLineCommentToken", _occamLexers.EndOfLineCommentNonSignificantToken);
_defineProperty(XMLLexer, "SingleLineCommentToken", null);
_defineProperty(XMLLexer, "RegularExpressionToken", null);
_defineProperty(XMLLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(XMLLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgWWFwcExleGVyIGZyb20gXCIuLi9sZXhlci95YXBwXCI7XHJcbmltcG9ydCB7IFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuLCBFbmRPZkxpbmVDb21tZW50Tm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJkZWxpbWl0ZXJcIjogXCJeKD86PXw8XFxcXD98XFxcXD8+fDxcXFxcL3xcXFxcLz58PCEtLXwtLT58PHw+KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW2EtekEtWl0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTExleGVyIGV4dGVuZHMgWWFwcExleGVyIHtcclxuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgV2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuO1xyXG5cclxuICBzdGF0aWMgRW5kT2ZMaW5lQ29tbWVudFRva2VuID0gRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW47IC8vL1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gWWFwcExleGVyLmZyb21FbnRyaWVzKFhNTExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbVJ1bGVzKFhNTExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhYTUxMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iXSwibmFtZXMiOlsiZW50cmllcyIsIlhNTExleGVyIiwiZnJvbU5vdGhpbmciLCJZYXBwTGV4ZXIiLCJmcm9tRW50cmllcyIsImZyb21SdWxlcyIsInJ1bGVzIiwiRW5kT2ZMaW5lVG9rZW4iLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiV2hpdGVzcGFjZVRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudFRva2VuIiwiRW5kT2ZMaW5lQ29tbWVudE5vblNpZ25pZmljYW50VG9rZW4iLCJTaW5nbGVMaW5lQ29tbWVudFRva2VuIiwiUmVndWxhckV4cHJlc3Npb25Ub2tlbiIsIkVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIk1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIiwiRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWUsQ0FBZixLQUFlO0FBQzhGLEdBQWMsQ0FBZCxZQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqSixHQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVcsWUFBRSxDQUF5QztJQUN4RCxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFZO0lBQzVCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7SUFFb0JDLFFBQVEsaUJBQWQsUUFBUTs7O2FBQUZBLFFBQVE7Ozs7OztZQXVCcEJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUNDLEtBQVMsU0FBQ0MsV0FBVyxDQUFDSCxRQUFRLEVBQUVELE9BQU87WUFBRyxDQUFDOzs7WUFFbEVLLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0gsS0FBUyxTQUFDRSxTQUFTLENBQUNKLFFBQVEsRUFBRUssS0FBSztZQUFHLENBQUM7OztZQUVqRUYsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0osUUFBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDRyxLQUFTLFNBQUNDLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFRCxRQUFPO1lBQUcsQ0FBQzs7OztFQTNCNUNHLEtBQVM7a0JBQTFCRixRQUFRO2dCQUFSQSxRQUFRLEVBQ3BCRCxDQUFPLFVBQUdBLE9BQU87Z0JBRExDLFFBQVEsRUFHcEJNLENBQWMsaUJBQUdDLFlBQTRCO2dCQUhqQ1AsUUFBUSxFQUtwQlEsQ0FBZSxrQkFBR0EsWUFBZTtnQkFMckJSLFFBQVEsRUFPcEJTLENBQXFCLHdCQUFHQyxZQUFtQztnQkFQL0NWLFFBQVEsRUFTcEJXLENBQXNCLHlCQUFHLElBQUk7Z0JBVGpCWCxRQUFRLEVBV3BCWSxDQUFzQix5QkFBRyxJQUFJO2dCQVhqQlosUUFBUSxFQWFwQmEsQ0FBMEIsNkJBQUcsSUFBSTtnQkFickJiLFFBQVEsRUFlcEJjLENBQTRCLCtCQUFHLElBQUk7Z0JBZnZCZCxRQUFRLEVBaUJwQmUsQ0FBNkIsZ0NBQUcsSUFBSTtnQkFqQnhCZixRQUFRLEVBbUJwQmdCLENBQThCLGlDQUFHLElBQUk7Z0JBbkJ6QmhCLFFBQVEsRUFxQnBCaUIsQ0FBOEIsaUNBQUdBLFlBQThCIn0=