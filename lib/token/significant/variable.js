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
var type = _tokenTypes.VARIABLE_TOKEN_TYPE; ///
var VariableToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(VariableToken, SignificantToken);
    var _super = _createSuper(VariableToken);
    function VariableToken() {
        _classCallCheck(this, VariableToken);
        return _super.apply(this, arguments);
    }
    _createClass(VariableToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(VariableToken, content, type);
            }
        }
    ]);
    return VariableToken;
}(_occamLexers.SignificantToken);
exports.default = VariableToken;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgVkFSSUFCTEVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmNvbnN0IHR5cGUgPSBWQVJJQUJMRV9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKFZhcmlhYmxlVG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iXSwibmFtZXMiOlsidHlwZSIsIlZBUklBQkxFX1RPS0VOX1RZUEUiLCJWYXJpYWJsZVRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFcUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFrQixDQUFsQixXQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsR0FBSyxDQUFDQSxJQUFJLEdBQUdDLFdBQW1CLHFCQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVqQkMsYUFBYSxpQkFBbkIsUUFBUTs7O2FBQUZBLGFBQWE7Ozs7OztZQUN6QkMsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxZQUFnQixrQkFBQ0Msa0JBQWtCLENBQUNKLGFBQWEsRUFBRUUsT0FBTyxFQUFFSixJQUFJO1lBQUcsQ0FBQzs7OztFQURoRUssWUFBZ0I7a0JBQXRDSCxhQUFhIn0=