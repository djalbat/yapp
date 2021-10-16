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
}())(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour, _styles.scrollbarWidth, _styles.scrollbarHeight, _colour.backgroundColour, _colour.scrollbarThumbBoxShadowColour, _styles.scrollbarThumbBorderRadius, _colour.scrollbarThumbBackgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUmljaFRleHRhcmVhIiwic2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxiYXJIZWlnaHQiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyIsInNlbGVjdGlvbkNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzZXRCb3VuZHMiLCJib3VuZHMiLCJ0b3AiLCJnZXRUb3AiLCJsZWZ0IiwiZ2V0TGVmdCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJyZXNpemUiLCJwb3NpdGlvbiIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiY3NzIiwiZGlkTW91bnQiLCJmYW5jeVNjcm9sbGJhcnMiLCJwcm9wZXJ0aWVzIiwiYWRkQ2xhc3MiLCJ3aWxsVW5tb3VudCIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsImdldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJnZXRDb250ZW50IiwiYmluZCIsInNldFJpY2hUZXh0YXJlYUJvdW5kcyIsInNldFJpY2hUZXh0YXJlYUNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0UmljaFRleHRhcmVhUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwic3BlbGxDaGVjayIsImlnbm9yZWRQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVYsR0FBbUIsQ0FBbkIsaUJBQW1CO0FBQzRCLEdBQVUsQ0FBVixPQUFVO0FBQ3VELEdBQWlCLENBQWpCLE9BQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFDckIsc0JBQXNCLEVBQXRCLHNCQUFzQjt3QkFDdEIsdUJBQXVCLEVBQXZCLHVCQUF1QjtvQkFDekIsQ0FBQztnQkFDSCxDQUFDOzs7O01BaEUwQixpQkFBbUI7NEJBa0V2QyxDQUFpQixvQkFBRyxDQUFDO1FBQzFCLFVBQVUsRUFBRSxDQUFPO0lBQ3JCLENBQUM7NEJBRU0sQ0FBaUIsb0JBQUcsQ0FBQztRQUMxQixDQUFpQjtJQUNuQixDQUFDOzt3QkF0RTBJLE9BQWlCLGtCQUFqQixPQUFpQiw0QkFEbEYsT0FBVSxpQkFBVixPQUFVLGtCQUN1RCxPQUFpQixtQkFBakIsT0FBaUIsZ0NBRGxGLE9BQVUsNkJBQ3VELE9BQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFJpY2hUZXh0YXJlYSB9IGZyb20gXCJlYXN5LXJpY2h0ZXh0YXJlYVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhckhlaWdodCwgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IHNlbGVjdGlvbkNvbG91ciwgYmFja2dyb3VuZENvbG91ciwgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyVGh1bWJCb3hTaGFkb3dDb2xvdXIsIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciAgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIFJpY2hUZXh0YXJlYSB7XG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZHMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IGJvdW5kcy5nZXRMZWZ0KCksXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBwb3NpdGlvbih0b3AsIGxlZnQpIHtcbiAgICB0b3AgPSBgJHt0b3B9cHhgO1xuICAgIGxlZnQgPSBgJHtsZWZ0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmFuY3lTY3JvbGxiYXJzIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZmFuY3lTY3JvbGxiYXJzKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiZmFuY3ktc2Nyb2xsYmFyc1wiKTtcbiAgICB9XG5cbiAgICBzdXBlci5kaWRNb3VudCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBmYW5jeVNjcm9sbGJhcnMgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmIChmYW5jeVNjcm9sbGJhcnMpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJmYW5jeS1zY3JvbGxiYXJzXCIpO1xuICAgIH1cblxuICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImZhbmN5U2Nyb2xsYmFyc1wiXG4gIF07XG59KWBcblxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogYXV0bztcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xuICB0YWItc2l6ZTogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBib3JkZXItdG9wOiBub25lO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBcbiAgOjpzZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAke3NlbGVjdGlvbkNvbG91cn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuICBcbiAgLmZhbmN5LXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHtzY3JvbGxiYXJXaWR0aH07XG4gICAgaGVpZ2h0OiAke3Njcm9sbGJhckhlaWdodH07XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7YmFja2dyb3VuZENvbG91cn07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAke3Njcm9sbGJhclRodW1iQm94U2hhZG93Q29sb3VyfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3Njcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gIH1cblxuICAuZmFuY3ktc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XG4gIFxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdfQ==