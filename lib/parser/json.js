"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _yapp = _interopRequireDefault(require("../parser/yapp"));
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
var bnf = "\n\n    document                   ::=  json error* | error+ ;\n\n\n    json                       ::=  array | object ;\n\n\n    array                      ::=  \"[\" ( element ( \",\" element )* )? \"]\" ;\n\n\n    object                     ::=  \"{\" ( [string-literal] \":\" element ( \",\" [string-literal] \":\" element )* )? \"}\" ;\n\n    \n    element                    ::=  json |  [string-literal] | [number] | \"true\" | \"false\" | \"null\" ;\n\n\n    error                      ::=  . ;\n\n";
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
            value: function fromBNF(bnf1) {
                return _yapp.default.fromBNF(JSONParser, bnf1);
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
exports.default = JSONParser;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFlhcHBQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci95YXBwXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAganNvbiBlcnJvciogfCBlcnJvcisgO1xuXG5cbiAgICBqc29uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGFycmF5IHwgb2JqZWN0IDtcblxuXG4gICAgYXJyYXkgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoIGVsZW1lbnQgKCBcIixcIiBlbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gICAgb2JqZWN0ICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIntcIiAoIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCAoIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCApKiApPyBcIn1cIiA7XG5cbiAgICBcbiAgICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gfCAgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiA7XG5cblxuICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05QYXJzZXIgZXh0ZW5kcyBZYXBwUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21Ob3RoaW5nKEpTT05QYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21CTkYoSlNPTlBhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBQYXJzZXIuZnJvbVJ1bGVzKEpTT05QYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbImJuZiIsIkpTT05QYXJzZXIiLCJmcm9tTm90aGluZyIsImZyb21CTkYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFnQixDQUFoQixLQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsR0FBSyxDQUFDQSxHQUFHLEdBQUksQ0FtQmI7SUFFcUJDLFVBQVUsaUJBQWhCLFFBQVE7OzthQUFGQSxVQUFVOzs7Ozs7WUFHdEJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBMUJSLEtBQWdCLFNBMEJJQSxXQUFXLENBQUNELFVBQVU7WUFBRyxDQUFDOzs7WUFFNURFLEdBQU8sRUFBUEEsQ0FBTzttQkFBZCxRQUFRLENBQURBLE9BQU8sQ0FBQ0gsSUFBRyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQTVCUCxLQUFnQixTQTRCR0csT0FBTyxDQUFDRixVQUFVLEVBQUVELElBQUc7WUFBRyxDQUFDOzs7WUFFNURJLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0E5QlgsS0FBZ0IsU0E4Qk9ELFNBQVMsQ0FBQ0gsVUFBVSxFQUFFSSxLQUFLO1lBQUcsQ0FBQzs7OztFQTlCdEQsS0FBZ0I7Z0JBdUJsQkosVUFBVSxFQUN0QkQsQ0FBRyxNQUFHQSxHQUFHO2tCQURHQyxVQUFVIn0=