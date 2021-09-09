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
var type = _tokenTypes.ERROR_TOKEN_TYPE; ///
var ErrorToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(ErrorToken, SignificantToken);
    function ErrorToken() {
        _classCallCheck(this, ErrorToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorToken).apply(this, arguments));
    }
    _createClass(ErrorToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(ErrorToken, content, type);
            }
        }
    ]);
    return ErrorToken;
}(_occamLexers.SignificantToken);
exports.default = ErrorToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9lcnJvci5qcyJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuIiwiRVJST1JfVE9LRU5fVFlQRSIsInR5cGUiLCJFcnJvclRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiZnJvbUNvbnRlbnRBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVxQixHQUFjLENBQWQsWUFBYztBQUVkLEdBQWtCLENBQWxCLFdBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELEdBQUssQ0FBQyxJQUFJLEdBRnVCLFdBQWtCLGtCQUVuQixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFZCxVQUFVLGlCQUFoQixRQUFRO2NBQUYsVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTtnRUFBVixVQUFVOztpQkFBVixVQUFVOztZQUN0QixHQUFXLEdBQVgsV0FBVzttQkFBbEIsUUFBUSxDQUFELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBUEwsWUFBYyxrQkFPUyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUk7WUFBRyxDQUFDOzs7V0FEbkYsVUFBVTtFQU5FLFlBQWM7a0JBTTFCLFVBQVUifQ==