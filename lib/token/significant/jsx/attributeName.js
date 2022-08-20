"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSXAttributeNameToken;
    }
});
var _occamLexers = require("occam-lexers");
var _tokenTypes = require("../../../tokenTypes");
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
var type = _tokenTypes.JSX_ATTRIBUTE_NAME_TOKEN_TYPE; ///
var JSXAttributeNameToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(JSXAttributeNameToken, SignificantToken);
    var _super = _createSuper(JSXAttributeNameToken);
    function JSXAttributeNameToken() {
        _classCallCheck(this, JSXAttributeNameToken);
        return _super.apply(this, arguments);
    }
    _createClass(JSXAttributeNameToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(JSXAttributeNameToken, content, type);
            }
        }
    ]);
    return JSXAttributeNameToken;
}(_occamLexers.SignificantToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9qc3gvYXR0cmlidXRlTmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgSlNYX0FUVFJJQlVURV9OQU1FX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gSlNYX0FUVFJJQlVURV9OQU1FX1RPS0VOX1RZUEU7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNYQXR0cmlidXRlTmFtZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kVHlwZShKU1hBdHRyaWJ1dGVOYW1lVG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkpTWEF0dHJpYnV0ZU5hbWVUb2tlbiIsInR5cGUiLCJKU1hfQVRUUklCVVRFX05BTUVfVE9LRU5fVFlQRSIsImZyb21Db250ZW50IiwiY29udGVudCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVFRQSxxQkFBcUI7OzsyQkFOVCxjQUFjOzBCQUVELHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBTUMsSUFBSSxHQUFHQyxXQUE2Qiw4QkFBQSxBQUFDLEVBQUUsR0FBRztBQUVqQyxJQUFBLEFBQU1GLHFCQUFxQixpQkFBM0I7OzthQUFNQSxxQkFBcUI7Ozs7OztZQUNqQ0csR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLENBQUNDLE9BQU8sRUFBRTtnQkFBRSxPQUFPQyxZQUFnQixpQkFBQSxDQUFDQyxrQkFBa0IsQ0FBQ04scUJBQXFCLEVBQUVJLE9BQU8sRUFBRUgsSUFBSSxDQUFDLENBQUM7YUFBRTs7OztDQUNsSCxDQUZrREksWUFBZ0IsaUJBQUEsQ0FFbEUifQ==