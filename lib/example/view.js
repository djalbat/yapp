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

var _yapp = _interopRequireDefault(require("../yapp"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _top = _interopRequireDefault(require("./div/sizeable/top"));

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _horizontal = _interopRequireDefault(require("./div/splitter/horizontal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  height: 72rem;\n  display: flex;\n  padding: 1rem;\n  \n"]);

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

var florenceLexer = _occamLexers.FlorenceLexer.fromNothing(),
    florenceParser = _occamParsers.FlorenceParser.fromNothing();

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var yappContent = this.getYappContent(),
            content = yappContent,
            ///
        tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens);
        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearParseTree();
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
          keyUpHandler = this.keyUpHandler.bind(this);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " view")
      }, /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        noAutoResize: true
      }, "\"use strict\";\n\nimport withStyle from \"easy-with-style\";  ///\n\nimport { Element } from \"easy\";\n\nimport Yapp from \"../yapp\";\n\nclass View extends Element {\n\n  ...\n\n}\n\nexport default withStyle(View)`\n\n  width: 72rem;\n  height: 48rem;\n  margin: 5rem;\n\n`;")), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))), /*#__PURE__*/React.createElement(_vertical["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null)))));
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlciIsIkZsb3JlbmNlTGV4ZXIiLCJmcm9tTm90aGluZyIsImZsb3JlbmNlUGFyc2VyIiwiRmxvcmVuY2VQYXJzZXIiLCJWaWV3IiwieWFwcENvbnRlbnQiLCJnZXRZYXBwQ29udGVudCIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsImRyYWdIYW5kbGVyIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImJpbmQiLCJrZXlVcEhhbmRsZXIiLCJhc3NpZ25Db250ZXh0IiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQywyQkFBY0MsV0FBZCxFQUF0QjtBQUFBLElBQ01DLGNBQWMsR0FBR0MsNkJBQWVGLFdBQWYsRUFEdkI7O0lBR01HLEk7Ozs7Ozs7Ozs7Ozs7bUNBQ1c7QUFDYixVQUFJO0FBQ0YsWUFBTUMsV0FBVyxHQUFHLEtBQUtDLGNBQUwsRUFBcEI7QUFBQSxZQUNNQyxPQUFPLEdBQUdGLFdBRGhCO0FBQUEsWUFDOEI7QUFDeEJHLFFBQUFBLE1BQU0sR0FBR1QsYUFBYSxDQUFDVSxRQUFkLENBQXVCRixPQUF2QixDQUZmO0FBQUEsWUFHTUcsSUFBSSxHQUFHUixjQUFjLENBQUNTLEtBQWYsQ0FBcUJILE1BQXJCLENBSGI7QUFBQSxZQUlNSSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxDQUFpQkwsTUFBakIsQ0FKbEI7QUFNQSxhQUFLTSxZQUFMLENBQWtCRixTQUFsQjtBQUNELE9BUkQsQ0FRRSxPQUFPRyxLQUFQLEVBQWM7QUFDZEMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxhQUFLRyxjQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhO0FBQ1osVUFBTUMsb0JBQW9CLEdBQUcsS0FBS0MsdUJBQUwsRUFBN0I7QUFBQSxVQUNNQyxvQkFBb0IsR0FBRyxLQUFLQyx1QkFBTCxFQUQ3QjtBQUFBLFVBRU1DLFNBQVMsR0FBR0osb0JBRmxCO0FBQUEsVUFFd0M7QUFDbENLLE1BQUFBLFVBQVUsR0FBR0gsb0JBSG5CLENBRFksQ0FJOEI7O0FBRTFDLFdBQUtJLFlBQUwsQ0FBa0JGLFNBQWxCO0FBQ0EsV0FBS0csYUFBTCxDQUFtQkYsVUFBbkI7QUFFQSxXQUFLRyxVQUFMO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtDLFdBQUw7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDbEIsVUFBRUMsU0FBRixHQUFnQkQsVUFBaEIsQ0FBRUMsU0FBRjtBQUFBLFVBQ0FGLFdBREEsR0FDYyxLQUFLQSxXQUFMLENBQWlCRyxJQUFqQixDQUFzQixJQUF0QixDQURkO0FBQUEsVUFFQUMsWUFGQSxHQUVlLEtBQUtBLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBRmY7QUFJTiwwQkFFRTtBQUFLLFFBQUEsU0FBUyxZQUFLRCxTQUFMO0FBQWQsc0JBQ0Usb0JBQUMsc0JBQUQscUJBQ0Usb0JBQUMsZ0JBQUQscUJBQ0Usb0JBQUMsbUJBQUQscUJBQ0Usb0JBQUMsZUFBRCxxQkFDRSxvQkFBQyxnQkFBRDtBQUFNLFFBQUEsWUFBWTtBQUFsQixpU0FERixDQURGLGVBd0JFLG9CQUFDLHNCQUFEO0FBQXVCLFFBQUEsTUFBTSxFQUFFRjtBQUEvQixRQXhCRixlQXlCRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxtQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxxQkFERixlQUlFLG9CQUFDLHFCQUFELE9BSkYsQ0FERixDQXpCRixDQURGLENBREYsZUFxQ0Usb0JBQUMsb0JBQUQ7QUFBcUIsUUFBQSxNQUFNLEVBQUVBO0FBQTdCLFFBckNGLGVBc0NFLG9CQUFDLHFCQUFELHFCQUNFLG9CQUFDLG1CQUFELHFCQUNFLG9CQUFDLHNCQUFELE9BREYsQ0FERixDQXRDRixDQURGLENBRkY7QUFvREQ7OzsrQkFFVUMsVSxFQUFZO0FBQ3JCLFdBQUtJLGFBQUw7QUFFQSxXQUFLRCxZQUFMLEdBSHFCLENBR0M7QUFDdkI7Ozs4QkFRZ0JFLEssRUFBT0wsVSxFQUFZO0FBQ2xDLFVBQU1NLFdBQVcsR0FBR0MsY0FBUUMsU0FBUixDQUFrQkgsS0FBbEIsRUFBeUJMLFVBQXpCLENBQXBCOztBQUVBTSxNQUFBQSxXQUFXLENBQUNHLFVBQVosQ0FBdUJULFVBQXZCO0FBRUEsYUFBT00sV0FBUDtBQUNEOzs7O0VBOUdnQkMsYTs7Z0JBQWJoQyxJLGFBa0dhLEs7O2dCQWxHYkEsSSx1QkFvR3VCO0FBQ3pCMEIsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVTFCLElBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dEaXYsIFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWWFwcCBmcm9tIFwiLi4veWFwcFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IEhvcml6b250YWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbFwiO1xuXG5jb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeWFwcENvbnRlbnQgPSB0aGlzLmdldFlhcHBDb250ZW50KCksXG4gICAgICAgICAgICBjb250ZW50ID0geWFwcENvbnRlbnQsICAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFRvcFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgIDxZYXBwIG5vQXV0b1Jlc2l6ZT57YFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4uL3lhcHBcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuXG4gIC4uLlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KVxcYFxuXG4gIHdpZHRoOiA3MnJlbTtcbiAgaGVpZ2h0OiA0OHJlbTtcbiAgbWFyZ2luOiA1cmVtO1xuXG5cXGA7YH08L1lhcHA+XG4gICAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG5cbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdfQ==