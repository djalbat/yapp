"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _scrollbarThickness = _interopRequireDefault(require("../../scrollbarThickness"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BoundedScrollableElement = /*#__PURE__*/function (_Element) {
  _inherits(BoundedScrollableElement, _Element);

  var _super = _createSuper(BoundedScrollableElement);

  function BoundedScrollableElement() {
    _classCallCheck(this, BoundedScrollableElement);

    return _super.apply(this, arguments);
  }

  _createClass(BoundedScrollableElement, [{
    key: "scroll",
    value: function scroll(scrollTop, scrollLeft) {
      this.setScrollTop(scrollTop);
      this.setScrollLeft(scrollLeft);
      var top = this.getTop(),
          left = this.getLeft();
      this.position(top, left);
    }
  }, {
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
      width = width - _scrollbarThickness["default"];
      height = height - _scrollbarThickness["default"];
      this.setWidth(width);
      this.setHeight(height);
      var top = this.getTop(),
          left = this.getLeft();
      this.position(top, left);
    }
  }, {
    key: "position",
    value: function position(top, left) {
      this.setTop(top);
      this.setLeft(left);
      var width = this.getWidth(),
          height = this.getHeight();
      var scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();
      top = top - scrollTop;
      left = left - scrollLeft;
      width = width + scrollLeft;
      height = height + scrollTop;
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
    key: "getTop",
    value: function getTop() {
      var state = this.getState(),
          top = state.top;
      return top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      var state = this.getState(),
          left = state.left;
      return left;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var state = this.getState(),
          width = state.width;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var state = this.getState(),
          height = state.height;
      return height;
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      var state = this.getState(),
          scrollTop = state.scrollTop;
      return scrollTop;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      var state = this.getState(),
          scrollLeft = state.scrollLeft;
      return scrollLeft;
    }
  }, {
    key: "setTop",
    value: function setTop(top) {
      this.updateState({
        top: top
      });
    }
  }, {
    key: "setLeft",
    value: function setLeft(left) {
      this.updateState({
        left: left
      });
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.updateState({
        width: width
      });
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.updateState({
        height: height
      });
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(scrollTop) {
      this.updateState({
        scrollTop: scrollTop
      });
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(scrollLeft) {
      this.updateState({
        scrollLeft: scrollLeft
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var top = 0,
          left = 0,
          width = 0,
          height = 0,
          scrollTop = 0,
          scrollLeft = 0;
      this.setState({
        top: top,
        left: left,
        width: width,
        height: height,
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      });
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var boundedScrollableElement = _easy.Element.fromClass.apply(_easy.Element, [Class, properties].concat(remainingArguments));

      boundedScrollableElement.initialise();
      return boundedScrollableElement;
    }
  }]);

  return BoundedScrollableElement;
}(_easy.Element);

exports["default"] = BoundedScrollableElement;