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
var _occamParsers = require("occam-parsers");
var _occamGrammarUtilities = require("occam-grammar-utilities");
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
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF, parserFromRules = _occamGrammarUtilities.parserUtilities.parserFromRules;
var bnf = '\n\n  document                   ::=  json error* | error+ ;\n\n\n  json                       ::=  array | object ;\n\n\n  array                      ::=  "[" ( element ( "," element )* )? "]" ;\n\n\n  object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;\n\n  \n  element                    ::=  json |  [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n  error                      ::=  . ;\n\n      ', rules = rulesFromBNF(bnf);
var JSONParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(JSONParser, CommonParser);
    var _super = _createSuper(JSONParser);
    function JSONParser() {
        _classCallCheck(this, JSONParser);
        return _super.apply(this, arguments);
    }
    _createClass(JSONParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(JSONParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(JSONParser, rules);
            }
        }
    ]);
    return JSONParser;
}(_occamParsers.CommonParser);
_defineProperty(JSONParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gZXJyb3IqIHwgZXJyb3IrIDtcblxuXG4gIGpzb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgYXJyYXkgfCBvYmplY3QgO1xuXG5cbiAgYXJyYXkgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoIGVsZW1lbnQgKCBcIixcIiBlbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gIG9iamVjdCAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJ7XCIgKCBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKCBcIixcIiBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGVsZW1lbnQgKSogKT8gXCJ9XCIgO1xuXG4gIFxuICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb24gfCAgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiA7XG5cblxuICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG4gICAgICBgLFxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gcGFyc2VyRnJvbVJ1bGVzKEpTT05QYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoSlNPTlBhcnNlciwgcnVsZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkpTT05QYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUE2QlFBLFVBQVU7Ozs0QkEzQkYsZUFBZTtxQ0FDWix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFRQyxZQUFZLEdBQXNCQyxzQkFBZSxnQkFBQSxDQUFqREQsWUFBWSxFQUFFRSxlQUFlLEdBQUtELHNCQUFlLGdCQUFBLENBQW5DQyxlQUFlLEFBQXFCO0FBRTFELElBQU1DLEdBQUcsR0FBSSw4ZEFtQlAsQUFBQyxFQUNEQyxLQUFLLEdBQUdKLFlBQVksQ0FBQ0csR0FBRyxDQUFDLEFBQUM7QUFFakIsSUFBQSxBQUFNSixVQUFVLGlCQUFoQjtjQUFNQSxVQUFVOzhCQUFWQSxVQUFVO2FBQVZBLFVBQVU7OEJBQVZBLFVBQVU7OztpQkFBVkEsVUFBVTs7WUFHdEJNLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9ILGVBQWUsQ0FIMUJILFVBQVUsRUFHNkJLLEtBQUssQ0FBQyxDQUFDO1lBQUMsQ0FBQzs7O1lBRTVERSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0YsS0FBSyxFQUFFO2dCQUFFLE9BQU9HLGFBQVksYUFBQSxDQUFDRCxTQUFTLENBTHBDUCxVQUFVLEVBS3VDSyxLQUFLLENBQUMsQ0FBQztZQUFDLENBQUM7OztXQUwxREwsVUFBVTtDQU05QixDQU51Q1EsYUFBWSxhQUFBLENBTW5EO0FBTEMsZ0JBRG1CUixVQUFVLEVBQ3RCSSxLQUFHLEVBQUdBLEdBQUcsQ0FBQyJ9