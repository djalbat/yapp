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
var type = _tokenTypes.NAME_TOKEN_TYPE; ///
var NameToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(NameToken, SignificantToken);
    var _super = _createSuper(NameToken);
    function NameToken() {
        _classCallCheck(this, NameToken);
        return _super.apply(this, arguments);
    }
    _createClass(NameToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamLexers.SignificantToken.fromContentAndType(NameToken, content, type);
            }
        }
    ]);
    return NameToken;
}(_occamLexers.SignificantToken);
exports.default = NameToken;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC9uYW1lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTaWduaWZpY2FudFRva2VuIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgeyBOQU1FX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdG9rZW5UeXBlc1wiO1xuXG5jb25zdCB0eXBlID0gTkFNRV9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZFR5cGUoTmFtZVRva2VuLCBjb250ZW50LCB0eXBlKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJ0eXBlIiwiTkFNRV9UT0tFTl9UWVBFIiwiTmFtZVRva2VuIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVvQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFZixJQUFBLFdBQWtCLFdBQWxCLGtCQUFrQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNQSxJQUFJLEdBQUdDLFdBQWUsZ0JBQUEsQUFBQyxFQUFFLEdBQUc7QUFFbkIsSUFBQSxBQUFNQyxTQUFTLGlCQUFmOzs7YUFBTUEsU0FBUzs7Ozs7O1lBQ3JCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUFFLE9BQU9DLFlBQWdCLGlCQUFBLENBQUNDLGtCQUFrQixDQUFDSixTQUFTLEVBQUVFLE9BQU8sRUFBRUosSUFBSSxDQUFDLENBQUM7YUFBRTs7OztDQUN0RyxDQUZzQ0ssWUFBZ0IsaUJBQUEsQ0FFdEQ7a0JBRm9CSCxTQUFTIn0=