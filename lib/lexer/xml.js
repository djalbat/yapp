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
        "delimiter": "^(?:=|<\\?|\\?>|<\\/|\\/>|<!--|-->|<|>)"
    },
    {
        "identifier": "^[a-zA-Z]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var XMLLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(XMLLexer, CommonLexer);
    function XMLLexer() {
        _classCallCheck(this, XMLLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(XMLLexer).apply(this, arguments));
    }
    _createClass(XMLLexer, [
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                return _get(_getPrototypeOf(XMLLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
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
                return _occamLexers.CommonLexer.fromEntries(XMLLexer, entries);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(XMLLexer);
            }
        }
    ]);
    return XMLLexer;
}(_occamLexers.CommonLexer);
_defineProperty(XMLLexer, "entries", entries);
exports.default = XMLLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci94bWwuanMiXSwibmFtZXMiOlsiQ29tbW9uTGV4ZXIiLCJFbmRPZkxpbmVOb25TaWduaWZpY2FudFRva2VuIiwiZW50cmllcyIsIlhNTExleGVyIiwidG9rZW5pc2VFbmRPZkxpbmVzIiwiY29udGVudCIsIm1hdGNoQnJva2VuQ29tbWVudCIsImluQ29tbWVudCIsIm1hdGNoU2luZ2xlTGluZUNvbW1lbnQiLCJtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQiLCJtYXRjaE11bHRpTGluZUNvbW1lbnROb3RJbkNvbW1lbnQiLCJtYXRjaFJlZ3VsYXJFeHByZXNzaW9uIiwibWF0Y2hTaW5nbHlRdW90ZWRTdHJpbmdMaXRlcmFsIiwiZnJvbUVudHJpZXMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFOEMsR0FBYyxDQUFkLFlBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsR0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztTQUNDLFNBQVcsSUFBRSx1Q0FBeUM7SUFDeEQsQ0FBQztJQUNELENBQUM7U0FDQyxVQUFZLElBQUUsVUFBWTtJQUM1QixDQUFDO0lBQ0QsQ0FBQztTQUNDLFVBQVksSUFBRSxRQUFVO0lBQzFCLENBQUM7QUFDSCxDQUFDO0lBRW9CLFFBQVEsaUJBQWQsUUFBUTtjQUFGLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7Z0VBQVIsUUFBUTs7aUJBQVIsUUFBUTs7WUFDM0IsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxzQkFEakIsUUFBUSxjQUNnQixrQkFBa0IsR0FBeEIsSUFBSyxhQUFvQixPQUFPLEVBZmIsWUFBYztZQWVnQyxDQUFDOzs7WUFFdkcsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXZELEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUUzRCxHQUE4QixHQUE5Qiw4QkFBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFbkUsR0FBaUMsR0FBakMsaUNBQWlDO21CQUFqQyxRQUFRLENBQVIsaUNBQWlDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXRFLEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRWhELEdBQThCLEdBQTlCLDhCQUE4QjttQkFBOUIsUUFBUSxDQUFSLDhCQUE4QixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7OztZQUlqRCxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBL0JvQixZQUFjLGFBK0JyQixXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU87WUFBRyxDQUFDOzs7WUFFM0UsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBakMyQixZQUFjLGFBaUM1QixXQUFXLENBQUMsUUFBUTtZQUFHLENBQUM7OztXQW5CL0MsUUFBUTtFQWQ2QixZQUFjO2dCQWNuRCxRQUFRLEdBZXBCLE9BQU8sR0FBRyxPQUFPO2tCQWZMLFFBQVEifQ==