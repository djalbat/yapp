"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../constants");
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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    function TokensTextarea() {
        _classCallCheck(this, TokensTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(TokensTextarea).apply(this, arguments));
    }
    _createClass(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                if (tokens !== null) {
                    var lineNumber = 1, previousToken = null;
                    var html = tokens.reduce(function(html, token) {
                        var tokenHTML = token.asHTML();
                        if (previousToken === null) {
                            html += "".concat(lineNumber++, ": ");
                        } else {
                            var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                            if (previousTokenEndOfLineToken) {
                                html += "".concat(lineNumber++, ": ");
                            }
                        }
                        html += tokenHTML;
                        previousToken = token;
                        return html;
                    }, _constants.EMPTY_STRING);
                    this.html(html);
                } else {
                    this.clearTokens();
                }
            }
        },
        {
            key: "clearTokens",
            value: function clearTokens() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setTokens = this.setTokens.bind(this), clearTokens = this.clearTokens.bind(this);
                return {
                    setTokens: setTokens,
                    clearTokens: clearTokens
                };
            }
        }
    ]);
    return TokensTextarea;
}(_textarea.default);
_defineProperty(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});
exports.default = TokensTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsIkVNUFRZX1NUUklORyIsIlRva2Vuc1RleHRhcmVhIiwic2V0VG9rZW5zIiwidG9rZW5zIiwibGluZU51bWJlciIsInByZXZpb3VzVG9rZW4iLCJodG1sIiwicmVkdWNlIiwidG9rZW4iLCJ0b2tlbkhUTUwiLCJhc0hUTUwiLCJwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIiwiY2xlYXJUb2tlbnMiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsY0FBYyxpQkFBcEIsUUFBUTtjQUFGLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7Z0VBQWQsY0FBYzs7aUJBQWQsY0FBYzs7WUFDakMsR0FBUyxFQUFULENBQVM7bUJBQVQsUUFBUSxDQUFSLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQ2QsYUFBYSxHQUFHLElBQUk7b0JBRXhCLEdBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFFLEtBQUssRUFBSyxDQUFDO3dCQUMzQyxHQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNO3dCQUU5QixFQUFFLEVBQUUsYUFBYSxLQUFLLElBQUksRUFBRSxDQUFDOzRCQUMzQixJQUFJLElBQUssQ0FBQSxFQUFlLE1BQUUsQ0FBZixVQUFVLElBQUcsQ0FBRTt3QkFDNUIsQ0FBQyxNQUFNLENBQUM7NEJBQ04sR0FBSyxDQUFDLDJCQUEyQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0I7NEJBRWxFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO2dDQUNoQyxJQUFJLElBQUssQ0FBQSxFQUFlLE1BQUUsQ0FBZixVQUFVLElBQUcsQ0FBRTs0QkFDNUIsQ0FBQzt3QkFDSCxDQUFDO3dCQUVELElBQUksSUFBSSxTQUFTO3dCQUVqQixhQUFhLEdBQUcsS0FBSzt3QkFFckIsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQyxFQTFCc0IsVUFBYztvQkE0QnJDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDaEIsQ0FBQyxNQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFXLEVBQVgsQ0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLElBQUksR0FuQ2UsVUFBYztnQkFxQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNoQixDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ3BDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxNQUFNLENBQUUsQ0FBQztvQkFDUCxTQUFTLEVBQVQsU0FBUztvQkFDVCxXQUFXLEVBQVgsV0FBVztnQkFDYixDQUFDO1lBQ0gsQ0FBQzs7O1dBOUNrQixjQUFjO0VBSmQsU0FBYTtnQkFJYixjQUFjLEVBZ0QxQixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFRO0lBQ25CLFVBQVUsRUFBRSxDQUFPO0lBQ25CLFFBQVEsRUFBRSxJQUFJO0FBQ2hCLENBQUM7a0JBcERrQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGlmICh0b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmFzSFRNTCgpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Rva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiA9IHByZXZpb3VzVG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICAgICAgaWYgKHByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICAgICAgaHRtbCArPSBgJHtsaW5lTnVtYmVyKyt9OiBgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xuXG4gICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgIHRoaXMuaHRtbChodG1sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyVG9rZW5zKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFRva2VucyA9IHRoaXMuc2V0VG9rZW5zLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJUb2tlbnMgPSB0aGlzLmNsZWFyVG9rZW5zLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFRva2VucyxcbiAgICAgIGNsZWFyVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRva2Vuc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICByZWFkT25seTogdHJ1ZVxuICB9O1xufVxuIl19