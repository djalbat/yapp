"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easyRichtextarea = require("easy-richtextarea");
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
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  ::-webkit-scrollbar {\n    width: 3rem;\n  }\n  \n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n  \n  ::-webkit-scrollbar {\n    width: 3rem;\n  }\n\n  caret-color: inherit;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
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
    return _class;
}())(_templateObject(), _colour.selectionColour, _colour.selectionBackgroundColour);
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUmljaFRleHRhcmVhIiwic2VsZWN0aW9uQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNldEJvdW5kcyIsImJvdW5kcyIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJlc2l6ZSIsInBvc2l0aW9uIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJjc3MiLCJwYXJlbnRDb250ZXh0IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsInNldFJlYWRPbmx5IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVYsR0FBbUIsQ0FBbkIsaUJBQW1CO0FBQ1ksR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUErQzFFLENBdUJRO1FBQWtCLENBQ1A7UUFBNEIsQ0FlbEQ7Ozs7Ozs7bUJBekZzQixjQUFpQjsrQkFLZCxRQUFROzs7Ozs7OztnQkFDL0IsR0FBUyxFQUFULENBQVM7dUJBQVQsUUFBUSxDQUFSLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakIsR0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUNuQixJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFDckIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQ3ZCLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUztvQkFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTTtvQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSTtnQkFDekIsQ0FBQzs7O2dCQUVELEdBQU0sRUFBTixDQUFNO3VCQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDdkIsQ0FBQzs7O2dCQUVELEdBQVEsRUFBUixDQUFRO3VCQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNuQixHQUFHLEdBQUksQ0FBQSxFQUFNLE1BQUUsQ0FBTixHQUFHLEVBQUMsQ0FBRTtvQkFDZixJQUFJLEdBQUksQ0FBQSxFQUFPLE1BQUUsQ0FBUCxJQUFJLEVBQUMsQ0FBRTtvQkFFakIsR0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNYLEdBQUcsRUFBSCxHQUFHO3dCQUNILElBQUksRUFBSixJQUFJO29CQUNOLENBQUM7b0JBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO2dCQUNkLENBQUM7OztnQkFFRCxHQUFhLEVBQWIsQ0FBYTt1QkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7b0JBQ2YsR0FBSyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksR0FDbEQscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNoRCxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ2xELHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWpFLE1BQU0sQ0FBRSxDQUFDO3dCQUNQLHNCQUFzQixFQUF0QixzQkFBc0I7d0JBQ3RCLHFCQUFxQixFQUFyQixxQkFBcUI7d0JBQ3JCLHNCQUFzQixFQUF0QixzQkFBc0I7d0JBQ3RCLHVCQUF1QixFQUF2Qix1QkFBdUI7b0JBQ3pCLENBQUM7Z0JBQ0gsQ0FBQzs7OztNQTNDMEIsaUJBQW1COzRCQTZDdkMsQ0FBaUIsb0JBQUcsQ0FBQztRQUMxQixVQUFVLEVBQUUsQ0FBTztJQUNyQixDQUFDOzt3QkE5Q3lELE9BQWlCLGtCQUFqQixPQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBSaWNoVGV4dGFyZWEgfSBmcm9tIFwiZWFzeS1yaWNodGV4dGFyZWFcIjtcbmltcG9ydCB7IHNlbGVjdGlvbkNvbG91ciwgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciAgfSBmcm9tIFwiLi9zY2hlbWUvY29sb3VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIFJpY2hUZXh0YXJlYSB7XG4gIHNldEJvdW5kcyhib3VuZHMpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZHMuZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IGJvdW5kcy5nZXRMZWZ0KCksXG4gICAgICAgICAgd2lkdGggPSBib3VuZHMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuZ2V0SGVpZ2h0KCk7XG5cbiAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnBvc2l0aW9uKHRvcCwgbGVmdCk7XG4gIH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBwb3NpdGlvbih0b3AsIGxlZnQpIHtcbiAgICB0b3AgPSBgJHt0b3B9cHhgO1xuICAgIGxlZnQgPSBgJHtsZWZ0fXB4YDtcblxuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIHRvcCxcbiAgICAgIGxlZnRcbiAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyA9IHRoaXMuc2V0Qm91bmRzLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSaWNoVGV4dGFyZWFDb250ZW50LFxuICAgICAgc2V0UmljaFRleHRhcmVhQm91bmRzLFxuICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYVJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59KWBcblxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogYXV0bztcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xuICB0YWItc2l6ZTogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItdG9wOiBub25lO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAzcmVtO1xuICB9XG4gIFxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7c2VsZWN0aW9uQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NlbGVjdGlvbkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG4gIFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxuXG4gIGNhcmV0LWNvbG9yOiBpbmhlcml0O1xuICBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBpbmhlcml0O1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7XG5cbmA7XG4iXX0=