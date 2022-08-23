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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25QYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgeG1sIGVycm9yKiB8IGVycm9yKyA7XG5cblxuICB4bWwgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICggcHJlYW1ibGUgZWxlbWVudCogKSB8IGVsZW1lbnQrIDtcblxuXG4gIHByZWFtYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8P1wiPE5PX1dISVRFU1BBQ0U+XCJ4bWxcIiBhdHRyaWJ1dGUqIFwiPz5cIiA7XG5cblxuICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGNvbW1lbnQgfCBjb21wbGV0ZVRhZyB8IHN0YXJ0VGFnICggZWxlbWVudCB8IHRleHQgKSogZW5kVGFnIDtcblxuXG4gIGNvbW1lbnQgICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8IS0tXCIgdGV4dCogXCItLT5cIiA7XG5cblxuICBjb21wbGV0ZVRhZyAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBhdHRyaWJ1dGUqIFwiLz5cIiA7XG5cblxuICBzdGFydFRhZyAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBhdHRyaWJ1dGUqIFwiPlwiIDtcblxuXG4gIGVuZFRhZyAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+bmFtZSBcIj5cIiA7XG4gIFxuXG4gIGF0dHJpYnV0ZSAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdPE5PX1dISVRFU1BBQ0U+XCI9XCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdIDtcblxuXG4gIHRleHQgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBbaWRlbnRpZmllcl0gfCBbc3RyaW5nLWxpdGVyYWxdfCBbYnJva2VuLXN0cmluZy1saXRlcmFsXSB8IFt1bmFzc2lnbmVkXSApKyA7XG4gIFxuICBcbiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cbiAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuICAgICAgYCxcbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gcGFyc2VyRnJvbVJ1bGVzKFhNTFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21SdWxlcyhYTUxQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJYTUxQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImZyb21Ob3RoaW5nIiwiZnJvbVJ1bGVzIiwiQ29tbW9uUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUErQ1FBLFNBQVM7Ozs0QkE3Q0QsZUFBZTtxQ0FDWix5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFRQyxZQUFZLEdBQXNCQyxzQkFBZSxnQkFBQSxDQUFqREQsWUFBWSxFQUFFRSxlQUFlLEdBQUtELHNCQUFlLGdCQUFBLENBQW5DQyxlQUFlLEFBQXFCO0FBRTFELElBQU1DLEdBQUcsR0FBSSw0NkJBcUNQLEFBQUMsRUFDREMsS0FBSyxHQUFHSixZQUFZLENBQUNHLEdBQUcsQ0FBQyxBQUFDO0FBRWpCLElBQUEsQUFBTUosU0FBUyxpQkFBZjtjQUFNQSxTQUFTOzhCQUFUQSxTQUFTO2FBQVRBLFNBQVM7OEJBQVRBLFNBQVM7OztpQkFBVEEsU0FBUzs7WUFHckJNLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUFFLE9BQU9ILGVBQWUsQ0FIMUJILFNBQVMsRUFHNkJLLEtBQUssQ0FBQyxDQUFDO1lBQUMsQ0FBQzs7O1lBRTNERSxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0YsS0FBSyxFQUFFO2dCQUFFLE9BQU9HLGFBQVksYUFBQSxDQUFDRCxTQUFTLENBTHBDUCxTQUFTLEVBS3VDSyxLQUFLLENBQUMsQ0FBQztZQUFDLENBQUM7OztXQUx6REwsU0FBUztDQU03QixDQU5zQ1EsYUFBWSxhQUFBLENBTWxEO0FBTEMsZ0JBRG1CUixTQUFTLEVBQ3JCSSxLQUFHLEVBQUdBLEdBQUcsQ0FBQyJ9