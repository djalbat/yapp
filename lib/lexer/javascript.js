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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sZXhlci9qYXZhc2NyaXB0LmpzIl0sIm5hbWVzIjpbIkNvbW1vbkxleGVyIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIlNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsIlN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJNaWRkbGVPZk11bHRpTGluZUNvbW1lbnRUb2tlbiIsImVudHJpZXMiLCJKYXZhU2NyaXB0TGV4ZXIiLCJ0b2tlbmlzZUVuZE9mTGluZXMiLCJjb250ZW50IiwibWF0Y2hCcm9rZW5Db21tZW50IiwiaW5Db21tZW50IiwibWF0Y2hTaW5nbGVMaW5lQ29tbWVudCIsInNpbmdsZUxpbmVDb21tZW50VG9rZW4iLCJtYXRjaCIsIm1hdGNoTXVsdGlMaW5lQ29tbWVudEluQ29tbWVudCIsIm11bHRpTGluQ29tbWVudFRva2VuIiwibWF0Y2hNdWx0aUxpbmVDb21tZW50Tm90SW5Db21tZW50IiwibWF0Y2hSZWd1bGFyRXhwcmVzc2lvbiIsImZyb21FbnRyaWVzIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRThDLEdBQWMsQ0FBZCxZQUFjO0FBRXJDLEdBQTRDLENBQTVDLFdBQTRDO0FBQ3hDLEdBQWlELENBQWpELE1BQWlEO0FBQy9DLEdBQW1ELENBQW5ELFFBQW1EO0FBQ2xELEdBQW9ELENBQXBELFNBQW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUYsR0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztRQUNDLENBQVcsWUFBRSxDQUF5QjtJQUN4QyxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVEsU0FBRSxDQUE4QjtJQUMxQyxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVMsVUFBRSxDQUFxRDtJQUNsRSxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVUsV0FBRSxDQUE2SztJQUMzTCxDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVMsVUFBRSxDQUFnUjtJQUM3UixDQUFDO0lBQ0QsQ0FBQztRQUNDLENBQVksYUFBRSxDQUFZO0lBQzVCLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7SUFFb0IsZUFBZSxpQkFBckIsUUFBUTtjQUFGLGVBQWU7YUFBZixlQUFlOzhCQUFmLGVBQWU7Z0VBQWYsZUFBZTs7aUJBQWYsZUFBZTs7WUFDbEMsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLHNCQURqQixlQUFlLGFBQ1MsQ0FBa0IscUJBQXhCLElBQUssYUFBb0IsT0FBTyxFQWhDYixZQUFjO1lBZ0NnQyxDQUFDOzs7WUFFdkcsR0FBa0IsRUFBbEIsQ0FBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxDQUFDOzs7WUFFdkQsR0FBc0IsRUFBdEIsQ0FBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQzFDLEdBQUssQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLEdBQ1AsSUFBSSxHQXBDTixXQUE0QyxTQXFDakIsS0FBSyxDQUFDLE9BQU87Z0JBRXZFLE1BQU0sQ0FBQyxzQkFBc0I7WUFDL0IsQ0FBQzs7O1lBRUQsR0FBOEIsRUFBOUIsQ0FBOEI7bUJBQTlCLFFBQVEsQ0FBUiw4QkFBOEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQ2xELEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLEdBMUNILE1BQWlELFNBMkMxQixLQUFLLENBQUMsT0FBTyxLQXpDakMsU0FBb0QsU0F5Q2dCLEtBQUssQ0FBQyxPQUFPLElBQ3ZGLElBQUk7Z0JBRXBDLE1BQU0sQ0FBQyxvQkFBb0I7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBaUMsRUFBakMsQ0FBaUM7bUJBQWpDLFFBQVEsQ0FBUixpQ0FBaUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQ3JELEdBQUssQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLEdBQ1AsSUFBSSxHQWxERSxRQUFtRCxTQW1EMUIsS0FBSyxDQUFDLE9BQU87Z0JBRTNFLE1BQU0sQ0FBQyxvQkFBb0I7WUFDN0IsQ0FBQzs7O1lBRUQsR0FBc0IsRUFBdEIsQ0FBc0I7bUJBQXRCLFFBQVEsQ0FBUixzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsSUFBSTtZQUFFLENBQUM7Ozs7WUFJekMsR0FBVyxFQUFYLENBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWhFb0IsWUFBYyxhQWdFckIsV0FBVyxDQUFDLGVBQWUsRUFBRSxPQUFPO1lBQUcsQ0FBQzs7O1lBRWxGLEdBQVcsRUFBWCxDQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQWxFMkIsWUFBYyxhQWtFNUIsV0FBVyxDQUFDLGVBQWU7WUFBRyxDQUFDOzs7V0FuQ3RELGVBQWU7RUEvQnNCLFlBQWM7Z0JBK0JuRCxlQUFlLEVBK0IzQixDQUFPLFVBQUcsT0FBTztrQkEvQkwsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTGV4ZXIsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XHJcblxyXG5pbXBvcnQgU2luZ2xlTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zaW5nbGVMaW5lXCI7XHJcbmltcG9ydCBFbmRPZk11bHRpTGluZUNvbW1lbnRUb2tlbiBmcm9tIFwiLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUvZW5kT2ZcIjtcclxuaW1wb3J0IFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4gZnJvbSBcIi4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbXVsdGlMaW5lL3N0YXJ0T2ZcIjtcclxuaW1wb3J0IE1pZGRsZU9mTXVsdGlMaW5lQ29tbWVudFRva2VuIGZyb20gXCIuLi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L211bHRpTGluZS9taWRkbGVPZlwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcImRlbGltaXRlclwiOiBcIl4oPzpgfFxcXFwkXFxcXHt8PFxcXFwvfFxcXFwvPilcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogXCJeXFxcXC0/WzEtOV1bMC05XSooXFxcXC5bMC05XSspP1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86O3w6fCx8PT58XFxcXD98XFxcXHt8XFxcXH18XFxcXFt8XFxcXF18XFxcXCh8XFxcXCl8XFxcXDp8XFxcXFxcXFxgKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm9wZXJhdG9yXCI6IFwiXig/OiY9fD4+Pj18Pj49fDw8PXxcXFxcLlxcXFwuXFxcXC58XFxcXC58XFxcXCpcXFxcKj18XFxcXCo9fFxcXFwrPXxcXFxcLT18XFxcXC89fFxcXFxePXxcXFxcfD09PXw9PXw9fCE9PXwlPXw+PXw8PXw+Pj58Pj58PDx8Pnw8fD18JXwmJnwmfH58IXxcXFxcXnxcXFxcfFxcXFx8fFxcXFx8fFxcXFwrXFxcXCt8XFxcXC1cXFxcLXxcXFxcKlxcXFwqfFxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImtleXdvcmRcIjogXCJeKD86aW1wb3J0fGV4cG9ydHxkZWZhdWx0fHZhcnxsZXR8Y29uc3R8ZnVuY3Rpb258Y2xhc3N8ZXh0ZW5kc3xjb25zdHJ1Y3RvcnxzdGF0aWN8YnJlYWt8cmV0dXJufGNvbnRpbnVlfGlmfGVsc2V8c3dpdGNofGNhc2V8dGhyb3d8dHJ5fGNhdGNofGZpbmFsbHl8aW5zdGFuY2VvZnx0eXBlb2Z8YXN5bmN8YXdhaXR8ZG98d2hpbGV8Zm9yfGlufG9mfGFzfG5ld3x0aGlzfHN1cGVyfGRlbGV0ZXx1bmRlZmluZWR8bnVsbHx0cnVlfGZhbHNlfHZvaWR8bWV0YXxkZWJ1Z2dlcilcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkZW50aWZpZXJcIjogXCJeW2EtekEtWl0rXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEphdmFTY3JpcHRMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICB0b2tlbmlzZUVuZE9mTGluZXMoY29udGVudCkgeyByZXR1cm4gc3VwZXIudG9rZW5pc2VFbmRPZkxpbmVzKGNvbnRlbnQsIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4pOyB9XHJcblxyXG4gIG1hdGNoQnJva2VuQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgbWF0Y2hTaW5nbGVMaW5lQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IHNpbmdsZUxpbmVDb21tZW50VG9rZW4gPSBpbkNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUxpbmVDb21tZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBtYXRjaE11bHRpTGluZUNvbW1lbnRJbkNvbW1lbnQoY29udGVudCwgaW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBtdWx0aUxpbkNvbW1lbnRUb2tlbiA9IGluQ29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgfHwgTWlkZGxlT2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG5cclxuICAgIHJldHVybiBtdWx0aUxpbkNvbW1lbnRUb2tlbjtcclxuICB9XHJcblxyXG4gIG1hdGNoTXVsdGlMaW5lQ29tbWVudE5vdEluQ29tbWVudChjb250ZW50LCBpbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IG11bHRpTGluQ29tbWVudFRva2VuID0gaW5Db21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0T2ZNdWx0aUxpbmVDb21tZW50VG9rZW4ubWF0Y2goY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG11bHRpTGluQ29tbWVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgbWF0Y2hSZWd1bGFyRXhwcmVzc2lvbihjb250ZW50KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIHN0YXRpYyBlbnRyaWVzID0gZW50cmllcztcclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEphdmFTY3JpcHRMZXhlciwgZW50cmllcyk7IH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoSmF2YVNjcmlwdExleGVyKTsgfVxyXG59XHJcbiJdfQ==