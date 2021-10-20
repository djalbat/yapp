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
        ";\n  }\n  \n  .fancy-scrollbars::-webkit-scrollbar {\n    width: ",
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
                key: "setBounds",
                value: function setBounds(bounds) {
                    var top = bounds.getTop(), left = bounds.getLeft(), width = bounds.getWidth(), height = bounds.getHeight();
                    this.resize(width, height);
                    this.position(top, left);
                }
            },
            {
                key: "resize",
                value: function resize(width, height) {
                    this.setWidth(width);
                    this.setHeight(height);
                }
            },
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
                key: "didMount",
                value: function didMount() {
                    var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars;
                    if (fancyScrollbars) {
                        this.addClass("fancy-scrollbars");
                    }
                    _get(_getPrototypeOf(_class.prototype), "didMount", this).call(this);
                }
            },
            {
                key: "willUnmount",
                value: function willUnmount() {
                    var _properties = this.properties, fancyScrollbars = _properties.fancyScrollbars;
                    if (fancyScrollbars) {
                        this.removeClass("fancy-scrollbars");
                    }
                    _get(_getPrototypeOf(_class.prototype), "willUnmount", this).call(this);
                }
            },
            {
                key: "parentContext",
                value: function parentContext() {
                    var getRichTextareaContent = this.getContent.bind(this), setRichTextareaBounds = this.setBounds.bind(this), setRichTextareaContent = this.setContent.bind(this), setRichTextareaReadOnly = this.setReadOnly.bind(this); ///
                    return {
                        getRichTextareaContent: getRichTextareaContent,
                        setRichTextareaBounds: setRichTextareaBounds,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyVGhpY2tuZXNzLCBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2VsZWN0aW9uQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyLCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJveFNoYWRvd0NvbG91ciwgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyICB9IGZyb20gXCIuL3NjaGVtZS9jb2xvdXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKGNsYXNzIGV4dGVuZHMgUmljaFRleHRhcmVhIHtcbiAgc2V0Qm91bmRzKGJvdW5kcykge1xuICAgIGNvbnN0IHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRzLmdldExlZnQoKSxcbiAgICAgICAgICB3aWR0aCA9IGJvdW5kcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IGJvdW5kcy5nZXRIZWlnaHQoKTtcblxuICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMucG9zaXRpb24odG9wLCBsZWZ0KTtcbiAgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIHBvc2l0aW9uKHRvcCwgbGVmdCkge1xuICAgIHRvcCA9IGAke3RvcH1weGA7XG4gICAgbGVmdCA9IGAke2xlZnR9cHhgO1xuXG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgdG9wLFxuICAgICAgbGVmdFxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIHN1cGVyLmRpZE1vdW50KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGZhbmN5U2Nyb2xsYmFycyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGZhbmN5U2Nyb2xsYmFycykge1xuICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImZhbmN5LXNjcm9sbGJhcnNcIik7XG4gICAgfVxuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQm91bmRzLFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZmFuY3lTY3JvbGxiYXJzXCJcbiAgXTtcbn0pYFxuXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBhdXRvO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHRhYi1zaXplOiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7c2VsZWN0aW9uQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NlbGVjdGlvbkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG4gIFxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gICAgaGVpZ2h0OiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7YmFja2dyb3VuZENvbG91cn07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAke3Njcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XG4gIFxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdLCJuYW1lcyI6WyJzZXRCb3VuZHMiLCJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiZmFuY3lTY3JvbGxiYXJzIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRDb250ZW50IiwiYmluZCIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0UmljaFRleHRhcmVhUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwic3BlbGxDaGVjayIsImlnbm9yZWRQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVYsR0FBbUIsQ0FBbkIsaUJBQW1CO0FBQ2UsR0FBVSxDQUFWLE9BQVU7QUFDb0UsR0FB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