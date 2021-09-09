"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _singleLine = _interopRequireDefault(require("../token/nonSignificant/comment/singleLine"));
var _endOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/endOf"));
var _startOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/startOf"));
var _middleOf = _interopRequireDefault(require("../token/nonSignificant/comment/multiLine/middleOf"));
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
        "delimiter": "^(?:`|\\$\\{|<\\/|\\/>)"
    },
    {
        "number": "^\\-?[1-9][0-9]*(\\.[0-9]+)?"
    },
    {
        "special": "^(?:;|:|,|=>|\\?|\\{|\\}|\\[|\\]|\\(|\\)|\\:|\\\\`)"
    },
    {
        "operator": "^(?:&=|>>>=|>>=|<<=|\\.\\.\\.|\\.|\\*\\*=|\\*=|\\+=|\\-=|\\/=|\\^=|\\|===|==|=|!==|%=|>=|<=|>>>|>>|<<|>|<|=|%|&&|&|~|!|\\^|\\|\\||\\||\\+\\+|\\-\\-|\\*\\*|\\+|\\-|\\*|\\/)"
    },
    {
        "keyword": "^(?:import|export|default|var|let|const|function|class|extends|constructor|static|break|return|continue|if|else|switch|case|throw|try|catch|finally|instanceof|typeof|async|await|do|while|for|in|of|as|new|this|super|delete|undefined|null|true|false|void|meta|debugger)\\b"
    },
    {
        "identifier": "^[a-zA-Z]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var JavaScriptLexer = /*#__PURE__*/ function(CommonLexer) {
    _inherits(JavaScriptLexer, CommonLexer);
    function JavaScriptLexer() {
        _classCallCheck(this, JavaScriptLexer);
        return _possibleConstructorReturn(this, _getPrototypeOf(JavaScriptLexer).apply(this, arguments));
    }
    _createClass(JavaScriptLexer, [
        {
            key: "tokeniseEndOfLines",
            value: function tokeniseEndOfLines(content) {
                return _get(_getPrototypeOf(JavaScriptLexer.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
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
                var singleLineCommentToken = inComment ? null : _singleLine.default.match(content);
                return singleLineCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentInComment",
            value: function matchMultiLineCommentInComment(content, inComment) {
                var multiLinCommentToken = inComment ? _endOf.default.match(content) || _middleOf.default.match(content) : null;
                return multiLinCommentToken;
            }
        },
        {
            key: "matchMultiLineCommentNotInComment",
            value: function matchMultiLineCommentNotInComment(content, inComment) {
                var multiLinCommentToken = inComment ? null : _startOf.default.match(content);
                return multiLinCommentToken;
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
                return _occamLexers.CommonLexer.fromEntries(JavaScriptLexer, entries);
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _occamLexers.CommonLexer.fromNothing(JavaScriptLexer);
            }
        }
    ]);
    return JavaScriptLexer;
}(_occamLexers.CommonLexer);
_defineProperty(JavaScriptLexer, "entries", entries);
exports.default = JavaScriptLexer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImVudHJpZXMiLCJKYXZhU2NyaXB0TGV4ZXIiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJjb250ZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwiaW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50IiwibWF0Y2hSZWd1bGFyRXhwcmVzc2lvbiIsImZyb21FbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRThDLEdBQWMsQ0FBZCxZQUFjO0FBRXJDLEdBQTRDLENBQTVDLFdBQTRDO0FBQ3hDLEdBQWlELENBQWpELE1BQWlEO0FBQy9DLEdBQW1ELENBQW5ELFFBQW1EO0FBQ2xELEdBQW9ELENBQXBELFNBQW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUYsR0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztTQUNDLFNBQVcsSUFBRSx1QkFBeUI7SUFDeEMsQ0FBQztJQUNELENBQUM7U0FDQyxNQUFRLElBQUUsNEJBQThCO0lBQzFDLENBQUM7SUFDRCxDQUFDO1NBQ0Ms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