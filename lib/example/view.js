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
      try {
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
      } catch (error) {
        console.log(error);
      }
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
      this.dragHandler(); ///

      this.contentChangeHandler(); ///
    }
  }, {
    key: "willUnmount",
    value: function willUnmount() {///
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
    value: function initialise(properties) {
      this.assignContext();
      var bnf = this.Parser.bnf,
          entries = this.Lexer.entries,
          lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setLexicalEntries(lexicalEntries);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbUJORiIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBhcnNlVHJlZSIsInlhcHBOb2RlIiwiZ2V0WWFwcE5vZGUiLCJ5YXBwVG9rZW5zIiwiZ2V0WWFwcFRva2VucyIsInRva2VucyIsIm5vZGUiLCJhc1BhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJncmFtbWFyQ2hhbmdlSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInJlc2l6ZVlhcHAiLCJkcmFnSGFuZGxlciIsInByb3BlcnRpZXMiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwibGFuZ3VhZ2UiLCJpbml0aWFsQ29udGVudCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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LENBSGUsQ0FLVzs7QUFFaEMsV0FBSytDLE1BQUwsQ0FBWTlDLEdBQVo7QUFFQSxXQUFLK0MsaUJBQUwsQ0FBdUJsRCxjQUF2QjtBQUNEOzs7OEJBUWdCbUQsSyxFQUFPUixVLEVBQVk7QUFDbEMsVUFBTVMsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QlIsVUFBekIsQ0FBcEI7O0FBRUFTLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1QlosVUFBdkI7QUFFQSxhQUFPUyxXQUFQO0FBQ0Q7Ozs7RUFyS2dCQyxhOztnQkFBYnRELEksYUF5SmEsSzs7Z0JBekpiQSxJLHVCQTJKdUI7QUFDekJ5RCxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVekQsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4uL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgVG9rZW5zVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgVG9wU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3RvcFwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgTWlkZGxlU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL21pZGRsZVwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdyYW1tYXJDaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgICBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgICAgeWFwcExleGVyID0gbGV4ZXIsICAvLy9cbiAgICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgICAgdGhpcy5zZXRZYXBwTGV4ZXIoeWFwcExleGVyKTtcblxuICAgICAgdGhpcy5zZXRZYXBwUGFyc2VyKHlhcHBQYXJzZXIpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgeWFwcE5vZGUgPSB0aGlzLmdldFlhcHBOb2RlKCksXG4gICAgICAgICAgICB5YXBwVG9rZW5zID0gdGhpcy5nZXRZYXBwVG9rZW5zKCksXG4gICAgICAgICAgICB0b2tlbnMgPSB5YXBwVG9rZW5zLCAgLy8vXG4gICAgICAgICAgICBub2RlID0geWFwcE5vZGU7ICAvLy9cblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmdyYW1tYXJDaGFuZ2VIYW5kbGVyKCk7ICAvLy9cblxuICAgIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSB0aGlzLmRyYWdIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlSGFuZGxlciA9IHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFlhcHAgbGFuZ3VhZ2U9e3RoaXMubGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9SZXNpemU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ29udGVudENoYW5nZT17Y29udGVudENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5pbml0aWFsQ29udGVudH1cbiAgICAgICAgICAgICAgPC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gdGhpcy5QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=