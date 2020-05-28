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

var _javascript = _interopRequireDefault(require("../lexer/javascript"));

var _javascript2 = _interopRequireDefault(require("../parser/javascript"));

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
    var _this;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Lexer", _javascript["default"]);

    _defineProperty(_assertThisInitialized(_this), "Parser", _javascript2["default"]);

    return _this;
  }

  _createClass(View, [{
    key: "getTokens",
    ///
    value: function getTokens() {
      var lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      lexer = this.Lexer.fromEntries(entries),
          yappContent = this.getYappContent(),
          content = yappContent,
          ///
      tokens = lexer.tokenise(content);
      return tokens;
    }
  }, {
    key: "getParseTree",
    value: function getParseTree(tokens) {
      var parseTree = null;
      var bnf = this.getBNF(),
          parser = this.Parser.fromBNF(bnf),
          node = parser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "contentChangeHandler",
    value: function contentChangeHandler() {
      try {
        var tokens = this.getTokens(),
            parseTree = this.getParseTree(tokens);
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
      this.contentChangeHandler(); ///
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
      this.dragHandler();
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var className = properties.className,
          dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          contentChangeHandler = this.contentChangeHandler.bind(this);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " view")
      }, /*#__PURE__*/React.createElement(_columns["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        autoResize: "false",
        onContentChange: contentChangeHandler
      }, "\"use strict\";\n\nimport \"juxtapose\";\n")), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))), /*#__PURE__*/React.createElement(_vertical["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_horizontal["default"], null), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIkphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImxleGVyIiwiTGV4ZXIiLCJmcm9tRW50cmllcyIsInlhcHBDb250ZW50IiwiZ2V0WWFwcENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJwYXJzZXIiLCJQYXJzZXIiLCJmcm9tQk5GIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJnZXRUb2tlbnMiLCJnZXRQYXJzZVRyZWUiLCJzZXRUb2tlbnMiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRva2VucyIsImNsZWFyUGFyc2VUcmVlIiwiY29udGVudENoYW5nZUhhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsImRyYWdIYW5kbGVyIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJpbmQiLCJrZXlVcEhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwic2V0Qk5GIiwic2V0TGV4aWNhbEVudHJpZXMiLCJDbGFzcyIsImV4YW1wbGVWaWV3IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7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QUF1QlgsVUFBdkI7QUFFQSxhQUFPUSxXQUFQO0FBQ0Q7Ozs7RUF6SmdCQyxhOztnQkFBYnBELEksYUE2SWEsSzs7Z0JBN0liQSxJLHVCQStJdUI7QUFDekI0QyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVNUMsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4uL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgVG9wU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRMZXhlciBmcm9tIFwiLi4vbGV4ZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IEphdmFTY3JpcHRQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9qYXZhc2NyaXB0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IEhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBMZXhlciA9IEphdmFTY3JpcHRMZXhlcjsgIC8vL1xuXG4gIFBhcnNlciA9IEphdmFTY3JpcHRQYXJzZXI7ICAvLy9cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgeWFwcENvbnRlbnQgPSB0aGlzLmdldFlhcHBDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHlhcHBDb250ZW50LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY29udGVudENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKCkge1xuICAgIGNvbnN0IGxlZnRTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgIHRvcFNpemVhYmxlRGl2SGVpZ2h0ID0gdGhpcy5nZXRUb3BTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgIHlhcHBXaWR0aCA9IGxlZnRTaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICB5YXBwSGVpZ2h0ID0gdG9wU2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcFdpZHRoKHlhcHBXaWR0aCk7XG4gICAgdGhpcy5zZXRZYXBwSGVpZ2h0KHlhcHBIZWlnaHQpO1xuXG4gICAgdGhpcy5yZXNpemVZYXBwKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8WWFwcCBhdXRvUmVzaXplPVwiZmFsc2VcIiBvbkNvbnRlbnRDaGFuZ2U9e2NvbnRlbnRDaGFuZ2VIYW5kbGVyfT57YFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcbmB9PC9ZYXBwPlxuICAgICAgICAgICAgICA8L1RvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBUb2tlbnNcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gdGhpcy5QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=