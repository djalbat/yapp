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
var bnf = '\n\n  javaScript      ::=  preamble? ( statement | function | class | error )* ;\n\n\n  preamble        ::=  "\\"use strict\\";" ;\n\n\n  statement       ::=  statementBody... ";"\n  \n                    |  "{" ( statement | function )* "}"\n                               \n                    |  "if" "(" expression... ")" statement ( "else" statement )?\n\n                    |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )\n\n                             | ( "(" variable "in" expression... ")" statement )\n\n                             | ( "await"? "(" variable "of" expression... ")" statement ) )\n\n                    |  "do" statement "while" "(" expression... ")"\n\n                    |  "while" "(" expression... ")" statement\n                               \n                    |  "switch" "(" expression... ")" "{" case* defaultCase? "}"\n\n                    |  try ( ( catch* finally ) | catch+ )\n\n                    ;\n\n\n  class           ::=  ( "export" "default"? )? "class" name classBody\n  \n                    |  "export" "default" "class" classBody\n  \n                    ;\n\n\n  function        ::=  ( "export" "default"? )? "async"? "function" name functionBody \n  \n                    |  "export" "default" "async"? "function" functionBody\n\n                    ;\n\n\n  statementBody   ::=  "import" ( [string-literal]\n\n                                | ( name "from" [string-literal] )\n\n                                | ( "{" names "}" "from" [string-literal] )\n\n                                | ( "*" "as" name "from" [string-literal] ) )\n\n                    |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )\n\n                                | ( "const" "{" fields "}" "=" expression )\n\n                                | ( "{" "default" "}" "from" [string-literal] )\n\n                                | ( "*" ( "as" name )? "from" [string-literal] ) )\n\n                    |  "export"? ( ( "var" var ( "," var )* )\n\n                                 | ( "let" let ( "," let )* )\n\n                                 | ( "const" const ( "," const )* ) )\n                                            \n                    |  ( "export" "default" )? expression\n\n                    |  "return" ( ( "(" expression ")" ) | expression? )\n\n                    |  "throw" expression\n\n                    |  "delete" expression\n\n                    |  "break"\n\n                    |  "continue"\n\n                    |  "debugger"\n                               \n                    ;\n\n\n  functionBody    ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;\n\n\n  classBody       ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;\n\n\n  constructor     ::=  "constructor" functionBody ;\n\n\n  method          ::=  "static"? name functionBody ;\n\n\n  field           ::=  "static"? name "=" expression... ";" ;\n\n\n  var             ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n\n  let             ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n\n  const           ::=  ( variable | destructure ) "=" expression ;\n\n\n  try             ::=  "try" "{" statement+ "}" ;\n\n\n  catch           ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;\n\n\n  finally         ::=  "finally" "{" statement+ "}" ;\n\n\n  case            ::=  "case" expression ":" statement ( "break" ";" )? ;\n\n\n  defaultCase     ::=  "default" ":" statement ( "break" ";" )? ;\n\n\n  initialiser     ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;\n\n\n  destructure     ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"\n\n                    |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"\n\n                    ;\n\n\n  expression      ::=  jsx\n\n                    |  json\n\n                    |  arrowFunction\n\n                    |  templateLiteral\n\n                    |  anonymousFunction\n\n                    |  "(" expression ")"\n\n                    |  "{" ( property ( "," property )* )? "}"\n\n                    |  "[" ( expression ( "," expression )* ","? )? "]"\n\n                    |  "typeof" ( expression | ( "(" expression ")") )\n\n                    |  "void" ( expression | ( "(" expression ")") )\n\n                    |  "new" name<NO_WHITESPACE>"(" expressions? ")"\n\n                    |  [operator]<NO_WHITESPACE>expression\n\n                    |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )\n\n                                                | ( "[" expressions "]" )\n\n                                                | ( "(" expressions? ")" )\n\n                                                | templateLiteral\n\n                                                | [operator] )\n\n                    |  expression ( ( [operator] expression )\n\n                                  | ( "?" expression ":" expression )\n\n                                  | ( "instanceof" expression )\n\n                                  | ( "in" expression ) )\n\n                    |  [number]\n\n                    |  variable\n\n                    |  primitive\n\n                    |  importMeta\n\n                    |  [string-literal]\n\n                    |  "super" | "this" | "true" | "false" | "null" | "undefined"\n\n                    ;\n\n\n  jsx             ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;\n\n\n  jsxCompleteTag  ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;\n\n\n  jsxStartTag     ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;\n\n\n  jsxEndTag       ::=  "</"<NO_WHITESPACE>name ">" ;\n\n\n  jsxAttribute    ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;\n\n\n  json            ::=  jsonArray | jsonObject ;\n\n\n  jsonArray       ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;\n\n\n  jsonObject      ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;\n\n\n  jsonElement     ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n  arrowFunction   ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;\n                               \n\n  templateLiteral ::=  "`" ( ( "${" expression? "}" ) | string )* "`" ;\n\n\n  string          ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n\n  property        ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;\n\n\n  importMeta      ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;\n\n\n  expressions     ::=  expression ( "," expression )* ;\n\n\n  arguments       ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;\n\n\n  fields          ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;\n\n\n  names           ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;\n\n\n  spreadArgument  ::=  "..."<NO_WHITESPACE>variable ;\n\n  \n  argument        ::=  variable ( "=" expression )? ;\n\n\n  variable        ::=  [identifier] ;\n\n\n  label           ::=  [identifier] ;\n\n\n  name            ::=  [identifier] ;\n\n\n  error.          ::=  . ;\n    \n';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXIvamF2YXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMgfSA9IHBhcnNlclV0aWxpdGllcztcblxuY29uc3QgYm5mID0gYFxuXG4gIGphdmFTY3JpcHQgICAgICA6Oj0gIHByZWFtYmxlPyAoIHN0YXRlbWVudCB8IGZ1bmN0aW9uIHwgY2xhc3MgfCBlcnJvciApKiA7XG5cblxuICBwcmVhbWJsZSAgICAgICAgOjo9ICBcIlxcXFxcInVzZSBzdHJpY3RcXFxcXCI7XCIgO1xuXG5cbiAgc3RhdGVtZW50ICAgICAgIDo6PSAgc3RhdGVtZW50Qm9keS4uLiBcIjtcIlxuICBcbiAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgKCBzdGF0ZW1lbnQgfCBmdW5jdGlvbiApKiBcIn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB8ICBcImlmXCIgXCIoXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBzdGF0ZW1lbnQgKCBcImVsc2VcIiBzdGF0ZW1lbnQgKT9cblxuICAgICAgICAgICAgICAgICAgICB8ICBcImZvclwiICggKCBcIihcIiBpbml0aWFsaXNlciAoIFwiO1wiIGV4cHJlc3Npb24gKT8gKCBcIjtcIiBleHByZXNzaW9uICk/IFwiKVwiIHN0YXRlbWVudCApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKFwiIHZhcmlhYmxlIFwiaW5cIiBleHByZXNzaW9uLi4uIFwiKVwiIHN0YXRlbWVudCApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiYXdhaXRcIj8gXCIoXCIgdmFyaWFibGUgXCJvZlwiIGV4cHJlc3Npb24uLi4gXCIpXCIgc3RhdGVtZW50ICkgKVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZG9cIiBzdGF0ZW1lbnQgXCJ3aGlsZVwiIFwiKFwiIGV4cHJlc3Npb24uLi4gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICB8ICBcIndoaWxlXCIgXCIoXCIgZXhwcmVzc2lvbi4uLiBcIilcIiBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfCAgXCJzd2l0Y2hcIiBcIihcIiBleHByZXNzaW9uLi4uIFwiKVwiIFwie1wiIGNhc2UqIGRlZmF1bHRDYXNlPyBcIn1cIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIHRyeSAoICggY2F0Y2gqIGZpbmFsbHkgKSB8IGNhdGNoKyApXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgY2xhc3MgICAgICAgICAgIDo6PSAgKCBcImV4cG9ydFwiIFwiZGVmYXVsdFwiPyApPyBcImNsYXNzXCIgbmFtZSBjbGFzc0JvZHlcbiAgXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgXCJjbGFzc1wiIGNsYXNzQm9keVxuICBcbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgZnVuY3Rpb24gICAgICAgIDo6PSAgKCBcImV4cG9ydFwiIFwiZGVmYXVsdFwiPyApPyBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBuYW1lIGZ1bmN0aW9uQm9keSBcbiAgXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgXCJhc3luY1wiPyBcImZ1bmN0aW9uXCIgZnVuY3Rpb25Cb2R5XG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgc3RhdGVtZW50Qm9keSAgIDo6PSAgXCJpbXBvcnRcIiAoIFtzdHJpbmctbGl0ZXJhbF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggbmFtZSBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgbmFtZXMgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiIFwiYXNcIiBuYW1lIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKSApXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiAoICggXCJ7XCIgbmFtZXMgXCJ9XCIgKCBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdICk/IClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJjb25zdFwiIFwie1wiIGZpZWxkcyBcIn1cIiBcIj1cIiBleHByZXNzaW9uIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgXCJkZWZhdWx0XCIgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiKlwiICggXCJhc1wiIG5hbWUgKT8gXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcImV4cG9ydFwiPyAoICggXCJ2YXJcIiB2YXIgKCBcIixcIiB2YXIgKSogKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJsZXRcIiBsZXQgKCBcIixcIiBsZXQgKSogKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJjb25zdFwiIGNvbnN0ICggXCIsXCIgY29uc3QgKSogKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB8ICAoIFwiZXhwb3J0XCIgXCJkZWZhdWx0XCIgKT8gZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwicmV0dXJuXCIgKCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgKSB8IGV4cHJlc3Npb24/IClcblxuICAgICAgICAgICAgICAgICAgICB8ICBcInRocm93XCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZGVsZXRlXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiYnJlYWtcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiY29udGludWVcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwiZGVidWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBmdW5jdGlvbkJvZHkgICAgOjo9ICBcIihcIiBhcmd1bWVudHM/IFwiKVwiIFwie1wiICggc3RhdGVtZW50IHwgZnVuY3Rpb24gKSogXCJ9XCIgO1xuXG5cbiAgY2xhc3NCb2R5ICAgICAgIDo6PSAgKCBcImV4dGVuZHNcIiBuYW1lICk/IFwie1wiICggY29uc3RydWN0b3IgfCBtZXRob2QgfCBmaWVsZCApKiBcIn1cIiA7XG5cblxuICBjb25zdHJ1Y3RvciAgICAgOjo9ICBcImNvbnN0cnVjdG9yXCIgZnVuY3Rpb25Cb2R5IDtcblxuXG4gIG1ldGhvZCAgICAgICAgICA6Oj0gIFwic3RhdGljXCI/IG5hbWUgZnVuY3Rpb25Cb2R5IDtcblxuXG4gIGZpZWxkICAgICAgICAgICA6Oj0gIFwic3RhdGljXCI/IG5hbWUgXCI9XCIgZXhwcmVzc2lvbi4uLiBcIjtcIiA7XG5cblxuICB2YXIgICAgICAgICAgICAgOjo9ICB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gfCBkZXN0cnVjdHVyZSBcIj1cIiBleHByZXNzaW9uIDtcblxuXG4gIGxldCAgICAgICAgICAgICA6Oj0gIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyB8IGRlc3RydWN0dXJlIFwiPVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgY29uc3QgICAgICAgICAgIDo6PSAgKCB2YXJpYWJsZSB8IGRlc3RydWN0dXJlICkgXCI9XCIgZXhwcmVzc2lvbiA7XG5cblxuICB0cnkgICAgICAgICAgICAgOjo9ICBcInRyeVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgY2F0Y2ggICAgICAgICAgIDo6PSAgXCJjYXRjaFwiIFwiKFwiIFtpZGVudGlmaWVyXSBcIilcIiBcIntcIiBzdGF0ZW1lbnQrIFwifVwiIDtcblxuXG4gIGZpbmFsbHkgICAgICAgICA6Oj0gIFwiZmluYWxseVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG5cbiAgY2FzZSAgICAgICAgICAgIDo6PSAgXCJjYXNlXCIgZXhwcmVzc2lvbiBcIjpcIiBzdGF0ZW1lbnQgKCBcImJyZWFrXCIgXCI7XCIgKT8gO1xuXG5cbiAgZGVmYXVsdENhc2UgICAgIDo6PSAgXCJkZWZhdWx0XCIgXCI6XCIgc3RhdGVtZW50ICggXCJicmVha1wiIFwiO1wiICk/IDtcblxuXG4gIGluaXRpYWxpc2VyICAgICA6Oj0gIGV4cHJlc3Npb24gfCBcInZhclwiIHZhciAoIFwiLFwiIHZhciApKiB8IFwibGV0XCIgbGV0ICggXCIsXCIgbGV0ICkqIDtcblxuXG4gIGRlc3RydWN0dXJlICAgICA6Oj0gIFwiW1wiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyAoIFwiLFwiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyApKiBcIl1cIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwie1wiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyAoIFwiLFwiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyApKiBcIn1cIlxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGV4cHJlc3Npb24gICAgICA6Oj0gIGpzeFxuXG4gICAgICAgICAgICAgICAgICAgIHwgIGpzb25cblxuICAgICAgICAgICAgICAgICAgICB8ICBhcnJvd0Z1bmN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgdGVtcGxhdGVMaXRlcmFsXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgYW5vbnltb3VzRnVuY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgKCBwcm9wZXJ0eSAoIFwiLFwiIHByb3BlcnR5ICkqICk/IFwifVwiXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJbXCIgKCBleHByZXNzaW9uICggXCIsXCIgZXhwcmVzc2lvbiApKiBcIixcIj8gKT8gXCJdXCJcblxuICAgICAgICAgICAgICAgICAgICB8ICBcInR5cGVvZlwiICggZXhwcmVzc2lvbiB8ICggXCIoXCIgZXhwcmVzc2lvbiBcIilcIikgKVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwidm9pZFwiICggZXhwcmVzc2lvbiB8ICggXCIoXCIgZXhwcmVzc2lvbiBcIilcIikgKVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFwibmV3XCIgbmFtZTxOT19XSElURVNQQUNFPlwiKFwiIGV4cHJlc3Npb25zPyBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgIHwgIFtvcGVyYXRvcl08Tk9fV0hJVEVTUEFDRT5leHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbjxOT19XSElURVNQQUNFPiggKCBcIi5cIjxOT19XSElURVNQQUNFPm5hbWUgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJbXCIgZXhwcmVzc2lvbnMgXCJdXCIgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCIoXCIgZXhwcmVzc2lvbnM/IFwiKVwiIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZW1wbGF0ZUxpdGVyYWxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbb3BlcmF0b3JdIClcblxuICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uICggKCBbb3BlcmF0b3JdIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiP1wiIGV4cHJlc3Npb24gXCI6XCIgZXhwcmVzc2lvbiApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJpbnN0YW5jZW9mXCIgZXhwcmVzc2lvbiApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJpblwiIGV4cHJlc3Npb24gKSApXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl1cblxuICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIHByaW1pdGl2ZVxuXG4gICAgICAgICAgICAgICAgICAgIHwgIGltcG9ydE1ldGFcblxuICAgICAgICAgICAgICAgICAgICB8ICBbc3RyaW5nLWxpdGVyYWxdXG5cbiAgICAgICAgICAgICAgICAgICAgfCAgXCJzdXBlclwiIHwgXCJ0aGlzXCIgfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIHwgXCJ1bmRlZmluZWRcIlxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIGpzeCAgICAgICAgICAgICA6Oj0gIGpzeENvbXBsZXRlVGFnIHwganN4U3RhcnRUYWcgKCBqc3ggfCAoIFwie1wiIGV4cHJlc3Npb24/IFwifVwiICkgfCBzdHJpbmcgKSoganN4RW5kVGFnIDtcblxuXG4gIGpzeENvbXBsZXRlVGFnICA6Oj0gIFwiPFwiPE5PX1dISVRFU1BBQ0U+bmFtZSBqc3hBdHRyaWJ1dGUqIFwiLz5cIiA7XG5cblxuICBqc3hTdGFydFRhZyAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPm5hbWUganN4QXR0cmlidXRlKiBcIj5cIiA7XG5cblxuICBqc3hFbmRUYWcgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcblxuXG4gIGpzeEF0dHJpYnV0ZSAgICA6Oj0gIG5hbWUgKCA8Tk9fV0hJVEVTUEFDRT5cIj1cIiAoICggPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSApIHwgKCA8Tk9fV0hJVEVTUEFDRT5cIntcIiBleHByZXNzaW9uIFwifVwiICkgKSApPyA7XG5cblxuICBqc29uICAgICAgICAgICAgOjo9ICBqc29uQXJyYXkgfCBqc29uT2JqZWN0IDtcblxuXG4gIGpzb25BcnJheSAgICAgICA6Oj0gIFwiW1wiICgganNvbkVsZW1lbnQgKCBcIixcIiBqc29uRWxlbWVudCApKiApPyBcIl1cIiA7XG5cblxuICBqc29uT2JqZWN0ICAgICAgOjo9ICBcIntcIiAoIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbkVsZW1lbnQgKCBcIixcIiBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGpzb25FbGVtZW50ICkqICk/IFwifVwiIDtcblxuXG4gIGpzb25FbGVtZW50ICAgICA6Oj0gIGpzb24gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW251bWJlcl0gfCBcInRydWVcIiB8IFwiZmFsc2VcIiB8IFwibnVsbFwiIDtcblxuXG4gIGFycm93RnVuY3Rpb24gICA6Oj0gIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgXCI9PlwiICggZXhwcmVzc2lvbiB8ICggXCJ7XCIgc3RhdGVtZW50KiBcIn1cIiApICkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gIHRlbXBsYXRlTGl0ZXJhbCA6Oj0gIFwiXFxgXCIgKCAoIFwiXFwke1wiIGV4cHJlc3Npb24/IFwifVwiICkgfCBzdHJpbmcgKSogXCJcXGBcIiA7XG5cblxuICBzdHJpbmcgICAgICAgICAgOjo9ICAoIFtudW1iZXJdIHwgW3NwZWNpYWxdIHwgW29wZXJhdG9yXXwgW2tleXdvcmRdIHwgW2lkZW50aWZpZXJdIHwgW3N0cmluZy1saXRlcmFsXXwgW2Jyb2tlbi1zdHJpbmctbGl0ZXJhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgcHJvcGVydHkgICAgICAgIDo6PSAgKCAoICggbmFtZSB8IFtzdHJpbmctbGl0ZXJhbF0gKSBcIjpcIiBleHByZXNzaW9uICkgfCB2YXJpYWJsZSApIDtcblxuXG4gIGltcG9ydE1ldGEgICAgICA6Oj0gIFwiaW1wb3J0XCI8Tk9fV0hJVEVTUEFDRT5cIi5cIjxOT19XSElURVNQQUNFPlwibWV0YVwiIDtcblxuXG4gIGV4cHJlc3Npb25zICAgICA6Oj0gIGV4cHJlc3Npb24gKCBcIixcIiBleHByZXNzaW9uICkqIDtcblxuXG4gIGFyZ3VtZW50cyAgICAgICA6Oj0gIHNwcmVhZEFyZ3VtZW50IHwgKCBhcmd1bWVudCAoIFwiLFwiIGFyZ3VtZW50ICkqICggXCIsXCIgc3ByZWFkQXJndW1lbnQgKT8gKSA7XG5cblxuICBmaWVsZHMgICAgICAgICAgOjo9ICBuYW1lICggXCI6XCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcIjpcIiBuYW1lICk/ICkqIDtcblxuXG4gIG5hbWVzICAgICAgICAgICA6Oj0gIG5hbWUgKCBcImFzXCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcImFzXCIgbmFtZSApPyApKiA7XG5cblxuICBzcHJlYWRBcmd1bWVudCAgOjo9ICBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+dmFyaWFibGUgO1xuXG4gIFxuICBhcmd1bWVudCAgICAgICAgOjo9ICB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gO1xuXG5cbiAgdmFyaWFibGUgICAgICAgIDo6PSAgW2lkZW50aWZpZXJdIDtcblxuXG4gIGxhYmVsICAgICAgICAgICA6Oj0gIFtpZGVudGlmaWVyXSA7XG5cblxuICBuYW1lICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cbiAgZXJyb3IuICAgICAgICAgIDo6PSAgLiA7XG4gICAgXG5gO1xuXG5sZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxucnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKYXZhU2NyaXB0UGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBwYXJzZXJGcm9tUnVsZXMoSmF2YVNjcmlwdFBhcnNlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEphdmFTY3JpcHRQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkphdmFTY3JpcHRQYXJzZXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJibmYiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJmcm9tTm90aGluZyIsImZyb21SdWxlcyIsIkNvbW1vblBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtUnFCQTs7OzRCQWpSUTtxQ0FFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQVFDLGVBQWtDQyw2QkFBZSxDQUFqREQsY0FBY0Usa0JBQW9CRCw2QkFBZSxDQUFuQ0M7QUFFdEIsSUFBTUMsTUFBTztBQXVRYixJQUFJQyxRQUFRSixhQUFhRztBQUV6QkMsUUFBUUMsSUFBQUEsNkNBQXNCLEVBQUNELFFBQVMsR0FBRztBQUU1QixJQUFBLEFBQU1MLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBR1pPLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPSixnQkFIWEgsa0JBRzZDSztZQUFROzs7WUFFakVHLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVILEtBQUs7Z0JBQ3BCQSxRQUFRQyxJQUFBQSw2Q0FBc0IsRUFBQ0QsUUFBUyxHQUFHO2dCQUUzQyxPQUFPSSwwQkFBWSxDQUFDRCxTQUFTLENBUlpSLGtCQVErQks7WUFBUTs7O1dBUnZDTDtFQUF5QlMsMEJBQVk7QUFDeEQsaUJBRG1CVCxrQkFDWkksT0FBTUEifQ==