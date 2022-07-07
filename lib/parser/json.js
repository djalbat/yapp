"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JSONParser;
    }
});
var _yapp = /*#__PURE__*/ _interopRequireDefault(require("../parser/yapp"));
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
function _defineProperty(obj, key, value) {
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var bnf = '\n\n    document                   ::=  json error* | error+ ;\n\n\n    json                       ::=  array | object ;\n\n\n    array                      ::=  "[" ( element ( "," element )* )? "]" ;\n\n\n    object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;\n\n    \n    element                    ::=  json |  [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n    error                      ::=  . ;\n\n';
var JSONParser = /*#__PURE__*/ function(YappParser) {
    _inherits(JSONParser, YappParser);
    var _super = _createSuper(JSONParser);
    function JSONParser() {
        _classCallCheck(this, JSONParser);
        return _super.apply(this, arguments);
    }
    _createClass(JSONParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromNothing(JSONParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf) {
                return _yapp.default.fromBNF(JSONParser, bnf);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(JSONParser, rules);
            }
        }
    ]);
    return JSONParser;
}(_yapp.default);
_defineProperty(JSONParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFlhcHBQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci95YXBwXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAganNvbiBlcnJvciogfCBlcnJvcisgO1xuXG5cbiAgICBqc29uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGFycmF5IHwgb2JqZWN0IDtcblxuXG4gICAgYXJyYXkgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoIGVsZW1lbnQgKCBcIixcIiBlbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gICAgb2JqZWN0ICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIntcIiAoIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCAoIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCApKiApPyBcIn1cIiA7XG5cbiAgICBcbiAgICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gfCAgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiA7XG5cblxuICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05QYXJzZXIgZXh0ZW5kcyBZYXBwUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21Ob3RoaW5nKEpTT05QYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21CTkYoSlNPTlBhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBQYXJzZXIuZnJvbVJ1bGVzKEpTT05QYXJzZXIsIHJ1bGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJKU09OUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJZYXBwUGFyc2VyIiwiZnJvbUJORiIsImZyb21SdWxlcyIsInJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUF5QlFBLFVBQVU7Ozt5REF2QlIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNQyxHQUFHLEdBQUksc2VBbUJiLEFBQUMsQUFBQztBQUVhLElBQUEsQUFBTUQsVUFBVSxpQkFBaEI7OzthQUFNQSxVQUFVOzs7Ozs7WUFHdEJFLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9DLEtBQVUsUUFBQSxDQUFDRCxXQUFXLENBQUNGLFVBQVUsQ0FBQyxDQUFDO2FBQUU7OztZQUU1REksR0FBTyxFQUFQQSxTQUFPO21CQUFkLFNBQU9BLE9BQU8sQ0FBQ0gsR0FBRyxFQUFFO2dCQUFFLE9BQU9FLEtBQVUsUUFBQSxDQUFDQyxPQUFPLENBQUNKLFVBQVUsRUFBRUMsR0FBRyxDQUFDLENBQUM7YUFBRTs7O1lBRTVESSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUFFLE9BQU9ILEtBQVUsUUFBQSxDQUFDRSxTQUFTLENBQUNMLFVBQVUsRUFBRU0sS0FBSyxDQUFDLENBQUM7YUFBRTs7OztDQUM1RSxDQVJ1Q0gsS0FBVSxRQUFBLENBUWpEO0FBUEMsZ0JBRG1CSCxVQUFVLEVBQ3RCQyxLQUFHLEVBQUdBLEdBQUcsQ0FBQyJ9