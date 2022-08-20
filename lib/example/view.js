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
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF;
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
                    var Plugin = this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, lexicalEntries = this.getLexicalEntries(), bnf = this.getBNF(), entries = lexicalEntries, rules = rulesFromBNF(bnf), lexer = Lexer.fromEntries(entries), parser = Parser.fromRules(rules), yappLexer = lexer, yappParser = parser; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcmV3cml0ZU5vZGVzLCBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9taWRkbGVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29udGVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgeyBMZXhlciwgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICAgIHlhcHBMZXhlciA9IGxleGVyLCAgLy8vXG4gICAgICAgICAgICB5YXBwUGFyc2VyID0gcGFyc2VyOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0WWFwcExleGVyKHlhcHBMZXhlcik7XG5cbiAgICAgIHRoaXMuc2V0WWFwcFBhcnNlcih5YXBwUGFyc2VyKTtcblxuICAgICAgdGhpcy51cGRhdGVZYXBwKCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBkcmFnSGFuZGxlcigpIHtcbiAgICBjb25zdCBsZWZ0U2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICB0b3BTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICB5YXBwV2lkdGggPSBsZWZ0U2l6ZWFibGVEaXZXaWR0aCwgLy8vXG4gICAgICAgICAgeWFwcEhlaWdodCA9IHRvcFNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLnNldFlhcHBXaWR0aCh5YXBwV2lkdGgpO1xuXG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTsgIC8vL1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgUGx1Z2luLCBmaXJhQ29kZSwgaW5pdGlhbENvbnRlbnQgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFlhcHAgUGx1Z2luPXtQbHVnaW59IGZpcmFDb2RlPXtmaXJhQ29kZX0gb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0gPlxuICAgICAgICAgICAgICAgIHtpbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgTGV4ZXIsIFBhcnNlciB9ID0gUGx1Z2luLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsIlZpZXciLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImtleVVwSGFuZGxlciIsIlBsdWdpbiIsImNvbnN0cnVjdG9yIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwiZW50cmllcyIsInJ1bGVzIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsImZyb21SdWxlcyIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRyYWdIYW5kbGVyIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInJlc2l6ZVlhcHAiLCJwYXJzZVRyZWUiLCJwbHVnaW4iLCJnZXRQbHVnaW4iLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJub2RlIiwiZ2V0Tm9kZSIsInJld3JpdGVOb2RlcyIsImFzUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiZmlyYUNvZGUiLCJpbml0aWFsQ29udGVudCIsImJpbmQiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlRvcFNpemVhYmxlRGl2IiwiWWFwcCIsIm9uQ29udGVudENoYW5nZSIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIm9uRHJhZyIsIlJvd0RpdiIsIk1pZGRsZVNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTRMYixTQU9FOzs7ZUFQRixRQU9FOzs7a0VBak1vQixpQkFBaUI7b0JBRWYsTUFBTTtxQ0FDZ0IseUJBQXlCOzBCQUM0QixhQUFhO3lEQUUvRixRQUFROytEQUNGLGNBQWM7d0RBQ2IsZ0JBQWdCOzJEQUNiLG1CQUFtQjt3REFDbkIsb0JBQW9CO3lEQUNuQixxQkFBcUI7MERBQ3BCLHNCQUFzQjsyREFDckIsdUJBQXVCOzhEQUN2QixzQkFBc0I7bUVBQ2pCLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQU0sQUFBRUEsWUFBWSxHQUFLQyxzQkFBZSxnQkFBQSxDQUFoQ0QsWUFBWSxBQUFvQixBQUFDO0FBRXpDLElBQUEsQUFBTUUsSUFBSSxpQkF1S1AsQUF2S0g7OzthQUFNQSxJQUFJOzs7Ozs7WUFDUkMsR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBcEJBLFNBQUFBLG9CQUFvQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDbkMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQzthQUNmOzs7WUFFREMsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLENBQUNILEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLElBQU0sQUFBRUcsTUFBTSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUEzQkQsTUFBTSxBQUFxQixFQUMzQkUsS0FBSyxHQUFhRixNQUFNLENBQXhCRSxLQUFLLEVBQUVDLE1BQU0sR0FBS0gsTUFBTSxDQUFqQkcsTUFBTSxFQUNmQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRSxFQUN6Q0MsR0FBRyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEVBQ25CQyxPQUFPLEdBQUdKLGNBQWMsRUFDeEJLLEtBQUssR0FBR2pCLFlBQVksQ0FBQ2MsR0FBRyxDQUFDLEVBQ3pCSSxLQUFLLEdBQUdSLEtBQUssQ0FBQ1MsV0FBVyxDQUFDSCxPQUFPLENBQUMsRUFDbENJLE1BQU0sR0FBR1QsTUFBTSxDQUFDVSxTQUFTLENBQUNKLEtBQUssQ0FBQyxFQUNoQ0ssU0FBUyxHQUFHSixLQUFLLEVBQ2pCSyxVQUFVLEdBQUdILE1BQU0sQUFBQyxFQUFFLEdBQUc7b0JBRS9CLElBQUksQ0FBQ0ksWUFBWSxDQUFDRixTQUFTLENBQUMsQ0FBQztvQkFFN0IsSUFBSSxDQUFDRyxhQUFhLENBQUNGLFVBQVUsQ0FBQyxDQUFDO29CQUUvQixJQUFJLENBQUNHLFVBQVUsRUFBRSxDQUFDO29CQUVsQixJQUFJLENBQUNwQixNQUFNLEVBQUUsQ0FBQztpQkFDZixDQUFDLE9BQU9xQixLQUFLLEVBQUU7b0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztpQkFDcEI7YUFDRjs7O1lBRURHLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1DLG9CQUFvQixHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUUsRUFDckRDLG9CQUFvQixHQUFHLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUUsRUFDckRDLFNBQVMsR0FBR0osb0JBQW9CLEVBQ2hDSyxVQUFVLEdBQUdILG9CQUFvQixBQUFDLEVBQUUsR0FBRztnQkFFN0MsSUFBSSxDQUFDSSxZQUFZLENBQUNGLFNBQVMsQ0FBQyxDQUFDO2dCQUU3QixJQUFJLENBQUNHLGFBQWEsQ0FBQ0YsVUFBVSxDQUFDLENBQUM7Z0JBRS9CLElBQUksQ0FBQ0csVUFBVSxFQUFFLENBQUM7YUFDbkI7OztZQUVEakMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBSTtvQkFDRixJQUFJa0MsU0FBUyxHQUFHLElBQUksQUFBQztvQkFFckIsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFLEVBQ3pCQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csU0FBUyxFQUFFLEVBQzNCQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLEFBQUM7b0JBRTlCLElBQUlELElBQUksS0FBSyxJQUFJLEVBQUU7d0JBQ2pCRSxJQUFBQSxzQkFBWSxhQUFBLEVBQUNGLElBQUksQ0FBQyxDQUFDO3dCQUVuQkwsU0FBUyxHQUFHSyxJQUFJLENBQUNHLFdBQVcsQ0FBQ0wsTUFBTSxDQUFDLENBQUM7cUJBQ3RDO29CQUVELElBQUksQ0FBQ00sU0FBUyxDQUFDTixNQUFNLENBQUMsQ0FBQztvQkFFdkIsSUFBSSxDQUFDTyxZQUFZLENBQUNWLFNBQVMsQ0FBQyxDQUFDO2lCQUM5QixDQUFDLE9BQU9iLEtBQUssRUFBRTtvQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO29CQUVuQixJQUFJLENBQUN3QixXQUFXLEVBQUUsQ0FBQztvQkFFbkIsSUFBSSxDQUFDQyxjQUFjLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjs7O1lBRURDLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQUksQ0FBQy9DLE1BQU0sRUFBRSxDQUFDO2dCQUVkLElBQUksQ0FBQ3dCLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRztnQkFFdkIsSUFBSSxDQUFDUyxVQUFVLEVBQUUsQ0FBQyxDQUFFLEdBQUc7YUFDeEI7OztZQUVEZSxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztZQUNaLEdBQUc7YUFDSjs7O1lBRURDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLElBQTZDLFlBQWdCLEdBQWhCLElBQUksQ0FBQzlDLFdBQVcsRUFBckRELE1BQU0sR0FBK0IsWUFBZ0IsQ0FBckRBLE1BQU0sRUFBRWdELFFBQVEsR0FBcUIsWUFBZ0IsQ0FBN0NBLFFBQVEsRUFBRUMsY0FBYyxHQUFLLFlBQWdCLENBQW5DQSxjQUFjLEVBQ2xDM0IsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDNEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN6Q25ELFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ21ELElBQUksQ0FBQyxJQUFJLENBQUMsRUFDM0N2RCxvQkFBb0IsR0FBRyxJQUFJLENBQUNBLG9CQUFvQixDQUFDdUQsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO2dCQUVsRSxPQUFRO2tDQUVOLG9CQUFDQyxXQUFVLFdBQUEsc0JBQ1Qsb0JBQUNDLEtBQWUsUUFBQSxzQkFDZCxvQkFBQ0MsV0FBTyxRQUFBLHNCQUNOLG9CQUFDQyxJQUFjLFFBQUEsc0JBQ2Isb0JBQUNDLEtBQUksUUFBQTt3QkFBQ3ZELE1BQU0sRUFBRUEsTUFBTTt3QkFBRWdELFFBQVEsRUFBRUEsUUFBUTt3QkFBRVEsZUFBZSxFQUFFN0Qsb0JBQW9CO3VCQUM1RXNELGNBQWMsQ0FDVixDQUNRLGdCQUNqQixvQkFBQ1EsV0FBcUIsc0JBQUE7d0JBQUNDLE1BQU0sRUFBRXBDLFdBQVc7c0JBQUcsZ0JBQzdDLG9CQUFDcUMsV0FBTSxPQUFBLHNCQUNMLG9CQUFDTixXQUFPLFFBQUEsc0JBQ04sb0JBQUNPLE9BQWlCLFFBQUEsc0JBQ2hCLG9CQUFDUCxXQUFPLFFBQUEsc0JBQ04sb0JBQUNRLFdBQVUsUUFBQSxRQUFDLFFBRVosQ0FBYSxnQkFDYixvQkFBQ0MsT0FBYyxRQUFBLE9BQUcsQ0FDVixDQUNRLGdCQUNwQixvQkFBQ0wsV0FBcUIsc0JBQUEsT0FBRyxnQkFDekIsb0JBQUNKLFdBQU8sUUFBQSxzQkFDTixvQkFBQ1EsV0FBVSxRQUFBLFFBQUMsWUFFWixDQUFhLGdCQUNiLG9CQUFDRSxVQUFpQixRQUFBLE9BQUcsQ0FDYixDQUNGLENBQ0gsQ0FDRCxDQUNNLGdCQUNsQixvQkFBQ0MsV0FBbUIsb0JBQUE7d0JBQUNOLE1BQU0sRUFBRXBDLFdBQVc7c0JBQUcsZ0JBQzNDLG9CQUFDMkMsV0FBUyxVQUFBLHNCQUNSLG9CQUFDWixXQUFPLFFBQUEsc0JBQ04sb0JBQUNhLE1BQWdCLFFBQUEsc0JBQ2Ysb0JBQUNiLFdBQU8sUUFBQSxzQkFDTixvQkFBQ1EsV0FBVSxRQUFBLFFBQUMsaUJBRVosQ0FBYSxnQkFDYixvQkFBQ00sZUFBc0IsUUFBQTt3QkFBQ0MsT0FBTyxFQUFFckUsWUFBWTtzQkFBSSxDQUN6QyxDQUNPLGdCQUNuQixvQkFBQzBELFdBQXFCLHNCQUFBLE9BQUcsZ0JBQ3pCLG9CQUFDRSxXQUFNLE9BQUEsc0JBQ0wsb0JBQUNOLFdBQU8sUUFBQSxzQkFDTixvQkFBQ1EsV0FBVSxRQUFBLFFBQUMsS0FFWixDQUFhLGdCQUNiLG9CQUFDUSxJQUFXLFFBQUE7d0JBQUNELE9BQU8sRUFBRXJFLFlBQVk7c0JBQUksQ0FDOUIsQ0FDSCxDQUNELENBQ0EsQ0FDRDtpQkFFZCxDQUFFO2FBQ0o7OztZQUVEdUUsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsSUFBTSxBQUFFdkUsTUFBTSxHQUFLLElBQUksQ0FBQ0MsV0FBVyxDQUEzQkQsTUFBTSxBQUFxQixFQUMzQkUsS0FBSyxHQUFhRixNQUFNLENBQXhCRSxLQUFLLEVBQUVDLE1BQU0sR0FBS0gsTUFBTSxDQUFqQkcsTUFBTSxFQUNmLEFBQUVHLEdBQUcsR0FBS0gsTUFBTSxDQUFkRyxHQUFHLEFBQVcsRUFDaEIsQUFBRUUsT0FBTyxHQUFLTixLQUFLLENBQWpCTSxPQUFPLEFBQVUsRUFDbkJKLGNBQWMsR0FBR0ksT0FBTyxBQUFDLEVBQUMsR0FBRztnQkFFbkMsSUFBSSxDQUFDZ0UsTUFBTSxDQUFDbEUsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLElBQUksQ0FBQ21FLGlCQUFpQixDQUFDckUsY0FBYyxDQUFDLENBQUM7YUFDeEM7Ozs7Q0FPRixrQkFyS2tCc0UsS0FBTyxRQUFBLEVBcUt6QjtBQUxDLGdCQWhLSWhGLElBQUksRUFnS0RpRixTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQWxLSWpGLElBQUksRUFrS0RrRixtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztJQUdKLFFBT0UsR0FQYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNwRixJQUFJLENBQUMifQ==