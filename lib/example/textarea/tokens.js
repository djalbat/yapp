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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _createSuper(TokensTextarea);
    function TokensTextarea() {
        _classCallCheck(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                if (tokens !== null) {
                    var lineNumber = 1, previousToken = null;
                    var html1 = tokens.reduce(function(html, token) {
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
                    this.html(html1);
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
exports.default = TokensTextarea;
_defineProperty(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3Rva2Vucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vuc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgaWYgKHRva2VucyAhPT0gbnVsbCkge1xuICAgICAgbGV0IGxpbmVOdW1iZXIgPSAxLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSBudWxsO1xuXG4gICAgICBjb25zdCBodG1sID0gdG9rZW5zLnJlZHVjZSgoaHRtbCwgdG9rZW4pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uYXNIVE1MKCk7XG5cbiAgICAgICAgaWYgKHByZXZpb3VzVG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuID0gcHJldmlvdXNUb2tlbi5pc0VuZE9mTGluZVRva2VuKCk7XG5cbiAgICAgICAgICBpZiAocHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuKSB7XG4gICAgICAgICAgICBodG1sICs9IGAke2xpbmVOdW1iZXIrK306IGA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XG5cbiAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgdGhpcy5odG1sKGh0bWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUb2tlbnMoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0VG9rZW5zID0gdGhpcy5zZXRUb2tlbnMuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclRva2VucyA9IHRoaXMuY2xlYXJUb2tlbnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0VG9rZW5zLFxuICAgICAgY2xlYXJUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidG9rZW5zXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH07XG59XG4iXSwibmFtZXMiOlsiVG9rZW5zVGV4dGFyZWEiLCJzZXRUb2tlbnMiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsImFzSFRNTCIsInByZXZpb3VzVG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iLCJFTVBUWV9TVFJJTkciLCJjbGVhclRva2VucyIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXFCLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs4REFKM0M7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLEdBQUssQ0FBQ0EsY0FBYyxpQkFBcEIsUUFBUTt1Q0FOdkI7O2FBTXFCQSxjQUFjOzZDQU5uQzs7Ozs7WUFPRUMsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ2pCLEVBQUUsRUFBRUEsTUFBTSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUNwQixHQUFHLENBQUNDLFVBQVUsR0FBRyxDQUFDLEVBQ2RDLGFBQWEsR0FBRyxJQUFJO29CQUV4QixHQUFLLENBQUNDLEtBQUksR0FBR0gsTUFBTSxDQUFDSSxNQUFNLENBQUMsUUFBUSxDQUFQRCxJQUFJLEVBQUVFLEtBQUssRUFBSyxDQUFDO3dCQUMzQyxHQUFLLENBQUNDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFNO3dCQUU5QixFQUFFLEVBQUVMLGFBQWEsS0FBSyxJQUFJLEVBQUUsQ0FBQzs0QkFDM0JDLElBQUksSUFBSyxDQUFBLEVBQWUsTUFBRSxDQUFmRixVQUFVLElBQUcsQ0FBRSxJQUFDLENBQUM7d0JBQzlCLENBQUMsTUFBTSxDQUFDOzRCQUNOLEdBQUssQ0FBQ08sMkJBQTJCLEdBQUdOLGFBQWEsQ0FBQ08sZ0JBQWdCOzRCQUVsRSxFQUFFLEVBQUVELDJCQUEyQixFQUFFLENBQUM7Z0NBQ2hDTCxJQUFJLElBQUssQ0FBQSxFQUFlLE1BQUUsQ0FBZkYsVUFBVSxJQUFHLENBQUUsSUFBQyxDQUFDOzRCQUM5QixDQUFDO3dCQUNILENBQUM7d0JBRURFLElBQUksSUFBSUcsU0FBUyxDQUFDO3dCQUVsQkosYUFBYSxHQUFHRyxLQUFLLENBQUM7d0JBRXRCLE1BQU0sQ0FBQ0YsSUFBSTtvQkFDYixDQUFDLEVBQUVPLFVBQVk7b0JBRWYsSUFBSSxDQUFDUCxJQUFJLENBQUNBLEtBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLE1BQU0sQ0FBQztvQkFDTixJQUFJLENBQUNRLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURBLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUNSLElBQUksR0FBR08sVUFBWTtnQkFFekIsSUFBSSxDQUFDUCxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7OztZQUVEUyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDYixTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQ3BDRixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNFLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxNQUFNLENBQUUsQ0FBQztvQkFDUGQsU0FBUyxFQUFUQSxTQUFTO29CQUNUWSxXQUFXLEVBQVhBLFdBQVc7Z0JBQ2IsQ0FBQztZQUNILENBQUM7O01BcERIOztFQU00Q0csU0FBUTtrQkFBL0JoQixjQUFjLEFBTm5DO2dCQU1xQkEsY0FBYyxFQWdEMUJpQixDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBUTtJQUNuQkMsVUFBVSxFQUFFLENBQU87SUFDbkJDLFFBQVEsRUFBRSxJQUFJO0FBQ2hCLENBQUMsQ0ExREgifQ==