"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _error = _interopRequireDefault(require("./token/significant/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var terminalNodeQuery = _occamDom.Query.fromExpression("//@*"),
    errorTerminalNodeQuery = _occamDom.Query.fromExpression("//error/@*");

var Processor = /*#__PURE__*/function () {
  function Processor() {
    _classCallCheck(this, Processor);
  }

  _createClass(Processor, [{
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.replaceTerminalNodesSignificantToken(tokens, node, function (content) {
          return _error["default"];
        }, errorTerminalNodeQuery);
      }
    }
  }, {
    key: "replaceNonTerminalNodesSignificantTokens",
    value: function replaceNonTerminalNodesSignificantTokens(tokens, node, callback) {
      var _this = this;

      for (var _len = arguments.length, nonTerminalNodeQueries = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        nonTerminalNodeQueries[_key - 3] = arguments[_key];
      }

      nonTerminalNodeQueries.forEach(function (nonTerminalNodeQuery) {
        var nonTerminalNodes = nonTerminalNodeQuery.execute(node);
        nonTerminalNodes.forEach(function (nonTerminalNode) {
          return _this.replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback);
        });
      });
    }
  }, {
    key: "replaceTerminalNodesSignificantToken",
    value: function replaceTerminalNodesSignificantToken(tokens, node, callback) {
      var _this2 = this;

      var contents = [];

      for (var _len2 = arguments.length, terminalNodeQueries = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        terminalNodeQueries[_key2 - 3] = arguments[_key2];
      }

      terminalNodeQueries.forEach(function (terminalNodeQuery) {
        var terminalNodes = terminalNodeQuery.execute(node);
        terminalNodes.forEach(function (terminalNode) {
          var content = _this2.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);

          if (content !== null) {
            contents.push(content);
          }
        });
      });
      return contents;
    }
  }, {
    key: "replaceNonTerminalNodeSignificantTokens",
    value: function replaceNonTerminalNodeSignificantTokens(nonTerminalNode, tokens, callback) {
      var _this3 = this;

      var terminalNodes = terminalNodeQuery.execute(nonTerminalNode);
      terminalNodes.forEach(function (terminalNode) {
        return _this3.replaceTerminalNodeSignificantToken(terminalNode, tokens, callback);
      });
    }
  }, {
    key: "replaceTerminalNodeSignificantToken",
    value: function replaceTerminalNodeSignificantToken(terminalNode, tokens, callback) {
      var significantToken;
      significantToken = terminalNode.getSignificantToken();

      if (significantToken === null) {
        return null;
      }

      var endOfLineToken = significantToken.isEndOfLineToken();

      if (endOfLineToken) {
        return null;
      }

      var content = significantToken.getContent(),
          index = tokens.indexOf(significantToken),
          Token = callback(content); ///

      if (Token === null) {
        return null;
      }

      significantToken = Token.fromContent(content);
      var start = index,
          ///
      deleteCount = 1;
      tokens.splice(start, deleteCount, significantToken);
      terminalNode.setSignificantToken(significantToken);
      return content;
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      return new Class();
    }
  }]);

  return Processor;
}();

var _default = Processor;
exports["default"] = _default;