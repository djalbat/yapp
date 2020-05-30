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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJNb2RlbCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibGFuZ3VhZ2UiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXNldE92ZXJsYXlUb2tlbk1hcCIsIm92ZXJsYXlUb2tlbnMiLCJxdWVyeUV4cHJlc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsIk92ZXJsYXlUb2tlbk1hcCIsImZvckVhY2giLCJxdWVyeUV4cHJlc3Npb24iLCJub2RlcyIsIk92ZXJsYXlUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYWlkVG9rZW5JbmRleCIsImluZGV4T2YiLCJvdmVybGF5VG9rZW5JbmRleCIsIm92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwiQ2xhc3MiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyx3QixDQUF0QkQsaUI7O0lBRUZFLEs7QUFPSixpQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUFBOztBQUFBLDZDQU52QixFQU11Qjs7QUFBQSw2Q0FKdkI7QUFDaEIsb0JBQWNDO0FBREUsS0FJdUI7O0FBQ3ZDLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OztnQ0FFVztBQUFBOztBQUNWLFVBQU1ILE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlJLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsZUFBa0IsS0FBSSxDQUFDQyxlQUFMLENBQXFCRCxLQUFyQixLQUErQkQsS0FBakQ7QUFBQSxPQUFoQixDQUFmLENBRFUsQ0FDOEU7O0FBRXhGLGFBQU9MLE1BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs2QkFFUUgsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MkJBRU1TLE8sRUFBUztBQUNkLFdBQUtSLE1BQUwsR0FBYyxLQUFLRixLQUFMLENBQVdXLFFBQVgsQ0FBb0JELE9BQXBCLENBQWQ7QUFFQSxXQUFLUCxJQUFMLEdBQVksS0FBS0YsTUFBTCxDQUFZVyxLQUFaLENBQWtCLEtBQUtWLE1BQXZCLENBQVo7O0FBRUEsVUFBSSxLQUFLQyxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsYUFBS1Usb0JBQUw7QUFFQSxhQUFLQyxhQUFMO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQUE7O0FBQ2QsVUFBTUMsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLGVBQWpCLENBQXpCO0FBRUFILE1BQUFBLGdCQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxlQUFELEVBQXFCO0FBQzVDLFlBQU1DLEtBQUssR0FBR3hCLGlCQUFpQixDQUFDLE1BQUksQ0FBQ00sSUFBTixFQUFZaUIsZUFBWixDQUEvQjtBQUFBLFlBQ01FLFlBQVksR0FBRyxNQUFJLENBQUNKLGVBQUwsQ0FBcUJFLGVBQXJCLENBRHJCO0FBR0FDLFFBQUFBLEtBQUssQ0FBQ0YsT0FBTixDQUFjLFVBQUNoQixJQUFELEVBQVU7QUFDdEIsY0FBTW9CLGdCQUFnQixHQUFHcEIsSUFBSSxDQUFDcUIsbUJBQUwsRUFBekI7QUFBQSxjQUNNQyxhQUFhLEdBQUdGLGdCQUR0QjtBQUFBLGNBQ3dDO0FBQ2xDRyxVQUFBQSxrQkFBa0IsR0FBRyxNQUFJLENBQUN4QixNQUFMLENBQVl5QixPQUFaLENBQW9CRixhQUFwQixDQUYzQjtBQUFBLGNBR01HLGlCQUFpQixHQUFHRixrQkFIMUI7QUFBQSxjQUcrQztBQUN6Q0csVUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUpyQjs7QUFNQSxVQUFBLE1BQUksQ0FBQ2hCLGVBQUwsQ0FBcUJtQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsU0FSRDtBQVNELE9BYkQ7QUFjRDs7OzJDQUVzQjtBQUNyQixXQUFLcEIsZUFBTCxHQUF1QixFQUF2QjtBQUNEOzs7dUNBRXlCc0IsSyxFQUFPL0IsSyxFQUFPQyxNLEVBQVE7QUFDOUMsVUFBTUMsTUFBTSxHQUFHLElBQWY7QUFBQSxVQUNNQyxJQUFJLEdBQUcsSUFEYjtBQUFBLFVBRU02QixLQUFLLEdBQUcsSUFBSUQsS0FBSixDQUFVL0IsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxJQUFqQyxDQUZkO0FBSUEsYUFBTzZCLEtBQVA7QUFDRDs7Ozs7O2VBR1lqQyxLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JPdmVybGF5VG9rZW4gZnJvbSBcIi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY2xhc3MgTW9kZWwge1xuICBvdmVybGF5VG9rZW5NYXAgPSB7fSA7XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2U7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMubWFwKCh0b2tlbiwgaW5kZXgpID0+IHRoaXMub3ZlcmxheVRva2VuTWFwW2luZGV4XSB8fCB0b2tlbik7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0T3ZlcmxheVRva2VuTWFwKCk7XG5cbiAgICAgIHRoaXMub3ZlcmxheVRva2VucygpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJsYXlUb2tlbnMoKSB7XG4gICAgY29uc3QgcXVlcnlFeHByZXNzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuT3ZlcmxheVRva2VuTWFwKTtcblxuICAgIHF1ZXJ5RXhwcmVzc2lvbnMuZm9yRWFjaCgocXVlcnlFeHByZXNzaW9uKSA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKHRoaXMubm9kZSwgcXVlcnlFeHByZXNzaW9uKSxcbiAgICAgICAgICAgIE92ZXJsYXlUb2tlbiA9IHRoaXMuT3ZlcmxheVRva2VuTWFwW3F1ZXJ5RXhwcmVzc2lvbl07XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbiA9IE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBvdmVybGF5VG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0T3ZlcmxheVRva2VuTWFwKCkge1xuICAgIHRoaXMub3ZlcmxheVRva2VuTWFwID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbUxleGVyQW5kUGFyc2VyKENsYXNzLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBDbGFzcyhsZXhlciwgcGFyc2VyLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIl19