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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _easyLayout = require("easy-layout");
var _yapp = /*#__PURE__*/ _interopRequireDefault(require("./yapp"));
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _tokens = /*#__PURE__*/ _interopRequireDefault(require("./textarea/tokens"));
var _top = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/top"));
var _left = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/left"));
var _right = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/right"));
var _middle = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable/middle"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interopRequireDefault(require("./textarea/lexicalEntries"));
var _rules = require("../utilities/rules");
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "contentChangeHandler",
            value: function contentChangeHandler(event, element) {
                this.update();
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler(event, element) {
                try {
                    var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, bnf = this.getBNF(), tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), ruleMap = (0, _rules.ruleMapFromRules)(rules), startRule = (0, _rules.startRuleFromRules)(rules);
                    (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
                    var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, lexer = Lexer.fromEntries(entries), parser = new Parser(startRule, ruleMap), yappLexer = lexer, yappParser = parser; ///
                    this.setYappLexer(yappLexer);
                    this.setYappParser(yappParser);
                    this.updateYapp();
                    this.update();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        {
            key: "dragHandler",
            value: function dragHandler() {
                var leftSizeableDivWidth = this.getLeftSizeableDivWidth(), topSizeableDivHeight = this.getTopSizeableDivHeight(), yappWidth = leftSizeableDivWidth, yappHeight = topSizeableDivHeight; ///
                this.setYappWidth(yappWidth);
                this.setYappHeight(yappHeight);
                this.resizeYapp();
            }
        },
        {
            key: "update",
            value: function update() {
                try {
                    var parseTree = null;
                    var plugin = this.getPlugin(), tokens = plugin.getTokens(), node = plugin.getNode();
                    if (node !== null) {
                        (0, _occamGrammarUtilities.rewriteNodes)(node);
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
                this.dragHandler(); ///
                this.resizeYapp(); ///
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
                var _constructor = this.constructor, Plugin = _constructor.Plugin, firaCode = _constructor.firaCode, initialContent = _constructor.initialContent, dragHandler = this.dragHandler.bind(this), keyUpHandler = this.keyUpHandler.bind(this), contentChangeHandler = this.contentChangeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_top.default, null, /*#__PURE__*/ React.createElement(_yapp.default, {
                        Plugin: Plugin,
                        firaCode: firaCode,
                        onContentChange: contentChangeHandler
                    }, initialContent)), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, {
                        onDrag: dragHandler
                    }), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)))))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, {
                        onDrag: dragHandler
                    }), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }))))))
                ];
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBSb3dEaXYsIFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiwgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBUb3BTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvdG9wXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBNaWRkbGVTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbWlkZGxlXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgICBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgeyBMZXhlciwgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApLCAgLy8vXG4gICAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgICB0aGlzLnNldFlhcHBMZXhlcih5YXBwTGV4ZXIpO1xuXG4gICAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBwbHVnaW4uZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBub2RlID0gcGx1Z2luLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMucmVzaXplWWFwcCgpOyAgLy8vXG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBQbHVnaW4sIGZpcmFDb2RlLCBpbml0aWFsQ29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBQbHVnaW49e1BsdWdpbn0gZmlyYUNvZGU9e2ZpcmFDb2RlfSBvbkNvbnRlbnRDaGFuZ2U9e2NvbnRlbnRDaGFuZ2VIYW5kbGVyfSA+XG4gICAgICAgICAgICAgICAge2luaXRpYWxDb250ZW50fVxuICAgICAgICAgICAgICA8L1lhcHA+XG4gICAgICAgICAgICA8L1RvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBQbHVnaW4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgeyBMZXhlciwgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgeyBibmYgfSA9IFBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiVmlldyIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwia2V5VXBIYW5kbGVyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlTWFwIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZSIsInN0YXJ0UnVsZUZyb21SdWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJQbHVnaW4iLCJjb25zdHJ1Y3RvciIsIkxleGVyIiwiUGFyc2VyIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRyYWdIYW5kbGVyIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInJlc2l6ZVlhcHAiLCJwYXJzZVRyZWUiLCJwbHVnaW4iLCJnZXRQbHVnaW4iLCJnZXRUb2tlbnMiLCJub2RlIiwiZ2V0Tm9kZSIsInJld3JpdGVOb2RlcyIsImFzUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImJpbmQiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlRvcFNpemVhYmxlRGl2IiwiWWFwcCIsIm9uQ29udGVudENoYW5nZSIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIm9uRHJhZyIsIlJvd0RpdiIsIk1pZGRsZVNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXNNYixTQU9FOzs7ZUFQRixRQU9FOzs7a0VBM01vQixpQkFBaUI7b0JBRWYsTUFBTTsyQkFDTCxjQUFjOzRCQUNiLGVBQWU7cUNBQ1kseUJBQXlCOzBCQUNxQixhQUFhO3lEQUUvRixRQUFROytEQUNGLGNBQWM7d0RBQ2IsZ0JBQWdCOzJEQUNiLG1CQUFtQjt3REFD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