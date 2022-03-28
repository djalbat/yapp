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
var bnf = '\n\n    document                   ::=  xml error* | error+ ;\n\n\n    xml                        ::=  ( preamble element* ) | element+ ;\n\n\n    preamble                   ::=  "<?"<NO_WHITESPACE>"xml" attribute* "?>" ;\n\n\n    element                    ::=  comment | completeTag | startTag ( element | text )* endTag ;\n\n\n    comment                    ::=  "<!--" text* "-->" ;\n\n\n    completeTag                ::=  "<"<NO_WHITESPACE>name attribute* "/>" ;\n\n\n    startTag                   ::=  "<"<NO_WHITESPACE>name attribute* ">" ;\n\n\n    endTag                     ::=  "</"<NO_WHITESPACE>name ">" ;\n    \n\n    attribute                  ::=  [identifier]<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;\n\n\n    text                       ::=  ( [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n    \n    \n    name                       ::=  [identifier] ;\n\n\n    error                      ::=  . ;\n\n';
var XMLParser = /*#__PURE__*/ function(YappParser) {
    _inherits(XMLParser, YappParser);
    var _super = _createSuper(XMLParser);
    function XMLParser() {
        _classCallCheck(this, XMLParser);
        return _super.apply(this, arguments);
    }
    _createClass(XMLParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _yapp.default.fromNothing(XMLParser);
            }
        },
        {
            key: "fromBNF",
            value: function fromBNF(bnf1) {
                return _yapp.default.fromBNF(XMLParser, bnf1);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                return _yapp.default.fromRules(XMLParser, rules);
            }
        }
    ]);
    return XMLParser;
}(_yapp.default);
exports.default = XMLParser;
_defineProperty(XMLParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIveG1sLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgWWFwcFBhcnNlciBmcm9tIFwiLi95YXBwXCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgeG1sIGVycm9yKiB8IGVycm9yKyA7XG5cblxuICAgIHhtbCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBwcmVhbWJsZSBlbGVtZW50KiApIHwgZWxlbWVudCsgO1xuXG5cbiAgICBwcmVhbWJsZSAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPD9cIjxOT19XSElURVNQQUNFPlwieG1sXCIgYXR0cmlidXRlKiBcIj8+XCIgO1xuXG5cbiAgICBlbGVtZW50ICAgICAgICAgICAgICAgICAgICA6Oj0gIGNvbW1lbnQgfCBjb21wbGV0ZVRhZyB8IHN0YXJ0VGFnICggZWxlbWVudCB8IHRleHQgKSogZW5kVGFnIDtcblxuXG4gICAgY29tbWVudCAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwhLS1cIiB0ZXh0KiBcIi0tPlwiIDtcblxuXG4gICAgY29tcGxldGVUYWcgICAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUgYXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAgICBzdGFydFRhZyAgICAgICAgICAgICAgICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBhdHRyaWJ1dGUqIFwiPlwiIDtcblxuXG4gICAgZW5kVGFnICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcbiAgICBcblxuICAgIGF0dHJpYnV0ZSAgICAgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdPE5PX1dISVRFU1BBQ0U+XCI9XCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdIDtcblxuXG4gICAgdGV4dCAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFtzdHJpbmctbGl0ZXJhbF18IFticm9rZW4tc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgICBcbiAgICBcbiAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cblxuICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhNTFBhcnNlciBleHRlbmRzIFlhcHBQYXJzZXIge1xuICBzdGF0aWMgYm5mID0gYm5mO1xuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgcmV0dXJuIFlhcHBQYXJzZXIuZnJvbU5vdGhpbmcoWE1MUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gWWFwcFBhcnNlci5mcm9tQk5GKFhNTFBhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIFlhcHBQYXJzZXIuZnJvbVJ1bGVzKFhNTFBhcnNlciwgcnVsZXMpOyB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImJuZiIsIlhNTFBhcnNlciIsImZyb21Ob3RoaW5nIiwiWWFwcFBhcnNlciIsImZyb21CTkYiLCJmcm9tUnVsZXMiLCJydWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVVLElBQUEsS0FBUSxrQ0FBUixRQUFRLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLEdBQUcsR0FBSSxvOEJBcUNiLEFBQUMsQUFBQztBQUVhLElBQUEsQUFBTUMsU0FBUyxpQkMzQzNCLEFEMkNZOzs7YUFBTUEsU0FBUzs7Ozs7O1lBR3JCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFBRSxPQUFPQyxLQUFVLFFBQUEsQ0FBQ0QsV0FBVyxDQUFDRCxTQUFTLENBQUMsQ0FBQzthQUFFOzs7WUFFM0RHLEdBQU8sRUFBUEEsU0FBTzttQkFBZCxTQUFPQSxPQUFPLENBQUNKLElBQUcsRUFBRTtnQkFBRSxPQUFPRyxLQUFVLFFBQUEsQ0FBQ0MsT0FBTyxDQUFDSCxTQUFTLEVBQUVELElBQUcsQ0FBQyxDQUFDO2FBQUU7OztZQUUzREssR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFBRSxPQUFPSCxLQUFVLFFBQUEsQ0FBQ0UsU0FBUyxDQUFDSixTQUFTLEVBQUVLLEtBQUssQ0FBQyxDQUFDO2FBQUU7Ozs7Q0FDM0UsQ0FSc0NILEtBQVUsUUFBQSxDQVFoRDtrQkFSb0JGLFNBQVM7QUFDNUIsZ0JBRG1CQSxTQUFTLEVBQ3JCRCxLQUFHLEVBQUdBLEdBQUcsQ0FBQyJ9