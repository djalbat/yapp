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
      this.keyUpHandler(); ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbUJORiIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBhcnNlVHJlZSIsInlhcHBOb2RlIiwiZ2V0WWFwcE5vZGUiLCJ5YXBwVG9rZW5zIiwiZ2V0WWFwcFRva2VucyIsInRva2VucyIsIm5vZGUiLCJhc1BhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJncmFtbWFyQ2hhbmdlSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInJlc2l6ZVlhcHAiLCJkcmFnSGFuZGxlciIsInByb3BlcnRpZXMiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwibGFuZ3VhZ2UiLCJpbml0aWFsQ29udGVudCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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RUEsV0FBSytDLGlCQUFMLENBQXVCbEQsY0FBdkI7QUFFQSxXQUFLNkMsWUFBTCxHQVhxQixDQVdDO0FBQ3ZCOzs7OEJBUWdCTSxLLEVBQU9SLFUsRUFBWTtBQUNsQyxVQUFNUyxXQUFXLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JILEtBQWxCLEVBQXlCUixVQUF6QixDQUFwQjs7QUFFQVMsTUFBQUEsV0FBVyxDQUFDRyxVQUFaLENBQXVCWixVQUF2QjtBQUVBLGFBQU9TLFdBQVA7QUFDRDs7OztFQTVKZ0JDLGE7O2dCQUFidEQsSSxhQWdKYSxLOztnQkFoSmJBLEksdUJBa0p1QjtBQUN6QnlELEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBYWQsK0JBQVV6RCxJQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBSb3dEaXYsIFJvd3NEaXYsIENvbHVtbkRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWWFwcCBmcm9tIFwiLi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS90b2tlbnNcIjtcbmltcG9ydCBUb3BTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvdG9wXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvcmlnaHRcIjtcbmltcG9ydCBNaWRkbGVTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGUvbWlkZGxlXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ3JhbW1hckNoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBsZXhlciA9IHRoaXMuTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgICBwYXJzZXIgPSB0aGlzLlBhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgICAgeWFwcFBhcnNlciA9IHBhcnNlcjsgIC8vL1xuXG4gICAgICB0aGlzLnNldFlhcHBMZXhlcih5YXBwTGV4ZXIpO1xuXG4gICAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlWWFwcCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29udGVudENoYW5nZUhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBjb25zdCB5YXBwTm9kZSA9IHRoaXMuZ2V0WWFwcE5vZGUoKSxcbiAgICAgICAgICAgIHlhcHBUb2tlbnMgPSB0aGlzLmdldFlhcHBUb2tlbnMoKSxcbiAgICAgICAgICAgIHRva2VucyA9IHlhcHBUb2tlbnMsICAvLy9cbiAgICAgICAgICAgIG5vZGUgPSB5YXBwTm9kZTsgIC8vL1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclRva2VucygpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuZ3JhbW1hckNoYW5nZUhhbmRsZXIoKTsgIC8vL1xuXG4gICAgdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBkcmFnSGFuZGxlcigpIHtcbiAgICBjb25zdCBsZWZ0U2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICB0b3BTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICB5YXBwV2lkdGggPSBsZWZ0U2l6ZWFibGVEaXZXaWR0aCwgLy8vXG4gICAgICAgICAgeWFwcEhlaWdodCA9IHRvcFNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLnNldFlhcHBXaWR0aCh5YXBwV2lkdGgpO1xuICAgIHRoaXMuc2V0WWFwcEhlaWdodCh5YXBwSGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplWWFwcCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY29udGVudENoYW5nZUhhbmRsZXIgPSB0aGlzLmNvbnRlbnRDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxZYXBwIGxhbmd1YWdlPXt0aGlzLmxhbmd1YWdlfSBhdXRvUmVzaXplPVwiZmFsc2VcIiBvbkNvbnRlbnRDaGFuZ2U9e2NvbnRlbnRDaGFuZ2VIYW5kbGVyfT57dGhpcy5pbml0aWFsQ29udGVudH08L1lhcHA+XG4gICAgICAgICAgICA8L1RvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8TWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgICAgPC9NaWRkbGVTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgYm5mIH0gPSB0aGlzLlBhcnNlcixcbiAgICAgICAgICB7IGVudHJpZXMgfSA9IHRoaXMuTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuYDtcbiJdfQ==