"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _error = _interopRequireDefault(require("./token/overlay/error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var queryByExpression = _occamDom.queryUtilities.queryByExpression;

var Document = /*#__PURE__*/function () {
  function Document(lexer, parser, tokens, node) {
    _classCallCheck(this, Document);

    _defineProperty(this, "overlayTokenMap", {});

    _defineProperty(this, "OverlayTokenMap", {
      "//error/@*": _error["default"]
    });

    this.lexer = lexer;
    this.parser = parser;
    this.tokens = tokens;
    this.node = node;
  }

  _createClass(Document, [{
    key: "getTokens",
    value: function getTokens() {
      var _this = this;

      var tokens = this.tokens.map(function (token, index) {
        return _this.overlayTokenMap[index] || token;
      }); ///

      return tokens;
    }
  }, {
    key: "getNode",
    value: function getNode() {
      return this.node;
    }
  }, {
    key: "setLexer",
    value: function setLexer(lexer) {
      this.lexer = lexer;
    }
  }, {
    key: "setParser",
    value: function setParser(parser) {
      this.parser = parser;
    }
  }, {
    key: "update",
    value: function update(content) {
      this.tokens = this.lexer.tokenise(content);
      this.node = this.parser.parse(this.tokens);
      this.addOverlayTokens();
      this.postProcess();
    }
  }, {
    key: "addOverlayTokens",
    value: function addOverlayTokens() {
      var _this2 = this;

      this.overlayTokenMap = {};

      if (this.node !== null) {
        var queryExpressions = Object.keys(this.OverlayTokenMap);
        queryExpressions.forEach(function (queryExpression) {
          var nodes = queryByExpression(_this2.node, queryExpression),
              OverlayToken = _this2.OverlayTokenMap[queryExpression];
          nodes.forEach(function (node) {
            var significantToken = node.getSignificantToken(),
                overlaidToken = significantToken,
                ///
            overlaidTokenIndex = _this2.tokens.indexOf(overlaidToken),
                overlayTokenIndex = overlaidTokenIndex,
                ///
            overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);

            _this2.overlayTokenMap[overlayTokenIndex] = overlayToken;
          });
        });
      }
    }
  }, {
    key: "postProcess",
    value: function postProcess() {///
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      var Lexer = Class.Lexer,
          Parser = Class.Parser,
          lexer = Lexer.fromNothing(),
          parser = Parser.fromNothing(),
          tokens = null,
          node = null,
          document = new Class(lexer, parser, tokens, node);
      return document;
    }
  }]);

  return Document;
}();

var _default = Document;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJEb2N1bWVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibWFwIiwidG9rZW4iLCJpbmRleCIsIm92ZXJsYXlUb2tlbk1hcCIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiYWRkT3ZlcmxheVRva2VucyIsInBvc3RQcm9jZXNzIiwicXVlcnlFeHByZXNzaW9ucyIsIk9iamVjdCIsImtleXMiLCJPdmVybGF5VG9rZW5NYXAiLCJmb3JFYWNoIiwicXVlcnlFeHByZXNzaW9uIiwibm9kZXMiLCJPdmVybGF5VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsIm92ZXJsYWlkVG9rZW4iLCJvdmVybGFpZFRva2VuSW5kZXgiLCJpbmRleE9mIiwib3ZlcmxheVRva2VuSW5kZXgiLCJvdmVybGF5VG9rZW4iLCJmcm9tT3ZlcmxhaWRUb2tlbiIsIkNsYXNzIiwiTGV4ZXIiLCJQYXJzZXIiLCJmcm9tTm90aGluZyIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFUUEsaUIsR0FBc0JDLHdCLENBQXRCRCxpQjs7SUFFRkUsUTtBQU9KLG9CQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQUE7O0FBQUEsNkNBTnZCLEVBTXVCOztBQUFBLDZDQUp2QjtBQUNoQixvQkFBY0M7QUFERSxLQUl1Qjs7QUFDdkMsU0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFBQTs7QUFDVixVQUFNRCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZRyxHQUFaLENBQWdCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLGVBQWtCLEtBQUksQ0FBQ0MsZUFBTCxDQUFxQkQsS0FBckIsS0FBK0JELEtBQWpEO0FBQUEsT0FBaEIsQ0FBZixDQURVLENBQzhFOztBQUV4RixhQUFPSixNQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7NkJBRVFILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzJCQUVNUSxPLEVBQVM7QUFDZCxXQUFLUCxNQUFMLEdBQWMsS0FBS0YsS0FBTCxDQUFXVSxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS04sSUFBTCxHQUFZLEtBQUtGLE1BQUwsQ0FBWVUsS0FBWixDQUFrQixLQUFLVCxNQUF2QixDQUFaO0FBRUEsV0FBS1UsZ0JBQUw7QUFFQSxXQUFLQyxXQUFMO0FBQ0Q7Ozt1Q0FFa0I7QUFBQTs7QUFDakIsV0FBS0wsZUFBTCxHQUF1QixFQUF2Qjs7QUFFQSxVQUFJLEtBQUtMLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixZQUFNVyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsZUFBakIsQ0FBekI7QUFFQUgsUUFBQUEsZ0JBQWdCLENBQUNJLE9BQWpCLENBQXlCLFVBQUNDLGVBQUQsRUFBcUI7QUFDNUMsY0FBTUMsS0FBSyxHQUFHdkIsaUJBQWlCLENBQUMsTUFBSSxDQUFDTSxJQUFOLEVBQVlnQixlQUFaLENBQS9CO0FBQUEsY0FDTUUsWUFBWSxHQUFHLE1BQUksQ0FBQ0osZUFBTCxDQUFxQkUsZUFBckIsQ0FEckI7QUFHQUMsVUFBQUEsS0FBSyxDQUFDRixPQUFOLENBQWMsVUFBQ2YsSUFBRCxFQUFVO0FBQ3RCLGdCQUFNbUIsZ0JBQWdCLEdBQUduQixJQUFJLENBQUNvQixtQkFBTCxFQUF6QjtBQUFBLGdCQUNNQyxhQUFhLEdBQUdGLGdCQUR0QjtBQUFBLGdCQUN3QztBQUNsQ0csWUFBQUEsa0JBQWtCLEdBQUcsTUFBSSxDQUFDdkIsTUFBTCxDQUFZd0IsT0FBWixDQUFvQkYsYUFBcEIsQ0FGM0I7QUFBQSxnQkFHTUcsaUJBQWlCLEdBQUdGLGtCQUgxQjtBQUFBLGdCQUcrQztBQUN6Q0csWUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUpyQjs7QUFNQSxZQUFBLE1BQUksQ0FBQ2hCLGVBQUwsQ0FBcUJtQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsV0FSRDtBQVNELFNBYkQ7QUFjRDtBQUNGOzs7a0NBRWEsQ0FDWjtBQUNEOzs7Z0NBRWtCRSxLLEVBQU87QUFBQSxVQUNoQkMsS0FEZ0IsR0FDRUQsS0FERixDQUNoQkMsS0FEZ0I7QUFBQSxVQUNUQyxNQURTLEdBQ0VGLEtBREYsQ0FDVEUsTUFEUztBQUFBLFVBRWxCaEMsS0FGa0IsR0FFVitCLEtBQUssQ0FBQ0UsV0FBTixFQUZVO0FBQUEsVUFHbEJoQyxNQUhrQixHQUdUK0IsTUFBTSxDQUFDQyxXQUFQLEVBSFM7QUFBQSxVQUlsQi9CLE1BSmtCLEdBSVQsSUFKUztBQUFBLFVBS2xCQyxJQUxrQixHQUtYLElBTFc7QUFBQSxVQU1sQitCLFFBTmtCLEdBTVAsSUFBSUosS0FBSixDQUFVOUIsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxJQUFqQyxDQU5PO0FBUXhCLGFBQU8rQixRQUFQO0FBQ0Q7Ozs7OztlQUdZbkMsUSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEVycm9yT3ZlcmxheVRva2VuIGZyb20gXCIuL3Rva2VuL292ZXJsYXkvZXJyb3JcIjtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgb3ZlcmxheVRva2VuTWFwID0ge307XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4sIGluZGV4KSA9PiB0aGlzLm92ZXJsYXlUb2tlbk1hcFtpbmRleF0gfHwgdG9rZW4pOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5hZGRPdmVybGF5VG9rZW5zKCk7XG5cbiAgICB0aGlzLnBvc3RQcm9jZXNzKCk7XG4gIH1cblxuICBhZGRPdmVybGF5VG9rZW5zKCkge1xuICAgIHRoaXMub3ZlcmxheVRva2VuTWFwID0ge307XG5cbiAgICBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBxdWVyeUV4cHJlc3Npb25zID0gT2JqZWN0LmtleXModGhpcy5PdmVybGF5VG9rZW5NYXApO1xuXG4gICAgICBxdWVyeUV4cHJlc3Npb25zLmZvckVhY2goKHF1ZXJ5RXhwcmVzc2lvbikgPT4ge1xuICAgICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKHRoaXMubm9kZSwgcXVlcnlFeHByZXNzaW9uKSxcbiAgICAgICAgICAgICAgT3ZlcmxheVRva2VuID0gdGhpcy5PdmVybGF5VG9rZW5NYXBbcXVlcnlFeHByZXNzaW9uXTtcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0aGlzLnRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAgICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICAgICAgb3ZlcmxheVRva2VuID0gT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gb3ZlcmxheVRva2VuO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvc3RQcm9jZXNzKCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyIH0gPSBDbGFzcyxcbiAgICAgICAgICBsZXhlciA9IExleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBkb2N1bWVudCA9IG5ldyBDbGFzcyhsZXhlciwgcGFyc2VyLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50O1xuIl19