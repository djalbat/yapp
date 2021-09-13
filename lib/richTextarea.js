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
        "\n\n  color: transparent;\n  width: 100%;\n  height: 100%;\n  cursor: auto;\n  resize: none;\n  outline: none;\n  z-index: 1;\n  tab-size: 2;\n  position: absolute;\n  border-top: none;\n  overflow-x: scroll;\n  overflow-y: scroll;\n  white-space: pre;\n  overflow-wrap: normal;\n  background-color: transparent;\n  \n  ::selection {\n    color: ",
        ";\n    background-color: ",
        ";\n  }\n\n  caret-color: inherit;\n  \n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-rendering: inherit;\n  font-feature-settings: inherit;\n\n"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiUmljaFRleHRhcmVhIiwic2VsZWN0aW9uQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNldEJvdW5kcyIsImJvdW5kcyIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJlc2l6ZSIsInBvc2l0aW9uIiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJjc3MiLCJwYXJlbnRDb250ZXh0IiwiZ2V0UmljaFRleHRhcmVhQ29udGVudCIsImdldENvbnRlbnQiLCJiaW5kIiwic2V0UmljaFRleHRhcmVhQm91bmRzIiwic2V0UmljaFRleHRhcmVhQ29udGVudCIsInNldENvbnRlbnQiLCJzZXRSaWNoVGV4dGFyZWFSZWFkT25seSIsInNldFJlYWRPbmx5IiwiZGVmYXVsdFByb3BlcnRpZXMiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVYsR0FBbUIsQ0FBbkIsaUJBQW1CO0FBQ1ksR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErQzFFLDBWQW1CUTtTQUFrQix5QkFDUDtTQUE0QixpTEFXbEQ7Ozs7Ozs7bUJBakZzQixjQUFpQjsrQkFLZCxRQUFROzs7Ozs7OztnQkFDL0IsR0FBUyxHQUFULFNBQVM7dUJBQVQsUUFBUSxDQUFSLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakIsR0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUNuQixJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFDckIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQ3ZCLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUztvQkFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTTtvQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSTtnQkFDekIsQ0FBQzs7O2dCQUVELEdBQU0sR0FBTixNQUFNO3VCQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDdkIsQ0FBQzs7O2dCQUVELEdBQVEsR0FBUixRQUFRO3VCQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO29CQUNuQixHQUFHLE1BQVUsTUFBRSxDQUFOLEdBQUcsR0FBQyxFQUFFO29CQUNmLElBQUksTUFBVyxNQUFFLENBQVAsSUFBSSxHQUFDLEVBQUU7b0JBRWpCLEdBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDWCxHQUFHLEVBQUgsR0FBRzt3QkFDSCxJQUFJLEVBQUosSUFBSTtvQkFDTixDQUFDO29CQUVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRztnQkFDZCxDQUFDOzs7Z0JBRUQsR0FBYSxHQUFiLGFBQWE7dUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO29CQUNmLEdBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQ2xELHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FDaEQsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUNsRCx1QkFBdUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVqRSxNQUFNLENBQUUsQ0FBQzt3QkFDUCxzQkFBc0IsRUFBdEIsc0JBQXNCO3dCQUN0QixxQkFBcUIsRUFBckIscUJBQXFCO3dCQUNyQixzQkFBc0IsRUFBdEIsc0JBQXNCO3dCQUN0Qix1QkFBdUIsRUFBdkIsdUJBQXVCO29CQUN6QixDQUFDO2dCQUNILENBQUM7Ozs7TUEzQzBCLGlCQUFtQjs2QkE2Q3ZDLGlCQUFpQixHQUFHLENBQUM7UUFDMUIsVUFBVSxHQUFFLEtBQU87SUFDckIsQ0FBQzs7d0JBOUN5RCxPQUFpQixrQkFBakIsT0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgUmljaFRleHRhcmVhIH0gZnJvbSBcImVhc3ktcmljaHRleHRhcmVhXCI7XG5pbXBvcnQgeyBzZWxlY3Rpb25Db2xvdXIsIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgIH0gZnJvbSBcIi4vc2NoZW1lL2NvbG91clwiO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoY2xhc3MgZXh0ZW5kcyBSaWNoVGV4dGFyZWEge1xuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgY29uc3QgdG9wID0gYm91bmRzLmdldFRvcCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHdpZHRoID0gYm91bmRzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmdldEhlaWdodCgpO1xuXG4gICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy5wb3NpdGlvbih0b3AsIGxlZnQpO1xuICB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgcG9zaXRpb24odG9wLCBsZWZ0KSB7XG4gICAgdG9wID0gYCR7dG9wfXB4YDtcbiAgICBsZWZ0ID0gYCR7bGVmdH1weGA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB0b3AsXG4gICAgICBsZWZ0XG4gICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJpY2hUZXh0YXJlYUNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRSaWNoVGV4dGFyZWFCb3VuZHMgPSB0aGlzLnNldEJvdW5kcy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhQ29udGVudCA9IHRoaXMuc2V0Q29udGVudC5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgc2V0UmljaFRleHRhcmVhUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UmljaFRleHRhcmVhQ29udGVudCxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUJvdW5kcyxcbiAgICAgIHNldFJpY2hUZXh0YXJlYUNvbnRlbnQsXG4gICAgICBzZXRSaWNoVGV4dGFyZWFSZWFkT25seVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufSlgXG5cbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgdGFiLXNpemU6IDI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIFxuICA6OnNlbGVjdGlvbiB7XG4gICAgY29sb3I6ICR7c2VsZWN0aW9uQ29sb3VyfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NlbGVjdGlvbkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgY2FyZXQtY29sb3I6IGluaGVyaXQ7XG4gIFxuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgdGV4dC1yZW5kZXJpbmc6IGluaGVyaXQ7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDtcblxuYDtcbiJdfQ==