"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _processor = _interopRequireDefault(require("../processor"));

var _jsx = _interopRequireDefault(require("../token/significant/jsx"));

var _error = _interopRequireDefault(require("../token/significant/error"));

var _string = _interopRequireDefault(require("../token/significant/string"));

var _variable = _interopRequireDefault(require("../token/significant/variable"));

var _argument = _interopRequireDefault(require("../token/significant/argument"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*"),
    jsxNonTerminalNodeQuery = _occamDom.Query.fromExpression("//jsx"),
    jsxTagTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/@*"),
    argumentTerminalNodeQuery = _occamDom.Query.fromExpression("//argument/@*"),
    variableTerminalNodeQuery = _occamDom.Query.fromExpression("//variable/@*"),
    jsxTagNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxCompleteTag|jsxStartTag|jsxEndTag/name/@*"),
    functionNonTerminalNodeQuery = _occamDom.Query.fromExpression("//functionBody|arrowFunction"),
    jsxTagAttributeTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/@*"),
    jsxTagAttributeNameTerminalNodeQuery = _occamDom.Query.fromExpression("//jsxAttribute/name/@*"),
    variableDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//var|let|const/variable/@*"),
    templateLiteralStringTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/string/@*"),
    templateLiteralDelimiterTerminalNodeQuery = _occamDom.Query.fromExpression("//templateLiteral/@delimiter"),
    destructuredConstDeclarationTerminalNodeQuery = _occamDom.Query.fromExpression("//const/destructure/variable/@*");

var JavaScriptProcessor = /*#__PURE__*/function (_Processor) {
  _inherits(JavaScriptProcessor, _Processor);

  var _super = _createSuper(JavaScriptProcessor);

  function JavaScriptProcessor() {
    _classCallCheck(this, JavaScriptProcessor);

    return _super.apply(this, arguments);
  }

  _createClass(JavaScriptProcessor, [{
    key: "process",
    value: function process(tokens, node) {
      var _this = this;

      if (node !== null) {
        var jsxNonTerminalNodes = jsxNonTerminalNodeQuery.execute(node),
            functionNonTerminalNodes = functionNonTerminalNodeQuery.execute(node);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content) {
          return _error["default"];
        }, errorTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content) {
          return _string["default"];
        }, templateLiteralStringTerminalNodeQuery);
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content) {
          return content === _constants.TEMPLATE_LITERAL_DELIMITER_CONTENT ? _string["default"] : null;
        }, templateLiteralDelimiterTerminalNodeQuery);
        jsxNonTerminalNodes.forEach(function (jsxNonTerminalNode) {
          return _this.replaceTerminalNodesSignificantToken(tokens, jsxNonTerminalNode, function (content) {
            return _jsx["default"];
          }, jsxTagTerminalNodeQuery, jsxTagNameTerminalNodeQuery, jsxTagAttributeTerminalNodeQuery, jsxTagAttributeNameTerminalNodeQuery);
        });
        functionNonTerminalNodes.forEach(function (functionNonTerminalNode) {
          var argumentNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content) {
            return _argument["default"];
          }, argumentTerminalNodeQuery),
              variableNames = _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content) {
            return _variable["default"];
          }, variableDeclarationTerminalNodeQuery, destructuredConstDeclarationTerminalNodeQuery);

          _this.replaceTerminalNodesSignificantToken(tokens, functionNonTerminalNode, function (content) {
            var Token = null;
            var variableName = content,
                ///
            variableNamesIncludesVariableName = variableNames.includes(variableName),
                argumentNamesIncludesVariableName = argumentNames.includes(variableName);

            if (false) {///
            } else if (variableNamesIncludesVariableName) {
              Token = _variable["default"];
            } else if (argumentNamesIncludesVariableName) {
              Token = _argument["default"];
            }

            return Token;
          }, variableTerminalNodeQuery);
        });
      }
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      return _processor["default"].fromNothing(JavaScriptProcessor);
    }
  }]);

  return JavaScriptProcessor;
}(_processor["default"]);

exports["default"] = JavaScriptProcessor;