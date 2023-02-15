"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return XMLParser;
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
var bnf = '\n\n  document                   ::=  declaration? comment* ( simpleElement | complexElement ) comment* error*\n  \n                               |  error+\n                               \n                               ;\n\n\n  declaration                ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;\n\n\n  element                    ::=  comment | simpleElement | complexElement ;\n                               \n                               \n  comment                    ::=  "<!--" text* "-->" ;\n\n\n  simpleElement              ::=  completeTag ;\n\n\n  complexElement             ::=  startTag ( element | text )* endTag ;\n\n\n  completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;\n\n\n  startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;\n\n\n  endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;\n  \n\n  attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;\n\n\n  text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n  \n  \n  name                       ::=  [identifier] ;\n\n\n  error                      ::=  . ;\n\n      ', rules = rulesFromBNF(bnf);
var XMLParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(XMLParser, CommonParser);
    var _super = _createSuper(XMLParser);
    function XMLParser() {
        _classCallCheck(this, XMLParser);
        return _super.apply(this, arguments);
    }
    _createClass(XMLParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(XMLParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamParsers.CommonParser.fromRules(XMLParser, rules);
            }
        }
    ]);
    return XMLParser;
}(_occamParsers.CommonParser);
_defineProperty(XMLParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICBkZWNsYXJhdGlvbj8gY29tbWVudCogKCBzaW1wbGVFbGVtZW50IHwgY29tcGxleEVsZW1lbnQgKSBjb21tZW50KiBlcnJvcipcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXJyb3IrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIjw/XCI8Tk9fV0hJVEVTUEFDRT5cInhtbFwiIGF0dHJpYnV0ZSogXCI/PlwiIDtcblxuXG4gIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgY29tbWVudCB8IHNpbXBsZUVsZW1lbnQgfCBjb21wbGV4RWxlbWVudCA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGNvbW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICBzaW1wbGVFbGVtZW50ICAgICAgICAgICAgICA6Oj0gIGNvbXBsZXRlVGFnIDtcblxuXG4gIGNvbXBsZXhFbGVtZW50ICAgICAgICAgICAgIDo6PSAgc3RhcnRUYWcgKCBlbGVtZW50IHwgdGV4dCApKiBlbmRUYWcgO1xuXG5cbiAgY29tcGxldGVUYWcgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgc3RhcnRUYWcgICAgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICBlbmRUYWcgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPC9cIjxOT19XSElURVNQQUNFPm5hbWUgXCI+XCIgO1xuICBcblxuICBhdHRyaWJ1dGUgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICB0ZXh0ICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuICBcbiAgXG4gIG5hbWUgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIHBhcnNlckZyb21SdWxlcyhYTUxQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoWE1MUGFyc2VyLCBydWxlcyk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiWE1MUGFyc2VyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwiYm5mIiwicnVsZXMiLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFzRHFCQTs7OzRCQXBEUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzdCLElBQVFDLGVBQWtDQyw2QkFBZSxDQUFqREQsY0FBY0Usa0JBQW9CRCw2QkFBZSxDQUFuQ0M7QUFFdEIsSUFBTUMsTUFBTyxxckNBNkNQQyxRQUFRSixhQUFhRztBQUVaLElBQUEsQUFBTUosMEJBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFHWk0sS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFBRSxPQUFPSCxnQkFIWEgsV0FHc0NLO1lBQVE7OztZQUUxREUsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUYsS0FBSyxFQUFFO2dCQUFFLE9BQU9HLDBCQUFZLENBQUNELFNBQVMsQ0FMcENQLFdBS2dESztZQUFROzs7V0FMeERMO0VBQWtCUSwwQkFBWTtBQUNqRCxnQkFEbUJSLFdBQ1pJLE9BQU1BIn0=