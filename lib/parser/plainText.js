"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _yapp = _interopRequireDefault(require("./yapp"));
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
var bnf = "\n\n    document                   ::=  .+ ;\n\n";
var PlainTextParser = /*#__PURE__*/ function(YappParser) {
    _inherits(PlainTextParser, YappParser);
    var _super = _createSuper(PlainTextParser);
    function PlainTextParser() {
        _classCallCheck(this, PlainTextParser);
        return _super.apply(this, arguments);
    }
    _createClass(PlainTextParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromNothing(PlainTextParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf1) {
                return _yapp.default.fromBNF(PlainTextParser, bnf1);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(PlainTextParser, rules);
            }
        }
    ]);
    return PlainTextParser;
}(_yapp.default);
exports.default = PlainTextParser;
_defineProperty(PlainTextParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvcGxhaW5UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWWFwcFBhcnNlciBmcm9tIFwiLi95YXBwXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgLisgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFpblRleHRQYXJzZXIgZXh0ZW5kcyBZYXBwUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21Ob3RoaW5nKFBsYWluVGV4dFBhcnNlcik7IH1cblxuICBzdGF0aWMgZnJvbUJORihibmYpIHsgcmV0dXJuIFlhcHBQYXJzZXIuZnJvbUJORihQbGFpblRleHRQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBZYXBwUGFyc2VyLmZyb21SdWxlcyhQbGFpblRleHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbImJuZiIsIlBsYWluVGV4dFBhcnNlciIsImZyb21Ob3RoaW5nIiwiWWFwcFBhcnNlciIsImZyb21CTkYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRVUsR0FBUSxDQUFSLEtBQVE7Ozs7Ozs7Ozs7Ozs7Ozs4RDtzQzs2RDtpRTs7Ozt3RTtnRTs7Ozs7Ozs7OztVOzt3Qjs7Ozs7OztLOzs7Ozs7Ozs7Ozs7O007eUQ7Ozs7Ozs7Ozs7Ozs7Ozt1Qjs7Szs7OzsyQjs7Ozs7Ozs7cUY7Ozs7Ozs7Ozs7OzttRTs7aUQ7Ozs7O0FBRS9CLEdBQUssQ0FBQ0EsR0FBRyxHQUFJLENBSWI7SUFFcUJDLGVBQWUsaUJBQXJCLFFBQVE7MEM7O2FBQUZBLGVBQWU7OEM7Ozs7O1lBRzNCQyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxDQUFDQyxLQUFVLFNBQUNELFdBQVcsQ0FBQ0QsZUFBZTtZQUFHLENBQUM7OztZQUVqRUcsR0FBTyxFQUFQQSxDQUFPO21CQUFkLFFBQVEsQ0FBREEsT0FBTyxDQUFDSixJQUFHLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNHLEtBQVUsU0FBQ0MsT0FBTyxDQUFDSCxlQUFlLEVBQUVELElBQUc7WUFBRyxDQUFDOzs7WUFFakVLLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQ0gsS0FBVSxTQUFDRSxTQUFTLENBQUNKLGVBQWUsRUFBRUssS0FBSztZQUFHLENBQUM7O007O0VBUHJDSCxLQUFVO2tCQUFsQ0YsZUFBZSxBO2dCQUFmQSxlQUFlLEVBQzNCRCxDQUFHLE1BQUdBLEdBQUcsQyJ9