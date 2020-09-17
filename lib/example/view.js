"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bnfLexer = _occamLexers.BNFLexer.fromNothing(),
    bnfParser = _occamParsers.BNFParser.fromNothing();

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "contentChangeHandler",
    value: function contentChangeHandler(event, element) {
      this.update();
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event, element) {
      try {
        var lexicalEntries = this.getLexicalEntries(),
            entries = lexicalEntries,
            ///
        bnf = this.getBNF(),
            tokens = bnfLexer.tokensFromBNF(bnf),
            rules = bnfParser.rulesFromTokens(tokens),
            ruleMap = (0, _rules.ruleMapFromRules)(rules);
        var startRule = (0, _rules.startRuleFromRules)(rules);
        startRule = (0, _occamGrammarUtilities.eliminateLeftRecursion)(startRule, ruleMap);
        var _this$Plugin = this.Plugin,
            Lexer = _this$Plugin.Lexer,
            Parser = _this$Plugin.Parser,
            lexer = Lexer.fromEntries(entries),
            parser = new Parser(startRule, ruleMap),
            yappLexer = lexer,
            yappParser = parser; ///

        this.setYappLexer(yappLexer);
        this.setYappParser(yappParser);
        this.updateYapp();
        this.update();
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "dragHandler",
    value: function dragHandler() {
      var leftSizeableDivWidth = this.getLeftSizeableDivWidth(),
          topSizeableDivHeight = this.getTopSizeableDivHeight(),
          yappWidth = leftSizeableDivWidth,
          ///
      yappHeight = topSizeableDivHeight; ///

      this.setYappWidth(yappWidth);
      this.setYappHeight(yappHeight);
    }
  }, {
    key: "update",
    value: function update() {
      try {
        var parseTree = null;
        var plugin = this.getPlugin(),
            tokens = plugin.getTokens(),
            node = plugin.getNode();

        if (node !== null) {
          (0, _occamGrammarUtilities.removeOrRenameIntermediateNodes)(node);
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
  }, {
    key: "didMount",
    value: function didMount() {
      this.update();
      this.dragHandler(); ///

      this.resizeYapp(); ///
    }
  }, {
    key: "willUnmount",
    value: function willUnmount() {///
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_columns["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        Plugin: this.Plugin,
        onContentChange: contentChangeHandler,
        resizeable: true,
        editable: true,
        firaCode: true
      }, this.initialContent)), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_middle["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null))), /*#__PURE__*/React.createElement(_horizontal["default"], null), /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null)))))), /*#__PURE__*/React.createElement(_vertical["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_horizontal["default"], null), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }))))))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var _this$Plugin2 = this.Plugin,
          Lexer = _this$Plugin2.Lexer,
          Parser = _this$Plugin2.Parser,
          bnf = Parser.bnf,
          entries = Lexer.entries,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setLexicalEntries(lexicalEntries);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise();
      return exampleView;
    }
  }]);

  return View;
}(_easy.Element);

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "view"
});

var _default = (0, _easyWithStyle["default"])(View)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiVmlldyIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsIlBsdWdpbiIsIkxleGVyIiwiUGFyc2VyIiwibGV4ZXIiLCJmcm9tRW50cmllcyIsInBhcnNlciIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxlZnRTaXplYWJsZURpdldpZHRoIiwiZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgiLCJ0b3BTaXplYWJsZURpdkhlaWdodCIsImdldFRvcFNpemVhYmxlRGl2SGVpZ2h0IiwieWFwcFdpZHRoIiwieWFwcEhlaWdodCIsInNldFlhcHBXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJwYXJzZVRyZWUiLCJwbHVnaW4iLCJnZXRQbHVnaW4iLCJnZXRUb2tlbnMiLCJub2RlIiwiZ2V0Tm9kZSIsImFzUGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsImRyYWdIYW5kbGVyIiwicmVzaXplWWFwcCIsImJpbmQiLCJrZXlVcEhhbmRsZXIiLCJjb250ZW50Q2hhbmdlSGFuZGxlciIsImluaXRpYWxDb250ZW50IiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNz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U0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVS9ELElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEJORkxleGVyIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgQk5GUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uLCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgVG9wU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWlkZGxlU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgICBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgICBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIGxldCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciB9ID0gdGhpcy5QbHVnaW4sXG4gICAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgcGFyc2VyID0gbmV3IFBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApLCAgLy8vXG4gICAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgICB0aGlzLnNldFlhcHBMZXhlcih5YXBwTGV4ZXIpO1xuXG4gICAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbigpLFxuICAgICAgICAgICAgdG9rZW5zID0gcGx1Z2luLmdldFRva2VucygpLFxuICAgICAgICAgICAgbm9kZSA9IHBsdWdpbi5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmRyYWdIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7ICAvLy9cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBQbHVnaW49e3RoaXMuUGx1Z2lufSBvbkNvbnRlbnRDaGFuZ2U9e2NvbnRlbnRDaGFuZ2VIYW5kbGVyfSByZXNpemVhYmxlIGVkaXRhYmxlIGZpcmFDb2RlID5cbiAgICAgICAgICAgICAgICB7dGhpcy5pbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgTGV4ZXIsIFBhcnNlciB9ID0gdGhpcy5QbHVnaW4sXG4gICAgICAgICAgeyBibmYgfSA9IFBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IExleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdfQ==