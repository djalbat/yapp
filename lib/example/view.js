"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _easyLayout = require("easy-layout");
var _yapp = _interopRequireDefault(require("./yapp"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _tokens = _interopRequireDefault(require("./textarea/tokens"));
var _top = _interopRequireDefault(require("./div/sizeable/top"));
var _left = _interopRequireDefault(require("./div/sizeable/left"));
var _right = _interopRequireDefault(require("./div/sizeable/right"));
var _middle = _interopRequireDefault(require("./div/sizeable/middle"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
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
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWWFwcCBmcm9tIFwiLi95YXBwXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgVG9wU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWlkZGxlU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgc3RhcnRSdWxlID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCB7IExleGVyLCBQYXJzZXIgfSA9IHRoaXMuUGx1Z2luLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgIHRvcFNpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRUb3BTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgIHlhcHBXaWR0aCA9IGxlZnRTaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICB5YXBwSGVpZ2h0ID0gdG9wU2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcFdpZHRoKHlhcHBXaWR0aCk7XG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYWdIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7ICAvLy9cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFBsdWdpbiwgZmlyYUNvZGUsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxZYXBwIFBsdWdpbj17UGx1Z2lufSBmaXJhQ29kZT17ZmlyYUNvZGV9IG9uQ29udGVudENoYW5nZT17Y29udGVudENoYW5nZUhhbmRsZXJ9ID5cbiAgICAgICAgICAgICAgICB7aW5pdGlhbENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvWWFwcD5cbiAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxNaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L01pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IExleGVyLCBQYXJzZXIgfSA9IFBsdWdpbixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiVmlldyIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwia2V5VXBIYW5kbGVyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiUGx1Z2luIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZHJhZ0hhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsImZpcmFDb2RlIiwiaW5pdGlhbENvbnRlbnQiLCJiaW5kIiwib25Db250ZW50Q2hhbmdlIiwib25EcmFnIiwib25LZXlVcCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFZixHQUFNLENBQU4sS0FBTTtBQUNMLEdBQWMsQ0FBZCxZQUFjO0FBQ2IsR0FBZSxDQUFmLGFBQWU7QUFDK0IsR0FBeUIsQ0FBekIsc0JBQXlCO0FBQ0UsR0FBYSxDQUFiLFdBQWE7QUFFL0YsR0FBUSxDQUFSLEtBQVE7QUFDRixHQUFjLENBQWQsV0FBYztBQUNiLEdBQWdCLENBQWhCLElBQWdCO0FBQ2IsR0FBbUIsQ0FBbkIsT0FBbUI7QUFDbkIsR0FBb0IsQ0FBcEIsSUFBb0I7QUFDbkIsR0FBcUIsQ0FBckIsS0FBcUI7QUFDcEIsR0FBc0IsQ0FBdEIsTUFBc0I7QUFDckIsR0FBdUIsQ0FBdkIsT0FBdUI7QUFDdkIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDakIsR0FBMkIsQ0FBM0IsZUFBMkI7QUFFVCxHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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