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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiYm5mIiwiZ2V0Qk5GIiwibGV4ZXIiLCJMZXhlciIsImZyb21FbnRyaWVzIiwicGFyc2VyIiwiUGFyc2VyIiwiZnJvbUJORiIsInlhcHBMZXhlciIsInlhcHBQYXJzZXIiLCJzZXRZYXBwTGV4ZXIiLCJzZXRZYXBwUGFyc2VyIiwidXBkYXRlWWFwcCIsInBhcnNlVHJlZSIsInlhcHBOb2RlIiwiZ2V0WWFwcE5vZGUiLCJ5YXBwVG9rZW5zIiwiZ2V0WWFwcFRva2VucyIsInRva2VucyIsIm5vZGUiLCJhc1BhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyVG9rZW5zIiwiY2xlYXJQYXJzZVRyZWUiLCJncmFtbWFyQ2hhbmdlSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VIYW5kbGVyIiwibGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRMZWZ0U2l6ZWFibGVEaXZXaWR0aCIsInRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJ5YXBwV2lkdGgiLCJ5YXBwSGVpZ2h0Iiwic2V0WWFwcFdpZHRoIiwic2V0WWFwcEhlaWdodCIsInJlc2l6ZVlhcHAiLCJkcmFnSGFuZGxlciIsInByb3BlcnRpZXMiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwibGFuZ3VhZ2UiLCJpbml0aWFsQ29udGVudCIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRMZXhpY2FsRW50cmllcyIsIkNsYXNzIiwiZXhhbXBsZVZpZXciLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7OzJDQUNtQjtBQUNyQixVQUFNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFBdkI7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLGNBRGhCO0FBQUEsVUFDZ0M7QUFDMUJHLE1BQUFBLEdBQUcsR0FBRyxLQUFLQyxNQUFMLEVBRlo7QUFBQSxVQUdNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxXQUFYLENBQXVCTCxPQUF2QixDQUhkO0FBQUEsVUFJTU0sTUFBTSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUMsT0FBWixDQUFvQlAsR0FBcEIsQ0FKZjtBQUFBLFVBS01RLFNBQVMsR0FBR04sS0FMbEI7QUFBQSxVQUswQjtBQUNwQk8sTUFBQUEsVUFBVSxHQUFHSixNQU5uQixDQURxQixDQU9POztBQUU1QixXQUFLSyxZQUFMLENBQWtCRixTQUFsQjtBQUVBLFdBQUtHLGFBQUwsQ0FBbUJGLFVBQW5CO0FBRUEsV0FBS0csVUFBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQUk7QUFDRixZQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxZQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFlBQ01DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBRG5CO0FBQUEsWUFFTUMsTUFBTSxHQUFHRixVQUZmO0FBQUEsWUFFNEI7QUFDdEJHLFFBQUFBLElBQUksR0FBR0wsUUFIYixDQUhFLENBTXNCOztBQUV4QixZQUFJSyxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQk4sVUFBQUEsU0FBUyxHQUFHTSxJQUFJLENBQUNDLFdBQUwsQ0FBaUJGLE1BQWpCLENBQVo7QUFDRDs7QUFFRCxhQUFLRyxTQUFMLENBQWVILE1BQWY7QUFFQSxhQUFLSSxZQUFMLENBQWtCVCxTQUFsQjtBQUNELE9BZkQsQ0FlRSxPQUFPVSxLQUFQLEVBQWM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxhQUFLRyxXQUFMO0FBRUEsYUFBS0MsY0FBTDtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLFdBQUtDLG9CQUFMLEdBRGEsQ0FDaUI7O0FBRTlCLFdBQUtDLG9CQUFMLEdBSGEsQ0FHaUI7QUFDL0I7OztrQ0FFYTtBQUNaLFVBQU1DLG9CQUFvQixHQUFHLEtBQUtDLHVCQUFMLEVBQTdCO0FBQUEsVUFDTUMsb0JBQW9CLEdBQUcsS0FBS0MsdUJBQUwsRUFEN0I7QUFBQSxVQUVNQyxTQUFTLEdBQUdKLG9CQUZsQjtBQUFBLFVBRXdDO0FBQ2xDSyxNQUFBQSxVQUFVLEdBQUdILG9CQUhuQixDQURZLENBSThCOztBQUUxQyxXQUFLSSxZQUFMLENBQWtCRixTQUFsQjtBQUNBLFdBQUtHLGFBQUwsQ0FBbUJGLFVBQW5CO0FBRUEsV0FBS0csVUFBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLQyxXQUFMLEdBRFMsQ0FDVztBQUNyQjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUQsV0FBVyxHQUFHLEtBQUtBLFdBQUwsQ0FBaUJFLElBQWpCLENBQXNCLElBQXRCLENBQXBCO0FBQUEsVUFDTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBRHJCO0FBQUEsVUFFTVosb0JBQW9CLEdBQUcsS0FBS0Esb0JBQUwsQ0FBMEJZLElBQTFCLENBQStCLElBQS9CLENBRjdCO0FBSUEsYUFBUSxjQUVOLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLGdCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLGVBQUQscUJBQ0Usb0JBQUMsZ0JBQUQ7QUFBTSxRQUFBLFFBQVEsRUFBRSxLQUFLRSxRQUFyQjtBQUErQixRQUFBLFVBQVUsRUFBQyxPQUExQztBQUFrRCxRQUFBLGVBQWUsRUFBRWQ7QUFBbkUsU0FBMEYsS0FBS2UsY0FBL0YsQ0FERixDQURGLGVBSUUsb0JBQUMsc0JBQUQ7QUFBdUIsUUFBQSxNQUFNLEVBQUVMO0FBQS9CLFFBSkYsZUFLRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxtQkFBRCxxQkFDRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxtQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxpQkFERixlQUlFLG9CQUFDLGtCQUFELE9BSkYsQ0FERixDQURGLGVBU0Usb0JBQUMsc0JBQUQsT0FURixlQVVFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELHFCQURGLGVBSUUsb0JBQUMscUJBQUQsT0FKRixDQVZGLENBREYsQ0FMRixDQURGLENBREYsZUE0QkUsb0JBQUMsb0JBQUQ7QUFBcUIsUUFBQSxNQUFNLEVBQUVBO0FBQTdCLFFBNUJGLGVBNkJFLG9CQUFDLHFCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLGlCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELDBCQURGLGVBSUUsb0JBQUMsMEJBQUQ7QUFBd0IsUUFBQSxPQUFPLEVBQUVHO0FBQWpDLFFBSkYsQ0FERixDQURGLGVBU0Usb0JBQUMsc0JBQUQsT0FURixlQVVFLG9CQUFDLGtCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELGNBREYsZUFJRSxvQkFBQyxlQUFEO0FBQWEsUUFBQSxPQUFPLEVBQUVBO0FBQXRCLFFBSkYsQ0FERixDQVZGLENBREYsQ0E3QkYsQ0FGTSxDQUFSO0FBdUREOzs7K0JBRVVGLFUsRUFBWTtBQUNyQixXQUFLSyxhQUFMO0FBRU0sVUFBRTdDLEdBQUYsR0FBVSxLQUFLTSxNQUFmLENBQUVOLEdBQUY7QUFBQSxVQUNFRCxPQURGLEdBQ2MsS0FBS0ksS0FEbkIsQ0FDRUosT0FERjtBQUFBLFVBRUFGLGNBRkEsR0FFaUJFLE9BRmpCLENBSGUsQ0FLVzs7QUFFaEMsV0FBSytDLE1BQUwsQ0FBWTlDLEdBQVo7QUFFQSxXQUFLK0MsaUJBQUwsQ0FBdUJsRCxjQUF2QjtBQUVBLFdBQUs2QyxZQUFMLEdBWHFCLENBV0M7QUFDdkI7Ozs4QkFRZ0JNLEssRUFBT1IsVSxFQUFZO0FBQ2xDLFVBQU1TLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJSLFVBQXpCLENBQXBCOztBQUVBUyxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJaLFVBQXZCO0FBRUEsYUFBT1MsV0FBUDtBQUNEOzs7O0VBeEpnQkMsYTs7Z0JBQWJ0RCxJLGFBNElhLEs7O2dCQTVJYkEsSSx1QkE4SXVCO0FBQ3pCeUQsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVXpELElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuLi95YXBwXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi9kaXYvY29sdW1uc1wiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1pZGRsZVNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9taWRkbGVcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IEhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBncmFtbWFyQ2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICB5YXBwTGV4ZXIgPSBsZXhlciwgIC8vL1xuICAgICAgICAgIHlhcHBQYXJzZXIgPSBwYXJzZXI7ICAvLy9cblxuICAgIHRoaXMuc2V0WWFwcExleGVyKHlhcHBMZXhlcik7XG5cbiAgICB0aGlzLnNldFlhcHBQYXJzZXIoeWFwcFBhcnNlcik7XG5cbiAgICB0aGlzLnVwZGF0ZVlhcHAoKTtcbiAgfVxuXG4gIGNvbnRlbnRDaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgY29uc3QgeWFwcE5vZGUgPSB0aGlzLmdldFlhcHBOb2RlKCksXG4gICAgICAgICAgICB5YXBwVG9rZW5zID0gdGhpcy5nZXRZYXBwVG9rZW5zKCksXG4gICAgICAgICAgICB0b2tlbnMgPSB5YXBwVG9rZW5zLCAgLy8vXG4gICAgICAgICAgICBub2RlID0geWFwcE5vZGU7ICAvLy9cblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2tlbnMoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLmdyYW1tYXJDaGFuZ2VIYW5kbGVyKCk7ICAvLy9cblxuICAgIHRoaXMuY29udGVudENoYW5nZUhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VIYW5kbGVyID0gdGhpcy5jb250ZW50Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8WWFwcCBsYW5ndWFnZT17dGhpcy5sYW5ndWFnZX0gYXV0b1Jlc2l6ZT1cImZhbHNlXCIgb25Db250ZW50Q2hhbmdlPXtjb250ZW50Q2hhbmdlSGFuZGxlcn0+e3RoaXMuaW5pdGlhbENvbnRlbnR9PC9ZYXBwPlxuICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPE1pZGRsZVNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUb2tlbnNUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICAgIDwvTWlkZGxlU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiAvPlxuICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gdGhpcy5QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=