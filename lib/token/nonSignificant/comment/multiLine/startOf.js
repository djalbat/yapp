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
var startOfMultiLineCommentType = _occamLexers.types.startOfMultiLineCommentType;
var StartOfMultiLineCommentToken = /*#__PURE__*/ function(NonSignificantToken) {
    _inherits(StartOfMultiLineCommentToken, NonSignificantToken);
    function StartOfMultiLineCommentToken() {
        _classCallCheck(this, StartOfMultiLineCommentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartOfMultiLineCommentToken).apply(this, arguments));
    }
    _createClass(StartOfMultiLineCommentToken, [
        {
            key: "clone",
            value: function clone(startPosition, endPosition) {
                return _get(_getPrototypeOf(StartOfMultiLineCommentToken.prototype), "clone", this).call(this, StartOfMultiLineCommentToken, startPosition, endPosition);
            }
        },
        {
            key: "isInComment",
            value: function isInComment() {
                var inComment = true;
                return inComment;
            }
        }
    ], [
        {
            key: "match",
            value: function match(content) {
                return _occamLexers.NonSignificantToken.match(StartOfMultiLineCommentToken, content);
            }
        },
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.NonSignificantToken.fromContent(StartOfMultiLineCommentToken, content);
            }
        }
    ]);
    return StartOfMultiLineCommentToken;
}(_occamLexers.NonSignificantToken);
_defineProperty(StartOfMultiLineCommentToken, "type", startOfMultiLineCommentType);
_defineProperty(StartOfMultiLineCommentToken, "regularExpression", /^\/\*/);
exports.default = StartOfMultiLineCommentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9zdGFydE9mLmpzIl0sIm5hbWVzIjpbInR5cGVzIiwiTm9uU2lnbmlmaWNhbnRUb2tlbiIsInN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJjbG9uZSIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImlzSW5Db21tZW50IiwiaW5Db21tZW50IiwidHlwZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2giLCJjb250ZW50IiwiZnJvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRStCLEdBQWMsQ0FBZCxZQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBRywyQkFBMkIsR0FGUSxZQUFjLE9BRWpELDJCQUEyQjtJQUVkLDRCQUE0QixpQkFBbEMsUUFBUTtjQUFGLDRCQUE0QjthQUE1Qiw0QkFBNEI7OEJBQTVCLDRCQUE0QjtnRUFBNUIsNEJBQTRCOztpQkFBNUIsNEJBQTRCOztZQUMvQyxHQUFLLEVBQUwsQ0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQUR2Qiw0QkFBNEIsYUFDRSxDQUFLLFFBQVgsSUFBSyxhQUFPLDRCQUE0QixFQUFFLGFBQWEsRUFBRSxXQUFXO1lBQUcsQ0FBQzs7O1lBRW5ILEdBQVcsRUFBWCxDQUFXO21CQUFYLFFBQVEsQ0FBUixXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUMsU0FBUyxHQUFHLElBQUk7Z0JBRXRCLE1BQU0sQ0FBQyxTQUFTO1lBQ2xCLENBQUM7Ozs7WUFNTSxHQUFLLEVBQUwsQ0FBSzttQkFBWixRQUFRLENBQUQsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FqQlcsWUFBYyxxQkFpQkosS0FBSyxDQUFDLDRCQUE0QixFQUFFLE9BQU87WUFBRyxDQUFDOzs7WUFFM0YsR0FBVyxFQUFYLENBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQW5CSyxZQUFjLHFCQW1CRSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsT0FBTztZQUFHLENBQUM7OztXQWYzRiw0QkFBNEI7RUFKTixZQUFjO2dCQUlwQyw0QkFBNEIsRUFTeEMsQ0FBSSxPQUFHLDJCQUEyQjtnQkFUdEIsNEJBQTRCLEVBV3hDLENBQWlCO2tCQVhMLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB0eXBlcywgTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIlxuXG5jb25zdCB7IHN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VHlwZSB9ID0gdHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIHN1cGVyLmNsb25lKFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIGlzSW5Db21tZW50KCkge1xuICAgIGNvbnN0IGluQ29tbWVudCA9IHRydWU7XG5cbiAgICByZXR1cm4gaW5Db21tZW50O1xuICB9XG5cbiAgc3RhdGljIHR5cGUgPSBzdGFydE9mTXVsdGlMaW5lQ29tbWVudFR5cGU7XG5cbiAgc3RhdGljIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC9cXCovO1xuXG4gIHN0YXRpYyBtYXRjaChjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLm1hdGNoKFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4sIGNvbnRlbnQpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnQoU3RhcnRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiwgY29udGVudCk7IH1cbn1cbiJdfQ==