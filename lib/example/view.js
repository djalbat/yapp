"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _easyLayout = require("easy-layout");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _yapp = _interopRequireDefault(require("./yapp"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _columns = _interopRequireDefault(require("./div/columns"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _tokens = _interopRequireDefault(require("./textarea/tokens"));
var _top = _interopRequireDefault(require("./div/sizeable/top"));
var _left = _interopRequireDefault(require("./div/sizeable/left"));
var _right = _interopRequireDefault(require("./div/sizeable/right"));
var _middle = _interopRequireDefault(require("./div/sizeable/middle"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _horizontal = _interopRequireDefault(require("./div/splitter/horizontal"));
var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing();
var View = /*#__PURE__*/ function(Element1) {
    _inherits(View, Element1);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
                    var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, bnf = this.getBNF(), tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), ruleMap = (0, _rules).ruleMapFromRules(rules);
                    var startRule = (0, _rules).startRuleFromRules(rules);
                    startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                    var _Plugin = this.Plugin, Lexer = _Plugin.Lexer, Parser = _Plugin.Parser, lexer = Lexer.fromEntries(entries), parser = new Parser(startRule, ruleMap), yappLexer = lexer, yappParser = parser; ///
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
                        (0, _occamGrammarUtilities).removeOrRenameIntermediateNodes(node);
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
                var dragHandler = this.dragHandler.bind(this), keyUpHandler = this.keyUpHandler.bind(this), contentChangeHandler = this.contentChangeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_columns.default, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_top.default, null, /*#__PURE__*/ React.createElement(_yapp.default, {
                        Plugin: this.Plugin,
                        onContentChange: contentChangeHandler,
                        editable: true,
                        firaCode: true
                    }, this.initialContent)), /*#__PURE__*/ React.createElement(_horizontal.default, {
                        onDrag: dragHandler
                    }), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))), /*#__PURE__*/ React.createElement(_horizontal.default, null), /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)))))), /*#__PURE__*/ React.createElement(_vertical.default, {
                        onDrag: dragHandler
                    }), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_horizontal.default, null), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }))))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _Plugin = this.Plugin, Lexer = _Plugin.Lexer, Parser = _Plugin.Parser, bnf = Parser.bnf, entries = Lexer.entries, lexicalEntries = entries; ///
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
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBUb3BTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvdG9wXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBNaWRkbGVTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbWlkZGxlXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZiksXG4gICAgICAgICAgICBydWxlcyA9IGJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICAgIHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgY29uc3QgeyBMZXhlciwgUGFyc2VyIH0gPSB0aGlzLlBsdWdpbixcbiAgICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICAgIHlhcHBMZXhlciA9IGxleGVyLCAgLy8vXG4gICAgICAgICAgICB5YXBwUGFyc2VyID0gcGFyc2VyOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0WWFwcExleGVyKHlhcHBMZXhlcik7XG5cbiAgICAgIHRoaXMuc2V0WWFwcFBhcnNlcih5YXBwUGFyc2VyKTtcblxuICAgICAgdGhpcy51cGRhdGVZYXBwKCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBkcmFnSGFuZGxlcigpIHtcbiAgICBjb25zdCBsZWZ0U2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICB0b3BTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICB5YXBwV2lkdGggPSBsZWZ0U2l6ZWFibGVEaXZXaWR0aCwgLy8vXG4gICAgICAgICAgeWFwcEhlaWdodCA9IHRvcFNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLnNldFlhcHBXaWR0aCh5YXBwV2lkdGgpO1xuICAgIHRoaXMuc2V0WWFwcEhlaWdodCh5YXBwSGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplWWFwcCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4oKSxcbiAgICAgICAgICAgIHRva2VucyA9IHBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIG5vZGUgPSBwbHVnaW4uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMucmVzaXplWWFwcCgpOyAgLy8vXG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFlhcHAgUGx1Z2luPXt0aGlzLlBsdWdpbn0gb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0gZWRpdGFibGUgZmlyYUNvZGUgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmluaXRpYWxDb250ZW50fVxuICAgICAgICAgICAgICA8L1lhcHA+XG4gICAgICAgICAgICA8L1RvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyIH0gPSB0aGlzLlBsdWdpbixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDTCxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWUsQ0FBZixhQUFlO0FBQ0UsR0FBYSxDQUFiLFdBQWE7QUFDZ0IsR0FBeUIsQ0FBekIsc0JBQXlCO0FBRWhGLEdBQVEsQ0FBUixLQUFRO0FBQ0YsR0FBYyxDQUFkLFdBQWM7QUFDZCxHQUFlLENBQWYsUUFBZTtBQUNkLEdBQWdCLENBQWhCLElBQWdCO0FBQ2IsR0FBbUIsQ0FBbkIsT0FBbUI7QUFDbkIsR0FBb0IsQ0FBcEIsSUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsS0FBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsTUFBc0I7QUFDckIsR0FBdUIsQ0FBdkIsT0FBdUI7QUFDdkIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDcEIsR0FBeUIsQ0FBekIsU0FBeUI7QUFDdkIsR0FBMkIsQ0FBM0IsV0FBMkI7QUFDMUIsR0FBMkIsQ0FBM0IsZUFBMkI7QUFFVCxHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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