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
var bnf = '\n\n  document                   ::=  xml error* | error+ ;\n\n\n  xml                        ::=  ( preamble element* ) | element+ ;\n\n\n  preamble                   ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;\n\n\n  element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;\n\n\n  comment                    ::=  "<!--" text* "-->" ;\n\n\n  completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;\n\n\n  startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;\n\n\n  endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;\n  \n\n  attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;\n\n\n  text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n  \n  \n  name                       ::=  [identifier] ;\n\n\n  error                      ::=  . ;\n\n      ', rules = rulesFromBNF(bnf);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICB4bWwgZXJyb3IqIHwgZXJyb3IrIDtcblxuXG4gIHhtbCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBwcmVhbWJsZSBlbGVtZW50KiApIHwgZWxlbWVudCsgO1xuXG5cbiAgcHJlYW1ibGUgICAgICAgICAgICAgICAgICAgOjo9ICBcIjw/XCI8Tk9fV0hJVEVTUEFDRT5cInhtbFwiIGF0dHJpYnV0ZSogXCI/PlwiIDtcblxuXG4gIGVsZW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgY29tbWVudCB8IGNvbXBsZXRlVGFnIHwgc3RhcnRUYWcgKCBlbGVtZW50IHwgdGV4dCApKiBlbmRUYWcgO1xuXG5cbiAgY29tbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwhLS1cIiB0ZXh0KiBcIi0tPlwiIDtcblxuXG4gIGNvbXBsZXRlVGFnICAgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCIvPlwiIDtcblxuXG4gIHN0YXJ0VGFnICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgZW5kVGFnICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcbiAgXG5cbiAgYXR0cmlidXRlICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl08Tk9fV0hJVEVTUEFDRT5cIj1cIjxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gO1xuXG5cbiAgdGV4dCAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF18IFticm9rZW4tc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgXG4gIFxuICBuYW1lICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cblxuICBlcnJvciAgICAgICAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG4gICAgICBgLFxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWE1MUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoWE1MUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKFhNTFBhcnNlciwgcnVsZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlhNTFBhcnNlciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsImJuZiIsInJ1bGVzIiwiZnJvbU5vdGhpbmciLCJmcm9tUnVsZXMiLCJDb21tb25QYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBK0NxQkE7Ozs0QkE3Q1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc3QixJQUFRQyxlQUFrQ0MsNkJBQWUsQ0FBakRELGNBQWNFLGtCQUFvQkQsNkJBQWUsQ0FBbkNDO0FBRXRCLElBQU1DLE1BQU8sODZCQXNDUEMsUUFBUUosYUFBYUc7QUFFWixJQUFBLEFBQU1KLDBCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBR1pNLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQUUsT0FBT0gsZ0JBSFhILFdBR3NDSztZQUFROzs7WUFFMURFLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVGLEtBQUssRUFBRTtnQkFBRSxPQUFPRywwQkFBWSxDQUFDRCxTQUFTLENBTHBDUCxXQUtnREs7WUFBUTs7O1dBTHhETDtFQUFrQlEsMEJBQVk7QUFDakQsZ0JBRG1CUixXQUNaSSxPQUFNQSJ9