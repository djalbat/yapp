"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _yapp = /*#__PURE__*/ _interop_require_default(require("./yapp"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
var _top = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/top"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _middle = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/middle"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "contentChangeCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "keyUpHandler", function(event, element) {
            try {
                var lexicalEntries = _this.getLexicalEntries(), entries = lexicalEntries, bnf = _this.getBNF(), lexer = _this.lexerFromEntries(entries), parser = _this.parserFromBNF(bnf), yappLexer = lexer, yappParser = parser; ///
                _this.setYappLexer(yappLexer);
                _this.setYappParser(yappParser);
                _this.updateYapp();
                _this.update();
            } catch (error) {
                console.log(error);
            }
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "lexerFromEntries",
            value: function lexerFromEntries(entries) {
                var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, lexer = Lexer.fromEntries(entries);
                return lexer;
            }
        },
        {
            key: "parserFromBNF",
            value: function parserFromBNF(bnf) {
                var Plugin = this.constructor.Plugin, Parser = Plugin.Parser, rules = rulesFromBNF(bnf), parser = Parser.fromRules(rules);
                return parser;
            }
        },
        {
            key: "update",
            value: function update() {
                try {
                    var parseTree = null;
                    var plugin = this.getPlugin(), tokens = plugin.getTokens(), node = plugin.getNode();
                    if (node !== null) {
                        parseTree = node.asParseTree(tokens);
                    }
                    this.setTokens(tokens);
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
                    this.clearTokens();
                    this.clearParseTree();
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this_constructor = this.constructor, Plugin = _this_constructor.Plugin, firaCode = _this_constructor.firaCode, initialContent = _this_constructor.initialContent;
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_top.default, null, /*#__PURE__*/ React.createElement(_yapp.default, {
                    Plugin: Plugin,
                    firaCode: firaCode,
                    onCustomContentChange: this.contentChangeCustomHandler
                }, initialContent)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)))))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }))), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, bnf = Parser.bnf, entries = Lexer.entries, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setLexicalEntries(lexicalEntries);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29udGVudENoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgbGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgeyBQbHVnaW4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgeyBMZXhlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBwYXJzZXJGcm9tQk5GKGJuZikge1xuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIGxleGVyID0gdGhpcy5sZXhlckZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgcGFyc2VyID0gdGhpcy5wYXJzZXJGcm9tQk5GKGJuZiksXG4gICAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgICB0aGlzLnNldFlhcHBMZXhlcih5YXBwTGV4ZXIpO1xuXG4gICAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4oKSxcbiAgICAgICAgICAgIHRva2VucyA9IHBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIG5vZGUgPSBwbHVnaW4uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFBsdWdpbiwgZmlyYUNvZGUsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxZYXBwIFBsdWdpbj17UGx1Z2lufSBmaXJhQ29kZT17ZmlyYUNvZGV9IG9uQ3VzdG9tQ29udGVudENoYW5nZT17dGhpcy5jb250ZW50Q2hhbmdlQ3VzdG9tSGFuZGxlcn0gPlxuICAgICAgICAgICAgICAgIHtpbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYS8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsIlZpZXciLCJjb250ZW50Q2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImtleVVwSGFuZGxlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwibGV4ZXIiLCJsZXhlckZyb21FbnRyaWVzIiwicGFyc2VyIiwicGFyc2VyRnJvbUJORiIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlBsdWdpbiIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJQYXJzZXIiLCJydWxlcyIsImZyb21SdWxlcyIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsInRva2VucyIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsImluaXRpYWxDb250ZW50IiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJUb3BTaXplYWJsZURpdiIsIllhcHAiLCJvbkN1c3RvbUNvbnRlbnRDaGFuZ2UiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJNaWRkbGVTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJUb2tlbnNUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJpZ2h0U2l6ZWFibGVEaXYiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW9MQTs7O2VBQUE7OztvRUFsTHNCO29CQUVFOzRCQUNROzBCQUNtRTsyREFFbEY7aUVBQ007MERBQ0M7NkRBQ0c7MERBQ0E7MkRBQ0M7NERBQ0M7NkRBQ0M7Z0VBQ0E7cUVBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQSxlQUFpQkMsNkJBQWUsQ0FBaENEO0FBRVIsSUFBQSxBQUFNRSxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDhCQUE2QixTQUFD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