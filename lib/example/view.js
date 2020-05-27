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

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _ruleName = _interopRequireDefault(require("./input/ruleName"));

var _top = _interopRequireDefault(require("./div/sizeable/top"));

var _left = _interopRequireDefault(require("./div/sizeable/left"));

var _right = _interopRequireDefault(require("./div/sizeable/right"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

var _horizontal = _interopRequireDefault(require("./div/splitter/horizontal"));

var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));

var _rule = require("../utilities/rule");

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

    _defineProperty(_assertThisInitialized(_this), "Lexer", _occamLexers.FlorenceLexer);

    _defineProperty(_assertThisInitialized(_this), "Parser", _occamParsers.FlorenceParser);

    return _this;
  }

  _createClass(View, [{
    key: "changeHandler",
    ///
    value: function changeHandler() {
      try {
        var parseTree = null;
        var lexicalEntries = this.getLexicalEntries(),
            yappContent = this.getYappContent(),
            ruleName = this.getRuleName(),
            bnf = this.getBNF(),
            entries = lexicalEntries,
            ///
        lexer = this.Lexer.fromEntries(entries),
            content = yappContent,
            ///
        tokens = lexer.tokenise(content),
            parser = this.Parser.fromBNF(bnf),
            name = ruleName,
            ///
        rules = parser.getRules(),
            rule = (0, _rule.findRuleByName)(name, rules),
            node = parser.parse(tokens, rule);

        if (node !== null) {
          parseTree = node.asParseTree(tokens);
        }

        this.setParseTree(parseTree);
      } catch (error) {
        console.log(error);
        this.clearParseTree();
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      this.changeHandler();
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
          autoResize = false,
          dragHandler = this.dragHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " view")
      }, /*#__PURE__*/React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        onChange: changeHandler,
        autoResize: autoResize
      }, "\"use strict\";\n\nimport withStyle from \"easy-with-style\";  ///\n\nimport { Element } from \"easy\";\n\nimport Yapp from \"../yapp\";\n\nclass View extends Element {\n\n  ...\n\n}\n\nexport default withStyle(View)`\n\n  width: 72rem;\n  height: 48rem;\n  margin: 5rem;\n\n`;")), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))), /*#__PURE__*/React.createElement(_vertical["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_right["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }))), /*#__PURE__*/React.createElement(_horizontal["default"], null), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Rule name"), /*#__PURE__*/React.createElement(_ruleName["default"], {
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
      this.changeHandler(); ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIkZsb3JlbmNlTGV4ZXIiLCJGbG9yZW5jZVBhcnNlciIsInBhcnNlVHJlZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJ5YXBwQ29udGVudCIsImdldFlhcHBDb250ZW50IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImJuZiIsImdldEJORiIsImVudHJpZXMiLCJsZXhlciIsIkxleGVyIiwiZnJvbUVudHJpZXMiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZXIiLCJQYXJzZXIiLCJmcm9tQk5GIiwibmFtZSIsInJ1bGVzIiwiZ2V0UnVsZXMiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsImRyYWdIYW5kbGVyIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImF1dG9SZXNpemUiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztB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ekIsQ0FBcEI7O0FBRUFTLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1QlosVUFBdkI7QUFFQSxhQUFPUyxXQUFQO0FBQ0Q7Ozs7RUEvSmdCQyxhOztnQkFBYnZELEksYUFtSmEsSzs7Z0JBbkpiQSxJLHVCQXFKdUI7QUFDekI4QyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVOUMsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd0RpdiwgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBZYXBwIGZyb20gXCIuLi95YXBwXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBSaWdodFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBmaW5kUnVsZUJ5TmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZVwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIExleGVyID0gRmxvcmVuY2VMZXhlcjsgIC8vL1xuXG4gIFBhcnNlciA9IEZsb3JlbmNlUGFyc2VyOyAgLy8vXG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgICAgeWFwcENvbnRlbnQgPSB0aGlzLmdldFlhcHBDb250ZW50KCksXG4gICAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgICAgY29udGVudCA9IHlhcHBDb250ZW50LCAgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIHBhcnNlciA9IHRoaXMuUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgcnVsZXMgPSBwYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZUJ5TmFtZShuYW1lLCBydWxlcyksXG4gICAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIoKSB7XG4gICAgY29uc3QgbGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldExlZnRTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgdG9wU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFRvcFNpemVhYmxlRGl2SGVpZ2h0KCksXG4gICAgICAgICAgeWFwcFdpZHRoID0gbGVmdFNpemVhYmxlRGl2V2lkdGgsIC8vL1xuICAgICAgICAgIHlhcHBIZWlnaHQgPSB0b3BTaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5zZXRZYXBwV2lkdGgoeWFwcFdpZHRoKTtcbiAgICB0aGlzLnNldFlhcHBIZWlnaHQoeWFwcEhlaWdodCk7XG5cbiAgICB0aGlzLnJlc2l6ZVlhcHAoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGF1dG9SZXNpemUgPSBmYWxzZSxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZHJhZ0hhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZpZXdgfT5cbiAgICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICA8VG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPFlhcHAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGF1dG9SZXNpemU9e2F1dG9SZXNpemV9ID57YFwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4uL3lhcHBcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuXG4gIC4uLlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KVxcYFxuXG4gIHdpZHRoOiA3MnJlbTtcbiAgaGVpZ2h0OiA0OHJlbTtcbiAgbWFyZ2luOiA1cmVtO1xuXG5cXGA7YH08L1lhcHA+XG4gICAgICAgICAgICAgIDwvVG9wU2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgb25EcmFnPXtkcmFnSGFuZGxlcn0vPlxuICAgICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFJpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgICAgICAgPFJvd0Rpdj5cbiAgICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgICA8L1Jvd0Rpdj5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGJuZiB9ID0gdGhpcy5QYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSB0aGlzLkxleGVyLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIGV4YW1wbGVWaWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZXhhbXBsZVZpZXdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdfQ==