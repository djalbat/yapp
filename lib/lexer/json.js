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
var JSONLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(JSONLexer, CommonLexer);
    function JSONLexer() {
        _classCallCheck(this, JSONLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(JSONLexer).apply(this, arguments));
    }
    _createClass(JSONLexer, [
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                return _get(_getPrototypeOf(JSONLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
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
        }
    ], [
        {
            key: "fromEntries",
            value: function fromEntries(entries) {
                return _occamLexers.CommonLexer.fromEntries(JSONLexer, entries);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(JSONLexer);
            }
        }
    ]);
    return JSONLexer;
}(_occamLexers.CommonLexer);
_defineProperty(JSONLexer, "entries", entries);
exports.default = JSONLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qc29uLmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsImVudHJpZXMiLCJKU09OTGV4ZXIiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJjb250ZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwiaW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudCIsIm1hdGNoUmVndWxhckV4cHJlc3Npb24iLCJmcm9tRW50cmllcyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUU4QyxHQUFjLENBQWQsWUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxHQUFLLENBQUMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO1NBQ0MsT0FBUyxJQUFFLDBCQUE0QjtJQUN6QyxDQUFDO0lBQ0QsQ0FBQztTQUNDLE1BQVEsSUFBRSw0QkFBOEI7SUFDMUMsQ0FBQztJQUNELENBQUM7U0FDQyxPQUFTLElBQUUsb0JBQXNCO0lBQ25DLENBQUM7SUFDRCxDQUFDO1NBQ0MsVUFBWSxJQUFFLFFBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7SUFFb0IsU0FBUyxpQkFBZixRQUFRO2NBQUYsU0FBUzthQUFULFNBQVM7OEJBQVQsU0FBUztnRUFBVCxTQUFTOztpQkFBVCxTQUFTOztZQUM1QixHQUFrQixHQUFsQixrQkFBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQURqQixTQUFTLGNBQ2Usa0JBQWtCLEdBQXhCLElBQUssYUFBb0IsT0FBTyxFQWxCYixZQUFjO1lBa0JnQyxDQUFDOzs7WUFFdkcsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXZELEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7OztZQUUzRCxHQUE4QixHQUE5Qiw4QkFBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFbkUsR0FBaUMsR0FBakMsaUNBQWlDO21CQUFqQyxRQUFRLENBQVIsaUNBQWlDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7O1lBRXRFLEdBQXNCLEdBQXRCLHNCQUFzQjttQkFBdEIsUUFBUSxDQUFSLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQUUsQ0FBQzs7OztZQUl6QyxHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBaENvQixZQUFjLGFBZ0NyQixXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU87WUFBRyxDQUFDOzs7WUFFNUUsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBbEMyQixZQUFjLGFBa0M1QixXQUFXLENBQUMsU0FBUztZQUFHLENBQUM7OztXQWpCaEQsU0FBUztFQWpCNEIsWUFBYztnQkFpQm5ELFNBQVMsR0FhckIsT0FBTyxHQUFHLE9BQU87a0JBYkwsU0FBUyJ9