"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableToken;
    }
});
var _occamlexers = require("occam-lexers");
var _tokenTypes = require("../../tokenTypes");
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
var type = _tokenTypes.VARIABLE_TOKEN_TYPE; ///
var VariableToken = /*#__PURE__*/ function(SignificantToken) {
    _inherits(VariableToken, SignificantToken);
    var _super = _create_super(VariableToken);
    function VariableToken() {
        _class_call_check(this, VariableToken);
        return _super.apply(this, arguments);
    }
    _create_class(VariableToken, null, [
        {
            key: "fromContent",
            value: function fromContent(content) {
                return _occamlexers.SignificantToken.fromContentAndType(VariableToken, content, type);
            }
        }
    ]);
    return VariableToken;
}(_occamlexers.SignificantToken);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2tlbi9zaWduaWZpY2FudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IHsgVkFSSUFCTEVfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5cbmNvbnN0IHR5cGUgPSBWQVJJQUJMRV9UT0tFTl9UWVBFOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRUeXBlKFZhcmlhYmxlVG9rZW4sIGNvbnRlbnQsIHR5cGUpOyB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVUb2tlbiIsInR5cGUiLCJWQVJJQUJMRV9UT0tFTl9UWVBFIiwiZnJvbUNvbnRlbnQiLCJjb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Db250ZW50QW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkJBTlk7MEJBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU1DLE9BQU9DLCtCQUFtQixFQUFHLEdBQUc7QUFFdkIsSUFBQSxBQUFNRiw4QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxPQUFPO2dCQUFJLE9BQU9DLDZCQUFnQixDQUFDQyxrQkFBa0IsQ0FEckROLGVBQ3FFSSxTQUFTSDtZQUFPOzs7V0FEckZEO0VBQXNCSyw2QkFBZ0IifQ==