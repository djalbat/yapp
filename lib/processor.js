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

var Processor = /*#__PURE__*/function () {
  function Processor() {
    _classCallCheck(this, Processor);

    _defineProperty(this, "overlayTokenMap", {});

    _defineProperty(this, "OverlayTokenMap", {
      "//error/@*": _error["default"]
    });
  }

  _createClass(Processor, [{
    key: "getTokens",
    value: function getTokens(tokens) {
      var _this = this;

      tokens = tokens !== null ? tokens.map(function (token, index) {
        return _this.overlayTokenMap[index] || token;
      }) : ///
      null;
      return tokens;
    }
  }, {
    key: "process",
    value: function process(tokens, node) {
      if (node !== null) {
        this.resetOverlayTokenMap();
        this.overlayTokens(tokens, node);
      }
    }
  }, {
    key: "overlayTokens",
    value: function overlayTokens(tokens, node) {
      var _this2 = this;

      var queryExpressions = Object.keys(this.OverlayTokenMap);
      queryExpressions.forEach(function (queryExpression) {
        var nodes = queryByExpression(node, queryExpression),
            OverlayToken = _this2.OverlayTokenMap[queryExpression];
        nodes.forEach(function (node) {
          var significantToken;
          significantToken = node.getSignificantToken();
          var overlaidToken = significantToken,
              ///
          overlaidTokenIndex = tokens.indexOf(overlaidToken),
              overlayTokenIndex = overlaidTokenIndex,
              ///
          overlayToken = OverlayToken.fromOverlaidToken(overlaidToken);
          significantToken = overlayToken; ///

          node.setSignificantToken(significantToken);
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
    key: "fromNothing",
    value: function fromNothing(Class) {
      return new Class();
    }
  }]);

  return Processor;
}();

var _default = Processor;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3Nvci5qcyJdLCJuYW1lcyI6WyJxdWVyeUJ5RXhwcmVzc2lvbiIsInF1ZXJ5VXRpbGl0aWVzIiwiUHJvY2Vzc29yIiwiRXJyb3JPdmVybGF5VG9rZW4iLCJ0b2tlbnMiLCJtYXAiLCJ0b2tlbiIsImluZGV4Iiwib3ZlcmxheVRva2VuTWFwIiwibm9kZSIsInJlc2V0T3ZlcmxheVRva2VuTWFwIiwib3ZlcmxheVRva2VucyIsInF1ZXJ5RXhwcmVzc2lvbnMiLCJPYmplY3QiLCJrZXlzIiwiT3ZlcmxheVRva2VuTWFwIiwiZm9yRWFjaCIsInF1ZXJ5RXhwcmVzc2lvbiIsIm5vZGVzIiwiT3ZlcmxheVRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImdldFNpZ25pZmljYW50VG9rZW4iLCJvdmVybGFpZFRva2VuIiwib3ZlcmxhaWRUb2tlbkluZGV4IiwiaW5kZXhPZiIsIm92ZXJsYXlUb2tlbkluZGV4Iiwib3ZlcmxheVRva2VuIiwiZnJvbU92ZXJsYWlkVG9rZW4iLCJzZXRTaWduaWZpY2FudFRva2VuIiwiQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVRQSxpQixHQUFzQkMsd0IsQ0FBdEJELGlCOztJQUVGRSxTOzs7OzZDQUNjLEU7OzZDQUVBO0FBQ2hCLG9CQUFjQztBQURFLEs7Ozs7OzhCQUlSQyxNLEVBQVE7QUFBQTs7QUFDaEJBLE1BQUFBLE1BQU0sR0FBSUEsTUFBTSxLQUFLLElBQVosR0FDRUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsZUFBa0IsS0FBSSxDQUFDQyxlQUFMLENBQXFCRCxLQUFyQixLQUErQkQsS0FBakQ7QUFBQSxPQUFYLENBREYsR0FDdUU7QUFDbkUsVUFGYjtBQUlBLGFBQU9GLE1BQVA7QUFDRDs7OzRCQUVPQSxNLEVBQVFLLEksRUFBTTtBQUNwQixVQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixhQUFLQyxvQkFBTDtBQUVBLGFBQUtDLGFBQUwsQ0FBbUJQLE1BQW5CLEVBQTJCSyxJQUEzQjtBQUNEO0FBQ0Y7OztrQ0FFYUwsTSxFQUFRSyxJLEVBQU07QUFBQTs7QUFDMUIsVUFBTUcsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtDLGVBQWpCLENBQXpCO0FBRUFILE1BQUFBLGdCQUFnQixDQUFDSSxPQUFqQixDQUF5QixVQUFDQyxlQUFELEVBQXFCO0FBQzVDLFlBQU1DLEtBQUssR0FBR2xCLGlCQUFpQixDQUFDUyxJQUFELEVBQU9RLGVBQVAsQ0FBL0I7QUFBQSxZQUNNRSxZQUFZLEdBQUcsTUFBSSxDQUFDSixlQUFMLENBQXFCRSxlQUFyQixDQURyQjtBQUdBQyxRQUFBQSxLQUFLLENBQUNGLE9BQU4sQ0FBYyxVQUFDUCxJQUFELEVBQVU7QUFDdEIsY0FBSVcsZ0JBQUo7QUFFQUEsVUFBQUEsZ0JBQWdCLEdBQUdYLElBQUksQ0FBQ1ksbUJBQUwsRUFBbkI7QUFFQSxjQUFNQyxhQUFhLEdBQUdGLGdCQUF0QjtBQUFBLGNBQXdDO0FBQ2xDRyxVQUFBQSxrQkFBa0IsR0FBR25CLE1BQU0sQ0FBQ29CLE9BQVAsQ0FBZUYsYUFBZixDQUQzQjtBQUFBLGNBRU1HLGlCQUFpQixHQUFHRixrQkFGMUI7QUFBQSxjQUUrQztBQUN6Q0csVUFBQUEsWUFBWSxHQUFHUCxZQUFZLENBQUNRLGlCQUFiLENBQStCTCxhQUEvQixDQUhyQjtBQUtBRixVQUFBQSxnQkFBZ0IsR0FBR00sWUFBbkIsQ0FWc0IsQ0FVWTs7QUFFbENqQixVQUFBQSxJQUFJLENBQUNtQixtQkFBTCxDQUF5QlIsZ0JBQXpCO0FBRUEsVUFBQSxNQUFJLENBQUNaLGVBQUwsQ0FBcUJpQixpQkFBckIsSUFBMENDLFlBQTFDO0FBQ0QsU0FmRDtBQWdCRCxPQXBCRDtBQXFCRDs7OzJDQUVzQjtBQUNyQixXQUFLbEIsZUFBTCxHQUF1QixFQUF2QjtBQUNEOzs7Z0NBRWtCcUIsSyxFQUFRO0FBQUUsYUFBTyxJQUFJQSxLQUFKLEVBQVA7QUFBcUI7Ozs7OztlQUdyQzNCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBFcnJvck92ZXJsYXlUb2tlbiBmcm9tIFwiLi90b2tlbi9vdmVybGF5L2Vycm9yXCI7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb24gfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICBvdmVybGF5VG9rZW5NYXAgPSB7fSA7XG5cbiAgT3ZlcmxheVRva2VuTWFwID0ge1xuICAgIFwiLy9lcnJvci9AKlwiOiBFcnJvck92ZXJsYXlUb2tlblxuICB9O1xuXG4gIGdldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0b2tlbnMgPSAodG9rZW5zICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICB0b2tlbnMubWFwKCh0b2tlbiwgaW5kZXgpID0+IHRoaXMub3ZlcmxheVRva2VuTWFwW2luZGV4XSB8fCB0b2tlbikgOiAvLy9cbiAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBwcm9jZXNzKHRva2Vucywgbm9kZSkge1xuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0T3ZlcmxheVRva2VuTWFwKCk7XG5cbiAgICAgIHRoaXMub3ZlcmxheVRva2Vucyh0b2tlbnMsIG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJsYXlUb2tlbnModG9rZW5zLCBub2RlKSB7XG4gICAgY29uc3QgcXVlcnlFeHByZXNzaW9ucyA9IE9iamVjdC5rZXlzKHRoaXMuT3ZlcmxheVRva2VuTWFwKTtcblxuICAgIHF1ZXJ5RXhwcmVzc2lvbnMuZm9yRWFjaCgocXVlcnlFeHByZXNzaW9uKSA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHF1ZXJ5QnlFeHByZXNzaW9uKG5vZGUsIHF1ZXJ5RXhwcmVzc2lvbiksXG4gICAgICAgICAgICBPdmVybGF5VG9rZW4gPSB0aGlzLk92ZXJsYXlUb2tlbk1hcFtxdWVyeUV4cHJlc3Npb25dO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGxldCBzaWduaWZpY2FudFRva2VuO1xuXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBub2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgICAgICBjb25zdCBvdmVybGFpZFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgICAgIG92ZXJsYWlkVG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKG92ZXJsYWlkVG9rZW4pLFxuICAgICAgICAgICAgICBvdmVybGF5VG9rZW5JbmRleCA9IG92ZXJsYWlkVG9rZW5JbmRleCwgIC8vL1xuICAgICAgICAgICAgICBvdmVybGF5VG9rZW4gPSBPdmVybGF5VG9rZW4uZnJvbU92ZXJsYWlkVG9rZW4ob3ZlcmxhaWRUb2tlbik7XG5cbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG92ZXJsYXlUb2tlbjsgIC8vL1xuXG4gICAgICAgIG5vZGUuc2V0U2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICB0aGlzLm92ZXJsYXlUb2tlbk1hcFtvdmVybGF5VG9rZW5JbmRleF0gPSBvdmVybGF5VG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0T3ZlcmxheVRva2VuTWFwKCkge1xuICAgIHRoaXMub3ZlcmxheVRva2VuTWFwID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MgKSB7IHJldHVybiBuZXcgQ2xhc3MoKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzb3I7XG4iXX0=