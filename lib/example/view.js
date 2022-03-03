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
                // try {
                var lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, bnf = this.getBNF(), tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), ruleMap = (0, _rules).ruleMapFromRules(rules);
                var startRule = (0, _rules).startRuleFromRules(rules);
                startRule = (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, lexer = Lexer.fromEntries(entries), parser = new Parser(startRule, ruleMap), yappLexer = lexer, yappParser = parser; ///
                this.setYappLexer(yappLexer);
                this.setYappParser(yappParser);
                this.updateYapp();
                this.update();
            // } catch (error) {
            //   console.log(error);
            // }
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
                // try {
                var parseTree = null;
                var plugin = this.getPlugin(), tokens = plugin.getTokens(), node = plugin.getNode();
                if (node !== null) {
                    (0, _occamGrammarUtilities).removeOrRenameIntermediateNodes(node);
                    parseTree = node.asParseTree(tokens);
                }
                this.setTokens(tokens);
                this.setParseTree(parseTree);
            // } catch (error) {
            //   console.log(error);
            //
            //   this.clearTokens();
            //
            //   this.clearParseTree();
            // }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWWFwcCBmcm9tIFwiLi95YXBwXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgVG9wU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWlkZGxlU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjb250ZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIHJ1bGVzID0gYm5mUGFyc2VyLnJ1bGVzRnJvbVRva2Vucyh0b2tlbnMpLFxuICAgICAgICAgICAgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgc3RhcnRSdWxlID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgIHRvcFNpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRUb3BTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgIHlhcHBXaWR0aCA9IGxlZnRTaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICB5YXBwSGVpZ2h0ID0gdG9wU2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcFdpZHRoKHlhcHBXaWR0aCk7XG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYWdIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7ICAvLy9cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFBsdWdpbiwgZmlyYUNvZGUsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxZYXBwIFBsdWdpbj17UGx1Z2lufSBmaXJhQ29kZT17ZmlyYUNvZGV9IG9uQ29udGVudENoYW5nZT17Y29udGVudENoYW5nZUhhbmRsZXJ9ID5cbiAgICAgICAgICAgICAgICB7aW5pdGlhbENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvWWFwcD5cbiAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxNaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L01pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IFBsdWdpbiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IExleGVyLCBQYXJzZXIgfSA9IFBsdWdpbixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJibmZMZXhlciIsIkJORkxleGVyIiwiZnJvbU5vdGhpbmciLCJibmZQYXJzZXIiLCJCTkZQYXJzZXIiLCJWaWV3IiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJrZXlVcEhhbmRsZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImJuZiIsImdldEJORiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsInJ1bGVNYXAiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlIiwic3RhcnRSdWxlRnJvbVJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIlBsdWdpbiIsImNvbnN0cnVjdG9yIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZHJhZ0hhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsImFzUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJmaXJhQ29kZSIsImluaXRpYWxDb250ZW50IiwiYmluZCIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiVG9wU2l6ZWFibGVEaXYiLCJZYXBwIiwib25Db250ZW50Q2hhbmdlIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwib25EcmFnIiwiUm93RGl2IiwiTWlkZGxlU2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiVG9rZW5zVGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFUyxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBQ0wsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUMr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