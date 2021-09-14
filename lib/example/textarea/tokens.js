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
                    var html = tokens.reduce(function(html1, token) {
                        var tokenHTML = token.asHTML();
                        if (previousToken === null) {
                            html1 += "".concat(lineNumber++, ": ");
                        } else {
                            var previousTokenEndOfLineToken = previousToken.isEndOfLineToken();
                            if (previousTokenEndOfLineToken) {
                                html1 += "".concat(lineNumber++, ": ");
                            }
                        }
                        html1 += tokenHTML;
                        previousToken = token;
                        return html1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgaWYgKHRva2VucyAhPT0gbnVsbCkge1xuICAgICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgdGhpcy5odG1sKGh0bWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTtBQUVMLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRCLGNBQWM7Y0FBZCxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2pDLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQ2QsYUFBYSxHQUFHLElBQUk7b0JBRXhCLEdBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sVUFBRSxLQUFJLEVBQUUsS0FBSyxFQUFLLENBQUM7d0JBQzNDLEdBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU07d0JBRTlCLEVBQUUsRUFBRSxhQUFhLEtBQUssSUFBSSxFQUFFLENBQUM7NEJBQzNCLEtBQUksT0FBb0IsTUFBRSxDQUFmLFVBQVUsS0FBRyxFQUFFO3dCQUM1QixDQUFDLE1BQU0sQ0FBQzs0QkFDTixHQUFLLENBQUMsMkJBQTJCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQjs0QkFFbEUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLENBQUM7Z0NBQ2hDLEtBQUksT0FBb0IsTUFBRSxDQUFmLFVBQVUsS0FBRyxFQUFFOzRCQUM1QixDQUFDO3dCQUNILENBQUM7d0JBRUQsS0FBSSxJQUFJLFNBQVM7d0JBRWpCLGFBQWEsR0FBRyxLQUFLOytCQUVkLEtBQUk7b0JBQ2IsQ0FBQyxFQTFCc0IsVUFBYzt5QkE0QmhDLElBQUksQ0FBQyxJQUFJO2dCQUNoQixDQUFDLE1BQU0sQ0FBQzt5QkFDRCxXQUFXO2dCQUNsQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsR0FBSyxDQUFDLElBQUksR0FuQ2UsVUFBYztxQkFxQ2xDLElBQUksQ0FBQyxJQUFJO1lBQ2hCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQyxTQUFTLFFBQVEsU0FBUyxDQUFDLElBQUksUUFDL0IsV0FBVyxRQUFRLFdBQVcsQ0FBQyxJQUFJOztvQkFHdkMsU0FBUyxFQUFULFNBQVM7b0JBQ1QsV0FBVyxFQUFYLFdBQVc7O1lBRWYsQ0FBQzs7O1dBOUNrQixjQUFjO0VBSmQsU0FBYTtnQkFJYixjQUFjLEdBZ0QxQixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLE1BQVE7SUFDbkIsVUFBVSxHQUFFLEtBQU87SUFDbkIsUUFBUSxFQUFFLElBQUk7O2tCQW5ERyxjQUFjIn0=