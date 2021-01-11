"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BoundedElement = /*#__PURE__*/function (_Element) {
  _inherits(BoundedElement, _Element);

  var _super = _createSuper(BoundedElement);

  function BoundedElement() {
    _classCallCheck(this, BoundedElement);

    return _super.apply(this, arguments);
  }

  _createClass(BoundedElement, [{
    key: "setBounds",
    value: function setBounds(bounds) {
      var top = bounds.getTop(),
          left = bounds.getLeft(),
          width = bounds.getWidth(),
          height = bounds.getHeight();
      this.resize(width, height);
      this.position(top, left);
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      this.setWidth(width);
      this.setHeight(height);
    }
  }, {
    key: "position",
    value: function position(top, left) {
      top = "".concat(top, "px");
      left = "".concat(left, "px");
      var css = {
        top: top,
        left: left
      };
      this.css(css);
    }
  }]);

  return BoundedElement;
}(_easy.Element);

exports["default"] = BoundedElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdW5kZWQuanMiXSwibmFtZXMiOlsiQm91bmRlZEVsZW1lbnQiLCJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzhCQUNUQyxNLEVBQVE7QUFDaEIsVUFBTUMsR0FBRyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsRUFBWjtBQUFBLFVBQ01DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxPQUFQLEVBRGI7QUFBQSxVQUVNQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sUUFBUCxFQUZkO0FBQUEsVUFHTUMsTUFBTSxHQUFHUCxNQUFNLENBQUNRLFNBQVAsRUFIZjtBQUtBLFdBQUtDLE1BQUwsQ0FBWUosS0FBWixFQUFtQkUsTUFBbkI7QUFDQSxXQUFLRyxRQUFMLENBQWNULEdBQWQsRUFBbUJFLElBQW5CO0FBQ0Q7OzsyQkFFTUUsSyxFQUFPRSxNLEVBQVE7QUFDcEIsV0FBS0ksUUFBTCxDQUFjTixLQUFkO0FBQ0EsV0FBS08sU0FBTCxDQUFlTCxNQUFmO0FBQ0Q7Ozs2QkFFUU4sRyxFQUFLRSxJLEVBQU07QUFDbEJGLE1BQUFBLEdBQUcsYUFBTUEsR0FBTixPQUFIO0FBQ0FFLE1BQUFBLElBQUksYUFBTUEsSUFBTixPQUFKO0FBRUEsVUFBTVUsR0FBRyxHQUFHO0FBQ1ZaLFFBQUFBLEdBQUcsRUFBSEEsR0FEVTtBQUVWRSxRQUFBQSxJQUFJLEVBQUpBO0FBRlUsT0FBWjtBQUtBLFdBQUtVLEdBQUwsQ0FBU0EsR0FBVDtBQUNEOzs7O0VBMUJ5Q0MsYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRlZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2V0Qm91bmRzKGJvdW5kcykge1xuICAgIGNvbnN0IHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRzLmdldExlZnQoKSxcbiAgICAgICAgICB3aWR0aCA9IGJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGJvdW5kcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIHBvc2l0aW9uKHRvcCwgbGVmdCkge1xuICAgIHRvcCA9IGAke3RvcH1weGA7XG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xuXG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgdG9wLFxuICAgICAgbGVmdFxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG59XG4iXX0=