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
var bnf = '\n\n  javaScript        ::=  preamble? ( statement | function | class | error )* ;\n\n\n  preamble          ::=  "\\"use strict\\";" ;\n\n\n  statement         ::=  statementBody... ";"\n  \n                      |  "{" ( statement | function )* "}"\n                                 \n                      |  "if" "(" expression... ")" statement ( "else" statement )?\n  \n                      |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )\n  \n                               | ( "(" variable "in" expression... ")" statement )\n  \n                               | ( "await"? "(" variable "of" expression... ")" statement ) )\n  \n                      |  "do" statement "while" "(" expression... ")"\n  \n                      |  "while" "(" expression... ")" statement\n                                 \n                      |  "switch" "(" expression... ")" "{" case* defaultCase? "}"\n  \n                      |  try ( ( catch* finally ) | catch+ )\n  \n                      ;\n\n\n  class             ::=  ( "export" "default"? )? "class" name classBody\n  \n                      |  "export" "default" "class" classBody\n    \n                      ;\n\n\n  function          ::=  ( "export" "default"? )? "async"? "function" name functionBody \n  \n                      |  "export" "default" "async"? "function" functionBody\n  \n                      ;\n\n\n  statementBody     ::=  "import" ( [string-literal]\n\n                                  | ( name "from" [string-literal] )\n  \n                                  | ( "{" names "}" "from" [string-literal] )\n  \n                                  | ( "*" "as" name "from" [string-literal] ) )\n  \n                      |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )\n  \n                                  | ( "const" "{" fields "}" "=" expression )\n  \n                                  | ( "{" "default" "}" "from" [string-literal] )\n  \n                                  | ( "*" ( "as" name )? "from" [string-literal] ) )\n  \n                      |  "export"? ( ( "var" var ( "," var )* )\n  \n                                   | ( "let" let ( "," let )* )\n  \n                                   | ( "const" const ( "," const )* ) )\n                                              \n                      |  ( "export" "default" )? expression\n  \n                      |  "return" ( ( "(" expression ")" ) | expression? )\n  \n                      |  "throw" expression\n  \n                      |  "delete" expression\n  \n                      |  "break"\n  \n                      |  "continue"\n  \n                      |  "debugger"\n                                 \n                      ;\n\n\n  functionBody      ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;\n\n\n  classBody         ::=  ( "extends" name )? "{" ( classConstructor | classMethod | classField )* "}" ;\n\n\n  classConstructor  ::=  "constructor" functionBody ;\n\n\n  classMethod       ::=  "static"? name functionBody ;\n\n\n  classField        ::=  "static"? name "=" expression... ";" ;\n\n\n  var               ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n\n  let               ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n\n  const             ::=  ( variable | destructure ) "=" expression ;\n\n\n  try               ::=  "try" "{" statement+ "}" ;\n\n\n  catch             ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;\n\n\n  finally           ::=  "finally" "{" statement+ "}" ;\n\n\n  case              ::=  "case" expression ":" statement ( "break" ";" )? ;\n\n\n  defaultCase       ::=  "default" ":" statement ( "break" ";" )? ;\n\n\n  initialiser       ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;\n\n\n  destructure       ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"\n\n                      |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"\n  \n                      ;\n\n\n  expression        ::=  jsx\n\n                      |  json\n  \n                      |  arrowFunction\n  \n                      |  templateLiteral\n  \n                      |  anonymousFunction\n  \n                      |  "(" expression ")"\n  \n                      |  "{" ( property ( "," property )* )? "}"\n  \n                      |  "[" ( expression ( "," expression )* ","? )? "]"\n  \n                      |  "typeof" ( expression | ( "(" expression ")") )\n  \n                      |  "void" ( expression | ( "(" expression ")") )\n  \n                      |  "new" name<NO_WHITESPACE>"(" expressions? ")"\n  \n                      |  [operator]<NO_WHITESPACE>expression\n  \n                      |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )\n  \n                                                  | ( "[" expressions "]" )\n  \n                                                  | ( "(" expressions? ")" )\n  \n                                                  | templateLiteral\n  \n                                                  | [operator] )\n  \n                      |  expression ( ( [operator] expression )\n  \n                                    | ( "?" expression ":" expression )\n  \n                                    | ( "instanceof" expression )\n  \n                                    | ( "in" expression ) )\n  \n                      |  [number]\n  \n                      |  variable\n  \n                      |  primitive\n  \n                      |  importMeta\n  \n                      |  [string-literal]\n  \n                      |  "super" | "this" | "true" | "false" | "null" | "undefined"\n  \n                      ;\n\n\n  jsx               ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;\n\n\n  jsxCompleteTag    ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;\n\n\n  jsxStartTag       ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;\n\n\n  jsxEndTag         ::=  "</"<NO_WHITESPACE>name ">" ;\n\n\n  jsxAttribute      ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;\n\n\n  json              ::=  jsonArray | jsonObject ;\n\n\n  jsonArray         ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;\n\n\n  jsonObject        ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;\n\n\n  jsonElement       ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n  arrowFunction     ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;\n                               \n\n  templateLiteral   ::=  "`" ( ( "${" expression? "}" ) | string )* "`" ;\n\n\n  string            ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n\n  property          ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;\n\n\n  importMeta        ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;\n\n\n  expressions       ::=  expression ( "," expression )* ;\n\n\n  arguments         ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;\n\n\n  fields            ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;\n\n\n  names             ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;\n\n\n  spreadArgument    ::=  "..."<NO_WHITESPACE>variable ;\n\n  \n  argument          ::=  variable ( "=" expression )? ;\n\n\n  variable          ::=  [identifier] ;\n\n\n  label             ::=  [identifier] ;\n\n\n  name              ::=  [identifier] ;\n\n\n  error.            ::=  . ;\n    \n';
var rules = rulesFromBNF(bnf);
rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
var JavaScriptParser = /*#__PURE__*/ function(CommonParser) {
    _inherits(JavaScriptParser, CommonParser);
    function JavaScriptParser() {
        _class_call_check(this, JavaScriptParser);
        return _call_super(this, JavaScriptParser, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGphdmFTY3JpcHQgICAgICAgIDo6PSAgcHJlYW1ibGU/ICggc3RhdGVtZW50IHwgZnVuY3Rpb24gfCBjbGFzcyB8IGVycm9yICkqIDtcblxuXG4gIHByZWFtYmxlICAgICAgICAgIDo6PSAgXCJcXFxcXCJ1c2Ugc3RyaWN0XFxcXFwiO1wiIDtcblxuXG4gIHN0YXRlbWVudCAgICAgICAgIDo6PSAgc3RhdGVtZW50Qm9keS4uLiBcIjtcIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIntcIiAoIHN0YXRlbWVudCB8IGZ1bmN0aW9uICkqIFwifVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImlmXCIgXCIoXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBzdGF0ZW1lbnQgKCBcImVsc2VcIiBzdGF0ZW1lbnQgKT9cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJmb3JcIiAoICggXCIoXCIgaW5pdGlhbGlzZXIgKCBcIjtcIiBleHByZXNzaW9uICk/ICggXCI7XCIgZXhwcmVzc2lvbiApPyBcIilcIiBzdGF0ZW1lbnQgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCIoXCIgdmFyaWFibGUgXCJpblwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50IClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiYXdhaXRcIj8gXCIoXCIgdmFyaWFibGUgXCJvZlwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50ICkgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImRvXCIgc3RhdGVtZW50IFwid2hpbGVcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwid2hpbGVcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJzd2l0Y2hcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiIFwie1wiIGNhc2UqIGRlZmF1bHRDYXNlPyBcIn1cIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICB0cnkgKCAoIGNhdGNoKiBmaW5hbGx5ICkgfCBjYXRjaCsgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBjbGFzcyAgICAgICAgICAgICA6Oj0gICggXCJleHBvcnRcIiBcImRlZmF1bHRcIj8gKT8gXCJjbGFzc1wiIG5hbWUgY2xhc3NCb2R5XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgXCJjbGFzc1wiIGNsYXNzQm9keVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGZ1bmN0aW9uICAgICAgICAgIDo6PSAgKCBcImV4cG9ydFwiIFwiZGVmYXVsdFwiPyApPyBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBuYW1lIGZ1bmN0aW9uQm9keSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiBcImRlZmF1bHRcIiBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBmdW5jdGlvbkJvZHlcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgc3RhdGVtZW50Qm9keSAgICAgOjo9ICBcImltcG9ydFwiICggW3N0cmluZy1saXRlcmFsXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIG5hbWUgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIntcIiBuYW1lcyBcIn1cIiBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiIFwiYXNcIiBuYW1lIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgKCAoIFwie1wiIG5hbWVzIFwifVwiICggXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApPyApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImNvbnN0XCIgXCJ7XCIgZmllbGRzIFwifVwiIFwiPVwiIGV4cHJlc3Npb24gKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgXCJkZWZhdWx0XCIgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIipcIiAoIFwiYXNcIiBuYW1lICk/IFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCI/ICggKCBcInZhclwiIHZhciAoIFwiLFwiIHZhciApKiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJsZXRcIiBsZXQgKCBcIixcIiBsZXQgKSogKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiY29uc3RcIiBjb25zdCAoIFwiLFwiIGNvbnN0ICkqICkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHwgICggXCJleHBvcnRcIiBcImRlZmF1bHRcIiApPyBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwicmV0dXJuXCIgKCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKSB8IGV4cHJlc3Npb24/IClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ0aHJvd1wiIGV4cHJlc3Npb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIiBleHByZXNzaW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiYnJlYWtcIlxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcImNvbnRpbnVlXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWJ1Z2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBmdW5jdGlvbkJvZHkgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgXCJ7XCIgKCBzdGF0ZW1lbnQgfCBmdW5jdGlvbiApKiBcIn1cIiA7XG5cblxuICBjbGFzc0JvZHkgICAgICAgICA6Oj0gICggXCJleHRlbmRzXCIgbmFtZSApPyBcIntcIiAoIGNsYXNzQ29uc3RydWN0b3IgfCBjbGFzc01ldGhvZCB8IGNsYXNzRmllbGQgKSogXCJ9XCIgO1xuXG5cbiAgY2xhc3NDb25zdHJ1Y3RvciAgOjo9ICBcImNvbnN0cnVjdG9yXCIgZnVuY3Rpb25Cb2R5IDtcblxuXG4gIGNsYXNzTWV0aG9kICAgICAgIDo6PSAgXCJzdGF0aWNcIj8gbmFtZSBmdW5jdGlvbkJvZHkgO1xuXG5cbiAgY2xhc3NGaWVsZCAgICAgICAgOjo9ICBcInN0YXRpY1wiPyBuYW1lIFwiPVwiIGV4cHJlc3Npb24uLi4gXCI7XCIgO1xuXG5cbiAgdmFyICAgICAgICAgICAgICAgOjo9ICB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gfCBkZXN0cnVjdHVyZSBcIj1cIiBleHByZXNzaW9uIDtcblxuXG4gIGxldCAgICAgICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IHwgZGVzdHJ1Y3R1cmUgXCI9XCIgZXhwcmVzc2lvbiA7XG5cblxuICBjb25zdCAgICAgICAgICAgICA6Oj0gICggdmFyaWFibGUgfCBkZXN0cnVjdHVyZSApIFwiPVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdHJ5ICAgICAgICAgICAgICAgOjo9ICBcInRyeVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgY2F0Y2ggICAgICAgICAgICAgOjo9ICBcImNhdGNoXCIgXCIoXCIgW2lkZW50aWZpZXJdIFwiKVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgZmluYWxseSAgICAgICAgICAgOjo9ICBcImZpbmFsbHlcIiBcIntcIiBzdGF0ZW1lbnQrIFwifVwiIDtcblxuXG4gIGNhc2UgICAgICAgICAgICAgIDo6PSAgXCJjYXNlXCIgZXhwcmVzc2lvbiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG5cbiAgZGVmYXVsdENhc2UgICAgICAgOjo9ICBcImRlZmF1bHRcIiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG5cbiAgaW5pdGlhbGlzZXIgICAgICAgOjo9ICBleHByZXNzaW9uIHwgXCJ2YXJcIiB2YXIgKCBcIixcIiB2YXIgKSogfCBcImxldFwiIGxldCAoIFwiLFwiIGxldCApKiA7XG5cblxuICBkZXN0cnVjdHVyZSAgICAgICA6Oj0gIFwiW1wiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyAoIFwiLFwiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyApKiBcIl1cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICggXCIsXCIgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/ICkqIFwifVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGV4cHJlc3Npb24gICAgICAgIDo6PSAganN4XG5cbiAgICAgICAgICAgICAgICAgICAgICB8ICBqc29uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGFycm93RnVuY3Rpb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgdGVtcGxhdGVMaXRlcmFsXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGFub255bW91c0Z1bmN0aW9uXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgKCBwcm9wZXJ0eSAoIFwiLFwiIHByb3BlcnR5ICkqICk/IFwifVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiW1wiICggZXhwcmVzc2lvbiAoIFwiLFwiIGV4cHJlc3Npb24gKSogXCIsXCI/ICk/IFwiXVwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwidHlwZW9mXCIgKCBleHByZXNzaW9uIHwgKCBcIihcIiBleHByZXNzaW9uIFwiKVwiKSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwidm9pZFwiICggZXhwcmVzc2lvbiB8ICggXCIoXCIgZXhwcmVzc2lvbiBcIilcIikgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIm5ld1wiIG5hbWU8Tk9fV0hJVEVTUEFDRT5cIihcIiBleHByZXNzaW9ucz8gXCIpXCJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW29wZXJhdG9yXTxOT19XSElURVNQQUNFPmV4cHJlc3Npb25cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbjxOT19XSElURVNQQUNFPiggKCBcIi5cIjxOT19XSElURVNQQUNFPm5hbWUgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiW1wiIGV4cHJlc3Npb25zIFwiXVwiIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIihcIiBleHByZXNzaW9ucz8gXCIpXCIgKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZW1wbGF0ZUxpdGVyYWxcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgW29wZXJhdG9yXSApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24gKCAoIFtvcGVyYXRvcl0gZXhwcmVzc2lvbiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiP1wiIGV4cHJlc3Npb24gXCI6XCIgZXhwcmVzc2lvbiApXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiaW5zdGFuY2VvZlwiIGV4cHJlc3Npb24gKVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImluXCIgZXhwcmVzc2lvbiApIClcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl1cbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGVcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgcHJpbWl0aXZlXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIHwgIGltcG9ydE1ldGFcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXVxuICBcbiAgICAgICAgICAgICAgICAgICAgICB8ICBcInN1cGVyXCIgfCBcInRoaXNcIiB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgfCBcInVuZGVmaW5lZFwiXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGpzeCAgICAgICAgICAgICAgIDo6PSAganN4Q29tcGxldGVUYWcgfCBqc3hTdGFydFRhZyAoIGpzeCB8ICggXCJ7XCIgZXhwcmVzc2lvbj8gXCJ9XCIgKSB8IHN0cmluZyApKiBqc3hFbmRUYWcgO1xuXG5cbiAganN4Q29tcGxldGVUYWcgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIi8+XCIgO1xuXG5cbiAganN4U3RhcnRUYWcgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICBqc3hFbmRUYWcgICAgICAgICA6Oj0gIFwiPC9cIjxOT19XSElURVNQQUNFPm5hbWUgXCI+XCIgO1xuXG5cbiAganN4QXR0cmlidXRlICAgICAgOjo9ICBuYW1lICggPE5PX1dISVRFU1BBQ0U+XCI9XCIgKCAoIDxOT19XSElURVNQQUNFPltzdHJpbmctbGl0ZXJhbF0gKSB8ICggPE5PX1dISVRFU1BBQ0U+XCJ7XCIgZXhwcmVzc2lvbiBcIn1cIiApICkgKT8gO1xuXG5cbiAganNvbiAgICAgICAgICAgICAgOjo9ICBqc29uQXJyYXkgfCBqc29uT2JqZWN0IDtcblxuXG4gIGpzb25BcnJheSAgICAgICAgIDo6PSAgXCJbXCIgKCBqc29uRWxlbWVudCAoIFwiLFwiIGpzb25FbGVtZW50ICkqICk/IFwiXVwiIDtcblxuXG4gIGpzb25PYmplY3QgICAgICAgIDo6PSAgXCJ7XCIgKCBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGpzb25FbGVtZW50ICggXCIsXCIgW3N0cmluZy1saXRlcmFsXSBcIjpcIiBqc29uRWxlbWVudCApKiApPyBcIn1cIiA7XG5cblxuICBqc29uRWxlbWVudCAgICAgICA6Oj0gIGpzb24gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gIGFycm93RnVuY3Rpb24gICAgIDo6PSAgXCIoXCIgYXJndW1lbnRzPyBcIilcIiBcIj0+XCIgKCBleHByZXNzaW9uIHwgKCBcIntcIiBzdGF0ZW1lbnQqIFwifVwiICkgKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgdGVtcGxhdGVMaXRlcmFsICAgOjo9ICBcIlxcYFwiICggKCBcIlxcJHtcIiBleHByZXNzaW9uPyBcIn1cIiApIHwgc3RyaW5nICkqIFwiXFxgXCIgO1xuXG5cbiAgc3RyaW5nICAgICAgICAgICAgOjo9ICAoIFtudW1iZXJdIHwgW3NwZWNpYWxdIHwgW29wZXJhdG9yXXwgW2tleXdvcmRdIHwgW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgcHJvcGVydHkgICAgICAgICAgOjo9ICAoICggKCBuYW1lIHwgW3N0cmluZy1saXRlcmFsXSApIFwiOlwiIGV4cHJlc3Npb24gKSB8IHZhcmlhYmxlICkgO1xuXG5cbiAgaW1wb3J0TWV0YSAgICAgICAgOjo9ICBcImltcG9ydFwiPE5PX1dISVRFU1BBQ0U+XCIuXCI8Tk9fV0hJVEVTUEFDRT5cIm1ldGFcIiA7XG5cblxuICBleHByZXNzaW9ucyAgICAgICA6Oj0gIGV4cHJlc3Npb24gKCBcIixcIiBleHByZXNzaW9uICkqIDtcblxuXG4gIGFyZ3VtZW50cyAgICAgICAgIDo6PSAgc3ByZWFkQXJndW1lbnQgfCAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogKCBcIixcIiBzcHJlYWRBcmd1bWVudCApPyApIDtcblxuXG4gIGZpZWxkcyAgICAgICAgICAgIDo6PSAgbmFtZSAoIFwiOlwiIG5hbWUgKT8gKCBcIixcIiBuYW1lICggXCI6XCIgbmFtZSApPyApKiA7XG5cblxuICBuYW1lcyAgICAgICAgICAgICA6Oj0gIG5hbWUgKCBcImFzXCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcImFzXCIgbmFtZSApPyApKiA7XG5cblxuICBzcHJlYWRBcmd1bWVudCAgICA6Oj0gIFwiLi4uXCI8Tk9fV0hJVEVTUEFDRT52YXJpYWJsZSA7XG5cbiAgXG4gIGFyZ3VtZW50ICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IDtcblxuXG4gIHZhcmlhYmxlICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGxhYmVsICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIG5hbWUgICAgICAgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGVycm9yLiAgICAgICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5sZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxucnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSmF2YVNjcmlwdFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEphdmFTY3JpcHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtUnFCQTs7OzRCQWpSUTtxQ0FFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQVFDLGVBQWtDQyw2QkFBZSxDQUFqREQsY0FBY0Usa0JBQW9CRCw2QkFBZSxDQUFuQ0M7QUFFdEIsSUFBTUMsTUFBTztBQXVRYixJQUFJQyxRQUFRSixhQUFhRztBQUV6QkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztBQUU1QixJQUFBLEFBQU1MLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBR1pPLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPSixnQkFIWEgsa0JBRzZDSztZQUFROzs7WUFFakVHLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVILEtBQUs7Z0JBQ3BCQSxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO2dCQUUzQyxPQUFPSSwwQkFBWSxDQUFDRCxTQUFTLENBUlpSLGtCQVErQks7WUFBUTs7O1dBUnZDTDtFQUF5QlMsMEJBQVk7QUFDeEQsaUJBRG1CVCxrQkFDWkksT0FBTUEifQ==