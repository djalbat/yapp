"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyLayout = require("easy-layout");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  height: 48rem;\n  min-height: 12rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var TopSizeableDiv = /*#__PURE__*/ function(SizeableDiv) {
    _inherits(TopSizeableDiv, SizeableDiv);
    function TopSizeableDiv() {
        _classCallCheck(this, TopSizeableDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(TopSizeableDiv).apply(this, arguments));
    }
    _createClass(TopSizeableDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), getTopSizeableDivHeight = this.getHeight.bind(this), parentContext1 = Object.assign(context, {
                    getTopSizeableDivHeight: getTopSizeableDivHeight
                });
                return parentContext1;
            }
        }
    ]);
    return TopSizeableDiv;
}(_easyLayout.SizeableDiv);
_defineProperty(TopSizeableDiv, "defaultProperties", {
    className: "top"
});
var _default = (0, _easyWithStyle).default(TopSizeableDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS90b3AuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiU2l6ZWFibGVEaXYiLCJUb3BTaXplYWJsZURpdiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldFRvcFNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVgsR0FBYSxDQUFiLFdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrQkEsZ0RBS3pDOzs7Ozs7O0lBckJNLGNBQWMsaUJBQXBCLFFBQVE7Y0FBRixjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjO2dFQUFkLGNBQWM7O2lCQUFkLGNBQWM7O1lBQ2xCLEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQ3pCLHVCQUF1QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FDbEQsY0FBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RDLHVCQUF1QixFQUF2Qix1QkFBdUI7Z0JBQ3pCLENBQUM7Z0JBRVAsTUFBTSxDQUFDLGNBQWE7WUFDdEIsQ0FBQzs7O1dBVEcsY0FBYztFQUZRLFdBQWE7Z0JBRW5DLGNBQWMsR0FXWCxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxHQUFLO0FBQ2xCLENBQUM7bUJBakJtQixjQUFpQixVQW9CZCxjQUFjIn0=