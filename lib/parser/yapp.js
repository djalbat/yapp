"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parser = require("../utilities/parser");
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
var YappParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(YappParser, CommonParser);
    var _super = _createSuper(YappParser);
    function YappParser() {
        _classCallCheck(this, YappParser);
        return _super.apply(this, arguments);
    }
    _createClass(YappParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                var bnf = Class.bnf, rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(Class, bnf) {
                var rules = (0, _parser).rulesFromBNF(bnf), parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        },
        {
            key: "fromRules",
            value: function fromRules(Class, rules) {
                var parser = (0, _parser).parserFromRules(Class, rules);
                return parser;
            }
        }
    ]);
    return YappParser;
}(_occamParsers.CommonParser);
exports.default = YappParser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveWFwcC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZYXBwUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21CTkYoQ2xhc3MsIGJuZikge1xuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhDbGFzcywgcnVsZXMpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiWWFwcFBhcnNlciIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJibmYiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlciIsInBhcnNlckZyb21SdWxlcyIsImZyb21CTkYiLCJmcm9tUnVsZXMiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZ0IsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRUUsSUFBQSxPQUFxQixXQUFyQixxQkFBcUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBQSxBQUFNQSxVQUFVLGlCQ041QixBRE1ZOzs7YUFBTUEsVUFBVTs7Ozs7O1lBQ3RCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFO2dCQUN4QixJQUFNLEFBQUVDLEdBQUcsR0FBS0QsS0FBSyxDQUFiQyxHQUFHLEFBQVUsRUFDZkMsS0FBSyxHQUFHQyxDQUFBQSxHQUFBQSxPQUFZLEFBQUssQ0FBQSxhQUFMLENBQUNGLEdBQUcsQ0FBQyxFQUN6QkcsTUFBTSxHQUFHQyxDQUFBQSxHQUFBQSxPQUFlLEFBQWMsQ0FBQSxnQkFBZCxDQUFDTCxLQUFLLEVBQUVFLEtBQUssQ0FBQyxBQUFDO2dCQUU3QyxPQUFPRSxNQUFNLENBQUM7YUFDZjs7O1lBRU1FLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNOLEtBQUssRUFBRUMsR0FBRyxFQUFFO2dCQUN6QixJQUFNQyxLQUFLLEdBQUdDLENBQUFBLEdBQUFBLE9BQVksQUFBSyxDQUFBLGFBQUwsQ0FBQ0YsR0FBRyxDQUFDLEVBQ3pCRyxNQUFNLEdBQUdDLENBQUFBLEdBQUFBLE9BQWUsQUFBYyxDQUFBLGdCQUFkLENBQUNMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFTUcsR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNQLEtBQUssRUFBRUUsS0FBSyxFQUFFO2dCQUM3QixJQUFNRSxNQUFNLEdBQUdDLENBQUFBLEdBQUFBLE9BQWUsQUFBYyxDQUFBLGdCQUFkLENBQUNMLEtBQUssRUFBRUUsS0FBSyxDQUFDLEFBQUM7Z0JBRTdDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7O0NBQ0YsQ0FyQnVDSSxhQUFZLGFBQUEsQ0FxQm5EO2tCQXJCb0JWLFVBQVUifQ==