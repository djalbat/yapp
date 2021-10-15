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
        "\n\n  width: 60rem;\n  min-width: 24rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var LeftSizeableDiv = /*#__PURE__*/ function(SizeableDiv) {
    _inherits(LeftSizeableDiv, SizeableDiv);
    function LeftSizeableDiv() {
        _classCallCheck(this, LeftSizeableDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(LeftSizeableDiv).apply(this, arguments));
    }
    _createClass(LeftSizeableDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), getLeftSizeableDivWidth = this.getWidth.bind(this), parentContext1 = Object.assign(context, {
                    getLeftSizeableDivWidth: getLeftSizeableDivWidth
                });
                return parentContext1;
            }
        }
    ]);
    return LeftSizeableDiv;
}(_easyLayout.SizeableDiv);
_defineProperty(LeftSizeableDiv, "defaultProperties", {
    className: "left"
});
var _default = (0, _easyWithStyle).default(LeftSizeableDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS9sZWZ0LmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlNpemVhYmxlRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGgiLCJnZXRXaWR0aCIsImJpbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVYLEdBQWEsQ0FBYixXQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0JDLENBSzFDOzs7Ozs7O0lBckJNLGVBQWUsaUJBQXJCLFFBQVE7Y0FBRixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO2dFQUFmLGVBQWU7O2lCQUFmLGVBQWU7O1lBQ25CLEdBQWEsRUFBYixDQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixHQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQ3pCLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksR0FDakQsY0FBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RDLHVCQUF1QixFQUF2Qix1QkFBdUI7Z0JBQ3pCLENBQUM7Z0JBRVAsTUFBTSxDQUFDLGNBQWE7WUFDdEIsQ0FBQzs7O1dBVEcsZUFBZTtFQUZPLFdBQWE7Z0JBRW5DLGVBQWUsRUFXWixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFNO0FBQ25CLENBQUM7bUJBakJtQixjQUFpQixVQW9CZCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNpemVhYmxlRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmNsYXNzIExlZnRTaXplYWJsZURpdiBleHRlbmRzIFNpemVhYmxlRGl2IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgZ2V0TGVmdFNpemVhYmxlRGl2V2lkdGhcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWZ0XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlZnRTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDYwcmVtO1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBcbmA7XG4iXX0=