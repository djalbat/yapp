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
var rulesFromBNF = _occamParsers.parserUtilities.rulesFromBNF, parserFromRules = _occamParsers.parserUtilities.parserFromRules;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAganNvbiBlcnJvciogfCBlcnJvcisgO1xuXG5cbiAganNvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcnJheSB8IG9iamVjdCA7XG5cblxuICBhcnJheSAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggZWxlbWVudCAoIFwiLFwiIGVsZW1lbnQgKSogKT8gXCJdXCIgO1xuXG5cbiAgb2JqZWN0ICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIntcIiAoIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCAoIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIgZWxlbWVudCApKiApPyBcIn1cIiA7XG5cbiAgXG4gIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAganNvbiB8ICBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSlNPTlBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhKU09OUGFyc2VyLCBydWxlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSlNPTlBhcnNlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsImJuZiIsInJ1bGVzIiwiZnJvbU5vdGhpbmciLCJmcm9tUnVsZXMiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQTZCUUEsVUFBVTs7OzRCQTNCRixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHNUMsSUFBUUMsWUFBWSxHQUFzQkMsYUFBZSxnQkFBQSxDQUFqREQsWUFBWSxFQUFFRSxlQUFlLEdBQUtELGFBQWUsZ0JBQUEsQ0FBbkNDLGVBQWUsQUFBcUI7QUFFMUQsSUFBTUMsR0FBRyxHQUFJLDhkQW1CUCxBQUFDLEVBQ0RDLEtBQUssR0FBR0osWUFBWSxDQUFDRyxHQUFHLENBQUMsQUFBQztBQUVqQixJQUFBLEFBQU1KLFVBQVUsaUJBQWhCO2NBQU1BLFVBQVU7OEJBQVZBLFVBQVU7YUFBVkEsVUFBVTs4QkFBVkEsVUFBVTs7O2lCQUFWQSxVQUFVOztZQUd0Qk0sR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQUUsT0FBT0gsZUFBZSxDQUgxQkgsVUFBVSxFQUc2QkssS0FBSyxDQUFDLENBQUM7WUFBQyxDQUFDOzs7WUFFNURFLEdBQVMsRUFBVEEsV0FBUzttQkFBaEIsU0FBT0EsU0FBUyxDQUFDRixLQUFLLEVBQUU7Z0JBQUUsT0FBT0csYUFBWSxhQUFBLENBQUNELFNBQVMsQ0FMcENQLFVBQVUsRUFLdUNLLEtBQUssQ0FBQyxDQUFDO1lBQUMsQ0FBQzs7O1dBTDFETCxVQUFVO0NBTTlCLENBTnVDUSxhQUFZLGFBQUEsQ0FNbkQ7QUFMQyxnQkFEbUJSLFVBQVUsRUFDdEJJLEtBQUcsRUFBR0EsR0FBRyxDQUFDIn0=