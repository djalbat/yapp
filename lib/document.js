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
        this.addOverlayTokens();
        this.postProcess();
      }
    }
  }, {
    key: "addOverlayTokens",
    value: function addOverlayTokens() {
      var _this2 = this;

      this.overlayTokenMap = {};
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
    key: "postProcess",
    value: function postProcess() {///
    }
  }], [{
    key: "fromLexerAndParser",
    value: function fromLexerAndParser(Class, lexer, parser) {
      var tokens = null,
          node = null,
          document = new Class(lexer, parser, tokens, node);
      return document;
    }
  }]);

  return Document;
}();

var _default = Document;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50LmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJEb2N1bWVudCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibGFuZ3VhZ2UiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJhZGRPdmVybGF5VG9rZW5zIiwicG9zdFByb2Nlc3MiLCJxdWVyeUV4cHJlc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsIk92ZXJsYXlUb2tlbk1hcCIsImZvckVhY2giLCJxdWVyeUV4cHJlc3Npb24iLCJub2RlcyIsIk92ZXJsYXlUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYWlkVG9rZW5JbmRleCIsImluZGV4T2YiLCJvdmVybGF5VG9rZW5JbmRleCIsIm92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwiQ2xhc3MiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyx3QixDQUF0QkQsaUI7O0lBRUZFLFE7QUFPSixvQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUFBOztBQUFBLDZDQU52QixFQU11Qjs7QUFBQSw2Q0FKdkI7QUFDaEIsb0JBQWNDO0FBREUsS0FJdUI7O0FBQ3ZDLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OztnQ0FFVztBQUFBOztBQUNWLFVBQU1ILE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlJLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsZUFBa0IsS0FBSSxDQUFDQyxlQUFMLENBQXFCRCxLQUFyQixLQUErQkQsS0FBakQ7QUFBQSxPQUFoQixDQUFmLENBRFUsQ0FDOEU7O0FBRXhGLGFBQU9MLE1BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs2QkFFUUgsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MkJBRU1TLE8sRUFBUztBQUNkLFdBQUtSLE1BQUwsR0FBYyxLQUFLRixLQUFMLENBQVdXLFFBQVgsQ0FBb0JELE9BQXBCLENBQWQ7QUFFQSxXQUFLUCxJQUFMLEdBQVksS0FBS0YsTUFBTCxDQUFZVyxLQUFaLENBQWtCLEtBQUtWLE1BQXZCLENBQVo7O0FBRUEsVUFBSSxLQUFLQyxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsYUFBS1UsZ0JBQUw7QUFFQSxhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O3VDQUVrQjtBQUFBOztBQUNqQixXQUFLTCxlQUFMLEdBQXVCLEVBQXZCO0FBRUEsVUFBTU0sZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLGVBQWpCLENBQXpCO0FBRUFILE1BQUFBLGdCQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxlQUFELEVBQXFCO0FBQzVDLFlBQU1DLEtBQUssR0FBR3hCLGlCQUFpQixDQUFDLE1BQUksQ0FBQ00sSUFBTixFQUFZaUIsZUFBWixDQUEvQjtBQUFBLFlBQ01FLFlBQVksR0FBRyxNQUFJLENBQUNKLGVBQUwsQ0FBcUJFLGVBQXJCLENBRHJCO0FBR0FDLFFBQUFBLEtBQUssQ0FBQ0YsT0FBTixDQUFjLFVBQUNoQixJQUFELEVBQVU7QUFDdEIsY0FBTW9CLGdCQUFnQixHQUFHcEIsSUFBSSxDQUFDcUIsbUJBQUwsRUFBekI7QUFBQSxjQUNNQyxhQUFhLEdBQUdGLGdCQUR0QjtBQUFBLGNBQ3dDO0FBQ2xDRyxVQUFBQSxrQkFBa0IsR0FBRyxNQUFJLENBQUN4QixNQUFMLENBQVl5QixPQUFaLENBQW9CRixhQUFwQixDQUYzQjtBQUFBLGNBR01HLGlCQUFpQixHQUFHRixrQkFIMUI7QUFBQSxjQUcrQztBQUN6Q0csVUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUpyQjs7QUFNQSxVQUFBLE1BQUksQ0FBQ2hCLGVBQUwsQ0FBcUJtQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsU0FSRDtBQVNELE9BYkQ7QUFjRDs7O2tDQUVhLENBQ1o7QUFDRDs7O3VDQUV5QkUsSyxFQUFPL0IsSyxFQUFPQyxNLEVBQVE7QUFDOUMsVUFBTUMsTUFBTSxHQUFHLElBQWY7QUFBQSxVQUNNQyxJQUFJLEdBQUcsSUFEYjtBQUFBLFVBRU02QixRQUFRLEdBQUcsSUFBSUQsS0FBSixDQUFVL0IsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxJQUFqQyxDQUZqQjtBQUlBLGFBQU82QixRQUFQO0FBQ0Q7Ozs7OztlQUdZakMsUSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IEVycm9yT3ZlcmxheVRva2VuIGZyb20gXCIuL3Rva2VuL292ZXJsYXkvZXJyb3JcIjtcblxuY29uc3QgeyBxdWVyeUJ5RXhwcmVzc2lvbiB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgb3ZlcmxheVRva2VuTWFwID0ge307XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSkge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2U7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMubWFwKCh0b2tlbiwgaW5kZXgpID0+IHRoaXMub3ZlcmxheVRva2VuTWFwW2luZGV4XSB8fCB0b2tlbik7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgdXBkYXRlKGNvbnRlbnQpIHtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSB0aGlzLnBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG5cbiAgICBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFkZE92ZXJsYXlUb2tlbnMoKTtcblxuICAgICAgdGhpcy5wb3N0UHJvY2VzcygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZE92ZXJsYXlUb2tlbnMoKSB7XG4gICAgdGhpcy5vdmVybGF5VG9rZW5NYXAgPSB7fTtcblxuICAgIGNvbnN0IHF1ZXJ5RXhwcmVzc2lvbnMgPSBPYmplY3Qua2V5cyh0aGlzLk92ZXJsYXlUb2tlbk1hcCk7XG5cbiAgICBxdWVyeUV4cHJlc3Npb25zLmZvckVhY2goKHF1ZXJ5RXhwcmVzc2lvbikgPT4ge1xuICAgICAgY29uc3Qgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvbih0aGlzLm5vZGUsIHF1ZXJ5RXhwcmVzc2lvbiksXG4gICAgICAgICAgICBPdmVybGF5VG9rZW4gPSB0aGlzLk92ZXJsYXlUb2tlbk1hcFtxdWVyeUV4cHJlc3Npb25dO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgb3ZlcmxhaWRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgICAgICBvdmVybGFpZFRva2VuSW5kZXggPSB0aGlzLnRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBvdmVybGF5VG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5VG9rZW5NYXBbb3ZlcmxheVRva2VuSW5kZXhdID0gb3ZlcmxheVRva2VuO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwb3N0UHJvY2VzcygpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGV4ZXJBbmRQYXJzZXIoQ2xhc3MsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGRvY3VtZW50ID0gbmV3IENsYXNzKGxleGVyLCBwYXJzZXIsIHRva2Vucywgbm9kZSk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnQ7XG4iXX0=