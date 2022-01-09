"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
_defineProperty(XMLLexer, "entries", entries);
_defineProperty(XMLLexer, "SingleLineCommentToken", null);
_defineProperty(XMLLexer, "RegularExpressionToken", null);
_defineProperty(XMLLexer, "EndOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "StartOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "MiddleOfMultiLineCommentToken", null);
_defineProperty(XMLLexer, "SinglyQuotedStringLiteralToken", null);
exports.default = XMLLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgWWFwcExleGVyIGZyb20gXCIuLi9sZXhlci95YXBwXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwiZGVsaW1pdGVyXCI6IFwiXig/Oj18PFxcXFw/fFxcXFw/Pnw8XFxcXC98XFxcXC8+fDwhLS18LS0+fDx8PilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZGVudGlmaWVyXCI6IFwiXlthLXpBLVpdK1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxMZXhlciBleHRlbmRzIFlhcHBMZXhlciB7XHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiA9IG51bGw7XHJcblxyXG4gIHN0YXRpYyBSZWd1bGFyRXhwcmVzc2lvblRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gPSBudWxsO1xyXG5cclxuICBzdGF0aWMgU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbFRva2VuID0gbnVsbDtcclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gWWFwcExleGVyLmZyb21FbnRyaWVzKFhNTExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwTGV4ZXIuZnJvbVJ1bGVzKFhNTExleGVyLCBydWxlcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFlhcHBMZXhlci5mcm9tRW50cmllcyhYTUxMZXhlciwgZW50cmllcyk7IH1cclxufVxyXG4iXSwibmFtZXMiOlsiZW50cmllcyIsIlhNTExleGVyIiwiZnJvbU5vdGhpbmciLCJmcm9tRW50cmllcyIsImZyb21SdWxlcyIsInJ1bGVzIiwiU2luZ2xlTGluZUNvbW1lbnRUb2tlbiIsIlJlZ3VsYXJFeHByZXNzaW9uVG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWxUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFlLENBQWYsS0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxHQUFLLENBQUNBLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVcsWUFBRSxDQUF5QztJQUN4RCxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFZO0lBQzVCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7SUFFb0JDLFFBQVEsaUJBQWQsUUFBUTtjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7OztpQkFBUkEsUUFBUTs7WUFlcEJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBN0JULEtBQWUsU0E2QktDLFdBQVcsQ0FBQ0YsUUFBUSxFQUFFRCxPQUFPO1lBQUcsQ0FBQzs7O1lBRWxFSSxHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBL0JaLEtBQWUsU0ErQlFELFNBQVMsQ0FBQ0gsUUFBUSxFQUFFSSxLQUFLO1lBQUcsQ0FBQzs7O1lBRWpFRixHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDSCxRQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBakNoQixLQUFlLFNBaUNZRyxXQUFXLENBQUNGLFFBQVEsRUFBRUQsUUFBTztZQUFHLENBQUM7OztXQW5CN0RDLFFBQVE7RUFkUCxLQUFlO2dCQWNoQkEsUUFBUSxFQUNwQkQsQ0FBTyxVQUFHQSxPQUFPO2dCQURMQyxRQUFRLEVBR3BCSyxDQUFzQix5QkFBRyxJQUFJO2dCQUhqQkwsUUFBUSxFQUtwQk0sQ0FBc0IseUJBQUcsSUFBSTtnQkFMakJOLFFBQVEsRUFPcEJPLENBQTBCLDZCQUFHLElBQUk7Z0JBUHJCUCxRQUFRLEVBU3BCUSxDQUE0QiwrQkFBRyxJQUFJO2dCQVR2QlIsUUFBUSxFQVdwQlMsQ0FBNkIsZ0NBQUcsSUFBSTtnQkFYeEJULFFBQVEsRUFhcEJVLENBQThCLGlDQUFHLElBQUk7a0JBYnpCVixRQUFRIn0=