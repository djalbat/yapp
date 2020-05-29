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
          model = new Class(lexer, parser, tokens, node);
      return model;
    }
  }]);

  return Model;
}();

var _default = Model;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbInF1ZXJ5QnlFeHByZXNzaW9uIiwicXVlcnlVdGlsaXRpZXMiLCJNb2RlbCIsImxleGVyIiwicGFyc2VyIiwidG9rZW5zIiwibm9kZSIsIkVycm9yT3ZlcmxheVRva2VuIiwibGFuZ3VhZ2UiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwiY29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJhZGRPdmVybGF5VG9rZW5zIiwicG9zdFByb2Nlc3MiLCJxdWVyeUV4cHJlc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsIk92ZXJsYXlUb2tlbk1hcCIsImZvckVhY2giLCJxdWVyeUV4cHJlc3Npb24iLCJub2RlcyIsIk92ZXJsYXlUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRTaWduaWZpY2FudFRva2VuIiwib3ZlcmxhaWRUb2tlbiIsIm92ZXJsYWlkVG9rZW5JbmRleCIsImluZGV4T2YiLCJvdmVybGF5VG9rZW5JbmRleCIsIm92ZXJsYXlUb2tlbiIsImZyb21PdmVybGFpZFRva2VuIiwiQ2xhc3MiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRVFBLGlCLEdBQXNCQyx3QixDQUF0QkQsaUI7O0lBRUZFLEs7QUFPSixpQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUFBOztBQUFBLDZDQU52QixFQU11Qjs7QUFBQSw2Q0FKdkI7QUFDaEIsb0JBQWNDO0FBREUsS0FJdUI7O0FBQ3ZDLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLRSxRQUFaO0FBQ0Q7OztnQ0FFVztBQUFBOztBQUNWLFVBQU1ILE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlJLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsZUFBa0IsS0FBSSxDQUFDQyxlQUFMLENBQXFCRCxLQUFyQixLQUErQkQsS0FBakQ7QUFBQSxPQUFoQixDQUFmLENBRFUsQ0FDOEU7O0FBRXhGLGFBQU9MLE1BQVA7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs2QkFFUUgsSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MkJBRU1TLE8sRUFBUztBQUNkLFdBQUtSLE1BQUwsR0FBYyxLQUFLRixLQUFMLENBQVdXLFFBQVgsQ0FBb0JELE9BQXBCLENBQWQ7QUFFQSxXQUFLUCxJQUFMLEdBQVksS0FBS0YsTUFBTCxDQUFZVyxLQUFaLENBQWtCLEtBQUtWLE1BQXZCLENBQVo7O0FBRUEsVUFBSSxLQUFLQyxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsYUFBS1UsZ0JBQUw7QUFFQSxhQUFLQyxXQUFMO0FBQ0Q7QUFDRjs7O3VDQUVrQjtBQUFBOztBQUNqQixXQUFLTCxlQUFMLEdBQXVCLEVBQXZCO0FBRUEsVUFBTU0sZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLGVBQWpCLENBQXpCO0FBRUFILE1BQUFBLGdCQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxlQUFELEVBQXFCO0FBQzVDLFlBQU1DLEtBQUssR0FBR3hCLGlCQUFpQixDQUFDLE1BQUksQ0FBQ00sSUFBTixFQUFZaUIsZUFBWixDQUEvQjtBQUFBLFlBQ01FLFlBQVksR0FBRyxNQUFJLENBQUNKLGVBQUwsQ0FBcUJFLGVBQXJCLENBRHJCO0FBR0FDLFFBQUFBLEtBQUssQ0FBQ0YsT0FBTixDQUFjLFVBQUNoQixJQUFELEVBQVU7QUFDdEIsY0FBTW9CLGdCQUFnQixHQUFHcEIsSUFBSSxDQUFDcUIsbUJBQUwsRUFBekI7QUFBQSxjQUNNQyxhQUFhLEdBQUdGLGdCQUR0QjtBQUFBLGNBQ3dDO0FBQ2xDRyxVQUFBQSxrQkFBa0IsR0FBRyxNQUFJLENBQUN4QixNQUFMLENBQVl5QixPQUFaLENBQW9CRixhQUFwQixDQUYzQjtBQUFBLGNBR01HLGlCQUFpQixHQUFHRixrQkFIMUI7QUFBQSxjQUcrQztBQUN6Q0csVUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUpyQjs7QUFNQSxVQUFBLE1BQUksQ0FBQ2hCLGVBQUwsQ0FBcUJtQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsU0FSRDtBQVNELE9BYkQ7QUFjRDs7O2tDQUVhLENBQ1o7QUFDRDs7O3VDQUV5QkUsSyxFQUFPL0IsSyxFQUFPQyxNLEVBQVE7QUFDOUMsVUFBTUMsTUFBTSxHQUFHLElBQWY7QUFBQSxVQUNNQyxJQUFJLEdBQUcsSUFEYjtBQUFBLFVBRU02QixLQUFLLEdBQUcsSUFBSUQsS0FBSixDQUFVL0IsS0FBVixFQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDQyxJQUFqQyxDQUZkO0FBSUEsYUFBTzZCLEtBQVA7QUFDRDs7Ozs7O2VBR1lqQyxLIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHF1ZXJ5VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRXJyb3JPdmVybGF5VG9rZW4gZnJvbSBcIi4vdG9rZW4vb3ZlcmxheS9lcnJvclwiO1xuXG5jb25zdCB7IHF1ZXJ5QnlFeHByZXNzaW9uIH0gPSBxdWVyeVV0aWxpdGllcztcblxuY2xhc3MgTW9kZWwge1xuICBvdmVybGF5VG9rZW5NYXAgPSB7fTtcblxuICBPdmVybGF5VG9rZW5NYXAgPSB7XG4gICAgXCIvL2Vycm9yL0AqXCI6IEVycm9yT3ZlcmxheVRva2VuXG4gIH07XG5cbiAgY29uc3RydWN0b3IobGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXRMYW5ndWFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2Vucy5tYXAoKHRva2VuLCBpbmRleCkgPT4gdGhpcy5vdmVybGF5VG9rZW5NYXBbaW5kZXhdIHx8IHRva2VuKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gIH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICB1cGRhdGUoY29udGVudCkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHRoaXMucGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcblxuICAgIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWRkT3ZlcmxheVRva2VucygpO1xuXG4gICAgICB0aGlzLnBvc3RQcm9jZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkT3ZlcmxheVRva2VucygpIHtcbiAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcCA9IHt9O1xuXG4gICAgY29uc3QgcXVlcnlFeHByZXNzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuT3ZlcmxheVRva2VuTWFwKTtcblxuICAgIHF1ZXJ5RXhwcmVzc2lvbnMuZm9yRWFjaCgocXVlcnlFeHByZXNzaW9uKSA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKHRoaXMubm9kZSwgcXVlcnlFeHByZXNzaW9uKSxcbiAgICAgICAgICAgIE92ZXJsYXlUb2tlbiA9IHRoaXMuT3ZlcmxheVRva2VuTWFwW3F1ZXJ5RXhwcmVzc2lvbl07XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgICAgICBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2Yob3ZlcmxhaWRUb2tlbiksXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbkluZGV4ID0gb3ZlcmxhaWRUb2tlbkluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYXlUb2tlbiA9IE92ZXJsYXlUb2tlbi5mcm9tT3ZlcmxhaWRUb2tlbihvdmVybGFpZFRva2VuKTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBvdmVybGF5VG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHBvc3RQcm9jZXNzKCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MZXhlckFuZFBhcnNlcihDbGFzcywgbGV4ZXIsIHBhcnNlcikge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbW9kZWwgPSBuZXcgQ2xhc3MobGV4ZXIsIHBhcnNlciwgdG9rZW5zLCBub2RlKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiJdfQ==