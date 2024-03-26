"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return JavaScriptParser;
    }
});
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
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
var bnf = '\n\n  javaScript      ::=  preamble? ( statement | function | class | error )* ;\n\n\n\n  preamble        ::=  "\\"use strict\\";" ;\n\n\n\n  statement       ::=  statementBody... ";"\n  \n                    |  "{" ( statement | function )* "}"\n                               \n                    |  "if" "(" expression... ")" statement ( "else" statement )?\n\n                    |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )\n\n                             | ( "(" variable "in" expression... ")" statement )\n\n                             | ( "await"? "(" variable "of" expression... ")" statement ) )\n\n                    |  "do" statement "while" "(" expression... ")"\n\n                    |  "while" "(" expression... ")" statement\n                               \n                    |  "switch" "(" expression... ")" "{" case* defaultCase? "}"\n\n                    |  try ( ( catch* finally ) | catch+ )\n\n                    ;\n                               \n                               \n                               \n\n  class           ::=  ( "export" "default"? )? "class" name classBody\n  \n                    |  "export" "default" "class" classBody\n  \n                    ;\n\n\n\n  function        ::=  ( "export" "default"? )? "async"? "function" name functionBody \n  \n                    |  "export" "default" "async"? "function" functionBody\n\n                    ;\n\n\n\n  statementBody   ::=  "import" ( [string-literal]\n\n                                | ( name "from" [string-literal] )\n\n                                | ( "{" names "}" "from" [string-literal] )\n\n                                | ( "*" "as" name "from" [string-literal] ) )\n\n                    |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )\n\n                                | ( "const" "{" fields "}" "=" expression )\n\n                                | ( "{" "default" "}" "from" [string-literal] )\n\n                                | ( "*" ( "as" name )? "from" [string-literal] ) )\n\n                    |  "export"? ( ( "var" var ( "," var )* )\n\n                                 | ( "let" let ( "," let )* )\n\n                                 | ( "const" const ( "," const )* ) )\n                                            \n                    |  ( "export" "default" )? expression\n\n                    |  "return" ( ( "(" expression ")" ) | expression? )\n\n                    |  "throw" expression\n\n                    |  "delete" expression\n\n                    |  "break"\n\n                    |  "continue"\n\n                    |  "debugger"\n                               \n                    ;\n\n\n\n  functionBody    ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;\n\n\n\n  classBody       ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;\n\n\n\n  constructor     ::=  "constructor" functionBody ;\n\n  method          ::=  "static"? name functionBody ;\n\n  field           ::=  "static"? name "=" expression... ";" ;\n\n\n\n  var             ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n  let             ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n  const           ::=  ( variable | destructure ) "=" expression ;\n\n\n\n  try             ::=  "try" "{" statement+ "}" ;\n\n  catch           ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;\n\n  finally         ::=  "finally" "{" statement+ "}" ;\n\n\n\n  case            ::=  "case" expression ":" statement ( "break" ";" )? ;\n\n  defaultCase     ::=  "default" ":" statement ( "break" ";" )? ;\n\n\n\n  initialiser     ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;\n\n\n\n  destructure     ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"\n\n                    |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"\n\n                    ;\n\n\n\n  expression      ::=  jsx\n\n                    |  json\n\n                    |  arrowFunction\n\n                    |  templateLiteral\n\n                    |  anonymousFunction\n\n                    |  "(" expression ")"\n\n                    |  "{" ( property ( "," property )* )? "}"\n\n                    |  "[" ( expression ( "," expression )* ","? )? "]"\n\n                    |  "typeof" ( expression | ( "(" expression ")") )\n\n                    |  "void" ( expression | ( "(" expression ")") )\n\n                    |  "new" name<NO_WHITESPACE>"(" expressions? ")"\n\n                    |  [operator]<NO_WHITESPACE>expression\n\n                    |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )\n\n                                                | ( "[" expressions "]" )\n\n                                                | ( "(" expressions? ")" )\n\n                                                | templateLiteral\n\n                                                | [operator] )\n\n                    |  expression ( ( [operator] expression )\n\n                                  | ( "?" expression ":" expression )\n\n                                  | ( "instanceof" expression )\n\n                                  | ( "in" expression ) )\n\n                    |  [number]\n\n                    |  variable\n\n                    |  primitive\n\n                    |  importMeta\n\n                    |  [string-literal]\n\n                    |  "super" | "this" | "true" | "false" | "null" | "undefined"\n\n                    ;\n\n\n\n  jsx             ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;\n\n  jsxCompleteTag  ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;\n\n  jsxStartTag     ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;\n\n  jsxEndTag       ::=  "</"<NO_WHITESPACE>name ">" ;\n\n  jsxAttribute    ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;\n\n\n\n  json            ::=  jsonArray | jsonObject ;\n\n  jsonArray       ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;\n\n  jsonObject      ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;\n\n  jsonElement     ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n\n  arrowFunction   ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;\n                               \n\n\n  templateLiteral ::=  "`" ( ( "${" expression? "}" ) | string )* "`" ;\n\n\n\n  string          ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n  property        ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;\n\n  importMeta      ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;\n\n\n\n  expressions     ::=  expression ( "," expression )* ;\n\n  arguments       ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;\n\n  fields          ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;\n\n  names           ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;\n\n\n\n  spreadArgument  ::=  "..."<NO_WHITESPACE>variable ;\n  \n  argument        ::=  variable ( "=" expression )? ;\n\n  variable        ::=  [identifier] ;\n\n  label           ::=  [identifier] ;\n\n  name            ::=  [identifier] ;\n\n\n\n  error.          ::=  . ;\n    \n';
var rules = rulesFromBNF(bnf);
rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
var JavaScriptParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(JavaScriptParser, CommonParser);
    var _super = _create_super(JavaScriptParser);
    function JavaScriptParser() {
        _class_call_check(this, JavaScriptParser);
        return _super.apply(this, arguments);
    }
    _create_class(JavaScriptParser, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return parserFromRules(JavaScriptParser, rules);
            }
        },
        {
            key: "fromRules",
            value: function fromRules(rules) {
                rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
                return _occamparsers.CommonParser.fromRules(JavaScriptParser, rules);
            }
        }
    ]);
    return JavaScriptParser;
}(_occamparsers.CommonParser);
_define_property(JavaScriptParser, "bnf", bnf);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGphdmFTY3JpcHQgICAgICA6Oj0gIHByZWFtYmxlPyAoIHN0YXRlbWVudCB8IGZ1bmN0aW9uIHwgY2xhc3MgfCBlcnJvciApKiA7XG5cblxuXG4gIHByZWFtYmxlICAgICAgICA6Oj0gIFwiXFxcXFwidXNlIHN0cmljdFxcXFxcIjtcIiA7XG5cblxuXG4gIHN0YXRlbWVudCAgICAgICA6Oj0gIHN0YXRlbWVudEJvZHkuLi4gXCI7XCJcbiAgXG4gICAgICAgICAgICAgICAgICAgIHwgIFwie1wiICggc3RhdGVtZW50IHwgZnVuY3Rpb24gKSogXCJ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfCAgXCJpZlwiIFwiKFwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50ICggXCJlbHNlXCIgc3RhdGVtZW50ICk/XG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJmb3JcIiAoICggXCIoXCIgaW5pdGlhbGlzZXIgKCBcIjtcIiBleHByZXNzaW9uICk/ICggXCI7XCIgZXhwcmVzc2lvbiApPyBcIilcIiBzdGF0ZW1lbnQgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIihcIiB2YXJpYWJsZSBcImluXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBzdGF0ZW1lbnQgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImF3YWl0XCI/IFwiKFwiIHZhcmlhYmxlIFwib2ZcIiBleHByZXNzaW9uLi4uIFwiKVwiIHN0YXRlbWVudCApIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcImRvXCIgc3RhdGVtZW50IFwid2hpbGVcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJ3aGlsZVwiIFwiKFwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHwgIFwic3dpdGNoXCIgXCIoXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBcIntcIiBjYXNlKiBkZWZhdWx0Q2FzZT8gXCJ9XCJcblxuICAgICAgICAgICAgICAgICAgICB8ICB0cnkgKCAoIGNhdGNoKiBmaW5hbGx5ICkgfCBjYXRjaCsgKVxuXG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICBjbGFzcyAgICAgICAgICAgOjo9ICAoIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCI/ICk/IFwiY2xhc3NcIiBuYW1lIGNsYXNzQm9keVxuICBcbiAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiBcImRlZmF1bHRcIiBcImNsYXNzXCIgY2xhc3NCb2R5XG4gIFxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG4gIGZ1bmN0aW9uICAgICAgICA6Oj0gICggXCJleHBvcnRcIiBcImRlZmF1bHRcIj8gKT8gXCJhc3luY1wiPyBcImZ1bmN0aW9uXCIgbmFtZSBmdW5jdGlvbkJvZHkgXG4gIFxuICAgICAgICAgICAgICAgICAgICB8ICBcImV4cG9ydFwiIFwiZGVmYXVsdFwiIFwiYXN5bmNcIj8gXCJmdW5jdGlvblwiIGZ1bmN0aW9uQm9keVxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbiAgc3RhdGVtZW50Qm9keSAgIDo6PSAgXCJpbXBvcnRcIiAoIFtzdHJpbmctbGl0ZXJhbF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggbmFtZSBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgbmFtZXMgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiIFwiYXNcIiBuYW1lIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiAoICggXCJ7XCIgbmFtZXMgXCJ9XCIgKCBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdICk/IClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJjb25zdFwiIFwie1wiIGZpZWxkcyBcIn1cIiBcIj1cIiBleHByZXNzaW9uIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgXCJkZWZhdWx0XCIgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiICggXCJhc1wiIG5hbWUgKT8gXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcImV4cG9ydFwiPyAoICggXCJ2YXJcIiB2YXIgKCBcIixcIiB2YXIgKSogKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJsZXRcIiBsZXQgKCBcIixcIiBsZXQgKSogKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJjb25zdFwiIGNvbnN0ICggXCIsXCIgY29uc3QgKSogKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB8ICAoIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgKT8gZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwicmV0dXJuXCIgKCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKSB8IGV4cHJlc3Npb24/IClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcInRocm93XCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiYnJlYWtcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiY29udGludWVcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZGVidWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG4gIGZ1bmN0aW9uQm9keSAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgXCJ7XCIgKCBzdGF0ZW1lbnQgfCBmdW5jdGlvbiApKiBcIn1cIiA7XG5cblxuXG4gIGNsYXNzQm9keSAgICAgICA6Oj0gICggXCJleHRlbmRzXCIgbmFtZSApPyBcIntcIiAoIGNvbnN0cnVjdG9yIHwgbWV0aG9kIHwgZmllbGQgKSogXCJ9XCIgO1xuXG5cblxuICBjb25zdHJ1Y3RvciAgICAgOjo9ICBcImNvbnN0cnVjdG9yXCIgZnVuY3Rpb25Cb2R5IDtcblxuICBtZXRob2QgICAgICAgICAgOjo9ICBcInN0YXRpY1wiPyBuYW1lIGZ1bmN0aW9uQm9keSA7XG5cbiAgZmllbGQgICAgICAgICAgIDo6PSAgXCJzdGF0aWNcIj8gbmFtZSBcIj1cIiBleHByZXNzaW9uLi4uIFwiO1wiIDtcblxuXG5cbiAgdmFyICAgICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IHwgZGVzdHJ1Y3R1cmUgXCI9XCIgZXhwcmVzc2lvbiA7XG5cbiAgbGV0ICAgICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IHwgZGVzdHJ1Y3R1cmUgXCI9XCIgZXhwcmVzc2lvbiA7XG5cbiAgY29uc3QgICAgICAgICAgIDo6PSAgKCB2YXJpYWJsZSB8IGRlc3RydWN0dXJlICkgXCI9XCIgZXhwcmVzc2lvbiA7XG5cblxuXG4gIHRyeSAgICAgICAgICAgICA6Oj0gIFwidHJ5XCIgXCJ7XCIgc3RhdGVtZW50KyBcIn1cIiA7XG5cbiAgY2F0Y2ggICAgICAgICAgIDo6PSAgXCJjYXRjaFwiIFwiKFwiIFtpZGVudGlmaWVyXSBcIilcIiBcIntcIiBzdGF0ZW1lbnQrIFwifVwiIDtcblxuICBmaW5hbGx5ICAgICAgICAgOjo9ICBcImZpbmFsbHlcIiBcIntcIiBzdGF0ZW1lbnQrIFwifVwiIDtcblxuXG5cbiAgY2FzZSAgICAgICAgICAgIDo6PSAgXCJjYXNlXCIgZXhwcmVzc2lvbiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG4gIGRlZmF1bHRDYXNlICAgICA6Oj0gIFwiZGVmYXVsdFwiIFwiOlwiIHN0YXRlbWVudCAoIFwiYnJlYWtcIiBcIjtcIiApPyA7XG5cblxuXG4gIGluaXRpYWxpc2VyICAgICA6Oj0gIGV4cHJlc3Npb24gfCBcInZhclwiIHZhciAoIFwiLFwiIHZhciApKiB8IFwibGV0XCIgbGV0ICggXCIsXCIgbGV0ICkqIDtcblxuXG5cbiAgZGVzdHJ1Y3R1cmUgICAgIDo6PSAgXCJbXCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICggXCIsXCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICkqIFwiXVwiXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICggXCIsXCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICkqIFwifVwiXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICBleHByZXNzaW9uICAgICAgOjo9ICBqc3hcblxuICAgICAgICAgICAgICAgICAgICB8ICBqc29uXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgYXJyb3dGdW5jdGlvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIHRlbXBsYXRlTGl0ZXJhbFxuXG4gICAgICAgICAgICAgICAgICAgIHwgIGFub255bW91c0Z1bmN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwie1wiICggcHJvcGVydHkgKCBcIixcIiBwcm9wZXJ0eSApKiApPyBcIn1cIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiW1wiICggZXhwcmVzc2lvbiAoIFwiLFwiIGV4cHJlc3Npb24gKSogXCIsXCI/ICk/IFwiXVwiXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJ0eXBlb2ZcIiAoIGV4cHJlc3Npb24gfCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIpIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcInZvaWRcIiAoIGV4cHJlc3Npb24gfCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIpIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcIm5ld1wiIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIihcIiBleHByZXNzaW9ucz8gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICB8ICBbb3BlcmF0b3JdPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb248Tk9fV0hJVEVTUEFDRT4oICggXCIuXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiW1wiIGV4cHJlc3Npb25zIFwiXVwiIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKFwiIGV4cHJlc3Npb25zPyBcIilcIiApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVtcGxhdGVMaXRlcmFsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgW29wZXJhdG9yXSApXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbiAoICggW29wZXJhdG9yXSBleHByZXNzaW9uIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIj9cIiBleHByZXNzaW9uIFwiOlwiIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiaW5zdGFuY2VvZlwiIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiaW5cIiBleHByZXNzaW9uICkgKVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFtudW1iZXJdXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGVcblxuICAgICAgICAgICAgICAgICAgICB8ICBwcmltaXRpdmVcblxuICAgICAgICAgICAgICAgICAgICB8ICBpbXBvcnRNZXRhXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwic3VwZXJcIiB8IFwidGhpc1wiIHwgXCJ0cnVlXCIgfCBcImZhbHNlXCIgfCBcIm51bGxcIiB8IFwidW5kZWZpbmVkXCJcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG4gIGpzeCAgICAgICAgICAgICA6Oj0gIGpzeENvbXBsZXRlVGFnIHwganN4U3RhcnRUYWcgKCBqc3ggfCAoIFwie1wiIGV4cHJlc3Npb24/IFwifVwiICkgfCBzdHJpbmcgKSoganN4RW5kVGFnIDtcblxuICBqc3hDb21wbGV0ZVRhZyAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIi8+XCIgO1xuXG4gIGpzeFN0YXJ0VGFnICAgICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBqc3hBdHRyaWJ1dGUqIFwiPlwiIDtcblxuICBqc3hFbmRUYWcgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcblxuICBqc3hBdHRyaWJ1dGUgICAgOjo9ICBuYW1lICggPE5PX1dISVRFU1BBQ0U+XCI9XCIgKCAoIDxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gKSB8ICggPE5PX1dISVRFU1BBQ0U+XCJ7XCIgZXhwcmVzc2lvbiBcIn1cIiApICkgKT8gO1xuXG5cblxuICBqc29uICAgICAgICAgICAgOjo9ICBqc29uQXJyYXkgfCBqc29uT2JqZWN0IDtcblxuICBqc29uQXJyYXkgICAgICAgOjo9ICBcIltcIiAoIGpzb25FbGVtZW50ICggXCIsXCIganNvbkVsZW1lbnQgKSogKT8gXCJdXCIgO1xuXG4gIGpzb25PYmplY3QgICAgICA6Oj0gIFwie1wiICggW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uRWxlbWVudCAoIFwiLFwiIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbkVsZW1lbnQgKSogKT8gXCJ9XCIgO1xuXG4gIGpzb25FbGVtZW50ICAgICA6Oj0gIGpzb24gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG5cbiAgYXJyb3dGdW5jdGlvbiAgIDo6PSAgXCIoXCIgYXJndW1lbnRzPyBcIilcIiBcIj0+XCIgKCBleHByZXNzaW9uIHwgKCBcIntcIiBzdGF0ZW1lbnQqIFwifVwiICkgKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICB0ZW1wbGF0ZUxpdGVyYWwgOjo9ICBcIlxcYFwiICggKCBcIlxcJHtcIiBleHByZXNzaW9uPyBcIn1cIiApIHwgc3RyaW5nICkqIFwiXFxgXCIgO1xuXG5cblxuICBzdHJpbmcgICAgICAgICAgOjo9ICAoIFtudW1iZXJdIHwgW3NwZWNpYWxdIHwgW29wZXJhdG9yXXwgW2tleXdvcmRdIHwgW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG4gIHByb3BlcnR5ICAgICAgICA6Oj0gICggKCAoIG5hbWUgfCBbc3RyaW5nLWxpdGVyYWxdICkgXCI6XCIgZXhwcmVzc2lvbiApIHwgdmFyaWFibGUgKSA7XG5cbiAgaW1wb3J0TWV0YSAgICAgIDo6PSAgXCJpbXBvcnRcIjxOT19XSElURVNQQUNFPlwiLlwiPE5PX1dISVRFU1BBQ0U+XCJtZXRhXCIgO1xuXG5cblxuICBleHByZXNzaW9ucyAgICAgOjo9ICBleHByZXNzaW9uICggXCIsXCIgZXhwcmVzc2lvbiApKiA7XG5cbiAgYXJndW1lbnRzICAgICAgIDo6PSAgc3ByZWFkQXJndW1lbnQgfCAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogKCBcIixcIiBzcHJlYWRBcmd1bWVudCApPyApIDtcblxuICBmaWVsZHMgICAgICAgICAgOjo9ICBuYW1lICggXCI6XCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcIjpcIiBuYW1lICk/ICkqIDtcblxuICBuYW1lcyAgICAgICAgICAgOjo9ICBuYW1lICggXCJhc1wiIG5hbWUgKT8gKCBcIixcIiBuYW1lICggXCJhc1wiIG5hbWUgKT8gKSogO1xuXG5cblxuICBzcHJlYWRBcmd1bWVudCAgOjo9ICBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+dmFyaWFibGUgO1xuICBcbiAgYXJndW1lbnQgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IDtcblxuICB2YXJpYWJsZSAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG4gIGxhYmVsICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cbiAgbmFtZSAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG5cbiAgZXJyb3IuICAgICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5sZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxucnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSmF2YVNjcmlwdFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEphdmFTY3JpcHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtUnFCQTs7OzRCQWpSUTtxQ0FFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQVFDLGVBQWtDQyw2QkFBZSxDQUFqREQsY0FBY0Usa0JBQW9CRCw2QkFBZSxDQUFuQ0M7QUFFdEIsSUFBTUMsTUFBTztBQXVRYixJQUFJQyxRQUFRSixhQUFhRztBQUV6QkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztBQUU1QixJQUFBLEFBQU1MLGlDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFHWk8sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9KLGdCQUhYSCxrQkFHNkNLO1lBQVE7OztZQUVqRUcsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUgsS0FBSztnQkFDcEJBLFFBQVFDLElBQUFBLDZDQUFzQixFQUFDRCxRQUFTLEdBQUc7Z0JBRTNDLE9BQU9JLDBCQUFZLENBQUNELFNBQVMsQ0FSWlIsa0JBUStCSztZQUFROzs7V0FSdkNMO0VBQXlCUywwQkFBWTtBQUN4RCxpQkFEbUJULGtCQUNaSSxPQUFNQSJ9