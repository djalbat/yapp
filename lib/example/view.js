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
                    var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, bnf = this.getBNF(), tokens = bnfLexer.tokensFromBNF(bnf);
                    var rules = bnfParser.rulesFromTokens(tokens);
                    rules = (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules);
                    var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, lexer = Lexer.fromEntries(entries), parser = Parser.fromRules(rules), yappLexer = lexer, yappParser = parser; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmV3cml0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBSb3dEaXYsIFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiwgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBUb3BTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvdG9wXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBNaWRkbGVTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbWlkZGxlXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgIHRvcFNpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRUb3BTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgIHlhcHBXaWR0aCA9IGxlZnRTaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICB5YXBwSGVpZ2h0ID0gdG9wU2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcFdpZHRoKHlhcHBXaWR0aCk7XG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTsgIC8vL1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgUGx1Z2luLCBmaXJhQ29kZSwgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFlhcHAgUGx1Z2luPXtQbHVnaW59IGZpcmFDb2RlPXtmaXJhQ29kZX0gb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0gPlxuICAgICAgICAgICAgICAgIHtpbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbImJuZkxleGVyIiwiQk5GTGV4ZXIiLCJmcm9tTm90aGluZyIsImJuZlBhcnNlciIsIkJORlBhcnNlciIsIlZpZXciLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImtleVVwSGFuZGxlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIlBsdWdpbiIsImNvbnN0cnVjdG9yIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbVJ1bGVzIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZHJhZ0hhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwicmV3cml0ZU5vZGVzIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsImluaXRpYWxDb250ZW50IiwiYmluZCIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiVG9wU2l6ZWFibGVEaXYiLCJZYXBwIiwib25Db250ZW50Q2hhbmdlIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwib25EcmFnIiwiUm93RGl2IiwiTWlkZGxlU2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiVG9rZW5zVGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBbU1iLFNBT0U7OztlQVBGLFFBT0U7OztrRUF4TW9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNMLGNBQWM7NEJBQ2IsZUFBZTtxQ0FDWSx5QkFBeUI7MEJBQ3FCLGFBQWE7eURBRS9GLFFBQVE7K0RBQ0YsY0FBYzt3REFDYixnQkFBZ0I7MkRBQ2IsbUJBQW1CO3dEQUNuQixvQkFBb0I7eURBQ25CLHFCQUFxQjswREFDcEIsc0JBQXNCOzJEQUNyQix1QkFBdUI7OERBQ3ZCLHNCQUFzQjttRUFDakIsMkJBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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