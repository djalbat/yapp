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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
            rules = bnfParser.rulesFromTokens(tokens);
        (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules);
        var _this$Plugin = this.Plugin,
            Lexer = _this$Plugin.Lexer,
            Parser = _this$Plugin.Parser,
            lexer = Lexer.fromEntries(entries),
            parser = Parser.fromRules(rules),
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
        editable: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiYm5mTGV4ZXIiLCJCTkZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiQk5GUGFyc2VyIiwiVmlldyIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwiUGx1Z2luIiwiTGV4ZXIiLCJQYXJzZXIiLCJsZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiZnJvbVJ1bGVzIiwieWFwcExleGVyIiwieWFwcFBhcnNlciIsInNldFlhcHBMZXhlciIsInNldFlhcHBQYXJzZXIiLCJ1cGRhdGVZYXBwIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInBhcnNlVHJlZSIsInBsdWdpbiIsImdldFBsdWdpbiIsImdldFRva2VucyIsIm5vZGUiLCJnZXROb2RlIiwiYXNQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiZHJhZ0hhbmRsZXIiLCJyZXNpemVZYXBwIiwiYmluZCIsImtleVVwSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwiaW5pdGlhbENvbnRlbnQiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFs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ZUFJRSxvQkFBQywwQkFBRDtBQUF3QixRQUFBLE9BQU8sRUFBRUc7QUFBakMsUUFKRixDQURGLENBREYsZUFTRSxvQkFBQyxzQkFBRCxPQVRGLGVBVUUsb0JBQUMsa0JBQUQscUJBQ0Usb0JBQUMsbUJBQUQscUJBQ0Usb0JBQUMsc0JBQUQsY0FERixlQUlFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFKRixDQURGLENBVkYsQ0FERixDQS9CRixDQUZNLENBQVI7QUF5REQ7OztpQ0FFWTtBQUNYLFdBQUtHLGFBQUw7QUFEVywwQkFHZSxLQUFLeEMsTUFIcEI7QUFBQSxVQUdIQyxLQUhHLGlCQUdIQSxLQUhHO0FBQUEsVUFHSUMsTUFISixpQkFHSUEsTUFISjtBQUFBLFVBSUhSLEdBSkcsR0FJS1EsTUFKTCxDQUlIUixHQUpHO0FBQUEsVUFLSEQsT0FMRyxHQUtTUSxLQUxULENBS0hSLE9BTEc7QUFBQSxVQU1MRixjQU5LLEdBTVlFLE9BTlosRUFNcUI7O0FBRWhDLFdBQUtnRCxNQUFMLENBQVkvQyxHQUFaO0FBRUEsV0FBS2dELGlCQUFMLENBQXVCbkQsY0FBdkI7QUFDRDs7OzhCQVFnQm9ELEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkosS0FBbEIsRUFBeUJDLFVBQXpCLENBQXBCOztBQUVBQyxNQUFBQSxXQUFXLENBQUNHLFVBQVo7QUFFQSxhQUFPSCxXQUFQO0FBQ0Q7Ozs7RUExS2dCQyxhOztnQkFBYjNELEksYUE4SmEsSzs7Z0JBOUpiQSxJLHVCQWdLdUI7QUFDekI4RCxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVOUQsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBUb3BTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvdG9wXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBNaWRkbGVTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbWlkZGxlXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgICBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgdG9rZW5zID0gYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpLFxuICAgICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgICBjb25zdCB7IExleGVyLCBQYXJzZXIgfSA9IHRoaXMuUGx1Z2luLFxuICAgICAgICAgICAgbGV4ZXIgPSBMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICAgIHBhcnNlciA9IFBhcnNlci5mcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgIHRvcFNpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRUb3BTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgIHlhcHBXaWR0aCA9IGxlZnRTaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICB5YXBwSGVpZ2h0ID0gdG9wU2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcFdpZHRoKHlhcHBXaWR0aCk7XG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4oKSxcbiAgICAgICAgICAgIHRva2VucyA9IHBsdWdpbi5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIG5vZGUgPSBwbHVnaW4uZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlcigpOyAvLy9cblxuICAgIHRoaXMucmVzaXplWWFwcCgpOyAgLy8vXG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFlhcHAgUGx1Z2luPXt0aGlzLlBsdWdpbn0gb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0gZWRpdGFibGUgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmluaXRpYWxDb250ZW50fVxuICAgICAgICAgICAgICA8L1lhcHA+XG4gICAgICAgICAgICA8L1RvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyIH0gPSB0aGlzLlBsdWdpbixcbiAgICAgICAgICB7IGJuZiB9ID0gUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgXG5gO1xuIl19