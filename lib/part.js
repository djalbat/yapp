"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _occamStyles = require("occam-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  position: absolute;\n  \n  .selection {\n    background-color: ", ";\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectionBackgroundColour = _occamStyles.prettyPrinterScheme.selectionBackgroundColour;
var firaCodeLineHeight = (0, _occamStyles.getFiraCodeLineHeight)(),
    rowHeight = firaCodeLineHeight; ///

var Part = /*#__PURE__*/function (_Element) {
  _inherits(Part, _Element);

  var _super = _createSuper(Part);

  function Part() {
    var _this;

    _classCallCheck(this, Part);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "rowHeight", rowHeight);

    return _this;
  }

  _createClass(Part, [{
    key: "update",
    value: function update(top, left, width, height) {
      top = "".concat(top, "px");
      left = "".concat(left, "px");
      width = "".concat(width, "px");
      height = "".concat(height, "px");
      var css = {
        top: top,
        left: left,
        width: width,
        height: height
      };
      this.css(css);
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var selection = properties.selection;

      if (selection) {
        this.addClass("selection");
      }
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var part = _easy.Element.fromClass(Class, properties);

      part.initialise(properties);
      return part;
    }
  }]);

  return Part;
}(_easy.Element);

_defineProperty(Part, "tagName", "div");

_defineProperty(Part, "defaultProperties", {
  className: "part"
});

_defineProperty(Part, "ignoredProperties", ["selection"]);

var _default = (0, _easyWithStyle["default"])(Part)(_templateObject(), selectionBackgroundColour);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJmaXJhQ29kZUxpbmVIZWlnaHQiLCJyb3dIZWlnaHQiLCJQYXJ0IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiY3NzIiwicHJvcGVydGllcyIsInNlbGVjdGlvbiIsImFkZENsYXNzIiwiQ2xhc3MiLCJwYXJ0IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEseUIsR0FBOEJDLGdDLENBQTlCRCx5QjtBQUVSLElBQU1FLGtCQUFrQixHQUFHLHlDQUEzQjtBQUFBLElBQ01DLFNBQVMsR0FBR0Qsa0JBRGxCLEMsQ0FDdUM7O0lBRWpDRSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dFQUNRRCxTOzs7Ozs7OzJCQUVMRSxHLEVBQUtDLEksRUFBTUMsSyxFQUFPQyxNLEVBQVE7QUFDL0JILE1BQUFBLEdBQUcsYUFBTUEsR0FBTixPQUFIO0FBQ0FDLE1BQUFBLElBQUksYUFBTUEsSUFBTixPQUFKO0FBQ0FDLE1BQUFBLEtBQUssYUFBTUEsS0FBTixPQUFMO0FBQ0FDLE1BQUFBLE1BQU0sYUFBTUEsTUFBTixPQUFOO0FBRUEsVUFBTUMsR0FBRyxHQUFHO0FBQ1ZKLFFBQUFBLEdBQUcsRUFBSEEsR0FEVTtBQUVWQyxRQUFBQSxJQUFJLEVBQUpBLElBRlU7QUFHVkMsUUFBQUEsS0FBSyxFQUFMQSxLQUhVO0FBSVZDLFFBQUFBLE1BQU0sRUFBTkE7QUFKVSxPQUFaO0FBT0EsV0FBS0MsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7OzsrQkFFVUMsVSxFQUFZO0FBQUEsVUFDYkMsU0FEYSxHQUNDRCxVQURELENBQ2JDLFNBRGE7O0FBR3JCLFVBQUlBLFNBQUosRUFBZTtBQUNiLGFBQUtDLFFBQUwsQ0FBYyxXQUFkO0FBQ0Q7QUFDRjs7OzhCQVlnQkMsSyxFQUFPSCxVLEVBQVk7QUFDbEMsVUFBTUksSUFBSSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QkgsVUFBekIsQ0FBYjs7QUFFQUksTUFBQUEsSUFBSSxDQUFDRyxVQUFMLENBQWdCUCxVQUFoQjtBQUVBLGFBQU9JLElBQVA7QUFDRDs7OztFQTNDZ0JDLGE7O2dCQUFiWCxJLGFBMkJhLEs7O2dCQTNCYkEsSSx1QkE2QnVCO0FBQ3pCYyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztnQkE3QnZCZCxJLHVCQWlDdUIsQ0FDekIsV0FEeUIsQzs7ZUFhZCwrQkFBVUEsSUFBVixDLG9CQUtTSix5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cclxuXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5pbXBvcnQgeyBwcmV0dHlQcmludGVyU2NoZW1lLCBnZXRGaXJhQ29kZUxpbmVIZWlnaHQgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XHJcblxyXG5jb25zdCB7IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgfSA9IHByZXR0eVByaW50ZXJTY2hlbWU7XHJcblxyXG5jb25zdCBmaXJhQ29kZUxpbmVIZWlnaHQgPSBnZXRGaXJhQ29kZUxpbmVIZWlnaHQoKSxcclxuICAgICAgcm93SGVpZ2h0ID0gZmlyYUNvZGVMaW5lSGVpZ2h0OyAgLy8vXHJcblxyXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgcm93SGVpZ2h0ID0gcm93SGVpZ2h0O1xyXG5cclxuICB1cGRhdGUodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG5cclxuICAgIGNvbnN0IGNzcyA9IHtcclxuICAgICAgdG9wLFxyXG4gICAgICBsZWZ0LFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3NzKGNzcyk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBwcm9wZXJ0aWVzO1xyXG5cclxuICAgIGlmIChzZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5hZGRDbGFzcyhcInNlbGVjdGlvblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInBhcnRcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwic2VsZWN0aW9uXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICBjb25zdCBwYXJ0ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xyXG5cclxuICAgIHBhcnQuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcclxuXHJcbiAgICByZXR1cm4gcGFydDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYXJ0KWBcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG4gIC5zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyfTtcclxuICB9XHJcblxyXG5gO1xyXG4iXX0=