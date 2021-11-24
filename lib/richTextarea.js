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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var _default = (0, _easyWithStyle).default(function() {
    var _class = /*#__PURE__*/ function(RichTextarea) {
        _inherits(_class, RichTextarea);
        function _class() {
            _classCallCheck(this, _class);
            return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }
        _createClass(_class, [
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
                    _get(_getPrototypeOf(_class.prototype), "didMount", this).call(this);
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
                    _get(_getPrototypeOf(_class.prototype), "willUnmount", this).call(this);
                }
            },
            {
                key: "parentContext",
                value: function parentContext() {
                    var setRichTextareaBounds = this.setBounds.bind(this), getRichTextareaContent = this.getContent.bind(this), setRichTextareaContent = this.setContent.bind(this), setRichTextareaReadOnly = this.setReadOnly.bind(this); ///
                    return {
                        setRichTextareaBounds: setRichTextareaBounds,
                        getRichTextareaContent: getRichTextareaContent,
                        setRichTextareaContent: setRichTextareaContent,
                        setRichTextareaReadOnly: setRichTextareaReadOnly
                    };
                }
            }
        ]);
        return _class;
    }(_easyRichtextarea.RichTextarea);
    _defineProperty(_class, "defaultProperties", {
        spellCheck: "false"
    });
    _defineProperty(_class, "ignoredProperties", [
        "fancyScrollbars"
    ]);
    return _class;
}())(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _styles.scrollbarThickness, _styles.scrollbarThickness, _colour.backgroundColour, _colour.scrollbarThumbBoxShadowColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarThumbBackgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2VsZWN0aW9uQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyLCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciwgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyICB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKGNsYXNzIGV4dGVuZHMgUmljaFRleHRhcmVhIHtcbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5zZXRCb3VuZHMuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJmYW5jeVNjcm9sbGJhcnNcIlxuICBdO1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogJHtzZWxlY3Rpb25Db2xvdXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2VsZWN0aW9uQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgXG4gIC5oaWRkZW4tc2Nyb2xsYmFycyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgIGhlaWdodDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke2JhY2tncm91bmRDb2xvdXJ9O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggJHtzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91cn07XG4gICAgYm9yZGVyLXJhZGl1czogJHtzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXSwibmFtZXMiOlsicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiY3NzIiwic2V0Qm91bmRzIiwiYm91bmRzIiwiZ2V0VG9wIiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRXaWR0aCIsInNldEhlaWdodCIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImZhbmN5U2Nyb2xsYmFycyIsImhpZGRlblNjcm9sbGJhcnMiLCJhZGRDbGFzcyIsIndpbGxVbm1vdW50IiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0Iiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwiYmluZCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsInNldFJlYWRPbmx5IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJzcGVsbENoZWNrIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFVixHQUFtQixDQUFuQixpQkFBbUI7QUFDZSxHQUFVLENBQVYsT0FBVTtBQUNvRSxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkUzSixDQWtCUTtRQUFrQixDQUNQO1FBQTRCLENBUXZDO1FBQXFCLENBQ3BCO1FBQXFCLENBUVg7UUFBbUIsQ0FDWDtRQUFnQyxDQUMzQztRQUE2QixDQUMxQjtRQUFpQyxDQWV2RDs7Ozs7OzttQkFySXNCLGNBQWlCOytCQU1kLFFBQVE7Ozs7Ozs7O2dCQUMvQkEsR0FBUSxFQUFSQSxDQUFRO3VCQUFSQSxRQUFRLENBQVJBLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkJELEdBQUcsR0FBSSxDQUFBLEVBQU0sTUFBRSxDQUFOQSxHQUFHLEVBQUMsQ0FBRTtvQkFDZkMsSUFBSSxHQUFJLENBQUEsRUFBTyxNQUFFLENBQVBBLElBQUksRUFBQyxDQUFFO29CQUVqQixHQUFLLENBQUNDLEdBQUcsR0FBRyxDQUFDO3dCQUNYRixHQUFHLEVBQUhBLEdBQUc7d0JBQ0hDLElBQUksRUFBSkEsSUFBSTtvQkFDTixDQUFDO29CQUVELElBQUksQ0FBQ0MsR0FBRyxDQUFDQSxHQUFHO2dCQUNkLENBQUM7OztnQkFFREMsR0FBUyxFQUFUQSxDQUFTO3VCQUFUQSxRQUFRLENBQVJBLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7b0JBQ2pCLEdBQUssQ0FBQ0osR0FBRyxHQUFHSSxN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