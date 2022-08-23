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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "contentChangeHandler", function(event, element) {
            _this.update();
        });
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            try {
                var Plugin = _this.constructor.Plugin, Lexer = Plugin.Lexer, Parser = Plugin.Parser, lexicalEntries = _this.getLexicalEntries(), bnf = _this.getBNF(), entries = lexicalEntries, rules = rulesFromBNF(bnf), lexer = Lexer.fromEntries(entries), parser = Parser.fromRules(rules), yappLexer = lexer, yappParser = parser; ///
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
    _createClass(View, [
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
                var _constructor = this.constructor, Plugin = _constructor.Plugin, firaCode = _constructor.firaCode, initialContent = _constructor.initialContent;
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_top.default, null, /*#__PURE__*/ React.createElement(_yapp.default, {
                        Plugin: Plugin,
                        firaCode: firaCode,
                        onContentChange: this.contentChangeHandler
                    }, initialContent)), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_middle.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null))), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)))))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcmV3cml0ZU5vZGVzLCBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2LCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9taWRkbGVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29udGVudENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgUGx1Z2luIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgeyBMZXhlciwgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgICBwYXJzZXIgPSBQYXJzZXIuZnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICAgIHlhcHBMZXhlciA9IGxleGVyLCAgLy8vXG4gICAgICAgICAgICB5YXBwUGFyc2VyID0gcGFyc2VyOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0WWFwcExleGVyKHlhcHBMZXhlcik7XG5cbiAgICAgIHRoaXMuc2V0WWFwcFBhcnNlcih5YXBwUGFyc2VyKTtcblxuICAgICAgdGhpcy51cGRhdGVZYXBwKCk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IFBsdWdpbiwgZmlyYUNvZGUsIGluaXRpYWxDb250ZW50IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBQbHVnaW49e1BsdWdpbn0gZmlyYUNvZGU9e2ZpcmFDb2RlfSBvbkNvbnRlbnRDaGFuZ2U9e3RoaXMuY29udGVudENoYW5nZUhhbmRsZXJ9ID5cbiAgICAgICAgICAgICAgICB7aW5pdGlhbENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvWWFwcD5cbiAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxNaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgICA8L01pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBQbHVnaW4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgeyBMZXhlciwgUGFyc2VyIH0gPSBQbHVnaW4sXG4gICAgICAgICAgeyBibmYgfSA9IFBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwiVmlldyIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwia2V5VXBIYW5kbGVyIiwiUGx1Z2luIiwiY29uc3RydWN0b3IiLCJMZXhlciIsIlBhcnNlciIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJlbnRyaWVzIiwicnVsZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbVJ1bGVzIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicGFyc2VUcmVlIiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwibm9kZSIsImdldE5vZGUiLCJyZXdyaXRlTm9kZXMiLCJhc1BhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsImZpcmFDb2RlIiwiaW5pdGlhbENvbnRlbnQiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlRvcFNpemVhYmxlRGl2IiwiWWFwcCIsIm9uQ29udGVudENoYW5nZSIsIkhvcml6b250YWxTcGxpdHRlckRpdiIsIlJvd0RpdiIsIk1pZGRsZVNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXdLYixTQU9FOzs7ZUFQRixRQU9FOzs7a0VBN0tvQixpQkFBaUI7b0JBRWYsTUFBTTtxQ0FDZ0IseUJBQXlCOzBCQUM0QixhQUFhO3lEQUUvRixRQUFROytEQUNGLGNBQWM7d0RBQ2IsZ0JBQWdCOzJEQUNiLG1CQUFtQjt3REFDbkIsb0JBQW9CO3lEQUNuQixxQkFBcUI7MERBQ3BCLHNCQUFzQjsyREFDckIsdUJBQXVCOzhEQUN2QixzQkFBc0I7bUVBQ2pCLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQU0sQUFBRUEsWUFBWSxHQUFLQyxzQkFBZSxnQkFBQSxDQUFoQ0QsWUFBWSxBQUFvQixBQUFDO0FBRXpDLElBQUEsQUFBTUUsSUFBSSxpQkFtSlAsQUFuSkg7OzthQUFNQSxJQUFJOzs7O1FBQ1JDLCtDQUFBQSxzQkFBb0IsRUFBRyxTQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztZQUN6QyxNQUFLQyxNQUFNLEVBQUUsQ0FBQztTQUNmLENBQUEsQ0FBQTtRQUVEQywrQ0FBQUEsY0FBWSxFQUFHLFNBQUNILEtBQUssRUFBRUMsT0FBTyxFQUFLO1lBQ2pDLElB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