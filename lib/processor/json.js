"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONProcessor;
    }
});
var _occamquery = require("occam-query");
var _processor = /*#__PURE__*/ _interop_require_default(require("../processor"));
var _error = /*#__PURE__*/ _interop_require_default(require("../token/significant/error"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var errorTerminalNodeQuery = _occamquery.Query.fromExpressionString("//error/@*");
var JSONProcessor = /*#__PURE__*/ function(Processor) {
    _inherits(JSONProcessor, Processor);
    function JSONProcessor() {
        _class_call_check(this, JSONProcessor);
        return _call_super(this, JSONProcessor, arguments);
    }
    _create_class(JSONProcessor, [
        {
            key: "process",
            value: function process(tokens, node) {
                if (node !== null) {
                    this.replaceTerminalNodesSignificantToken(tokens, node, function(content) {
                        return _error.default;
                    }, errorTerminalNodeQuery);
                }
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _processor.default.fromNothing(JSONProcessor);
            }
        }
    ]);
    return JSONProcessor;
}(_processor.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3IvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFByb2Nlc3NvciBmcm9tIFwiLi4vcHJvY2Vzc29yXCI7XG5pbXBvcnQgRXJyb3JUb2tlbiBmcm9tIFwiLi4vdG9rZW4vc2lnbmlmaWNhbnQvZXJyb3JcIjtcblxuY29uc3QgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9lcnJvci9AKlwiKTtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUHJvY2Vzc29yIGV4dGVuZHMgUHJvY2Vzc29yIHtcbiAgcHJvY2Vzcyh0b2tlbnMsIG5vZGUpIHtcbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4odG9rZW5zLCBub2RlLCAoY29udGVudCkgPT4gRXJyb3JUb2tlbiwgZXJyb3JUZXJtaW5hbE5vZGVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gUHJvY2Vzc29yLmZyb21Ob3RoaW5nKEpTT05Qcm9jZXNzb3IpOyB9XG59XG4iXSwibmFtZXMiOlsiSlNPTlByb2Nlc3NvciIsImVycm9yVGVybWluYWxOb2RlUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwicHJvY2VzcyIsInRva2VucyIsIm5vZGUiLCJyZXBsYWNlVGVybWluYWxOb2Rlc1NpZ25pZmljYW50VG9rZW4iLCJjb250ZW50IiwiRXJyb3JUb2tlbiIsImZyb21Ob3RoaW5nIiwiUHJvY2Vzc29yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVN1QkE7OzswQkFQRDtnRUFFQTs0REFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNQyx5QkFBeUJDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRXpDLElBQUEsQUFBTUgsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNyQkksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE1BQU0sRUFBRUMsSUFBSTtnQkFDbEIsSUFBSUEsU0FBUyxNQUFNO29CQUNqQixJQUFJLENBQUNDLG9DQUFvQyxDQUFDRixRQUFRQyxNQUFNLFNBQUNFOytCQUFZQyxjQUFVO3VCQUFFUjtnQkFDbkY7WUFDRjs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0Msa0JBQVMsQ0FBQ0QsV0FBVyxDQVA5QlY7WUFPK0M7OztXQVAvQ0E7RUFBc0JXLGtCQUFTIn0=