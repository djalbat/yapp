"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLLexer;
    }
});
var _yapp = /*#__PURE__*/ _interopRequireDefault(require("../lexer/yapp"));
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
            value: function fromEntries(entries) {
                return _yapp.default.fromEntries(XMLLexer, entries);
            }
        }
    ]);
    return XMLLexer;
}(_yapp.default);
_defineProperty(XMLLexer, "entries", entries);
_defineProperty(XMLLexer, "EndOfLineToken", _occamLexers.EndOfLineNonSignificantToken) ///
;
_defineProperty(XMLLexer, "WhitespaceToken", _occamLexers.WhitespaceToken);
_defineProperty(XMLLexer, "EndOfLineCommentToken", null);
_defineProperty(XMLLexer, "SingleLineCommentToken", null);
_defineProperty(XMLLexer, "RegularExpressionToken", null);
_defineProperty(XMLLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "SinglyQuotedStringLiteralToken", null);
_defineProperty(XMLLexer, "DoublyQuotedStringLiteralToken", _occamLexers.DoublyQuotedStringLiteralToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgWWFwcExleGVyIGZyb20gXCIuLi9sZXhlci95YXBwXCI7XHJcbmltcG9ydCB7IFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImRlbGltaXRlclwiOiBcIl4oPzo9fDxcXFxcP3xcXFxcPz58PFxcXFwvfFxcXFwvPnw8IS0tfC0tPnw8fD4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWE1MTGV4ZXIgZXh0ZW5kcyBZYXBwTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gWWFwcExleGVyLmZyb21FbnRyaWVzKFhNTExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbVJ1bGVzKFhNTExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhYTUxMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlhNTExleGVyIiwiZW50cmllcyIsImZyb21Ob3RoaW5nIiwiWWFwcExleGVyIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWlCUUEsUUFBUTs7O3lEQWZQLGVBQWU7MkJBQ3lELGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVHLElBQU1DLE9BQU8sR0FBRztJQUNkO1FBQ0UsV0FBVyxFQUFFLHlDQUF5QztLQUN2RDtJQUNEO1FBQ0UsWUFBWSxFQUFFLFlBQVk7S0FDM0I7SUFDRDtRQUNFLFlBQVksRUFBRSxVQUFVO0tBQ3pCO0NBQ0YsQUFBQztBQUVhLElBQUEsQUFBTUQsUUFBUSxpQkFBZDs7O2FBQU1BLFFBQVE7Ozs7OztZQXVCcEJFLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLEtBQVMsUUFBQSxDQUFDQyxXQUFXLENBQUNKLFFBQVEsRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7O1lBRWxFSSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9ILEtBQVMsUUFBQSxDQUFDRSxTQUFTLENBQUNMLFFBQVEsRUFBRU0sS0FBSyxDQUFDLENBQUM7YUFBRTs7O1lBRWpFRixHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0gsT0FBTyxFQUFFO2dCQUFFLE9BQU9FLEtBQVMsUUFBQSxDQUFDQyxXQUFXLENBQUNKLFFBQVEsRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztDQUNqRixDQTVCcUNFLEtBQVMsUUFBQSxDQTRCOUM7QUEzQkMsZ0JBRG1CSCxRQUFRLEVBQ3BCQyxTQUFPLEVBQUdBLE9BQU8sQ0FBQztBQUV6QixnQkFIbUJELFFBQVEsRUFHcEJPLGdCQUFjLEVBQUdDLFlBQTRCLDZCQUFBLENBQUMsQ0FBQyxHQUFHOztBQUV6RCxnQkFMbUJSLFFBQVEsRUFLcEJTLGlCQUFlLEVBQUdBLFlBQWUsZ0JBQUEsQ0FBQztBQUV6QyxnQkFQbUJULFFBQVEsRUFPcEJVLHVCQUFxQixFQUFHLElBQUksQ0FBQztBQUVwQyxnQkFUbUJWLFFBQVEsRUFTcEJXLHdCQUFzQixFQUFHLElBQUksQ0FBQztBQUVyQyxnQkFYbUJYLFFBQVEsRUFXcEJZLHdCQUFzQixFQUFHLElBQUksQ0FBQztBQUVyQyxnQkFibUJaLFFBQVEsRUFhcEJhLDRCQUEwQixFQUFHLElBQUksQ0FBQztBQUV6QyxnQkFmbUJiLFFBQVEsRUFlcEJjLDhCQUE0QixFQUFHLElBQUksQ0FBQztBQUUzQyxnQkFqQm1CZCxRQUFRLEVBaUJwQmUsK0JBQTZCLEVBQUcsSUFBSSxDQUFDO0FBRTVDLGdCQW5CbUJmLFFBQVEsRUFtQnBCZ0IsZ0NBQThCLEVBQUcsSUFBSSxDQUFDO0FBRTdDLGdCQXJCbUJoQixRQUFRLEVBcUJwQmlCLGdDQUE4QixFQUFHQSxZQUE4QiwrQkFBQSxDQUFDIn0=