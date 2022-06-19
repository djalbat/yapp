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
var type = _tokenTypes.ERROR_TOKEN_TYPE; ///
var ErrorToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(ErrorToken, SignificantToken);
    var _super = _createSuper(ErrorToken);
    function ErrorToken() {
        _classCallCheck(this, ErrorToken);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9lcnJvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgRVJST1JfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmNvbnN0IHR5cGUgPSBFUlJPUl9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKEVycm9yVG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInR5cGUiLCJFUlJPUl9UT0tFTl9UWVBFIiwiRXJyb3JUb2tlbiIsImZyb21Db250ZW50IiwiY29udGVudCIsIlNpZ25pZmljYW50VG9rZW4iLCJmcm9tQ29udGVudEFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFb0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWQsSUFBQSxXQUFrQixXQUFsQixrQkFBa0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTUEsSUFBSSxHQUFHQyxXQUFnQixpQkFBQSxBQUFDLEVBQUUsR0FBRztBQUVwQixJQUFBLEFBQU1DLFVBQVUsaUJBQWhCOzs7YUFBTUEsVUFBVTs7Ozs7O1lBQ3RCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLFlBQWdCLGlCQUFBLENBQUNDLGtCQUFrQixDQUFDSixVQUFVLEVBQUVFLE9BQU8sRUFBRUosSUFBSSxDQUFDLENBQUM7YUFBRTs7OztDQUN2RyxDQUZ1Q0ssWUFBZ0IsaUJBQUEsQ0FFdkQ7a0JBRm9CSCxVQUFVIn0=