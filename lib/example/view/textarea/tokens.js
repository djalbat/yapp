"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TokensTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
var _token = require("../../../utilities/token");
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var TokensTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(TokensTextarea, Textarea);
    var _super = _create_super(TokensTextarea);
    function TokensTextarea() {
        _class_call_check(this, TokensTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(TokensTextarea, [
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                if (tokens !== null) {
                    var lineNumber = 1, previousToken = null;
                    var html = tokens.reduce(function(html, token) {
                        var tokenHTML = (0, _token.tokenAsHTML)(token);
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
_define_property(TokensTextarea, "defaultProperties", {
    className: "tokens",
    spellCheck: "false",
    readOnly: true
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvdG9rZW5zLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IHRva2VuQXNIVE1MIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy90b2tlblwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbnNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIGlmICh0b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIGxldCBsaW5lTnVtYmVyID0gMSxcbiAgICAgICAgICBwcmV2aW91c1Rva2VuID0gbnVsbDtcblxuICAgICAgY29uc3QgaHRtbCA9IHRva2Vucy5yZWR1Y2UoKGh0bWwsIHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuQXNIVE1MKHRva2VuKTtcblxuICAgICAgICBpZiAocHJldmlvdXNUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4gPSBwcmV2aW91c1Rva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgICAgIGlmIChwcmV2aW91c1Rva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgICAgIGh0bWwgKz0gYCR7bGluZU51bWJlcisrfTogYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcblxuICAgICAgICBwcmV2aW91c1Rva2VuID0gdG9rZW47XG5cbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICB0aGlzLmh0bWwoaHRtbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRva2VucygpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRUb2tlbnMgPSB0aGlzLnNldFRva2Vucy5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyVG9rZW5zID0gdGhpcy5jbGVhclRva2Vucy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRUb2tlbnMsXG4gICAgICBjbGVhclRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b2tlbnNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCIsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVG9rZW5zVGV4dGFyZWEiLCJzZXRUb2tlbnMiLCJ0b2tlbnMiLCJsaW5lTnVtYmVyIiwicHJldmlvdXNUb2tlbiIsImh0bWwiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuSFRNTCIsInRva2VuQXNIVE1MIiwicHJldmlvdXNUb2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiIsIkVNUFRZX1NUUklORyIsImNsZWFyVG9rZW5zIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMQTtxQkFFTzt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLCtCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJQSxXQUFXLElBQUksRUFBRTtvQkFDbkIsSUFBSUMsYUFBYSxHQUNiQyxnQkFBZ0IsSUFBSTtvQkFFeEIsSUFBTUMsT0FBT0gsT0FBT0ksTUFBTSxDQUFDLFNBQUNELE1BQU1FLE9BQVU7d0JBQzFDLElBQU1DLFlBQVlDLElBQUFBLGtCQUFXLEVBQUNGO3dCQUU5QixJQUFJSCxrQkFBa0IsSUFBSSxFQUFFOzRCQUMxQkMsUUFBUSxBQUFDLEdBQWUsT0FBYkYsY0FBYTt3QkFDMUIsT0FBTzs0QkFDTCxJQUFNTyw4QkFBOEJOLGNBQWNPLGdCQUFnQjs0QkFFbEUsSUFBSUQsNkJBQTZCO2dDQUMvQkwsUUFBUSxBQUFDLEdBQWUsT0FBYkYsY0FBYTs0QkFDMUIsQ0FBQzt3QkFDSCxDQUFDO3dCQUVERSxRQUFRRzt3QkFFUkosZ0JBQWdCRzt3QkFFaEIsT0FBT0Y7b0JBQ1QsR0FBR08sdUJBQVk7b0JBRWYsSUFBSSxDQUFDUCxJQUFJLENBQUNBO2dCQUNaLE9BQU87b0JBQ0wsSUFBSSxDQUFDUSxXQUFXO2dCQUNsQixDQUFDO1lBQ0g7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixJQUFNUixPQUFPTyx1QkFBWTtnQkFFekIsSUFBSSxDQUFDUCxJQUFJLENBQUNBO1lBQ1o7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQU1iLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNjLElBQUksQ0FBQyxJQUFJLEdBQ3BDRixjQUFjLElBQUksQ0FBQ0EsV0FBVyxDQUFDRSxJQUFJLENBQUMsSUFBSTtnQkFFOUMsT0FBUTtvQkFDTmQsV0FBQUE7b0JBQ0FZLGFBQUFBO2dCQUNGO1lBQ0Y7OztXQTlDbUJiO0VBQXVCZ0IsaUJBQVE7QUFnRGxELGlCQWhEbUJoQixnQkFnRFppQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxVQUFVLElBQUk7QUFDaEIifQ==