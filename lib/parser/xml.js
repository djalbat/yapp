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
var _occamparsers = require("occam-parsers");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules;
var bnf = '\n\n  xml             ::=  declaration? comment* ( simpleElement | complexElement ) comment* error*\n  \n                    |  error+\n                               \n                    ;\n\n\n  declaration     ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;\n\n\n  element         ::=  comment | simpleElement | complexElement ;\n                               \n                               \n  comment         ::=  "<!--" text* "-->" ;\n\n\n  simpleElement   ::=  completeTag ;\n\n\n  complexElement  ::=  startTag ( element | text )* endTag ;\n\n\n  completeTag     ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;\n\n\n  startTag        ::=  "<"<NO_WHITESPACE>name attribute* ">" ;\n\n\n  endTag          ::=  "</"<NO_WHITESPACE>name ">" ;\n  \n\n  attribute       ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;\n\n\n  text            ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n  \n  \n  name            ::=  [identifier] ;\n\n\n  error.          ::=  . ;\n\n      ', rules = rulesFromBNF(bnf);
var XMLParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(XMLParser, CommonParser);
    function XMLParser() {
        _class_call_check(this, XMLParser);
        return _call_super(this, XMLParser, arguments);
    }
    _create_class(XMLParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(XMLParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _occamparsers.CommonParser.fromRules(XMLParser, rules);
            }
        }
    ]);
    return XMLParser;
}(_occamparsers.CommonParser);
_define_property(XMLParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcyB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgeG1sICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24/IGNvbW1lbnQqICggc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50ICkgY29tbWVudCogZXJyb3IqXG4gIFxuICAgICAgICAgICAgICAgICAgICB8ICBlcnJvcitcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgZGVjbGFyYXRpb24gICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICBlbGVtZW50ICAgICAgICAgOjo9ICBjb21tZW50IHwgc2ltcGxlRWxlbWVudCB8IGNvbXBsZXhFbGVtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgY29tbWVudCAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICBzaW1wbGVFbGVtZW50ICAgOjo9ICBjb21wbGV0ZVRhZyA7XG5cblxuICBjb21wbGV4RWxlbWVudCAgOjo9ICBzdGFydFRhZyAoIGVsZW1lbnQgfCB0ZXh0ICkqIGVuZFRhZyA7XG5cblxuICBjb21wbGV0ZVRhZyAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgc3RhcnRUYWcgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgZW5kVGFnICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG4gIFxuXG4gIGF0dHJpYnV0ZSAgICAgICA6Oj0gIFtpZGVudGlmaWVyXTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICB0ZXh0ICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF18IFticm9rZW4tc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgXG4gIFxuICBuYW1lICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cbiAgZXJyb3IuICAgICAgICAgIDo6PSAgLiA7XG5cbiAgICAgIGAsXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYTUxQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIHBhcnNlckZyb21SdWxlcyhYTUxQYXJzZXIsIHJ1bGVzKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoWE1MUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJYTUxQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNEcUJBOzs7NEJBcERROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0IsSUFBUUMsZUFBa0NDLDZCQUFlLENBQWpERCxjQUFjRSxrQkFBb0JELDZCQUFlLENBQW5DQztBQUV0QixJQUFNQyxNQUFNLGdoQ0E2Q05DLFFBQVFKLGFBQWFHO0FBRVosSUFBQSxBQUFNSiwwQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUdaTSxLQUFBQTttQkFBUCxTQUFPQTtnQkFBZ0IsT0FBT0gsZ0JBSFhILFdBR3NDSztZQUFROzs7WUFFMURFLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVGLEtBQUs7Z0JBQUksT0FBT0csMEJBQVksQ0FBQ0QsU0FBUyxDQUxwQ1AsV0FLZ0RLO1lBQVE7OztXQUx4REw7RUFBa0JRLDBCQUFZO0FBQ2pELGlCQURtQlIsV0FDWkksT0FBTUEifQ==