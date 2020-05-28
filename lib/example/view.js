"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _yapp = _interopRequireDefault(require("../yapp"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _columns = _interopRequireDefault(require("./div/columns"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _tokens = _interopRequireDefault(require("./textarea/tokens"));

var _top = _interopRequireDefault(require("./div/sizeable/top"));

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/sizeable/right"));

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "grammarChangeHandler",
    value: function grammarChangeHandler() {
      var lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      bnf = this.getBNF(),
          lexer = this.Lexer.fromEntries(entries),
          parser = this.Parser.fromBNF(bnf),
          yappLexer = lexer,
          ///
      yappParser = parser; ///

      this.setYappLexer(yappLexer);
      this.setYappParser(yappParser);
      this.updateYapp();
    }
  }, {
    key: "contentChangeHandler",
    value: function contentChangeHandler() {
      try {
        var parseTree = null;
        var yappNode = this.getYappNode(),
            yappTokens = this.getYappTokens(),
            tokens = yappTokens,
            ///
        node = yappNode; ///

        if (node !== null) {
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
    key: "keyUpHandler",
    value: function keyUpHandler() {
      this.grammarChangeHandler(); ///
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
      this.resizeYapp();
    }
  }, {
    key: "didMount",
    value: function didMount() {
      this.dragHandler(); ///
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);
      return [/*#__PURE__*/React.createElement(_columns["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        language: this.language,
        autoResize: "false",
        onContentChange: contentChangeHandler
      }, this.initialContent)), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))), /*#__PURE__*/React.createElement(_vertical["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_horizontal["default"], null), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }))))))];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
      var bnf = this.Parser.bnf,
          entries = this.Lexer.entries,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setLexicalEntries(lexicalEntries);
      this.grammarChangeHandler(); ///

      this.contentChangeHandler(); ///
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var exampleView = _easy.Element.fromClass(Class, properties);

      exampleView.initialise(properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbUJORiIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsInBhcnNlVHJlZSIsInlhcHBOb2RlIiwiZ2V0WWFwcE5vZGUiLCJ5YXBwVG9rZW5zIiwiZ2V0WWFwcFRva2VucyIsInRva2VucyIsIm5vZGUiLCJhc1BhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJncmFtbWFyQ2hhbmdlSGFuZGxlciIsImxlZnRTaXplYWJsZURpdldpZHRoIiwiZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgiLCJ0b3BTaXplYWJsZURpdkhlaWdodCIsImdldFRvcFNpemVhYmxlRGl2SGVpZ2h0IiwieWFwcFdpZHRoIiwieWFwcEhlaWdodCIsInNldFlhcHBXaWR0aCIsInNldFlhcHBIZWlnaHQiLCJyZXNpemVZYXBwIiwiZHJhZ0hhbmRsZXIiLCJwcm9wZXJ0aWVzIiwiYmluZCIsImtleVVwSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwibGFuZ3VhZ2UiLCJpbml0aWFsQ29udGVudCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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QVosQ0FBdUJiLFVBQXZCO0FBRUEsYUFBT1UsV0FBUDtBQUNEOzs7O0VBakpnQkMsYTs7Z0JBQWJ0RCxJLGFBcUlhLEs7O2dCQXJJYkEsSSx1QkF1SXVCO0FBQ3pCeUQsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVXpELElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuLi95YXBwXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi9kaXYvY29sdW1uc1wiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdyYW1tYXJDaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHlhcHBMZXhlciA9IGxleGVyLCAgLy8vXG4gICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgIHRoaXMuc2V0WWFwcFBhcnNlcih5YXBwUGFyc2VyKTtcblxuICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuICB9XG5cbiAgY29udGVudENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCB5YXBwTm9kZSA9IHRoaXMuZ2V0WWFwcE5vZGUoKSxcbiAgICAgICAgICAgIHlhcHBUb2tlbnMgPSB0aGlzLmdldFlhcHBUb2tlbnMoKSxcbiAgICAgICAgICAgIHRva2VucyA9IHlhcHBUb2tlbnMsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSB5YXBwTm9kZTsgIC8vL1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuZ3JhbW1hckNoYW5nZUhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBsYW5ndWFnZT17dGhpcy5sYW5ndWFnZX0gYXV0b1Jlc2l6ZT1cImZhbHNlXCIgb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0+e3RoaXMuaW5pdGlhbENvbnRlbnR9PC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSB0aGlzLlBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IHRoaXMuTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuZ3JhbW1hckNoYW5nZUhhbmRsZXIoKTsgIC8vL1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=