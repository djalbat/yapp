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

var Model = /*#__PURE__*/function () {
  function Model(lexer, parser, tokens, node) {
    _classCallCheck(this, Model);

    _defineProperty(this, "OverlayTokenMap", {
      "//error/@*": _error["default"]
    });

    this.lexer = lexer;
    this.parser = parser;
    this.tokens = tokens;
    this.node = node;
  }

  _createClass(Model, [{
    key: "getLanguage",
    value: function getLanguage() {
      return this.language;
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

      if (this.node !== null) {
        this.resetOverlayTokenMap();
        this.overlayTokens();
      }
    }
  }, {
    key: "overlayTokens",
    value: function overlayTokens() {
      var _this2 = this;

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
  }, {
    key: "resetOverlayTokenMap",
    value: function resetOverlayTokenMap() {
      this.overlayTokenMap = {};
    }
  }], [{
    key: "fromLexerAndParser",
    value: function fromLexerAndParser(Class, lexer, parser) {
      var tokens = null,
          node = null,
          model = new Class(lexer, parser, tokens, node);
      return model;
    }
  }]);

  return Model;
}();

var _default = Model;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJNb2RlbCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibGFuZ3VhZ2UiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXNldE92ZXJsYXlUb2tlbk1hcCIsIm92ZXJsYXlUb2tlbnMiLCJxdWVyeUV4cHJlc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsIk92ZXJsYXlUb2tlbk1hcCIsImZvckVhY2giLCJxdWVyeUV4cHJlc3Npb24iLCJub2RlcyIsIk92ZXJsYXlUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYWlkVG9rZW5JbmRleCIsImluZGV4T2YiLCJvdmVybGF5VG9rZW5JbmRleCIsIm92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwiQ2xhc3MiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyx3QixDQUF0QkQsaUI7O0lBRUZFLEs7QUFLSixpQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUFBOztBQUFBLDZDQUp2QjtBQUNoQixvQkFBY0M7QUFERSxLQUl1Qjs7QUFDdkMsU0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1YsVUFBTUgsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWUksR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUFrQixLQUFJLENBQUNDLGVBQUwsQ0FBcUJELEtBQXJCLEtBQStCRCxLQUFqRDtBQUFBLE9BQWhCLENBQWYsQ0FEVSxDQUM4RTs7QUFFeEYsYUFBT0wsTUFBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzZCQUVRSCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OzsyQkFFTVMsTyxFQUFTO0FBQ2QsV0FBS1IsTUFBTCxHQUFjLEtBQUtGLEtBQUwsQ0FBV1csUUFBWCxDQUFvQkQsT0FBcEIsQ0FBZDtBQUVBLFdBQUtQLElBQUwsR0FBWSxLQUFLRixNQUFMLENBQVlXLEtBQVosQ0FBa0IsS0FBS1YsTUFBdkIsQ0FBWjs7QUFFQSxVQUFJLEtBQUtDLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixhQUFLVSxvQkFBTDtBQUVBLGFBQUtDLGFBQUw7QUFDRDtBQUNGOzs7b0NBRWU7QUFBQTs7QUFDZCxVQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0MsZUFBakIsQ0FBekI7QUFFQUgsTUFBQUEsZ0JBQWdCLENBQUNJLE9BQWpCLENBQXlCLFVBQUNDLGVBQUQsRUFBcUI7QUFDNUMsWUFBTUMsS0FBSyxHQUFHeEIsaUJBQWlCLENBQUMsTUFBSSxDQUFDTSxJQUFOLEVBQVlpQixlQUFaLENBQS9CO0FBQUEsWUFDTUUsWUFBWSxHQUFHLE1BQUksQ0FBQ0osZUFBTCxDQUFxQkUsZUFBckIsQ0FEckI7QUFHQUMsUUFBQUEsS0FBSyxDQUFDRixPQUFOLENBQWMsVUFBQ2hCLElBQUQsRUFBVTtBQUN0QixjQUFNb0IsZ0JBQWdCLEdBQUdwQixJQUFJLENBQUNxQixtQkFBTCxFQUF6QjtBQUFBLGNBQ01DLGFBQWEsR0FBR0YsZ0JBRHRCO0FBQUEsY0FDd0M7QUFDbENHLFVBQUFBLGtCQUFrQixHQUFHLE1BQUksQ0FBQ3hCLE1BQUwsQ0FBWXlCLE9BQVosQ0FBb0JGLGFBQXBCLENBRjNCO0FBQUEsY0FHTUcsaUJBQWlCLEdBQUdGLGtCQUgxQjtBQUFBLGNBRytDO0FBQ3pDRyxVQUFBQSxZQUFZLEdBQUdQLFlBQVksQ0FBQ1EsaUJBQWIsQ0FBK0JMLGFBQS9CLENBSnJCOztBQU1BLFVBQUEsTUFBSSxDQUFDaEIsZUFBTCxDQUFxQm1CLGlCQUFyQixJQUEwQ0MsWUFBMUM7QUFDRCxTQVJEO0FBU0QsT0FiRDtBQWNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtwQixlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7Ozt1Q0FFeUJzQixLLEVBQU8vQixLLEVBQU9DLE0sRUFBUTtBQUM5QyxVQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUFBLFVBQ01DLElBQUksR0FBRyxJQURiO0FBQUEsVUFFTTZCLEtBQUssR0FBRyxJQUFJRCxLQUFKLENBQVUvQixLQUFWLEVBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLElBQWpDLENBRmQ7QUFJQSxhQUFPNkIsS0FBUDtBQUNEOzs7Ozs7ZUFHWWpDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi90b2tlbi9vdmVybGF5L2Vycm9yXCI7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBNb2RlbCB7XG4gIE92ZXJsYXlUb2tlbk1hcCA9IHtcbiAgICBcIi8vZXJyb3IvQCpcIjogRXJyb3JPdmVybGF5VG9rZW5cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihsZXhlciwgcGFyc2VyLCB0b2tlbnMsIG5vZGUpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldExhbmd1YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4sIGluZGV4KSA9PiB0aGlzLm92ZXJsYXlUb2tlbk1hcFtpbmRleF0gfHwgdG9rZW4pOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHVwZGF0ZShjb250ZW50KSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gdGhpcy5wYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuXG4gICAgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE92ZXJsYXlUb2tlbk1hcCgpO1xuXG4gICAgICB0aGlzLm92ZXJsYXlUb2tlbnMoKTtcbiAgICB9XG4gIH1cblxuICBvdmVybGF5VG9rZW5zKCkge1xuICAgIGNvbnN0IHF1ZXJ5RXhwcmVzc2lvbnMgPSBPYmplY3Qua2V5cyh0aGlzLk92ZXJsYXlUb2tlbk1hcCk7XG5cbiAgICBxdWVyeUV4cHJlc3Npb25zLmZvckVhY2goKHF1ZXJ5RXhwcmVzc2lvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbih0aGlzLm5vZGUsIHF1ZXJ5RXhwcmVzc2lvbiksXG4gICAgICAgICAgICBPdmVybGF5VG9rZW4gPSB0aGlzLk92ZXJsYXlUb2tlbk1hcFtxdWVyeUV4cHJlc3Npb25dO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0aGlzLnRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBvdmVybGF5VG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gb3ZlcmxheVRva2VuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldE92ZXJsYXlUb2tlbk1hcCgpIHtcbiAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcCA9IHt9O1xuICB9XG5cbiAgc3RhdGljIGZyb21MZXhlckFuZFBhcnNlcihDbGFzcywgbGV4ZXIsIHBhcnNlcikge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbW9kZWwgPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiJdfQ==