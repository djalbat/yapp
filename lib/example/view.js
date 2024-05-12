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
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "customContentChangeHandler", function(event, element) {
            debugger;
            _this.update();
        });
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
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
                    onCustomContentChange: this.customContentChangeHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY3VzdG9tQ29udGVudENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBkZWJ1Z2dlclxuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGxleGVyRnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgTGV4ZXIgfSA9IFBsdWdpbixcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGxleGVyO1xuICB9XG5cbiAgcGFyc2VyRnJvbUJORihibmYpIHtcbiAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBsZXhlciA9IHRoaXMubGV4ZXJGcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIHBhcnNlciA9IHRoaXMucGFyc2VyRnJvbUJORihibmYpLFxuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBwbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBub2RlID0gcGx1Z2luLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBQbHVnaW4sIGZpcmFDb2RlLCBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBQbHVnaW49e1BsdWdpbn0gZmlyYUNvZGU9e2ZpcmFDb2RlfSBvbkN1c3RvbUNvbnRlbnRDaGFuZ2U9e3RoaXMuY3VzdG9tQ29udGVudENoYW5nZUhhbmRsZXJ9ID5cbiAgICAgICAgICAgICAgICB7aW5pdGlhbENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvWWFwcD5cbiAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxNaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IExleGVyLCBQYXJzZXIgfSA9IFBsdWdpbixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJWaWV3IiwiY3VzdG9tQ29udGVudENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJrZXlVcEhhbmRsZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImJuZiIsImdldEJORiIsImxleGVyIiwibGV4ZXJGcm9tRW50cmllcyIsInBhcnNlciIsInBhcnNlckZyb21CTkYiLCJ5YXBwTGV4ZXIiLCJ5YXBwUGFyc2VyIiwic2V0WWFwcExleGVyIiwic2V0WWFwcFBhcnNlciIsInVwZGF0ZVlhcHAiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJQYXJzZXIiLCJydWxlcyIsImZyb21SdWxlcyIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsInRva2VucyIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsImluaXRpYWxDb250ZW50IiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJUb3BTaXplYWJsZURpdiIsIllhcHAiLCJvbkN1c3RvbUNvbnRlbnRDaGFuZ2UiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJNaWRkbGVTaXplYWJsZURpdiIsIlN1YkhlYWRpbmciLCJUb2tlbnNUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJpZ2h0U2l6ZWFibGVEaXYiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNMQTs7O2VBQUE7OztvRUFwTHNCO29CQUVFOzRCQUNR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