"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _tokenTypes = require("../../tokenTypes");
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var type = _tokenTypes.ARGUMENT_TOKEN_TYPE; ///
var ArgumentToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(ArgumentToken, SignificantToken);
    function ArgumentToken() {
        _classCallCheck(this, ArgumentToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(ArgumentToken).apply(this, arguments));
    }
    _createClass(ArgumentToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(ArgumentToken, content, type);
            }
        }
    ]);
    return ArgumentToken;
}(_occamLexers.SignificantToken);
exports.default = ArgumentToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9hcmd1bWVudC5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwiQVJHVU1FTlRfVE9LRU5fVFlQRSIsInR5cGUiLCJBcmd1bWVudFRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVxQixHQUFjLENBQWQsWUFBYztBQUVYLEdBQWtCLENBQWxCLFdBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBQyxJQUFJLEdBRjBCLFdBQWtCLHFCQUVuQixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFakIsYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDekIsR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQVBMLFlBQWMsa0JBT1Msa0JBQWtCLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJO1lBQUcsQ0FBQzs7O1dBRHRGLGFBQWE7RUFORCxZQUFjO2tCQU0xQixhQUFhIn0=