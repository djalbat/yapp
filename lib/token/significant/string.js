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
var stringLiteralType = _occamLexers.types.stringLiteralType;
var type = stringLiteralType; ///
var StringToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(StringToken, SignificantToken);
    function StringToken() {
        _classCallCheck(this, StringToken);
        return _possibleConstructorReturn(this, _getPrototypeOf(StringToken).apply(this, arguments));
    }
    _createClass(StringToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(StringToken, content, type);
            }
        }
    ]);
    return StringToken;
}(_occamLexers.SignificantToken);
exports.default = StringToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcuanMiXSwibmFtZXMiOlsiU2lnbmlmaWNhbnRUb2tlbiIsInR5cGVzIiwic3RyaW5nTGl0ZXJhbFR5cGUiLCJ0eXBlIiwiU3RyaW5nVG9rZW4iLCJmcm9tQ29udGVudCIsImNvbnRlbnQiLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRTRCLEdBQWMsQ0FBZCxZQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBRyxpQkFBaUIsR0FGZSxZQUFjLE9BRTlDLGlCQUFpQjtBQUV6QixHQUFLLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVkLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRixXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBQ3ZCLEdBQVcsR0FBWCxXQUFXO21CQUFsQixRQUFRLENBQUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FQRSxZQUFjLGtCQU9FLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsSUFBSTtZQUFHLENBQUM7OztXQURwRixXQUFXO0VBTlEsWUFBYztrQkFNakMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuLCB0eXBlcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuY29uc3QgeyBzdHJpbmdMaXRlcmFsVHlwZSB9ID0gdHlwZXM7XG5cbmNvbnN0IHR5cGUgPSBzdHJpbmdMaXRlcmFsVHlwZTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShTdHJpbmdUb2tlbiwgY29udGVudCwgdHlwZSk7IH1cbn1cbiJdfQ==