"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyRichtextarea = require("easy-richtextarea");
var _styles = require("./styles");
var _colour = require("./scheme/colour");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  overflow: scroll;\n  border-top: none;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n  \n  .hidden-scrollbars {\n    overflow: hidden;\n  }\n  \n  .fancy-scrollbars::-webkit-scrollbar {\n    width: ",
        ";\n    height: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-track {\n    display: none;\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-thumb {\n    border: 2px solid ",
        ";\n    box-shadow: inset 0 0 1px ",
        ";\n    border-radius: ",
        ";\n    background-color: ",
        ";\n  }\n\n  .fancy-scrollbars::-webkit-scrollbar-corner {\n    display: none;\n  }\n\n  caret-color: inherit;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _class;
var _default = (0, _easyWithStyle).default((_class = /*#__PURE__*/ function(RichTextarea) {
    _inherits(_class1, RichTextarea);
    var _super = _createSuper(_class1);
    function _class1() {
        _classCallCheck(this, _class1);
        return _super.apply(this, arguments);
    }
    _createClass(_class1, [
        {
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
        },
        {
            key: "setBounds",
            value: function setBounds(bounds) {
                var top = bounds.getTop(), left = bounds.getLeft(), width = bounds.getWidth(), height = bounds.getHeight();
                this.position(top, left);
                this.setWidth(width);
                this.setHeight(height);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars;
                if (fancyScrollbars) {
                    this.addClass("fancy-scrollbars");
                }
                if (hiddenScrollbars) {
                    this.addClass("hidden-scrollbars");
                }
                _get(_getPrototypeOf(_class1.prototype), "didMount", this).call(this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars, hiddenScrollbars = _properties.hiddenScrollbars;
                if (fancyScrollbars) {
                    this.removeClass("fancy-scrollbars");
                }
                if (hiddenScrollbars) {
                    this.removeClass("hidden-scrollbars");
                }
                _get(_getPrototypeOf(_class1.prototype), "willUnmount", this).call(this);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getContent = this.getContent.bind(this), setRichTextareaBounds = this.setBounds.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this), setRichTextareaReadOnly = this.setReadOnly.bind(this); ///
                return {
                    getContent: getContent,
                    setRichTextareaBounds: setRichTextareaBounds,
                    getRichTextareaContent: getRichTextareaContent,
                    setRichTextareaContent: setRichTextareaContent,
                    setRichTextareaReadOnly: setRichTextareaReadOnly
                };
            }
        }
    ]);
    return _class1;
}(_easyRichtextarea.RichTextarea), _defineProperty(_class, "defaultProperties", {
    spellCheck: "false"
}), _defineProperty(_class, "ignoredProperties", [
    "fancyScrollbars"
]), _class))(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _styles.scrollbarThickness, _styles.scrollbarThickness, _colour.backgroundColour, _colour.scrollbarThumbBoxShadowColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarThumbBackgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiLCIuLi9zcmMvY29sb3Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUmljaFRleHRhcmVhIH0gZnJvbSBcImVhc3ktcmljaHRleHRhcmVhXCI7XG5pbXBvcnQgeyBzY3JvbGxiYXJUaGlja25lc3MsIHNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBzZWxlY3Rpb25Db2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBwb3NpdGlvbih0b3AsIGxlZnQpIHtcbiAgICB0b3AgPSBgJHt0b3B9cHhgO1xuICAgIGxlZnQgPSBgJHtsZWZ0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZHMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IGJvdW5kcy5nZXRMZWZ0KCksXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmFuY3lTY3JvbGxiYXJzLCBoaWRkZW5TY3JvbGxiYXJzIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmFuY3lTY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmFuY3ktc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaGlkZGVuU2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImhpZGRlbi1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIHN1cGVyLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci53aWxsVW5tb3VudCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtzZWxlY3Rpb25Db2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIC5oaWRkZW4tc2Nyb2xsYmFycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgIGhlaWdodDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke2JhY2tncm91bmRDb2xvdXJ9O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggJHtzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91cn07XG4gICAgYm9yZGVyLXJhZGl1czogJHtzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNwcmluZ1dvb2QgPSBcIiNmOGY2ZjFcIjtcbmV4cG9ydCBjb25zdCBib25qb3VyID0gXCIjZTVlMGUxXCI7XG5leHBvcnQgY29uc3QgZ2FpbnNib3JvdWdoID0gXCIjZDVkOGQyXCI7XG5leHBvcnQgY29uc3Qgc3RhcmR1c3QgPSBcIiM5ZjlmOWNcIjtcbmV4cG9ydCBjb25zdCBodXJyaWNhbmUgPSBcIiM5MDg5ODlcIjtcbmV4cG9ydCBjb25zdCBzdG9ybUR1c3QgPSBcIiM2NDY0NjNcIjtcbmV4cG9ydCBjb25zdCBlbXBlcm9yID0gXCIjNTE1MTUwXCI7XG5leHBvcnQgY29uc3QgdHVhdGFyYSA9IFwiIzM2MzUzNFwiO1xuZXhwb3J0IGNvbnN0IHdvb2RzbW9rZSA9IFwiIzBjMGQwZlwiO1xuXG5leHBvcnQgY29uc3QgY2l0cm9uID0gXCIjODZiOTIzXCI7XG5leHBvcnQgY29uc3Qgc3VzaGkgPSBcIiM3ZmE4MmZcIjtcbmV4cG9ydCBjb25zdCBvbGl2ZURyYWIgPSBcIiM2Mzg4MjlcIjtcbmV4cG9ydCBjb25zdCByaWZsZUdyZWVuID0gXCIjNDE0ODMzXCI7XG5leHBvcnQgY29uc3QgbG9nQ2FiaW4gPSBcIiMyNDMwMWRcIjtcbmV4cG9ydCBjb25zdCBibGFja09saXZlID0gXCIjMWMyNDEyXCI7XG5leHBvcnQgY29uc3QgaHVudGVyR3JlZW4gPSBcIiMxNjFkMTBcIjtcblxuZXhwb3J0IGNvbnN0IGNhZGV0Qmx1ZSA9IFwiIzVmOWVhMFwiO1xuZXhwb3J0IGNvbnN0IGhhdmVsb2NrQmx1ZSA9IFwiIzVCOERlMVwiO1xuXG5leHBvcnQgY29uc3QgcG9tZWdyYW5hdGUgPSBcIiNmNTI5MjlcIjtcbmV4cG9ydCBjb25zdCByYXp6bWF0YXp6ID0gXCIjZTMyNTZiXCI7XG5leHBvcnQgY29uc3QgZmxhbWluZ28gPSBcIiNmMzRiNDRcIjtcbmV4cG9ydCBjb25zdCB0YWhpdGkgPSBcIiNGNThBMEFcIjtcbmV4cG9ydCBjb25zdCBlcXVhdG9yID0gXCIjZTRhQzVlXCI7XG5cbmV4cG9ydCBjb25zdCBwb3J0aWNhID0gXCIjZjdlNzVmXCI7XG5leHBvcnQgY29uc3QgY2VsZXJ5ID0gXCIjYmNiODUyXCI7XG5leHBvcnQgY29uc3Qgc3ljYW1vcmUgPSBcIiM5MDhkMzlcIjtcbiJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJjc3MiLCJzZXRCb3VuZHMiLCJib3VuZHMiLCJnZXRUb3AiLCJnZXRMZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiZmFuY3lTY3JvbGxiYXJzIiwiaGlkZGVuU2Nyb2xsYmFycyIsImFkZENsYXNzIiwid2lsbFVubW91bnQiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJnZXRDb250ZW50IiwiYmluZCIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFDb250ZW50Iiwic2V0Q29udGVudCIsInNldFJpY2hUZXh0YXJlYVJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJSaWNoVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsInNwZWxsQ2hlY2siLCJpZ25vcmVkUHJvcGVydGllcyIsInNlbGVjdGlvbkNvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaGlja25lc3MiLCJiYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVYsSUFBQSxpQkFBbUIsV0FBbkIsbUJBQW1CLENBQUE7QUFDZSxJQUFBLE9BQVUsV0FBVixVQUFVLENBQUE7QUFDb0UsSUFBQSxPQUFpQixXQUFqQixpQkFBaUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFL0lBLENBQUFBLEdBQUFBLGNBQVMsQUEyRXRCLENBQUEsUUEz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