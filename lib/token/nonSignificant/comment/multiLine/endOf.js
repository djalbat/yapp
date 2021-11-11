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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var endOfMultiLineCommentType = _occamLexers.types.endOfMultiLineCommentType;
var EndOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(EndOfMultiLineCommentToken, NonSignificantToken);
    var _super = _createSuper(EndOfMultiLineCommentToken);
    function EndOfMultiLineCommentToken() {
        _classCallCheck(this, EndOfMultiLineCommentToken);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(EndOfMultiLineCommentToken.prototype), "clone", this).call(this, EndOfMultiLineCommentToken, startPosition, endPosition);
            }
        },
        {
            key: "isInComment",
            value: function isInComment() {
                var inComment = false;
                return inComment;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _occamLexers.NonSignificantToken.match(EndOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.NonSignificantToken.fromContent(EndOfMultiLineCommentToken, content);
            }
        }
    ]);
    return EndOfMultiLineCommentToken;
}(_occamLexers.NonSignificantToken);
_defineProperty(EndOfMultiLineCommentToken, "type", endOfMultiLineCommentType);
_defineProperty(EndOfMultiLineCommentToken, "regularExpression", /^\*\//);
exports.default = EndOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9lbmRPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHlwZXMsIE5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCJcblxuY29uc3QgeyBlbmRPZk11bHRpTGluZUNvbW1lbnRUeXBlIH0gPSB0eXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7IH1cblxuICBpc0luQ29tbWVudCgpIHtcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbkNvbW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgdHlwZSA9IGVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXCpcXC8vO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KEVuZE9mTXVsdGlMaW5lQ29tbWVudFRva2VuLCBjb250ZW50KTsgfVxufVxuIl0sIm5hbWVzIjpbImVuZE9mTXVsdGlMaW5lQ29tbWVudFR5cGUiLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImNsb25lIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiaXNJbkNvbW1lbnQiLCJpbkNvbW1lbnQiLCJtYXRjaCIsImNvbnRlbnQiLCJmcm9tQ29udGVudCIsInR5cGUiLCJyZWd1bGFyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFK0IsR0FBYyxDQUFkLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBR0EseUJBQXlCLEdBRlUsWUFBYyxPQUVqREEseUJBQXlCO0lBRVpDLDBCQUEwQixpQkFBaEMsUUFBUTtjQUFGQSwwQkFBMEI7OEJBQTFCQSwwQkFBMEI7YUFBMUJBLDBCQUEwQjs4QkFBMUJBLDBCQUEwQjs7O2lCQUExQkEsMEJBQTBCOztZQUM3Q0MsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsYUFBYSxFQUFFQyxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQUR2QkgsMEJBQTBCLGFBQ0lDLENBQUssUUFBWCxJQUFLLGFBQU9ELDBCQUEwQixFQUFFRSxhQUFhLEVBQUVDLFdBQVc7WUFBRyxDQUFDOzs7WUFFakhDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLO2dCQUV2QixNQUFNLENBQUNBLFNBQVM7WUFDbEIsQ0FBQzs7OztZQU1NQyxHQUFLLEVBQUxBLENBQUs7bUJBQVosUUFBUSxDQUFEQSxLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FqQlcsWUFBYyxxQkFpQkpELEtBQUssQ0FBQ04sMEJBQTBCLEVBQUVPLE9BQU87WUFBRyxDQUFDOzs7WUFFekZDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNELE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQkssWUFBYyxxQkFtQkVDLFdBQVcsQ0FBQ1IsMEJBQTBCLEVBQUVPLE9BQU87WUFBRyxDQUFDOzs7V0FmekZQLDBCQUEwQjtFQUpKLFlBQWM7Z0JBSXBDQSwwQkFBMEIsRUFTdENTLENBQUksT0FBR1YseUJBQXlCO2dCQVRwQkMsMEJBQTBCLEVBV3RDVSxDQUFpQjtrQkFYTFYsMEJBQTBCIn0=