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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
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
                        firaCode: true,
                        deferRender: true
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiRWxlbWVudCIsIkJORkxleGVyIiwiQk5GUGFyc2VyIiwiUm93RGl2IiwiUm93c0RpdiIsIkNvbHVtbkRpdiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiWWFwcCIsIlN1YkhlYWRpbmciLCJDb2x1bW5zRGl2IiwiQk5GVGV4dGFyZWEiLCJUb2tlbnNUZXh0YXJlYSIsIlRvcFNpemVhYmxlRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiUmlnaHRTaXplYWJsZURpdiIsIk1pZGRsZVNpemVhYmxlRGl2IiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiVmlldyIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwia2V5VXBIYW5kbGVyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJ0b2tlbnMiLCJ0b2tlbnNGcm9tQk5GIiwicnVsZXMiLCJydWxlc0Zyb21Ub2tlbnMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiTGV4ZXIiLCJQYXJzZXIiLCJQbHVnaW4iLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZHJhZ0hhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwib25Db250ZW50Q2hhbmdlIiwiZWRpdGFibGUiLCJmaXJhQ29kZSIsImRlZmVyUmVuZGVyIiwiaW5pdGlhbENvbnRlbnQiLCJvbkRyYWciLCJvbktleVVwIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVmLEdBQU0sQ0FBTixLQUFNO0FBQ0wsR0FBYyxDQUFkLFlBQWM7QUFDYixHQUFlLENBQWYsYUFBZTtBQUNFLEdBQWEsQ0FBYixXQUFhO0FBQ2dCLEdBQXlCLENBQXpCLHNCQUF5QjtBQUVoRixHQUFRLENBQVIsS0FBUTtBQUNGLEdBQWMsQ0FBZCxXQUFjO0FBQ2QsR0FBZSxDQUFmLFFBQWU7QUFDZCxHQUFnQixDQUFoQixJQUFnQjtBQUNiLEdBQW1CLENBQW5CLE9BQW1CO0FBQ25CLEdBQW9CLENBQXBCLElBQW9CO0FBQ25CLEdBQXFCLENBQXJCLEtBQXFCO0FBQ3BCLEdBQXNCLENBQXRCLE1BQXNCO0FBQ3JCLEdBQXVCLENBQXZCLE9BQXVCO0FBQ3ZCLEdBQXNCLENBQXRCLFVBQXNCO0FBQ3BC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