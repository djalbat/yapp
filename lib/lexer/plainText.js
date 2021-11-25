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
var entries1 = [
    {
        "unassigned": "^[^\\s]+"
    }
];
var PlainTextLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(PlainTextLexer, CommonLexer);
    var _super = _createSuper(PlainTextLexer);
    function PlainTextLexer() {
        _classCallCheck(this, PlainTextLexer);
        return _super.apply(this, arguments);
    }
    _createClass(PlainTextLexer, [
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                return _get(_getPrototypeOf(PlainTextLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
            }
        },
        {
            key: "matchBrokenComment",
            value: function matchBrokenComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchSingleLineComment",
            value: function matchSingleLineComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchMultiLineCommentInComment",
            value: function matchMultiLineCommentInComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchMultiLineCommentNotInComment",
            value: function matchMultiLineCommentNotInComment(content, inComment) {
                return null;
            }
        },
        {
            key: "matchRegularExpression",
            value: function matchRegularExpression(content) {
                return null;
            }
        },
        {
            key: "matchSinglyQuotedStringLiteral",
            value: function matchSinglyQuotedStringLiteral(content) {
                return null;
            }
        },
        {
            key: "matchDoublyQuotedStringLiteral",
            value: function matchDoublyQuotedStringLiteral(content) {
                return null;
            }
        }
    ], [
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(PlainTextLexer, entries);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(PlainTextLexer);
            }
        }
    ]);
    return PlainTextLexer;
}(_occamLexers.CommonLexer);
_defineProperty(PlainTextLexer, "entries", entries1);
exports.default = PlainTextLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9wbGFpblRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBDb21tb25MZXhlciwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0TGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgdG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQpIHsgcmV0dXJuIHN1cGVyLnRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50LCBFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuKTsgfVxyXG5cclxuICBtYXRjaEJyb2tlbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2xlTGluZUNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFJlZ3VsYXJFeHByZXNzaW9uKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hEb3VibHlRdW90ZWRTdHJpbmdMaXRlcmFsKGNvbnRlbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgc3RhdGljIGVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoUGxhaW5UZXh0TGV4ZXIsIGVudHJpZXMpOyB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21Ob3RoaW5nKFBsYWluVGV4dExleGVyKTsgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlbnRyaWVzIiwiUGxhaW5UZXh0TGV4ZXIiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJjb250ZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwiaW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJtYXRjaFNpbmdseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJtYXRjaERvdWJseVF1b3RlZFN0cmluZ0xpdGVyYWwiLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUU4QyxHQUFjLENBQWQsWUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsR0FBSyxDQUFDQSxRQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7UUFDQyxDQUFZLGFBQUUsQ0FBVTtJQUMxQixDQUFDO0FBQ0gsQ0FBQztJQUVvQkMsY0FBYyxpQkFBcEIsUUFBUTtjQUFGQSxjQUFjOzhCQUFkQSxjQUFjO2FBQWRBLGNBQWM7OEJBQWRBLGNBQWM7OztpQkFBZEEsY0FBYzs7WUFDakNDLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sc0JBRGpCRixjQUFjLGFBQ1VDLENBQWtCLHFCQUF4QixJQUFLLGFBQW9CQyxPQUFPLEVBVGIsWUFBYztZQVNnQyxDQUFDOzs7WUFFdkdDLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLENBQUNELE9BQU8sRUFBRUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFdkRDLEdBQXNCLEVBQXRCQSxDQUFzQjttQkFBdEJBLFFBQVEsQ0FBUkEsc0JBQXNCLENBQUNILE9BQU8sRUFBRUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFM0RFLEdBQThCLEVBQTlCQSxDQUE4QjttQkFBOUJBLFFBQVEsQ0FBUkEsOEJBQThCLENBQUNKLE9BQU8sRUFBRUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFbkVHLEdBQWlDLEVBQWpDQSxDQUFpQzttQkFBakNBLFFBQVEsQ0FBUkEsaUNBQWlDLENBQUNMLE9BQU8sRUFBRUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFdEVJLEdBQXNCLEVBQXRCQSxDQUFzQjttQkFBdEJBLFFBQVEsQ0FBUkEsc0JBQXNCLENBQUNOLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRWhETyxHQUE4QixFQUE5QkEsQ0FBOEI7bUJBQTlCQSxRQUFRLENBQVJBLDhCQUE4QixDQUFDUCxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUV4RFEsR0FBOEIsRUFBOUJBLENBQThCO21CQUE5QkEsUUFBUSxDQUFSQSw4QkFBOEIsQ0FBQ1IsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7O1lBSWpEUyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDWixPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBM0JvQixZQUFjLGFBMkJyQlksV0FBVyxDQUFDWCxjQUFjLEVBQUVELE9BQU87WUFBRyxDQUFDOzs7WUFFakZhLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBN0IyQixZQUFjLGFBNkI1QkEsV0FBVyxDQUFDWixjQUFjO1lBQUcsQ0FBQzs7O1dBckJyREEsY0FBYztFQVJ1QixZQUFjO2dCQVFuREEsY0FBYyxFQWlCMUJELENBQU8sVUFBR0EsUUFBTztrQkFqQkxDLGNBQWMifQ==