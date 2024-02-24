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
var _occamparsers = require("occam-parsers");
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
function _define_property(obj, key, value) {
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
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules;
var bnf = '\n\n  document                   ::=  element error* \n  \n                               |  error+ \n                               \n                               ;\n\n\n  element                    ::=  array | object | [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n  object                     ::=  "{" ( [string-literal] ":" element ( "," [string-literal] ":" element )* )? "}" ;\n\n  \n  array                      ::=  "[" ( element ( "," element )* )? "]" ;\n\n\n  error!                     ::=  . ;\n\n      ', rules = rulesFromBNF(bnf);
var JSONParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(JSONParser, CommonParser);
    var _super = _create_super(JSONParser);
    function JSONParser() {
        _class_call_check(this, JSONParser);
        return _super.apply(this, arguments);
    }
    _create_class(JSONParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(JSONParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(JSONParser, rules);
            }
        }
    ]);
    return JSONParser;
}(_occamparsers.CommonParser);
_define_property(JSONParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgZWxlbWVudCBlcnJvciogXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVycm9yKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGFycmF5IHwgb2JqZWN0IHwgW3N0cmluZy1saXRlcmFsXSB8IFtudW1iZXJdIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiA7XG5cblxuICBvYmplY3QgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwie1wiICggW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICggXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBlbGVtZW50ICkqICk/IFwifVwiIDtcblxuICBcbiAgYXJyYXkgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoIGVsZW1lbnQgKCBcIixcIiBlbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gIGVycm9yISAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSlNPTlBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhKU09OUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJKU09OUGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwiYm5mIiwicnVsZXMiLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUE4QnFCQTs7OzRCQTVCUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQVFDLGVBQWtDQyw2QkFBZSxDQUFqREQsY0FBY0Usa0JBQW9CRCw2QkFBZSxDQUFuQ0M7QUFFdEIsSUFBTUMsTUFBTyw0aEJBcUJQQyxRQUFRSixhQUFhRztBQUVaLElBQUEsQUFBTUosMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUdaTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0gsZ0JBSFhILFlBR3VDSztZQUFROzs7WUFFM0RFLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVGLEtBQUs7Z0JBQUksT0FBT0csMEJBQVksQ0FBQ0QsU0FBUyxDQUxwQ1AsWUFLaURLO1lBQVE7OztXQUx6REw7RUFBbUJRLDBCQUFZO0FBQ2xELGlCQURtQlIsWUFDWkksT0FBTUEifQ==