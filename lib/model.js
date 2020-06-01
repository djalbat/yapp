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

    _defineProperty(this, "overlayTokenMap", {});

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
        this.resetOverlayTokenMap(); // this.overlayTokens();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJNb2RlbCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibGFuZ3VhZ2UiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXNldE92ZXJsYXlUb2tlbk1hcCIsInF1ZXJ5RXhwcmVzc2lvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3ZlcmxheVRva2VuTWFwIiwiZm9yRWFjaCIsInF1ZXJ5RXhwcmVzc2lvbiIsIm5vZGVzIiwiT3ZlcmxheVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm92ZXJsYXlUb2tlbkluZGV4Iiwib3ZlcmxheVRva2VuIiwiZnJvbU92ZXJsYWlkVG9rZW4iLCJDbGFzcyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFUUEsaUIsR0FBc0JDLHdCLENBQXRCRCxpQjs7SUFFRkUsSztBQU9KLGlCQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQUE7O0FBQUEsNkNBTnZCLEVBTXVCOztBQUFBLDZDQUp2QjtBQUNoQixvQkFBY0M7QUFERSxLQUl1Qjs7QUFDdkMsU0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7O2dDQUVXO0FBQUE7O0FBQ1YsVUFBTUgsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWUksR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUFrQixLQUFJLENBQUNDLGVBQUwsQ0FBcUJELEtBQXJCLEtBQStCRCxLQUFqRDtBQUFBLE9BQWhCLENBQWYsQ0FEVSxDQUM4RTs7QUFFeEYsYUFBT0wsTUFBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzZCQUVRSCxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OzsyQkFFTVMsTyxFQUFTO0FBQ2QsV0FBS1IsTUFBTCxHQUFjLEtBQUtGLEtBQUwsQ0FBV1csUUFBWCxDQUFvQkQsT0FBcEIsQ0FBZDtBQUVBLFdBQUtQLElBQUwsR0FBWSxLQUFLRixNQUFMLENBQVlXLEtBQVosQ0FBa0IsS0FBS1YsTUFBdkIsQ0FBWjs7QUFFQSxVQUFJLEtBQUtDLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN0QixhQUFLVSxvQkFBTCxHQURzQixDQUd0QjtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUFBOztBQUNkLFVBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxlQUFqQixDQUF6QjtBQUVBSCxNQUFBQSxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUIsVUFBQ0MsZUFBRCxFQUFxQjtBQUM1QyxZQUFNQyxLQUFLLEdBQUd2QixpQkFBaUIsQ0FBQyxNQUFJLENBQUNNLElBQU4sRUFBWWdCLGVBQVosQ0FBL0I7QUFBQSxZQUNNRSxZQUFZLEdBQUcsTUFBSSxDQUFDSixlQUFMLENBQXFCRSxlQUFyQixDQURyQjtBQUdBQyxRQUFBQSxLQUFLLENBQUNGLE9BQU4sQ0FBYyxVQUFDZixJQUFELEVBQVU7QUFDdEIsY0FBTW1CLGdCQUFnQixHQUFHbkIsSUFBSSxDQUFDb0IsbUJBQUwsRUFBekI7QUFBQSxjQUNNQyxhQUFhLEdBQUdGLGdCQUR0QjtBQUFBLGNBQ3dDO0FBQ2xDRyxVQUFBQSxrQkFBa0IsR0FBRyxNQUFJLENBQUN2QixNQUFMLENBQVl3QixPQUFaLENBQW9CRixhQUFwQixDQUYzQjtBQUFBLGNBR01HLGlCQUFpQixHQUFHRixrQkFIMUI7QUFBQSxjQUcrQztBQUN6Q0csVUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUpyQjs7QUFNQSxVQUFBLE1BQUksQ0FBQ2YsZUFBTCxDQUFxQmtCLGlCQUFyQixJQUEwQ0MsWUFBMUM7QUFDRCxTQVJEO0FBU0QsT0FiRDtBQWNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtuQixlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7Ozt1Q0FFeUJxQixLLEVBQU85QixLLEVBQU9DLE0sRUFBUTtBQUM5QyxVQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUFBLFVBQ01DLElBQUksR0FBRyxJQURiO0FBQUEsVUFFTTRCLEtBQUssR0FBRyxJQUFJRCxLQUFKLENBQVU5QixLQUFWLEVBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLElBQWpDLENBRmQ7QUFJQSxhQUFPNEIsS0FBUDtBQUNEOzs7Ozs7ZUFHWWhDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi90b2tlbi9vdmVybGF5L2Vycm9yXCI7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBNb2RlbCB7XG4gIG92ZXJsYXlUb2tlbk1hcCA9IHt9IDtcblxuICBPdmVybGF5VG9rZW5NYXAgPSB7XG4gICAgXCIvL2Vycm9yL0AqXCI6IEVycm9yT3ZlcmxheVRva2VuXG4gIH07XG5cbiAgY29uc3RydWN0b3IobGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2Vucy5tYXAoKHRva2VuLCBpbmRleCkgPT4gdGhpcy5vdmVybGF5VG9rZW5NYXBbaW5kZXhdIHx8IHRva2VuKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gIH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICB1cGRhdGUoY29udGVudCkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMucGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRPdmVybGF5VG9rZW5NYXAoKTtcblxuICAgICAgLy8gdGhpcy5vdmVybGF5VG9rZW5zKCk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcmxheVRva2VucygpIHtcbiAgICBjb25zdCBxdWVyeUV4cHJlc3Npb25zID0gT2JqZWN0LmtleXModGhpcy5PdmVybGF5VG9rZW5NYXApO1xuXG4gICAgcXVlcnlFeHByZXNzaW9ucy5mb3JFYWNoKChxdWVyeUV4cHJlc3Npb24pID0+IHtcbiAgICAgIGNvbnN0IG5vZGVzID0gcXVlcnlCeUV4cHJlc3Npb24odGhpcy5ub2RlLCBxdWVyeUV4cHJlc3Npb24pLFxuICAgICAgICAgICAgT3ZlcmxheVRva2VuID0gdGhpcy5PdmVybGF5VG9rZW5NYXBbcXVlcnlFeHByZXNzaW9uXTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gbm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW4gPSBzaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbkluZGV4ID0gdGhpcy50b2tlbnMuaW5kZXhPZihvdmVybGFpZFRva2VuKSxcbiAgICAgICAgICAgICAgb3ZlcmxheVRva2VuSW5kZXggPSBvdmVybGFpZFRva2VuSW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgb3ZlcmxheVRva2VuID0gT3ZlcmxheVRva2VuLmZyb21PdmVybGFpZFRva2VuKG92ZXJsYWlkVG9rZW4pO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheVRva2VuTWFwW292ZXJsYXlUb2tlbkluZGV4XSA9IG92ZXJsYXlUb2tlbjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRPdmVybGF5VG9rZW5NYXAoKSB7XG4gICAgdGhpcy5vdmVybGF5VG9rZW5NYXAgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGV4ZXJBbmRQYXJzZXIoQ2xhc3MsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIG1vZGVsID0gbmV3IENsYXNzKGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iXX0=