"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _error = _interopRequireDefault(require("./token/overlay/error"));

var _lexers = require("./lexers");

var _parsers = require("./parsers");

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
    key: "update",
    value: function update(content) {
      this.tokens = this.lexer.tokenise(content);
      this.node = this.parser.parse(this.tokens);
      this.addOverlayTokens();
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
  }], [{
    key: "fromLanguage",
    value: function fromLanguage(language) {
      var lexer = (0, _lexers.lexerFromLanguage)(language),
          parser = (0, _parsers.parserFromLanguage)(language),
          tokens = null,
          node = null,
          document = new Document(lexer, parser, tokens, node);
      return document;
    }
  }]);

  return Document;
}();

var _default = Document;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJEb2N1bWVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibWFwIiwidG9rZW4iLCJpbmRleCIsIm92ZXJsYXlUb2tlbk1hcCIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiYWRkT3ZlcmxheVRva2VucyIsInF1ZXJ5RXhwcmVzc2lvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3ZlcmxheVRva2VuTWFwIiwiZm9yRWFjaCIsInF1ZXJ5RXhwcmVzc2lvbiIsIm5vZGVzIiwiT3ZlcmxheVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm92ZXJsYXlUb2tlbkluZGV4Iiwib3ZlcmxheVRva2VuIiwiZnJvbU92ZXJsYWlkVG9rZW4iLCJsYW5ndWFnZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFUUEsaUIsR0FBc0JDLHdCLENBQXRCRCxpQjs7SUFFRkUsUTtBQU9KLG9CQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQUE7O0FBQUEsNkNBTnZCLEVBTXVCOztBQUFBLDZDQUp2QjtBQUNoQixvQkFBY0M7QUFERSxLQUl1Qjs7QUFDdkMsU0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBRUEsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NkJBRVFILEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OEJBRVNDLE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1YsVUFBTUMsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWUcsR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUFrQixLQUFJLENBQUNDLGVBQUwsQ0FBcUJELEtBQXJCLEtBQStCRCxLQUFqRDtBQUFBLE9BQWhCLENBQWYsQ0FEVSxDQUM4RTs7QUFFeEYsYUFBT0osTUFBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzJCQUVNTSxPLEVBQVM7QUFDZCxXQUFLUCxNQUFMLEdBQWMsS0FBS0YsS0FBTCxDQUFXVSxRQUFYLENBQW9CRCxPQUFwQixDQUFkO0FBRUEsV0FBS04sSUFBTCxHQUFZLEtBQUtGLE1BQUwsQ0FBWVUsS0FBWixDQUFrQixLQUFLVCxNQUF2QixDQUFaO0FBRUEsV0FBS1UsZ0JBQUw7QUFDRDs7O3VDQUVrQjtBQUFBOztBQUNqQixXQUFLSixlQUFMLEdBQXVCLEVBQXZCOztBQUVBLFVBQUksS0FBS0wsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCLFlBQU1VLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxlQUFqQixDQUF6QjtBQUVBSCxRQUFBQSxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUIsVUFBQ0MsZUFBRCxFQUFxQjtBQUM1QyxjQUFNQyxLQUFLLEdBQUd0QixpQkFBaUIsQ0FBQyxNQUFJLENBQUNNLElBQU4sRUFBWWUsZUFBWixDQUEvQjtBQUFBLGNBQ01FLFlBQVksR0FBRyxNQUFJLENBQUNKLGVBQUwsQ0FBcUJFLGVBQXJCLENBRHJCO0FBR0FDLFVBQUFBLEtBQUssQ0FBQ0YsT0FBTixDQUFjLFVBQUNkLElBQUQsRUFBVTtBQUN0QixnQkFBTWtCLGdCQUFnQixHQUFHbEIsSUFBSSxDQUFDbUIsbUJBQUwsRUFBekI7QUFBQSxnQkFDTUMsYUFBYSxHQUFHRixnQkFEdEI7QUFBQSxnQkFDd0M7QUFDbENHLFlBQUFBLGtCQUFrQixHQUFHLE1BQUksQ0FBQ3RCLE1BQUwsQ0FBWXVCLE9BQVosQ0FBb0JGLGFBQXBCLENBRjNCO0FBQUEsZ0JBR01HLGlCQUFpQixHQUFHRixrQkFIMUI7QUFBQSxnQkFHK0M7QUFDekNHLFlBQUFBLFlBQVksR0FBR1AsWUFBWSxDQUFDUSxpQkFBYixDQUErQkwsYUFBL0IsQ0FKckI7O0FBTUEsWUFBQSxNQUFJLENBQUNmLGVBQUwsQ0FBcUJrQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsV0FSRDtBQVNELFNBYkQ7QUFjRDtBQUNGOzs7aUNBRW1CRSxRLEVBQVU7QUFDNUIsVUFBTTdCLEtBQUssR0FBRywrQkFBa0I2QixRQUFsQixDQUFkO0FBQUEsVUFDTTVCLE1BQU0sR0FBRyxpQ0FBbUI0QixRQUFuQixDQURmO0FBQUEsVUFFTTNCLE1BQU0sR0FBRyxJQUZmO0FBQUEsVUFHTUMsSUFBSSxHQUFHLElBSGI7QUFBQSxVQUlNMkIsUUFBUSxHQUFHLElBQUkvQixRQUFKLENBQWFDLEtBQWIsRUFBb0JDLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ0MsSUFBcEMsQ0FKakI7QUFNQSxhQUFPMkIsUUFBUDtBQUNEOzs7Ozs7ZUFHWS9CLFEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi90b2tlbi9vdmVybGF5L2Vycm9yXCI7XG5cbmltcG9ydCB7IGxleGVyRnJvbUxhbmd1YWdlIH0gZnJvbSBcIi4vbGV4ZXJzXCI7XG5pbXBvcnQgeyBwYXJzZXJGcm9tTGFuZ3VhZ2UgfSBmcm9tIFwiLi9wYXJzZXJzXCI7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIG92ZXJsYXlUb2tlbk1hcCA9IHt9O1xuXG4gIE92ZXJsYXlUb2tlbk1hcCA9IHtcbiAgICBcIi8vZXJyb3IvQCpcIjogRXJyb3JPdmVybGF5VG9rZW5cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihsZXhlciwgcGFyc2VyLCB0b2tlbnMsIG5vZGUpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG5cbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4sIGluZGV4KSA9PiB0aGlzLm92ZXJsYXlUb2tlbk1hcFtpbmRleF0gfHwgdG9rZW4pOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICB1cGRhdGUoY29udGVudCkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMucGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuYWRkT3ZlcmxheVRva2VucygpO1xuICB9XG5cbiAgYWRkT3ZlcmxheVRva2VucygpIHtcbiAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcCA9IHt9O1xuXG4gICAgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcXVlcnlFeHByZXNzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuT3ZlcmxheVRva2VuTWFwKTtcblxuICAgICAgcXVlcnlFeHByZXNzaW9ucy5mb3JFYWNoKChxdWVyeUV4cHJlc3Npb24pID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbih0aGlzLm5vZGUsIHF1ZXJ5RXhwcmVzc2lvbiksXG4gICAgICAgICAgICAgIE92ZXJsYXlUb2tlbiA9IHRoaXMuT3ZlcmxheVRva2VuTWFwW3F1ZXJ5RXhwcmVzc2lvbl07XG5cbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSxcbiAgICAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICAgIG92ZXJsYXlUb2tlbiA9IE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IG92ZXJsYXlUb2tlbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBsZXhlckZyb21MYW5ndWFnZShsYW5ndWFnZSksXG4gICAgICAgICAgcGFyc2VyID0gcGFyc2VyRnJvbUxhbmd1YWdlKGxhbmd1YWdlKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGRvY3VtZW50ID0gbmV3IERvY3VtZW50KGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnQ7XG4iXX0=