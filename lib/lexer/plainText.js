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
var entries = [
    {
        "unassigned": "^[^\\s]+"
    }
];
var PlainTextLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(PlainTextLexer, CommonLexer);
    function PlainTextLexer() {
        _classCallCheck(this, PlainTextLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(PlainTextLexer).apply(this, arguments));
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
_defineProperty(PlainTextLexer, "entries", entries);
exports.default = PlainTextLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9wbGFpblRleHQuanMiXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiZW50cmllcyIsIlBsYWluVGV4dExleGVyIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwiY29udGVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsImluQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQiLCJtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwiZnJvbUVudHJpZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFOEMsR0FBYyxDQUFkLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsR0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFVO0lBQzFCLENBQUM7QUFDSCxDQUFDO0lBRW9CLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRixjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2pDLEdBQWtCLEVBQWxCLENBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEakIsY0FBYyxhQUNVLENBQWtCLHFCQUF4QixJQUFLLGFBQW9CLE9BQU8sRUFUYixZQUFjO1lBU2dDLENBQUM7OztZQUV2RyxHQUFrQixFQUFsQixDQUFrQjttQkFBbEIsUUFBUSxDQUFSLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUV2RCxHQUFzQixFQUF0QixDQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUUzRCxHQUE4QixFQUE5QixDQUE4QjttQkFBOUIsUUFBUSxDQUFSLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUVuRSxHQUFpQyxFQUFqQyxDQUFpQzttQkFBakMsUUFBUSxDQUFSLGlDQUFpQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUV0RSxHQUFzQixFQUF0QixDQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRWhELEdBQThCLEVBQTlCLENBQThCO21CQUE5QixRQUFRLENBQVIsOEJBQThCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7O1lBSWpELEdBQVcsRUFBWCxDQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0F6Qm9CLFlBQWMsYUF5QnJCLFdBQVcsQ0FBQyxjQUFjLEVBQUUsT0FBTztZQUFHLENBQUM7OztZQUVqRixHQUFXLEVBQVgsQ0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsR0FBRyxDQUFDO2dCQUFDLE1BQU0sQ0EzQjJCLFlBQWMsYUEyQjVCLFdBQVcsQ0FBQyxjQUFjO1lBQUcsQ0FBQzs7O1dBbkJyRCxjQUFjO0VBUnVCLFlBQWM7Z0JBUW5ELGNBQWMsRUFlMUIsQ0FBTyxVQUFHLE9BQU87a0JBZkwsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYWluVGV4dExleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHRva2VuaXNlRW5kT2ZMaW5lcyhjb250ZW50KSB7IHJldHVybiBzdXBlci50b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCwgRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cclxuXHJcbiAgbWF0Y2hCcm9rZW5Db21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaFNpbmdsZUxpbmVDb21tZW50KGNvbnRlbnQsIGluQ29tbWVudCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIG1hdGNoU2luZ2x5UXVvdGVkU3RyaW5nTGl0ZXJhbChjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKFBsYWluVGV4dExleGVyLCBlbnRyaWVzKTsgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tTm90aGluZyhQbGFpblRleHRMZXhlcik7IH1cclxufVxyXG4iXX0=