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
exports.default = XMLLexer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgWWFwcExleGVyIGZyb20gXCIuLi9sZXhlci95YXBwXCI7XHJcbmltcG9ydCB7IFdoaXRlc3BhY2VUb2tlbiwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiwgRG91Ymx5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImRlbGltaXRlclwiOiBcIl4oPzo9fDxcXFxcP3xcXFxcPz58PFxcXFwvfFxcXFwvPnw8IS0tfC0tPnw8fD4pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRlbnRpZmllclwiOiBcIl5bYS16QS1aXStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWE1MTGV4ZXIgZXh0ZW5kcyBZYXBwTGV4ZXIge1xyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbjsgLy8vXHJcblxyXG4gIHN0YXRpYyBXaGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW47XHJcblxyXG4gIHN0YXRpYyBFbmRPZkxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiA9IERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbjtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gWWFwcExleGVyLmZyb21FbnRyaWVzKFhNTExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbVJ1bGVzKFhNTExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhYTUxMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImVudHJpZXMiLCJYTUxMZXhlciIsImZyb21Ob3RoaW5nIiwiWWFwcExleGVyIiwiZnJvbUVudHJpZXMiLCJmcm9tUnVsZXMiLCJydWxlcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIldoaXRlc3BhY2VUb2tlbiIsIkVuZE9mTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJSZWd1bGFyRXhwcmVzc2lvblRva2VuIiwiRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTdGFydE9mTXVsdGlMaW5lQ29tbWVudFRva2VuIiwiTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iLCJEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLEtBQWUsa0NBQWYsZUFBZSxFQUFBO0FBQ3lELElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUcsSUFBTUEsT0FBTyxHQUFHO0lBQ2Q7UUFDRSxXQUFXLEVBQUUseUNBQXlDO0tBQ3ZEO0lBQ0Q7UUFDRSxZQUFZLEVBQUUsWUFBWTtLQUMzQjtJQUNEO1FBQ0UsWUFBWSxFQUFFLFVBQVU7S0FDekI7Q0FDRixBQUFDO0FBRWEsSUFBQSxBQUFNQyxRQUFRLGlCQUFkOzs7YUFBTUEsUUFBUTs7Ozs7O1lBdUJwQkMsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0MsS0FBUyxRQUFBLENBQUNDLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFRCxPQUFPLENBQUMsQ0FBQzthQUFFOzs7WUFFbEVLLEdBQVMsRUFBVEEsV0FBUzttQkFBaEIsU0FBT0EsU0FBUyxDQUFDQyxLQUFLLEVBQUU7Z0JBQUUsT0FBT0gsS0FBUyxRQUFBLENBQUNFLFNBQVMsQ0FBQ0osUUFBUSxFQUFFSyxLQUFLLENBQUMsQ0FBQzthQUFFOzs7WUFFakVGLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxDQUFDSixPQUFPLEVBQUU7Z0JBQUUsT0FBT0csS0FBUyxRQUFBLENBQUNDLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFRCxPQUFPLENBQUMsQ0FBQzthQUFFOzs7O0NBQ2pGLENBNUJxQ0csS0FBUyxRQUFBLENBNEI5QztBQTNCQyxnQkFEbUJGLFFBQVEsRUFDcEJELFNBQU8sRUFBR0EsT0FBTyxDQUFDO0FBRXpCLGdCQUhtQkMsUUFBUSxFQUdwQk0sZ0JBQWMsRUFBR0MsWUFBNEIsNkJBQUEsQ0FBQyxDQUFDLEdBQUc7O0FBRXpELGdCQUxtQlAsUUFBUSxFQUtwQlEsaUJBQWUsRUFBR0EsWUFBZSxnQkFBQSxDQUFDO0FBRXpDLGdCQVBtQlIsUUFBUSxFQU9wQlMsdUJBQXFCLEVBQUcsSUFBSSxDQUFDO0FBRXBDLGdCQVRtQlQsUUFBUSxFQVNwQlUsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQVhtQlYsUUFBUSxFQVdwQlcsd0JBQXNCLEVBQUcsSUFBSSxDQUFDO0FBRXJDLGdCQWJtQlgsUUFBUSxFQWFwQlksNEJBQTBCLEVBQUcsSUFBSSxDQUFDO0FBRXpDLGdCQWZtQlosUUFBUSxFQWVwQmEsOEJBQTRCLEVBQUcsSUFBSSxDQUFDO0FBRTNDLGdCQWpCbUJiLFFBQVEsRUFpQnBCYywrQkFBNkIsRUFBRyxJQUFJLENBQUM7QUFFNUMsZ0JBbkJtQmQsUUFBUSxFQW1CcEJlLGdDQUE4QixFQUFHLElBQUksQ0FBQztBQUU3QyxnQkFyQm1CZixRQUFRLEVBcUJwQmdCLGdDQUE4QixFQUFHQSxZQUE4QiwrQkFBQSxDQUFDO2tCQXJCcERoQixRQUFRIn0=