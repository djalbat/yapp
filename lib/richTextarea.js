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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2VsZWN0aW9uQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyLCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciwgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyICB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKGNsYXNzIGV4dGVuZHMgUmljaFRleHRhcmVhIHtcbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycywgaGlkZGVuU2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZGRlblNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJoaWRkZW4tc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMsIGhpZGRlblNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIGlmIChoaWRkZW5TY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaGlkZGVuLXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQm91bmRzID0gdGhpcy5zZXRCb3VuZHMuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLnNldENvbnRlbnQuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMsXG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7c2VsZWN0aW9uQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NlbGVjdGlvbkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG4gIFxuICAuaGlkZGVuLXNjcm9sbGJhcnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICBoZWlnaHQ6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICR7c2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXJ9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXN9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuXG4gIC5mYW5jeS1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBjYXJldC1jb2xvcjogaW5oZXJpdDtcbiAgXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogaW5oZXJpdDtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0O1xuXG5gO1xuIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImNzcyIsInNldEJvdW5kcyIsImJvdW5kcyIsImdldFRvcCIsImdldExlZnQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJmYW5jeVNjcm9sbGJhcnMiLCJoaWRkZW5TY3JvbGxiYXJzIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0UmljaFRleHRhcmVhUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsIlJpY2hUZXh0YXJlYSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwic3BlbGxDaGVjayIsImlnbm9yZWRQcm9wZXJ0aWVzIiwic2VsZWN0aW9uQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRoaWNrbmVzcyIsImJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0U7d0I7QUFFUyxHQUFpQixDQUFqQixjQUFpQjtBQUVWLEdBQW1CLENBQW5CLGlCQUFtQjtBQUNlLEdBQVUsQ0FBVixPQUFVO0FBQ29FLEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7OEQ7c0M7NkQ7aUU7Ozs7d0U7Z0U7Ozs7Ozs7Ozs7VTs7d0I7Ozs7OzswQjs7Ozs7Ozs7OztTOzs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7Ozt3Qzs7Ozs7Ozs4Qjs7Ozs7Ozs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7OztRQTZFM0osQ0FrQlE7UUFBa0IsQ0FDUDtRQUE0QixDQVF2QztRQUFxQixDQUNwQjtRQUFxQixDQVFYO1FBQW1CLENBQ1g7UUFBZ0MsQ0FDM0M7UUFBNkIsQ0FDMUI7UUFBaUMsQ0FldkQ7Ozs7Szs7OzttQkFqSWVBLGNBQVMsa0NBQUMsUUFBUTtvQzs7O3NDOzs7OztZQUMvQkMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsQ0FBQ0MsR0FB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