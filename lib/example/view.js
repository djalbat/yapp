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

var _ruleName = _interopRequireDefault(require("./input/ruleName"));

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

var _rule = require("../utilities/rule");

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
          ruleName = this.getRuleName(),
          name = ruleName,
          ///
      rules = parser.getRules(),
          rule = (0, _rule.findRuleByName)(name, rules),
          node = parser.parse(tokens, rule);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "changeHandler",
    value: function changeHandler() {
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
      }, /*#__PURE__*/React.createElement(_columns["default"], null, /*#__PURE__*/React.createElement(_left["default"], null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_top["default"], null, /*#__PURE__*/React.createElement(_yapp["default"], {
        onChange: changeHandler,
        autoResize: autoResize
      }, "\"use strict\";")), /*#__PURE__*/React.createElement(_horizontal["default"], {
        onDrag: dragHandler
      }), /*#__PURE__*/React.createElement(_easyLayout.RowDiv, null, /*#__PURE__*/React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Tokens"), /*#__PURE__*/React.createElement(_tokens["default"], null), /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null))))), /*#__PURE__*/React.createElement(_vertical["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIkphdmFTY3JpcHRMZXhlciIsIkphdmFTY3JpcHRQYXJzZXIiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImxleGVyIiwiTGV4ZXIiLCJmcm9tRW50cmllcyIsInlhcHBDb250ZW50IiwiZ2V0WWFwcENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJwYXJzZVRyZWUiLCJibmYiLCJnZXRCTkYiLCJwYXJzZXIiLCJQYXJzZXIiLCJmcm9tQk5GIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5hbWUiLCJydWxlcyIsImdldFJ1bGVzIiwicnVsZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiZ2V0VG9rZW5zIiwiZ2V0UGFyc2VUcmVlIiwic2V0VG9rZW5zIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJUb2tlbnMiLCJjbGVhclBhcnNlVHJlZSIsImNoYW5nZUhhbmRsZXIiLCJsZWZ0U2l6ZWFibGVEaXZXaWR0aCIsImdldExlZnRTaXplYWJsZURpdldpZHRoIiwidG9wU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRUb3BTaXplYWJsZURpdkhlaWdodCIsInlhcHBXaWR0aCIsInlhcHBIZWlnaHQiLCJzZXRZYXBwV2lkdGgiLCJzZXRZYXBwSGVpZ2h0IiwicmVzaXplWWFwcCIsImRyYWdIYW5kbGVyIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImF1dG9SZXNpemUiLCJiaW5kIiwia2V5VXBIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldExleGljYWxFbnRyaWVzIiwiQ2xhc3MiLCJleGFtcGxlVmlldyIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNB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YUFBTDtBQUVNLFVBQUV2QyxHQUFGLEdBQVUsS0FBS0csTUFBZixDQUFFSCxHQUFGO0FBQUEsVUFDRVYsT0FERixHQUNjLEtBQUtFLEtBRG5CLENBQ0VGLE9BREY7QUFBQSxVQUVBRixjQUZBLEdBRWlCRSxPQUZqQixDQUhlLENBS1c7O0FBRWhDLFdBQUtrRCxNQUFMLENBQVl4QyxHQUFaO0FBQ0EsV0FBS3lDLGlCQUFMLENBQXVCckQsY0FBdkI7QUFFQSxXQUFLbUMsYUFBTCxHQVZxQixDQVVFO0FBQ3hCOzs7OEJBUWdCbUIsSyxFQUFPUixVLEVBQVk7QUFDbEMsVUFBTVMsV0FBVyxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QlIsVUFBekIsQ0FBcEI7O0FBRUFTLE1BQUFBLFdBQVcsQ0FBQ0csVUFBWixDQUF1QlosVUFBdkI7QUFFQSxhQUFPUyxXQUFQO0FBQ0Q7Ozs7RUEvSmdCQyxhOztnQkFBYjNELEksYUFtSmEsSzs7Z0JBbkpiQSxJLHVCQXFKdUI7QUFDekJrRCxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWFkLCtCQUFVbEQsSUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFlhcHAgZnJvbSBcIi4uL3lhcHBcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgUnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IFRvcFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZS90b3BcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBKYXZhU2NyaXB0TGV4ZXIgZnJvbSBcIi4uL2xleGVyL2phdmFzY3JpcHRcIjtcbmltcG9ydCBKYXZhU2NyaXB0UGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvamF2YXNjcmlwdFwiO1xuaW1wb3J0IFJpZ2h0U2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlL3JpZ2h0XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL2hvcml6b250YWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgTGV4ZXIgPSBKYXZhU2NyaXB0TGV4ZXI7ICAvLy9cblxuICBQYXJzZXIgPSBKYXZhU2NyaXB0UGFyc2VyOyAgLy8vXG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIHlhcHBDb250ZW50ID0gdGhpcy5nZXRZYXBwQ29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB5YXBwQ29udGVudCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5QYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucywgcnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBkcmFnSGFuZGxlcigpIHtcbiAgICBjb25zdCBsZWZ0U2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICB0b3BTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0VG9wU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICB5YXBwV2lkdGggPSBsZWZ0U2l6ZWFibGVEaXZXaWR0aCwgLy8vXG4gICAgICAgICAgeWFwcEhlaWdodCA9IHRvcFNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLnNldFlhcHBXaWR0aCh5YXBwV2lkdGgpO1xuICAgIHRoaXMuc2V0WWFwcEhlaWdodCh5YXBwSGVpZ2h0KTtcblxuICAgIHRoaXMucmVzaXplWWFwcCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlcigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgYXV0b1Jlc2l6ZSA9IGZhbHNlLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5kcmFnSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICA8TGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgIDxUb3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgICA8WWFwcCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gYXV0b1Jlc2l6ZT17YXV0b1Jlc2l6ZX0+e2BcInVzZSBzdHJpY3RcIjtgfTwvWWFwcD5cbiAgICAgICAgICAgICAgPC9Ub3BTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdiBvbkRyYWc9e2RyYWdIYW5kbGVyfS8+XG4gICAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IG9uRHJhZz17ZHJhZ0hhbmRsZXJ9Lz5cbiAgICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICAgIDwvQ29sdW1uc0Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBibmYgfSA9IHRoaXMuUGFyc2VyLFxuICAgICAgICAgIHsgZW50cmllcyB9ID0gdGhpcy5MZXhlcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZXhhbXBsZVZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBleGFtcGxlVmlldy5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbmA7XG4iXX0=